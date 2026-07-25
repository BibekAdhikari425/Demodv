import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Globe, 
  MessageSquare,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    budget: '$15k - $50k',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const budgetOptions = [
    '< $10k',
    '$10k - $25k',
    '$25k - $50k',
    '$50k+',
    'Advisory / Full-Time Role'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(data.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          budget: '$15k - $50k',
          message: ''
        });
      } else {
        setErrorMsg(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg('Network error sending message. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="text-white/40 light:text-slate-500 text-[10px] uppercase tracking-[0.2em] font-mono mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white light:text-slate-900 tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-white/60 light:text-slate-600 mt-2 text-sm sm:text-base">
            Have a project in mind, an open role, or an architectural challenge? Reach out and I'll respond within 24 hours.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-3xl bg-[#080808] light:bg-white/90 border border-white/10 light:border-slate-200 backdrop-blur-sm space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-100 light:text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                <span>Direct Info</span>
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl bg-slate-800/60 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-700/60 light:border-slate-300 flex items-center gap-4 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Direct Email</span>
                    <span className="text-sm font-bold text-slate-100 light:text-slate-900 font-mono">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Location</span>
                    <span className="text-sm font-bold text-slate-100 light:text-slate-900">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Timezone</span>
                    <span className="text-sm font-bold text-slate-100 light:text-slate-900 font-mono">PST (UTC-8) / Remote Global</span>
                  </div>
                </div>
              </div>

              {/* Social Link Cards */}
              <div>
                <span className="text-xs uppercase font-mono font-bold text-slate-400 block mb-3">Social Connections</span>
                <div className="flex gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700 light:border-slate-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700 light:border-slate-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700 light:border-slate-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Book Call Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-slate-900 border border-indigo-500/30 backdrop-blur-sm flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Book a 15-min Intro Call</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Schedule an instant video call to discuss technical strategy.
                </p>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=15-min%20Discovery%20Call`}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md whitespace-nowrap"
              >
                Schedule Call
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080808] light:bg-white/90 border border-white/10 light:border-slate-200 backdrop-blur-sm shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 light:text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 light:text-slate-600 max-w-md mx-auto leading-relaxed">
                    {submitted}
                  </p>
                  <button
                    onClick={() => setSubmitted(null)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-300 light:text-slate-700 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-300 light:text-slate-700 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-300 light:text-slate-700 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Senior Full-Stack Engineering Role / AI Consulting Project"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Project Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-300 light:text-slate-700 uppercase">
                      Project Budget or Scope
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: option })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                            formData.budget === option
                              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                              : 'bg-slate-950/80 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-800 light:border-slate-300 hover:text-slate-200'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-300 light:text-slate-700 uppercase">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, technical requirements, or role details..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
