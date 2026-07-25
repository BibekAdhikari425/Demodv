import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';
import { TerminalModal } from './components/TerminalModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Active section scroll observer
  useEffect(() => {
    const sectionIds = ['hero', 'skills', 'projects', 'timeline', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Animated Canvas Background */}
      <AnimatedBackground theme={theme} />

      {/* Glassmorphic Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAIModal={() => setAiModalOpen(true)}
        onOpenTerminalModal={() => setTerminalModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenAIModal={() => setAiModalOpen(true)}
          onOpenTerminalModal={() => setTerminalModalOpen(true)}
        />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Side Drawer */}
      <AIAssistantDrawer
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalModalOpen}
        onClose={() => setTerminalModalOpen(false)}
      />
    </div>
  );
}
