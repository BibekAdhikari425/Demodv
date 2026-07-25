import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2,
  Code2,
  Cpu,
  Star
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full-Stack', 'AI / ML', 'Cloud & Infra', 'Open Source'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-white/40 light:text-slate-500 text-[10px] uppercase tracking-[0.2em] font-mono mb-2 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif italic text-white light:text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-white/60 light:text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              Production platforms, cloud microservices, and open-source systems built with scaling and performance in mind.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-white light:bg-slate-900 text-black light:text-white font-bold shadow-md'
                    : 'bg-[#080808] light:bg-slate-100 text-white/50 light:text-slate-600 hover:text-white light:hover:text-slate-900 border border-white/10 light:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#080808] light:bg-white/90 border border-white/10 light:border-slate-200/80 backdrop-blur-sm overflow-hidden flex flex-col hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              {/* Thumbnail Container */}
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-indigo-400 light:text-indigo-600 border border-indigo-500/30 text-[11px] font-mono font-bold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[11px] font-bold flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 font-medium">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Project Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics Pill Highlights */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-400 font-bold block">
                    Key Outcomes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.slice(0, 2).map((metric, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/40 light:bg-indigo-50 text-indigo-300 light:text-indigo-800 text-[11px] font-mono border border-indigo-800/40 light:border-indigo-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 text-[11px] font-mono border border-slate-700/50 light:border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 light:text-indigo-600 font-mono group-hover:translate-x-1 transition-all"
                  >
                    <span>View Case Study & Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 transition-colors"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
