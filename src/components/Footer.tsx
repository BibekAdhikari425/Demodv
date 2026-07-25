import React from 'react';
import { 
  Code, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  Sparkles 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 light:border-slate-200 bg-slate-950 light:bg-slate-50 text-slate-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80 light:border-slate-200">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-100 light:text-slate-900 font-extrabold text-base leading-none block">
                Alex Mercer
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-400 light:text-slate-600">
            <a href="#hero" className="hover:text-indigo-400 transition-colors">Hero</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#timeline" className="hover:text-indigo-400 transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 light:bg-slate-200 light:hover:bg-slate-300 text-slate-300 light:text-slate-800 text-xs font-mono font-semibold border border-slate-800 light:border-slate-300 transition-all"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>

        </div>

        {/* Sub Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Alex Mercer. Crafted with React 19, TypeScript & Gemini AI.</p>
          
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All systems nominal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
