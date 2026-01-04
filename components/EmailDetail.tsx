import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, User, Globe, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Engineer & Security Researcher";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden perspective-1000">

      {/* 3D Decorative Cube */}
      <div className="absolute right-[10%] top-[20%] w-64 h-64 opacity-20 hidden lg:block animate-float">
        <div className="relative w-full h-full preserve-3d animate-spin-slow">
          <div className="absolute inset-0 border-2 border-primary/30 translate-z-[100px]" style={{ transform: 'translateZ(100px)' }}></div>
          <div className="absolute inset-0 border-2 border-primary/30 translate-z-[-100px]" style={{ transform: 'translateZ(-100px)' }}></div>
          <div className="absolute inset-0 border-2 border-primary/30 rotate-y-90 translate-z-[100px]" style={{ transform: 'rotateY(90deg) translateZ(100px)' }}></div>
          <div className="absolute inset-0 border-2 border-primary/30 rotate-y-90 translate-z-[-100px]" style={{ transform: 'rotateY(90deg) translateZ(-100px)' }}></div>
          <div className="absolute inset-0 border-2 border-primary/30 rotate-x-90 translate-z-[100px]" style={{ transform: 'rotateX(90deg) translateZ(100px)' }}></div>
          <div className="absolute inset-0 border-2 border-primary/30 rotate-x-90 translate-z-[-100px]" style={{ transform: 'rotateX(90deg) translateZ(-100px)' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-primary/20 text-primary text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,220,130,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00dc82]" />
            SYSTEM_ONLINE // v3.0.0
          </motion.div>

          {/* Main Title with Glitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 relative"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight glitch-wrapper" data-text="I build secure">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">secure</span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight">
              digital experiences.
            </h1>
          </motion.div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-8 flex items-center gap-2 text-xl text-zinc-400 font-mono mb-12 border-l-2 border-primary pl-4"
          >
            <span>{text}</span>
            <span className="w-2 h-5 bg-primary animate-pulse ml-1" />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-primary text-black rounded-sm font-bold flex items-center gap-2 overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,220,130,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
              <span className="relative">View Projects</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-sm font-medium flex items-center gap-2 hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm group">
              <Download size={18} className="group-hover:animate-bounce" />
              Resume / CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative z-10 bg-zinc-900/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="font-mono text-xs text-zinc-500 mb-4 border-b border-white/5 pb-2 flex justify-between">
                <span>USER_INFO.JSON</span>
                <span className="text-green-500">VALID</span>
              </div>
              <pre className="font-mono text-sm text-zinc-300 overflow-x-auto">
                <code className="block">
                  {`{
  "identity": "H4K",
  "status": "Available for Hire",
  "location": "Cyberspace",
  "interests": [
    "Ethical Hacking",
    "Cryptography",
    "UI/UX Design",
    "Blockchain"
  ],
  "mission": "To secure the decentralized web"
}`}
                </code>
              </pre>
              {/* Decorative scanline */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan" style={{ backgroundSize: '100% 200%' }} />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-primary" size={24} />
              <h2 className="text-4xl font-bold text-white tracking-tight">About Me</h2>
            </div>

            <div className="space-y-6 text-zinc-400 leading-relaxed font-light text-lg">
              <p>
                I am a security-focused <span className="text-white font-medium">Full Stack Engineer</span> with a passion for breaking and building things. My journey began in the depths of forums, learning the art of exploitation, which evolved into a career in <span className="text-primary/80">defensive architecture</span>.
              </p>
              <p>
                Unlike traditional developers, I view code through the lens of an attacker. This perspective allows me to build applications that are not only performant and aesthetic but fundamentally <span className="text-white font-medium">secure by design</span>.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-mono text-zinc-300">
                  <Globe size={16} className="text-primary" />
                  <span>Remote Native</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-zinc-300">
                  <Code size={16} className="text-primary" />
                  <span>Clean Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}