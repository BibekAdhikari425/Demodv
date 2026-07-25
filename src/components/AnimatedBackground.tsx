import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Grid, Activity } from 'lucide-react';

interface AnimatedBackgroundProps {
  theme: 'dark' | 'light';
}

type BackgroundMode = 'particles' | 'grid' | 'waves';

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [bgMode, setBgMode] = useState<BackgroundMode>('particles');
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle initialization
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.8 + 1,
      baseAlpha: Math.random() * 0.4 + 0.2,
      color: Math.random() > 0.5 ? '#818cf8' : '#c084fc'
    }));

    let waveTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      if (bgMode === 'particles') {
        // Draw constellation particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Mouse interaction
          let alphaMultiplier = 1;
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - p.x;
            const dy = mouseRef.current.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              p.x += (dx / dist) * 0.5;
              p.y += (dy / dist) * 0.5;
              alphaMultiplier = 1.8;
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? p.color === '#818cf8' ? `rgba(129, 140, 248, ${p.baseAlpha * alphaMultiplier})` : `rgba(192, 132, 252, ${p.baseAlpha * alphaMultiplier})`
            : p.color === '#818cf8' ? `rgba(79, 70, 229, ${p.baseAlpha * 0.8 * alphaMultiplier})` : `rgba(147, 51, 234, ${p.baseAlpha * 0.8 * alphaMultiplier})`;
          ctx.fill();

          // Connect nearby lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              const lineAlpha = (1 - dist / 120) * (isDark ? 0.18 : 0.12);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = isDark
                ? `rgba(99, 102, 241, ${lineAlpha})`
                : `rgba(79, 70, 229, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      } else if (bgMode === 'grid') {
        // Tech Grid Background
        const gridSize = 48;
        const cols = Math.ceil(width / gridSize);
        const rows = Math.ceil(height / gridSize);

        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.05)';
        ctx.lineWidth = 1;

        for (let c = 0; c <= cols; c++) {
          ctx.beginPath();
          ctx.moveTo(c * gridSize, 0);
          ctx.lineTo(c * gridSize, height);
          ctx.stroke();
        }

        for (let r = 0; r <= rows; r++) {
          ctx.beginPath();
          ctx.moveTo(0, r * gridSize);
          ctx.lineTo(width, r * gridSize);
          ctx.stroke();
        }

        // Mouse Spotlight Glow on grid
        if (mouseRef.current.active) {
          const grad = ctx.createRadialGradient(
            mouseRef.current.x,
            mouseRef.current.y,
            10,
            mouseRef.current.x,
            mouseRef.current.y,
            240
          );
          grad.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.12)');
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
        }
      } else if (bgMode === 'waves') {
        // Sine Energy Waves
        waveTime += 0.015;
        const lines = 5;

        for (let l = 0; l < lines; l++) {
          ctx.beginPath();
          for (let x = 0; x <= width; x += 20) {
            const y =
              Math.sin(x * 0.003 + waveTime + l) * 45 +
              Math.cos(x * 0.001 + waveTime * 0.8) * 30 +
              height * (0.3 + l * 0.12);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = isDark
            ? `rgba(129, 140, 248, ${0.08 + l * 0.02})`
            : `rgba(79, 70, 229, ${0.06 + l * 0.02})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [bgMode, theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* Background Style Switcher Widget */}
      <div className="pointer-events-auto fixed bottom-6 left-6 z-20 hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 backdrop-blur-md border border-slate-700/50 shadow-xl text-xs font-medium">
        <span className="text-slate-400 pl-2.5 pr-1 text-[11px] uppercase tracking-wider font-mono">
          Canvas:
        </span>
        <button
          onClick={() => setBgMode('particles')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
            bgMode === 'particles'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Particles Network"
        >
          <Sparkles className="w-3 h-3" />
          <span>Particles</span>
        </button>
        <button
          onClick={() => setBgMode('grid')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
            bgMode === 'grid'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Tech Grid"
        >
          <Grid className="w-3 h-3" />
          <span>Grid</span>
        </button>
        <button
          onClick={() => setBgMode('waves')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
            bgMode === 'waves'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Sine Waves"
        >
          <Activity className="w-3 h-3" />
          <span>Waves</span>
        </button>
      </div>
    </div>
  );
};
