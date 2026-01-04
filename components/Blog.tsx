import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Hash } from 'lucide-react';
import type { Article } from '../types';

interface BlogProps {
    articles: Article[];
}

const Blog: React.FC<BlogProps> = ({ articles }) => {
    return (
        <section id="articles" className="py-32 relative bg-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-black to-black" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between mb-16">
                    <div className="flex items-center gap-3">
                        <BookOpen className="text-primary" size={32} />
                        <h2 className="text-4xl font-bold text-white">Knowledge Base</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="group flex flex-col h-full bg-zinc-900/30 border border-white/5 hover:border-primary/50 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,220,130,0.1)] hover:-translate-y-1"
                        >
                            <Link to={`/articles/id/${article.id}`} className="flex flex-col h-full p-6">
                                <div className="flex items-center justify-between mb-4 text-xs font-mono text-zinc-500">
                                    <span>{article.date}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock size={12} />
                                        {article.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {article.title}
                                </h3>

                                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 flex-grow">
                                    {article.summary}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                                    {article.tags.map(tag => (
                                        <div key={tag} className="flex items-center gap-1 text-[10px] font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                                            <Hash size={10} />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;