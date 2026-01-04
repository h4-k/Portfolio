import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink, Download, Shield, Terminal as TerminalIcon } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import type { Project, Experience, Education, Certification, Article } from '../types';

interface DetailViewProps {
    content: {
        projects: Project[];
        experience: Experience[];
        education: Education[];
        certifications: Certification[];
        articles: Article[];
    };
}

const DetailView: React.FC<DetailViewProps> = ({ content }) => {
    const { section, id } = useParams<{ section: string; id: string }>();
    const navigate = useNavigate();
    const [item, setItem] = useState<any>(null);

    useEffect(() => {
        if (!section || !id) return;

        let foundItem: any = null;
        switch (section) {
            case 'projects':
                foundItem = content.projects.find(p => p.id === id);
                break;
            case 'experience':
                foundItem = content.experience.find(e => e.id === id);
                break;
            case 'education':
                foundItem = content.education.find(e => e.id === id);
                break;
            case 'articles':
                foundItem = content.articles.find(a => a.id === id);
                break;
            case 'certifications':
                foundItem = content.certifications.find(c => c.id === id);
                break;
        }

        if (foundItem) {
            setItem(foundItem);
        } else if (content.projects.length > 0) {
            // If content is loaded but item not found, it might be a 404
            // navigate('/');
        }
    }, [section, id, content]);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-primary font-mono">
                <div className="text-center">
                    <p className="text-2xl mb-4 animate-pulse">SEARCHING_DATABASE...</p>
                    <Link to="/" className="text-sm underline opacity-50 hover:opacity-100 transition-opacity">RETURN_TO_BASE</Link>
                </div>
            </div>
        );
    }

    const renderHeader = () => {
        const title = item.title || item.name || item.role || item.degree;
        const subtitle = item.company || item.issuer || item.school || '';
        const date = item.date || item.period || item.year;

        return (
            <div className="mb-12 border-b border-primary/20 pb-8">
                <div className="flex items-center gap-2 text-primary/60 text-xs font-mono mb-4">
                    <span>ROOT</span>
                    <span>/</span>
                    <span className="uppercase">{section}</span>
                    <span>/</span>
                    <span>{id?.toUpperCase()}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    {title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-zinc-400 font-mono text-sm">
                    {subtitle && <div className="flex items-center gap-2"><Shield size={16} className="text-primary" /> {subtitle}</div>}
                    {date && <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {date}</div>}
                    {item.readTime && <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> {item.readTime}</div>}
                </div>
            </div>
        );
    };

    const renderContent = () => {
        const htmlContent = item.content || item.writeup || item.fullDescription || item.description || '';
        const dangerouslySetHtml = { __html: DOMPurify.sanitize(marked.parse(htmlContent) as string) };

        return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Content Area */}
                    <div
                        className="prose prose-invert prose-emerald max-w-none 
                        prose-headings:text-white prose-headings:font-black 
                        prose-p:text-zinc-400 prose-p:leading-relaxed
                        prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:rounded
                        prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-white/5"
                        dangerouslySetInnerHTML={dangerouslySetHtml}
                    />

                    {item.details && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <TerminalIcon size={20} className="text-primary" /> Key Responsibilities
                            </h3>
                            <ul className="space-y-2">
                                {item.details.map((detail: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                        <span className="text-primary opacity-50 mt-1">[{i}]</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="space-y-8">
                    {/* Sidebar / Metadata */}
                    {item.techStack || item.tech ? (
                        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="text-sm font-mono text-primary mb-4">// TECH_STACK</h3>
                            <div className="flex flex-wrap gap-2">
                                {(item.techStack || item.tech).map((t: string) => (
                                    <span key={t} className="px-3 py-1 bg-black border border-white/10 rounded text-[10px] font-mono text-zinc-400 uppercase">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : null}

                    {item.tags && (
                        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="text-sm font-mono text-primary mb-4">// TAGS</h3>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((t: string) => (
                                    <span key={t} className="flex items-center gap-1 text-[10px] font-mono text-primary/70">
                                        <Tag size={10} /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="space-y-3">
                        {item.link && item.link !== '#' && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-black font-bold font-mono text-sm rounded-xl hover:bg-white transition-colors duration-300"
                            >
                                <ExternalLink size={16} /> LIVE_DEPLOYMENT
                            </a>
                        )}
                        {item.fileUrl && (
                            <a
                                href={`${import.meta.env.BASE_URL}${item.fileUrl}`}
                                download
                                className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 text-white font-bold font-mono text-sm rounded-xl hover:bg-zinc-700 transition-colors duration-300 border border-white/10"
                            >
                                <Download size={16} /> DOWNLOAD_CERTIFICATE
                            </a>
                        )}
                        {item.verificationLink && (
                            <a
                                href={item.verificationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900/50 text-primary font-bold font-mono text-sm rounded-xl hover:bg-zinc-800 transition-colors duration-300 border border-primary/30"
                            >
                                <ExternalLink size={16} /> VERIFY_ON_CHAIN
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
            {/* Background elements consistent with App.tsx should be handled by a layout component */}
            <div className="container mx-auto px-6 py-32 relative z-10 max-w-6xl">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 mb-12 text-primary font-mono text-sm group hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    BACK_TO_HOME
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {renderHeader()}
                    {renderContent()}
                </motion.div>
            </div>
        </div>
    );
};

export default DetailView;
