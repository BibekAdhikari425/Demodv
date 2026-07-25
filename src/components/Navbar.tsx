import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Bot, 
  FileText, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code,
  Sparkles
} from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenAIModal: () => void;
  onOpenTerminalModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenAIModal,
  onOpenTerminalModal,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hero', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050505]/90 light:bg-white/85 backdrop-blur-md border-b border-white/10 light:border-slate-200 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="group flex items-center gap-2.5 font-bold text-lg tracking-tight focus:outline-none z-10"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#050505] light:bg-white rounded-[10px] flex items-center justify-center">
              <Code className="w-4 h-4 text-indigo-400 light:text-indigo-600" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white light:text-slate-900 font-serif italic font-extrabold text-lg leading-none">
              A. Mercer<span className="text-indigo-400 light:text-indigo-600 not-italic font-sans text-sm">.dev</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 light:text-emerald-600 flex items-center gap-1 mt-0.5 font-normal tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for hire
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Centered */}
        <nav className="hidden md:flex items-center gap-1 bg-[#080808]/90 light:bg-slate-100/80 p-1.5 rounded-full border border-white/10 light:border-slate-200 backdrop-blur-md md:absolute md:left-1/2 md:-translate-x-1/2 z-10 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.15em] font-medium transition-all ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-white/60 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="hidden lg:flex items-center gap-2.5 z-10">
          {/* Terminal CLI Modal Button */}
          <button
            onClick={onOpenTerminalModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 text-xs font-mono font-medium transition-all hover:border-slate-700"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>CLI</span>
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={onOpenAIModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Ask AI</span>
            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 transition-all"
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Resume Quick Link */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 light:bg-slate-200 light:hover:bg-slate-300 text-slate-200 light:text-slate-800 text-xs font-semibold border border-slate-700/60 light:border-slate-300 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-4 rounded-2xl bg-slate-900/95 light:bg-white/95 backdrop-blur-xl border border-slate-800 light:border-slate-200 shadow-2xl flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  activeSection === link.name.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-100'
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.name.toLowerCase() && (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
              </a>
            ))}
          </div>

          <div className="h-px bg-slate-800 light:bg-slate-200 my-1"></div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAIModal(); }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Co-pilot</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenTerminalModal(); }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 light:bg-slate-200 text-slate-200 light:text-slate-800 text-xs font-semibold font-mono"
            >
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>CLI Terminal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
