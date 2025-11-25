import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../src/utils/content';
import { ArrowLeft, Github, ExternalLink, Shield, Lock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = id ? getProjectById(id) : undefined;

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center py-32">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-zinc-400 mb-8">The project you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-primary text-black rounded-lg font-bold hover:bg-emerald-400 transition-colors"
                    >
                        Back to Projects
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen py-32 relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm">BACK_TO_PROJECTS</span>
                </motion.button>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl border border-white/10 ${project.securityLevel === 'TOP SECRET'
                            ? 'bg-rose-500/10 text-rose-500'
                            : 'bg-primary/10 text-primary'
                            }`}>
                            {project.securityLevel === 'TOP SECRET' ? (
                                <Lock size={24} />
                            ) : (
                                <ShieldCheck size={24} />
                            )}
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
                            <p className="text-xs font-mono text-zinc-500 mt-1">UID: {project.id.toUpperCase()}</p>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                        <Shield size={12} />
                        SECURITY_LEVEL: {project.securityLevel}
                    </div>
                </motion.div>

                {/* Project Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 mb-8 backdrop-blur-sm"
                >
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-primary">//</span> Project Overview
                    </h2>
                    <p className="text-zinc-300 leading-relaxed text-lg">
                        {project.description}
                    </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 mb-8 backdrop-blur-sm"
                >
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-primary">//</span> Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech: string, index: number) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                                className="px-4 py-2 rounded-lg bg-zinc-950/50 border border-white/10 text-zinc-300 font-mono text-sm hover:border-primary/30 transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Writeup Section */}
                {project.writeup && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 mb-8 backdrop-blur-sm"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="text-primary">//</span> Writeup & Walkthrough
                        </h2>
                        <div className="text-zinc-300 leading-relaxed space-y-6 writeup-content">
                            {project.writeup.split('\n\n').map((block, index) => {
                                // Check if it's a code block (starts with ```)
                                if (block.trim().startsWith('```')) {
                                    const codeContent = block.replace(/```[\w]*\n?/g, '').trim();
                                    return (
                                        <pre key={index} className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto">
                                            <code className="text-primary font-mono text-sm">
                                                {codeContent}
                                            </code>
                                        </pre>
                                    );
                                }
                                // Check if it's a heading (starts with **)
                                if (block.trim().startsWith('**') && block.trim().endsWith('**')) {
                                    const heading = block.replace(/\*\*/g, '').trim();
                                    return (
                                        <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3 flex items-center gap-2">
                                            <span className="text-primary">›</span> {heading}
                                        </h3>
                                    );
                                }
                                // Regular paragraph
                                return (
                                    <p key={index} className="text-base text-zinc-300">
                                        {block}
                                    </p>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* Links */}
                {project.link && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-lg font-bold hover:bg-emerald-400 transition-colors group"
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform" />
                            View on TryHackMe
                        </a>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg font-medium hover:border-primary hover:text-primary transition-all group"
                        >
                            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Try Challenge
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProjectDetail;
