import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code2, 
  Download,
  ChevronDown,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenAIModal: () => void;
  onOpenTerminalModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAIModal, onOpenTerminalModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.rolesList;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Availability Status Badge */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="text-white/40 light:text-slate-600 text-[10px] uppercase tracking-[0.3em] font-mono font-medium">
            Senior Full-Stack & AI Systems Engineer
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080808] light:bg-white border border-white/10 light:border-slate-300 text-xs font-semibold text-emerald-400 light:text-emerald-700 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>
        </div>

        {/* Main Hero Headline with Sophisticated Serif Accent */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic leading-[1.1] text-white light:text-slate-900 mb-6 tracking-tight">
            Crafting digital architectures <br />
            <span className="text-white/40 light:text-slate-500 not-italic font-sans font-light">
              with precision & intent.
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-indigo-300 light:text-indigo-600 font-mono font-medium mb-6 flex items-center gap-2">
            <span>&gt; {displayedText}</span>
            <span className="animate-pulse text-indigo-400">|</span>
          </div>

          <p className="text-base sm:text-lg text-white/60 light:text-slate-600 max-w-2xl font-normal leading-relaxed mb-8">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Core Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white light:bg-slate-900 text-black light:text-white hover:bg-slate-200 light:hover:bg-slate-800 font-semibold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#080808] light:bg-white hover:bg-[#121212] light:hover:bg-slate-100 text-white/80 light:text-slate-800 font-semibold text-xs uppercase tracking-wider border border-white/10 light:border-slate-300 transition-all"
            >
              <Mail className="w-4 h-4 text-white/60 light:text-slate-500" />
              <span>Get in Touch</span>
            </button>

            <button
              onClick={onOpenTerminalModal}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#080808] light:bg-white hover:bg-[#121212] light:hover:bg-slate-100 text-indigo-400 light:text-indigo-600 font-mono text-xs font-semibold border border-indigo-500/30 light:border-indigo-300 transition-all shadow-sm"
              title="Launch Interactive Terminal"
            >
              <Terminal className="w-4 h-4" />
              <span>alex --cli</span>
            </button>

            <button
              onClick={onOpenAIModal}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-950/40 light:bg-indigo-50 hover:bg-indigo-900/50 light:hover:bg-indigo-100 text-indigo-300 light:text-indigo-700 text-xs font-semibold border border-indigo-500/30 light:border-indigo-200 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300 light:text-amber-600 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Ask AI Co-pilot</span>
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-4 text-white/40 light:text-slate-600 mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/30 light:text-slate-500">Connect:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#080808] light:bg-white hover:bg-[#141414] light:hover:bg-slate-100 text-white/70 light:text-slate-700 hover:text-white light:hover:text-slate-900 border border-white/10 light:border-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#080808] light:bg-white hover:bg-[#141414] light:hover:bg-slate-100 text-white/70 light:text-slate-700 hover:text-white light:hover:text-slate-900 border border-white/10 light:border-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#080808] light:bg-white hover:bg-[#141414] light:hover:bg-slate-100 text-white/70 light:text-slate-700 hover:text-white light:hover:text-slate-900 border border-white/10 light:border-slate-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#080808] light:bg-white hover:bg-[#141414] light:hover:bg-slate-100 text-white/70 light:text-slate-700 hover:text-white light:hover:text-slate-900 border border-white/10 light:border-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Highlights Grid Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10 light:border-slate-200">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#080808] light:bg-white border border-white/10 light:border-slate-200 backdrop-blur-sm hover:border-white/20 light:hover:border-slate-300 transition-all group shadow-sm"
            >
              <div className="text-3xl font-serif italic text-white light:text-slate-900 mb-1 group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-white/40 light:text-slate-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection('#skills')}
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 light:text-slate-600 hover:text-indigo-400 transition-colors group"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-indigo-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
