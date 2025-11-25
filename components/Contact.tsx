import React, { useState } from 'react';
import { Send, Mail, Shield, Github, MessageSquare, CheckCircle, Loader } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'SENDING' | 'SENT' | 'ERROR'>('IDLE');
  const [securityLog, setSecurityLog] = useState<string[]>([]);

  // Simple client-side sanitization to prevent XSS (Simulation)
  const sanitizeInput = (input: string) => {
    return input.replace(/[&<>"'/]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
    }[char] || char));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. HONEYPOT CHECK (Anti-Bot)
    if (formData.honeypot) {
        console.warn("Bot detected via honeypot.");
        return;
    }

    setStatus('SCANNING');
    setSecurityLog([]);

    // Simulate Security Checks
    const steps = [
        "Initializing Handshake...",
        "Scanning Payload for XSS Vectors...",
        "Validating SQL Injection patterns...",
        "Sanitizing Input Buffers...",
        "Encrypting Payload (AES-256)..."
    ];

    for (const step of steps) {
        setSecurityLog(prev => [...prev, step]);
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    // 2. SANITIZATION
    const cleanName = sanitizeInput(formData.name);
    const cleanMessage = sanitizeInput(formData.message);

    if (cleanName !== formData.name || cleanMessage !== formData.message) {
        setSecurityLog(prev => [...prev, "⚠️ THREAT DETECTED: Sanitizing malicious characters..."]);
    }

    setStatus('SENDING');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setStatus('SENT');
    setSecurityLog(prev => [...prev, "✅ TRANSMISSION COMPLETE."]);
    
    // Reset after delay
    setTimeout(() => {
        setStatus('IDLE');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setSecurityLog([]);
    }, 5000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="bg-zinc-900/80 border border-white/10 rounded-3xl backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Decorative Elements - Softened */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            SECURE_CHANNEL // ENCRYPTED
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Establish Uplink</h2>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            Ready to collaborate on secure architectures? Initiating a transmission here employs end-to-end simulation of secure protocols.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:agent401.0x0@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:bg-white/10">
                                <div className="p-3 rounded-full bg-zinc-900 text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Email Priority One</h4>
                                    <p className="text-zinc-500 text-xs font-mono group-hover:text-primary/80 transition-colors">agent401.0x0@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://github.com/h4k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:bg-white/10">
                                <div className="p-3 rounded-full bg-zinc-900 text-white group-hover:scale-110 transition-transform">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">GitHub Repository</h4>
                                    <p className="text-zinc-500 text-xs font-mono">View Source Codes</p>
                                </div>
                            </a>

                            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-white/10">
                                <div className="p-3 rounded-full bg-zinc-900 text-indigo-400 group-hover:scale-110 transition-transform">
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Discord Secure Comms</h4>
                                    <p className="text-zinc-500 text-xs font-mono">Join the Server</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Secure Form */}
                    <div className="relative">
                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            {/* Honeypot Field (Hidden) */}
                            <input 
                                type="text" 
                                name="honeypot" 
                                value={formData.honeypot} 
                                onChange={handleChange} 
                                className="hidden" 
                                autoComplete="off" 
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-zinc-500 ml-1">IDENTITY</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Codename" 
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm" 
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-zinc-500 ml-1">RETURN_ADDRESS</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="email@protocol.net" 
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-mono text-zinc-500 ml-1">PAYLOAD</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4} 
                                    placeholder="Enter encrypted message content..." 
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm" 
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={status !== 'IDLE'}
                                className={`w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,220,130,0.1)] ${
                                    status === 'SENT' ? 'bg-green-500 text-black' : 
                                    status === 'IDLE' ? 'bg-primary text-black hover:bg-emerald-400' : 'bg-zinc-800 text-zinc-400 cursor-wait'
                                }`}
                            >
                                {status === 'IDLE' && <><Send size={18} /> INITIATE_TRANSMISSION</>}
                                {(status === 'SCANNING' || status === 'SENDING') && <><Loader size={18} className="animate-spin" /> PROCESSING SECURELY...</>}
                                {status === 'SENT' && <><CheckCircle size={18} /> TRANSMISSION SENT</>}
                            </button>
                        </form>

                        {/* Security Terminal Output */}
                        {(status !== 'IDLE' || securityLog.length > 0) && (
                            <div className="mt-6 bg-black rounded-lg border border-zinc-800 p-4 font-mono text-xs h-32 overflow-y-auto">
                                <div className="flex items-center gap-2 text-zinc-500 border-b border-zinc-800 pb-2 mb-2">
                                    <Shield size={12} />
                                    <span>SECURITY_DAEMON_V2.log</span>
                                </div>
                                <div className="space-y-1">
                                    {securityLog.map((log, i) => (
                                        <div key={i} className="text-primary/80">
                                            <span className="text-zinc-600">[{new Date().toLocaleTimeString()}]</span> {log}
                                        </div>
                                    ))}
                                    {status === 'SCANNING' && (
                                        <div className="animate-pulse text-yellow-500">_Scanning...</div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;