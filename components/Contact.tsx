import React, { useState } from 'react';
import { Send, Mail, Github, MessageSquare, Shield, Loader, CheckCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqajowol'; // <-- set this

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'SENDING' | 'SENT' | 'ERROR'>('IDLE');
  const [securityLog, setSecurityLog] = useState<string[]>([]);

  const sanitizeInput = (input: string) =>
    input.replace(/[&<>"'/]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' }[char] || char));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return; // bot

    setStatus('SCANNING');
    setSecurityLog([]);
    const steps = ['Initializing Handshake...', 'Scanning Payload for XSS Vectors...', 'Sanitizing Input Buffers...'];
    for (const step of steps) {
      setSecurityLog(prev => [...prev, step]);
      await new Promise(r => setTimeout(r, 250));
    }

    const cleanName = sanitizeInput(formData.name);
    const cleanMessage = sanitizeInput(formData.message);
    if (cleanName !== formData.name || cleanMessage !== formData.message) {
      setSecurityLog(prev => [...prev, '⚠️ THREAT DETECTED: Sanitizing malicious characters...']);
    }

    setStatus('SENDING');

    try {
      const payload = {
        name: cleanName,
        email: formData.email,
        message: cleanMessage,
        _replyto: formData.email, // Formspree uses this
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('SENT');
        setSecurityLog(prev => [...prev, '✅ TRANSMISSION COMPLETE.']);
        setTimeout(() => {
          setStatus('IDLE');
          setFormData({ name: '', email: '', message: '', honeypot: '' });
          setSecurityLog([]);
        }, 4000);
      } else {
        const text = await res.text();
        console.error('Formspree error', text);
        setStatus('ERROR');
        setSecurityLog(prev => [...prev, `❌ ERROR: ${res.status} ${res.statusText}`]);
      }
    } catch (err) {
      console.error(err);
      setStatus('ERROR');
      setSecurityLog(prev => [...prev, '❌ NETWORK ERROR']);
    }
  };

  // ... UI content is the same — keep your existing JSX but ensure the form calls handleSubmit.
  // For brevity I won't repeat the entire JSX — keep your current layout and replace only handleSubmit code.
  return (
    // paste your current JSX here — form onSubmit uses handleSubmit as before.
    // For safety, here's the minimal form block:
    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
      <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" autoComplete="off" />
      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Codename" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@protocol.net" />
      <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Enter encrypted message..." />
      <button type="submit" disabled={status !== 'IDLE'}>Send</button>
    </form>
  );
};

export default Contact;
