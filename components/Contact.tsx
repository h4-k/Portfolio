import React, { useState } from 'react';
import { Send, Mail, Github, MessageSquare, CheckCircle, Loader, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT' | 'ERROR'>('IDLE');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SENDING');
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        if (formData.get('_gotcha')) {
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xvzgdpol', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
            });

            if (response.ok) {
                setStatus('SENT');
                form.reset();
                setTimeout(() => setStatus('IDLE'), 5000);
            } else {
                const data = await response.json();
                setErrorMessage(data.error || 'Failed to send message. Please try again.');
                setStatus('ERROR');
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your connection and try again.');
            setStatus('ERROR');
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="bg-zinc-900/80 border border-white/10 rounded-3xl backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                AVAILABLE FOR WORK
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Interested in collaborating on security projects or have questions? Feel free to reach out through the form or via email.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:agent401.0x0@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:bg-white/10">
                                    <div className="p-3 rounded-full bg-zinc-900 text-primary group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Email</h4>
                                        <p className="text-zinc-500 text-xs font-mono group-hover:text-primary/80 transition-colors">agent401.0x0@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://github.com/h4k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:bg-white/10">
                                    <div className="p-3 rounded-full bg-zinc-900 text-white group-hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">GitHub</h4>
                                        <p className="text-zinc-500 text-xs font-mono">View my projects</p>
                                    </div>
                                </a>

                                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-white/10">
                                    <div className="p-3 rounded-full bg-zinc-900 text-indigo-400 group-hover:scale-110 transition-transform">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Discord</h4>
                                        <p className="text-zinc-500 text-xs font-mono">Chat with me</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                <input
                                    type="text"
                                    name="_gotcha"
                                    className="hidden"
                                    autoComplete="off"
                                    tabIndex={-1}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-zinc-500 ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Your name"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-zinc-500 ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="your@email.com"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-zinc-500 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Your message..."
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'SENDING'}
                                    className={`w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,220,130,0.1)] ${status === 'SENT' ? 'bg-green-500 text-black' :
                                        status === 'ERROR' ? 'bg-red-500/20 border border-red-500/50 text-red-400' :
                                            status === 'SENDING' ? 'bg-zinc-800 text-zinc-400 cursor-wait' :
                                                'bg-primary text-black hover:bg-emerald-400'
                                        }`}
                                >
                                    {status === 'IDLE' && <><Send size={18} /> Send Message</>}
                                    {status === 'SENDING' && <><Loader size={18} className="animate-spin" /> Sending...</>}
                                    {status === 'SENT' && <><CheckCircle size={18} /> Message Sent!</>}
                                    {status === 'ERROR' && <><AlertTriangle size={18} /> Error</>}
                                </button>

                                {status === 'ERROR' && errorMessage && (
                                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                        {errorMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;