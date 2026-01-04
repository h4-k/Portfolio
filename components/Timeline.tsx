import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import type { Experience, Education, Certification } from '../types';

interface ExperienceSectionProps {
    experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex items-center gap-3 mb-16">
                    <Briefcase className="text-primary" size={32} />
                    <h2 className="text-4xl font-bold text-white">Experience Log</h2>
                </div>

                <div className="relative border-l border-zinc-800 ml-4 md:ml-12 space-y-12">
                    {experiences.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <Link to={`/experience/id/${job.id}`} className="block">
                                {/* Node on Line */}
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#00dc82]" />

                                <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-xl backdrop-blur-sm hover:border-primary/30 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                                            <p className="text-primary/80 font-mono text-sm">{job.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                                            <Calendar size={12} />
                                            {job.period}
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tech.map(t => (
                                            <span key={t} className="px-2 py-1 bg-black rounded text-[10px] font-mono text-zinc-500 border border-zinc-800">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface EducationSectionProps {
    education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
    return (
        <section id="education" className="py-24 bg-black/20">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex items-center gap-3 mb-12">
                    <GraduationCap className="text-primary" size={32} />
                    <h2 className="text-4xl font-bold text-white">Education Data</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Link to={`/education/id/${edu.id}`} className="block h-full">
                                <div className="p-6 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:bg-zinc-900/40 transition-colors h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                                            <p className="text-primary text-sm font-mono mt-1">{edu.degree}</p>
                                        </div>
                                        <span className="text-xs text-zinc-500 font-mono border border-zinc-800 px-2 py-1 rounded">
                                            {edu.year}
                                        </span>
                                    </div>
                                    {edu.honors && (
                                        <div className="inline-flex items-center gap-2 text-xs text-yellow-500/80 bg-yellow-500/10 px-3 py-1 rounded-full">
                                            <Award size={12} />
                                            {edu.honors}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface CertificationSectionProps {
    certifications: Certification[];
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ certifications }) => {
    return (
        <section id="certifications" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex items-center gap-3 mb-12">
                    <Award className="text-primary" size={32} />
                    <h2 className="text-4xl font-bold text-white">Certifications</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link to={`/certifications/id/${cert.id}`} className="block h-full">
                                <div className="group relative p-6 h-full bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl overflow-hidden">
                                    {/* Holographic Border Effect */}
                                    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors rounded-xl duration-500" />
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                                        <div className="flex justify-between items-end mt-4">
                                            <span className="text-sm text-zinc-400 font-mono">{cert.issuer}</span>
                                            <span className="text-xs text-zinc-600 font-mono">{cert.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};