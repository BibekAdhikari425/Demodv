import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const filteredItems = TIMELINE_DATA.filter((item) => item.type === activeTab);

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif italic text-white light:text-slate-900 tracking-tight">
              Work & Education
            </h2>
            <p className="text-white/60 light:text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              6+ years building production full-stack systems, leading engineering teams, and advancing distributed cloud architecture.
            </p>
          </div>

          {/* Toggle Tab Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#080808] light:bg-slate-100 border border-white/10 light:border-slate-300">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-white/50 light:text-slate-600 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-white/50 light:text-slate-600 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Timeline Items List */}
        <div className="relative border-l-2 border-white/10 light:border-slate-300 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050505] light:bg-white border-2 border-white/30 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#080808] light:bg-white/90 border border-white/10 light:border-slate-200/80 backdrop-blur-sm hover:border-white/20 transition-all shadow-2xl">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80 light:border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 light:text-slate-900">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Present Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-400 light:text-indigo-600 font-semibold">
                      <Building2 className="w-4 h-4" />
                      <span>{item.companyOrInstitution}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 light:bg-slate-100 border border-slate-700/50 light:border-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Achievements Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 light:text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badge Pills */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 text-[11px] font-mono border border-slate-700/50 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
