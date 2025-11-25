import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Sidebar';
import { initMatrixRain } from './services/matrix';
import { DEFAULT_ROUTE, SECTION_ROUTES } from './src/sections';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const basePath = (import.meta as any)?.env?.BASE_URL ?? '/';

  // Initialize Matrix Rain
  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = initMatrixRain(canvasRef.current);
      return cleanup;
    }
  }, []);

  return (
    <BrowserRouter basename={basePath}>
      <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
        <canvas 
          ref={canvasRef} 
          className="fixed top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none mix-blend-screen"
        />
        
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
        
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_90%)] pointer-events-none z-0" />

        <Navbar routes={SECTION_ROUTES} />

        <main className="relative z-10 flex flex-col gap-0 min-h-screen">
          <Routes>
            {SECTION_ROUTES.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to={DEFAULT_ROUTE.path} replace />} />
          </Routes>

          <footer id="logs" className="mt-auto py-12 border-t border-white/5 bg-black/60 text-center text-zinc-500 backdrop-blur-sm relative z-20">
              <p className="font-mono text-xs tracking-widest">
                  DESIGNED & DEVELOPED BY H4K // {new Date().getFullYear()}
              </p>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;