
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Tag, Folder, Info } from 'lucide-react';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'design' | 'chatbot' | 'app'>('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

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
        <AnimatePresence mode='popLayout'>
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
                    <Link 
                      to={`/project/${project.id}`}
                      target="_blank"
                      className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-sky-500 hover:text-white transition-all hover:scale-105"
                    >
                        <Info size={16} /> Voir Plus
                    </Link>
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
    </div>
  );
};

export default Portfolio;
