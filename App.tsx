import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Sidebar';
import { Hero, AboutSection } from './components/EmailDetail';
import ProjectsTerminal from './components/EmailList';
import SkillsTerminal from './components/StatsModal';
import { ExperienceSection, EducationSection, CertificationSection } from './components/Timeline';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { initMatrixRain } from './services/matrix';
import { loadAllContent } from './utils/contentLoader';
import type { Project, Experience, Education, Certification, Article } from './types';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [content, setContent] = useState<{
    projects: Project[];
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    articles: Article[];
  }>({
    projects: [],
    experience: [],
    education: [],
    certifications: [],
    articles: [],
  });

  const [loading, setLoading] = useState(true);

  // Initialize Matrix Rain
  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = initMatrixRain(canvasRef.current);
      return cleanup;
    }
  }, []);

  // Load content from JSON files
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await loadAllContent();
        setContent(data);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'articles', 'contact'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection zone for smoother pill movement
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">

      {/* Background Layer 1: Matrix Rain (Enhanced Visibility) */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none mix-blend-screen"
      />

      {/* Background Layer 2: CRT Scanline Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[60] opacity-20"
        style={{
          background: `
                linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))
            `,
          backgroundSize: "100% 3px, 3px 100%"
        }}
      />

      {/* Background Layer 3: Soft Vignette */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_90%)] pointer-events-none z-0" />

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

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
    </div>
  );
}

export default App;