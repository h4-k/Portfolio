import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Info, ShieldCheck, Lock, Activity } from 'lucide-react';
import type { Project } from '../types';

interface TiltCardProps {
  children: React.ReactNode;
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Reduced rotation for subtler feel
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      className="relative h-full"
    >
      {children}
      {/* Holographic Shine - Softened */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 bg-gradient-to-tr from-white/5 via-transparent to-transparent rounded-2xl z-20"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  );
};

interface ProjectsTerminalProps {
  projects: Project[];
}

const ProjectsTerminal: React.FC<ProjectsTerminalProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Activity className="text-primary animate-pulse" size={24} />
              <h2 className="text-4xl font-bold text-white tracking-tight">Active Protocols</h2>
            </div>
            <p className="text-zinc-400 max-w-md font-mono text-sm">
                    // DEPLOYED_SYSTEMS: {projects.length}<br />
                    // STATUS: OPERATIONAL
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <TiltCard key={project.id} index={index}>
              <div className="group h-full relative bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-500 overflow-hidden backdrop-blur-sm shadow-xl">

                {/* Grid Background inside Card - Faded edges */}
                <div className="absolute inset-0 bg-cyber-grid opacity-5 group-hover:opacity-10 transition-opacity mask-radial-faded" />

                {/* Glowing Corner Accents - Extra Soft & Faded */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full transform transition-transform group-hover:translate-z-10" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl border border-white/10 transition-all duration-300 group-hover:scale-110 shadow-lg ${project.securityLevel === 'TOP SECRET'
                        ? 'bg-rose-500/10 text-rose-500 group-hover:shadow-rose-500/20'
                        : 'bg-primary/10 text-primary group-hover:shadow-[0_0_15px_rgba(0,220,130,0.2)]'
                        }`}>
                        {project.securityLevel === 'TOP SECRET' ? (
                          <Lock size={20} />
                        ) : (
                          <ShieldCheck size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-zinc-500">
                          UID: {project.id.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-zinc-950/50 border border-white/10 text-xs text-zinc-300 font-mono group-hover:border-primary/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <Link
                      to={`/projects/id/${project.id}`}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group/btn"
                    >
                      <Info size={16} className="group-hover/btn:scale-110 transition-transform" />
                      Learn More
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group/btn"
                      >
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTerminal;