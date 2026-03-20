
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Tag, Folder, Info, X, CheckCircle2, Cpu, Layout, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'design' | 'chatbot' | 'app'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
           Dernières <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Réalisations</span>
        </h1>
        
        {/* Modern Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 bg-white/50 backdrop-blur-md p-1.5 rounded-full inline-flex border border-white/60 shadow-sm mx-auto">
            {['all', 'web', 'design', 'chatbot', 'app'].map((cat) => (
            <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat 
                    ? 'bg-sky-500 text-white shadow-md' 
                    : 'text-slate-500 hover:text-sky-600 hover:bg-white/50'
                }`}
            >
                {cat === 'all' ? 'Tout' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
            ))}
        </div>
      </div>

      {/* Masonry-style Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout' initial={false}>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500"
            >
              {/* Image with Overlay */}
              <div className="h-64 overflow-hidden relative">
                 <img 
                    src={project.icon} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-sky-500 hover:text-white transition-all hover:scale-105"
                    >
                        <Info size={16} /> Voir Plus
                    </button>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-sky-500 text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all hover:scale-105"
                    >
                        <ExternalLink size={16} /> Lancer l'App
                    </a>
                 </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-sky-50 rounded-xl">
                        <Folder size={16} className="text-sky-500" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                        {project.category}
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-slate-100">
                            <Tag size={10} /> {tag}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-50 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: Image & Quick Info */}
                  <div className="p-8 lg:p-12 space-y-8 bg-white">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50">
                      <img 
                        src={selectedProject.icon} 
                        alt={selectedProject.title} 
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-sky-600 shadow-sm">
                          {selectedProject.category}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Cpu size={18} className="text-sky-500" /> Stack Technique
                      </h3>
                      <div className="space-y-4">
                        {selectedProject.stack.frontend && (
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Frontend</span>
                            <p className="text-slate-600 text-xs mt-0.5">{selectedProject.stack.frontend}</p>
                          </div>
                        )}
                        {selectedProject.stack.ai && (
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">IA & Vision</span>
                            <p className="text-slate-600 text-xs mt-0.5">{selectedProject.stack.ai}</p>
                          </div>
                        )}
                        {selectedProject.stack.deployment && (
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Déploiement</span>
                            <p className="text-slate-600 text-xs mt-0.5">{selectedProject.stack.deployment}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-8 lg:p-12 space-y-8">
                    <div>
                      <h2 className="text-4xl font-black text-slate-800 mb-2">{selectedProject.title}</h2>
                      <p className="text-lg text-sky-600 font-medium italic mb-4">"{selectedProject.pitch}"</p>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2 text-sky-600">
                          <Zap size={16} /> Points Forts
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-[11px] text-slate-500">
                              <CheckCircle2 size={12} className="text-sky-500 mt-0.5 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2 text-indigo-600">
                          <Layout size={16} /> Fonctionnalités
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-[11px] text-slate-500">
                              <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-black text-sm hover:bg-sky-600 transition-all hover:scale-105 shadow-lg"
                      >
                        Lancer l'Application <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
