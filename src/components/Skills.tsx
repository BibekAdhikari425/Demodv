import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Server, 
  Cloud, 
  BrainCircuit, 
  Search, 
  BarChart3, 
  Grid, 
  Tag,
  Check,
  Zap,
  Sparkles,
  Layers,
  Database,
  Container,
  Terminal,
  Cpu,
  Palette,
  FileCode
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'matrix' | 'tags'>('grid');
  const [selectedSkillModal, setSelectedSkillModal] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Tech', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'cloud', label: 'Cloud & Infra', icon: Cloud },
    { id: 'ai', label: 'AI & Systems', icon: BrainCircuit },
  ];

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Container': return <Container className="w-5 h-5 text-sky-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-indigo-400" />;
      case 'Workflow': return <Zap className="w-5 h-5 text-orange-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-pink-400" />;
      default: return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono mb-2 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Expertise Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif italic text-white light:text-slate-900 tracking-tight">
              Technical Capabilities
            </h2>
            <p className="text-white/60 light:text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              Comprehensive proficiency across full-stack architecture, modern UI frameworks, distributed backends, and AI pipelines.
            </p>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#080808] light:bg-slate-100 border border-white/10 light:border-slate-300">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-white/50 light:text-slate-600 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'matrix'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-white/50 light:text-slate-600 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Proficiency Matrix</span>
            </button>
            <button
              onClick={() => setViewMode('tags')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'tags'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-white/50 light:text-slate-600 hover:text-white'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Tech Badges</span>
            </button>
          </div>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-slate-900/80 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900 border border-slate-800/80 light:border-slate-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills or tags..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 light:bg-white text-slate-200 light:text-slate-800 placeholder-slate-500 border border-slate-800 light:border-slate-300 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* SKILLS DISPLAY AREA */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
            <p className="text-sm">No technical skills matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-indigo-400 underline font-medium"
            >
              Reset filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => setSelectedSkillModal(skill)}
                className="p-6 rounded-2xl bg-slate-900/70 light:bg-white/90 border border-slate-800/80 light:border-slate-200/80 backdrop-blur-sm hover:border-indigo-500/50 light:hover:border-indigo-500/50 transition-all cursor-pointer group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/90 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 group-hover:scale-110 transition-transform">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100 light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 light:text-slate-600">
                        {skill.experienceYears} Years Exp
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 light:text-indigo-600 font-mono text-xs font-bold">
                    {skill.proficiency}%
                  </span>
                </div>

                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Proficiency Progress Bar */}
                <div className="w-full bg-slate-800/80 light:bg-slate-200 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 text-[10px] font-mono border border-slate-700/50 light:border-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : viewMode === 'matrix' ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 light:bg-white/90 border border-slate-800 light:border-slate-200 space-y-6">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-200 light:text-slate-800">
                    {getIcon(skill.iconName)}
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">({skill.experienceYears} yrs)</span>
                  </div>
                  <span className="font-mono text-indigo-400 light:text-indigo-600 font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-slate-800 light:bg-slate-200 h-3 rounded-full overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tags View Mode */
          <div className="p-8 rounded-2xl bg-slate-900/60 light:bg-white/90 border border-slate-800 light:border-slate-200 flex flex-wrap gap-3">
            {filteredSkills.flatMap(s => s.tags).map((tag, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-indigo-600 hover:text-white light:bg-slate-100 text-slate-200 light:text-slate-800 text-xs font-semibold font-mono border border-slate-700/60 light:border-slate-300 transition-all cursor-pointer shadow-sm hover:scale-105"
              >
                #{tag}
              </div>
            ))}
          </div>
        )}

        {/* Skill Detail Modal */}
        {selectedSkillModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
              <button
                onClick={() => setSelectedSkillModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800 light:bg-slate-100"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400">
                  {getIcon(selectedSkillModal.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 light:text-slate-900">
                    {selectedSkillModal.name}
                  </h3>
                  <p className="text-xs text-indigo-400 uppercase font-mono font-bold tracking-wider">
                    {selectedSkillModal.category} Capability
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 light:text-slate-600 mb-6 leading-relaxed">
                {selectedSkillModal.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                    <span>Proficiency Score</span>
                    <span className="text-indigo-400 font-bold">{selectedSkillModal.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full rounded-full"
                      style={{ width: `${selectedSkillModal.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 light:bg-slate-100 text-xs font-mono">
                  <span className="text-slate-400">Hands-on Experience</span>
                  <span className="font-bold text-slate-200 light:text-slate-800">{selectedSkillModal.experienceYears} Years</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedSkillModal.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-indigo-900/40 text-indigo-300 text-xs font-mono border border-indigo-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
