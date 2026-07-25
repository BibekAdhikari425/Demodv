import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Terminal, 
  Play, 
  Activity,
  Code2,
  Cpu
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');
  const [simPrompt, setSimPrompt] = useState('Create a full-stack Gemini agent for PDF data parsing');
  const [simOutput, setSimOutput] = useState<string | null>(null);
  const [simLoading, setSimLoading] = useState(false);

  const handleRunSim = () => {
    setSimLoading(true);
    setSimOutput(null);
    setTimeout(() => {
      setSimOutput(
        `[Nexus Kernel] Processing request: "${simPrompt}"\n[Gemini 3.6 Flash] Instantiating multi-modal parser...\n[Output] Graph created with 4 sub-agents: DocumentLoader -> TextExtractor -> SchemaValidator -> VectorStore.\n[Latency] 42ms | Stream status: 200 OK`
      );
      setSimLoading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="p-6 border-b border-slate-800 light:border-slate-200 flex items-center justify-between bg-slate-900/90 light:bg-slate-50 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 light:text-indigo-600 text-xs font-mono font-semibold">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-slate-100 light:text-slate-900">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 light:bg-slate-200 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* Banner Image */}
          <div className="relative h-64 rounded-2xl overflow-hidden group border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
              <p className="text-sm font-medium text-slate-200 italic">
                "{project.tagline}"
              </p>
            </div>
          </div>

          {/* Tab Navigation inside Modal */}
          <div className="flex items-center gap-2 border-b border-slate-800 light:border-slate-200 pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800/60 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Architecture & Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'simulation'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800/60 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Interactive Simulation</span>
            </button>
          </div>

          {/* TAB 1: OVERVIEW & ARCHITECTURE */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-indigo-400 tracking-wider mb-2">
                  System Description
                </h4>
                <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Impact Metrics */}
              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-indigo-400 tracking-wider mb-3">
                  Key Metrics & Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 flex items-center gap-2.5 text-xs font-semibold text-slate-200 light:text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-indigo-400 tracking-wider mb-3">
                  Architecture Highlights
                </h4>
                <ul className="space-y-2.5">
                  {project.architecturePoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-xs text-slate-300 light:text-slate-700 flex items-start gap-3"
                    >
                      <Code2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-indigo-400 tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800 light:bg-slate-200 text-slate-200 light:text-slate-800 text-xs font-mono font-medium border border-slate-700 light:border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SIMULATION */}
          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-indigo-400 font-bold flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    {project.title} Interactive Playground
                  </span>
                  <span className="text-[10px] text-emerald-400">● Live Sandbox</span>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] text-slate-400 block">Test Input Command / Prompt:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={simPrompt}
                      onChange={(e) => setSimPrompt(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 text-xs focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      onClick={handleRunSim}
                      disabled={simLoading}
                      className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{simLoading ? 'Running...' : 'Execute'}</span>
                    </button>
                  </div>
                </div>

                {simLoading && (
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 text-xs flex items-center gap-2 animate-pulse">
                    <Cpu className="w-4 h-4 animate-spin" />
                    <span>Compiling runtime graph execution...</span>
                  </div>
                )}

                {simOutput && (
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs whitespace-pre-wrap leading-relaxed font-mono">
                    {simOutput}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Links */}
        <div className="p-6 border-t border-slate-800 light:border-slate-200 bg-slate-900/90 light:bg-slate-50 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 light:bg-slate-200 light:hover:bg-slate-300 text-slate-200 light:text-slate-800 text-xs font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all"
          >
            <span>Live Project Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
