import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'alex --welcome',
      output: (
        <div className="space-y-1 text-emerald-400 font-mono text-xs">
          <p>--------------------------------------------------</p>
          <p className="font-bold text-indigo-400">Alex Mercer CLI [Version 2.4.0-release]</p>
          <p>Type <span className="text-amber-300 font-bold">'help'</span> or <span className="text-amber-300 font-bold">'skills'</span> or <span className="text-amber-300 font-bold">'cat resume.txt'</span></p>
          <p>--------------------------------------------------</p>
        </div>
      )
    }
  ]);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputCommand.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = '';

    switch (cmd) {
      case 'help':
      case '?':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-indigo-400 font-bold">Available Commands:</p>
            <p><span className="text-amber-300 font-bold">skills</span> - List core technical proficiencies</p>
            <p><span className="text-amber-300 font-bold">projects</span> - View featured production projects</p>
            <p><span className="text-amber-300 font-bold">cat resume.txt</span> - Print full text resume</p>
            <p><span className="text-amber-300 font-bold">contact</span> - Show direct contact details</p>
            <p><span className="text-amber-300 font-bold">whoami</span> - Display session details</p>
            <p><span className="text-amber-300 font-bold">clear</span> - Clear terminal logs</p>
            <p><span className="text-amber-300 font-bold">exit</span> - Close terminal CLI</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="text-indigo-400 font-bold">&gt; Top Skills Matrix:</p>
            {SKILLS_DATA.map((s) => (
              <p key={s.id} className="flex justify-between max-w-sm">
                <span className="text-slate-200">• {s.name}</span>
                <span className="text-emerald-400 font-bold">{s.proficiency}% [{s.experienceYears}y]</span>
              </p>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-indigo-400 font-bold">&gt; Featured Systems:</p>
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="border-l-2 border-indigo-500 pl-3">
                <p className="font-bold text-slate-100">{p.title} <span className="text-indigo-400">[{p.category}]</span></p>
                <p className="text-slate-400">{p.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat resume.txt':
      case 'resume':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-slate-200 p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <p className="text-indigo-400 font-bold uppercase">{PERSONAL_INFO.name} — RESUME SUMMARY</p>
            <p>Title: {PERSONAL_INFO.title}</p>
            <p>Location: {PERSONAL_INFO.location}</p>
            <p>Email: {PERSONAL_INFO.email}</p>
            <p className="text-slate-400 mt-2">6+ years designing scalable web applications, real-time analytics pipelines, and AI workflows. UC Berkeley B.S. CS graduate.</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-indigo-400 font-bold">Contact Alex Mercer:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: {PERSONAL_INFO.github}</p>
            <p>LinkedIn: {PERSONAL_INFO.linkedin}</p>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <p className="text-xs font-mono text-amber-300">
            guest@portfolio-guest-session [Terminal Mode: Interactive]
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputCommand('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not found: '{cmd}'. Type 'help' for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputCommand, output: outputNode }]);
    setInputCommand('');
  };

  const handleCopy = () => {
    const text = history.map((h) => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-2xl w-full h-[520px] shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="text-slate-400 text-[11px] ml-2 font-bold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
              alex@mercer-macbook: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800"
              title="Copy Output"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Log Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950 text-slate-200">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400 font-bold">
                <span>alex@mercer-macbook:~$</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <span className="text-indigo-400 font-bold">alex@mercer-macbook:~$</span>
          <input
            type="text"
            autoFocus
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder="Type 'help', 'skills', or 'projects'..."
            className="flex-1 bg-transparent text-slate-100 text-xs focus:outline-none"
          />
        </form>

      </div>
    </div>
  );
};
