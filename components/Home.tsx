import React from 'react';
import { Hero, AboutSection } from './EmailDetail';
import SkillsTerminal from './StatsModal';
import ProjectsTerminal from './EmailList';
import { ExperienceSection, EducationSection, CertificationSection } from './Timeline';
import Blog from './Blog';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ViewMoreBtn = ({ to, label }: { to: string, label: string }) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center pb-12 relative z-20">
            <button 
                onClick={() => {
                    navigate(to);
                    window.scrollTo(0, 0);
                }}
                className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            >
                <span className="font-mono text-sm">{label}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      
      <div className="relative">
        <AboutSection />
        <ViewMoreBtn to="/about" label="VIEW_FULL_BIO" />
      </div>

      <div className="relative">
        <SkillsTerminal />
        <ViewMoreBtn to="/skills" label="VIEW_DETAILED_SKILLS" />
      </div>

      <div className="relative">
        <ProjectsTerminal />
        <ViewMoreBtn to="/projects" label="VIEW_ALL_PROJECTS" />
      </div>

      <div className="relative">
        <ExperienceSection />
        <ViewMoreBtn to="/experience" label="VIEW_FULL_EXPERIENCE" />
      </div>

      <div className="relative">
        <EducationSection />
        <ViewMoreBtn to="/education" label="VIEW_EDUCATION_DATA" />
      </div>

      <div className="relative">
        <CertificationSection />
        <ViewMoreBtn to="/certifications" label="VIEW_ALL_CERTS" />
      </div>

      <div className="relative">
        <Blog />
        <ViewMoreBtn to="/articles" label="READ_ALL_ARTICLES" />
      </div>

      <Contact />
    </div>
  );
};

export default Home;
