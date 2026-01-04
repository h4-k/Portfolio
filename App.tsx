import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Sidebar';
import Home from './components/Home';
import DetailView from './components/DetailView';
import { initMatrixRain } from './services/matrix';
import { loadAllContent } from './utils/contentLoader';
import type { Project, Experience, Education, Certification, Article } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();

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
      } catch (error) {
        console.error("Failed to load content", error);
      }
    };

    fetchContent();
  }, []);

  // Scroll spy effect (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'articles', 'contact'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isDetailPage = location.pathname.includes('/id/');

  return (
    <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <ScrollToTop />

      {/* Background Layer 1: Matrix Rain */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none mix-blend-screen"
      />

      {/* Background Layer 2: CRT Scanline */}
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

      {/* Navbar only shows if not in a deep detail state OR we adjust its logic */}
      {!isDetailPage && <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />}

      <Routes>
        <Route path="/" element={<Home content={content} />} />
        <Route path="/:section/id/:id" element={<DetailView content={content} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;