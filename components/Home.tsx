import React from 'react';
import { Hero, AboutSection } from './EmailDetail';
import ProjectsTerminal from './EmailList';
import SkillsTerminal from './StatsModal';
import { ExperienceSection, EducationSection, CertificationSection } from './Timeline';
import Blog from './Blog';
import Contact from './Contact';
import type { Project, Experience, Education, Certification, Article } from '../types';

interface HomeProps {
    content: {
        projects: Project[];
        experience: Experience[];
        education: Education[];
        certifications: Certification[];
        articles: Article[];
    };
}

const Home: React.FC<HomeProps> = ({ content }) => {
    return (
        <main className="relative z-10 flex flex-col gap-0">
            <Hero />
            <AboutSection />
            <SkillsTerminal />
            <ProjectsTerminal projects={content.projects} />
            <ExperienceSection experiences={content.experience} />
            <EducationSection education={content.education} />
            <CertificationSection certifications={content.certifications} />
            <Blog articles={content.articles} />
            <Contact />

            <footer id="logs" className="py-12 border-t border-white/5 bg-black/60 text-center text-zinc-500 backdrop-blur-sm relative z-20">
                <p className="font-mono text-xs tracking-widest">
                    DESIGNED & DEVELOPED BY H4K // {new Date().getFullYear()}
                </p>
            </footer>
        </main>
    );
};

export default Home;
