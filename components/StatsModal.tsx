import React from 'react';
import { SKILLS } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const SkillsTerminal: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
                <Cpu className="text-primary animate-spin-slow" size={32} />
                <h2 className="text-4xl font-bold text-white">Neural Net Capacity</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center perspective-1000">
                
                {/* 3D Visual Chart Container */}
                <motion.div 
                    initial={{ opacity: 0, rotateY: -30 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative h-[450px] w-full bg-zinc-900/20 rounded-3xl border border-white/5 backdrop-blur-md p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform-style-3d group"
                >
                    {/* Glowing Ring */}
                    <div className="absolute inset-0 border border-primary/20 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,220,130,0.1)]" />

                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS}>
                            <PolarGrid stroke="#333" strokeDasharray="3 3" />
                            <PolarAngleAxis 
                                dataKey="name" 
                                tick={{ fill: '#00dc82', fontSize: 13, fontFamily: 'JetBrains Mono', fontWeight: 600 }} 
                            />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="H4K"
                                dataKey="level"
                                stroke="#00dc82"
                                strokeWidth={3}
                                fill="#00dc82"
                                fillOpacity={0.3}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                    
                    {/* Scanning Line Animation overlay */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                         <div className="absolute w-full h-1 bg-primary/30 blur-sm top-0 animate-[scan_3s_linear_infinite]" />
                    </div>
                </motion.div>

                {/* List View with Neon Progress Bars */}
                <div className="space-y-8">
                    {SKILLS.map((skill, index) => (
                        <motion.div 
                            key={skill.name} 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold text-white tracking-wide font-mono">
                                    {skill.name.toUpperCase()}
                                </span>
                                <span className="text-sm font-mono text-primary shadow-[0_0_10px_rgba(0,220,130,0.5)]">
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="w-full h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                    className="h-full bg-gradient-to-r from-emerald-600 to-primary rounded-full relative"
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Decorative Tags */}
                    <div className="pt-8 border-t border-dashed border-zinc-800 mt-8">
                        <div className="flex flex-wrap gap-4 text-xs font-mono">
                            <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                                SYSTEM.ROOT
                            </span>
                            <span className="px-2 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">
                                ENCRYPTION.SHA256
                            </span>
                            <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
                                LATENCY.LOW
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* CSS Keyframes for scanner */}
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
        `}} />
    </section>
  );
};

export default SkillsTerminal;