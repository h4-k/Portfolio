import React, { useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../constants';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the navbar content to keep the active tab centered/visible
  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = document.getElementById(`nav-btn-${activeSection}`);
      if (activeBtn) {
        // Calculate position to center the button in the container
        const container = scrollRef.current;
        const scrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 perspective-1000 w-[95%] max-w-5xl">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl rounded-full border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" />
      
      <div className="relative px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-between overflow-hidden rounded-full">
        {/* Logo - Stays visible */}
        <div 
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group flex-shrink-0 mr-6"
        >
          <div className="w-10 h-10 rounded-full bg-black border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,220,130,0.15)] group-hover:shadow-[0_0_20px_rgba(0,220,130,0.4)] group-hover:scale-110 transition-all duration-300">
            <Terminal size={18} />
          </div>
          <div className="hidden lg:flex flex-col">
            <span className="font-bold text-white tracking-tight leading-none text-glow">H4K</span>
          </div>
        </div>

        {/* Scrollable Links Container - Content moves left/right here */}
        <div 
            ref={scrollRef}
            className="flex-1 overflow-x-auto scrollbar-hide -mr-2 pr-2 mask-linear-fade"
        >
            <div className="flex items-center gap-1 min-w-max px-2">
            {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                <button
                    key={item.id}
                    id={`nav-btn-${item.id}`}
                    onClick={() => {
                    setActiveSection(item.id);
                    const el = document.getElementById(item.id);
                    el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive ? 'text-black' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    {isActive && (
                    <motion.div
                        layoutId="pill"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    )}
                    <span className="relative z-10 mix-blend-multiply font-bold font-mono">{item.label}</span>
                </button>
                );
            })}
            </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;