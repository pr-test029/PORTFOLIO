
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Sparkles } from 'lucide-react';

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
    return (
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
        className="perspective-1000"
      >
        {children}
      </motion.div>
    );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col justify-center relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 relative z-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md text-sky-700 rounded-full text-sm font-semibold mb-6 border border-white/60 shadow-sm"
            >
                <Sparkles size={16} className="text-yellow-500" />
                <span>Disponible pour de nouveaux projets</span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-8xl font-black text-slate-800 mb-6 tracking-tight leading-[1.1]"
            >
                NDAMBA <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
                    GOSSAKI
                </span>
            </motion.h1>
            
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl lg:text-3xl text-slate-600 font-medium mb-8 flex flex-col md:flex-row gap-2"
            >
                <span>Expert RH</span>
                <span className="hidden md:inline text-sky-300">•</span>
                <span className="text-sky-600 font-bold">Développeur Full-Stack</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed border-l-4 border-sky-500 pl-4"
            >
                Je transforme les défis administratifs et technologiques en opportunités de croissance. Une approche hybride unique en République du Congo.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link to="/portfolio" className="group bg-slate-900 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 flex items-center justify-center gap-2">
                    Voir mes projets 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="/cv.pdf" className="group bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all hover:border-sky-500 hover:text-sky-600 flex items-center justify-center gap-2">
                    Télécharger CV 
                    <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.div>
        </div>

        {/* Visual Content - 3D Card */}
        <div className="order-1 lg:order-2 flex justify-center perspective-1000 relative z-10">
            <TiltCard>
                <div className="relative w-80 h-96 md:w-[400px] md:h-[500px] bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/40 shadow-2xl p-4">
                    {/* Inner Content */}
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative group">
                        <img 
                            src="NGPR.png" 
                            alt="NDAMBA GOSSAKI Paul Roger" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                            onError={(e) => {
                                // Fallback en cas d'erreur de chargement
                                e.currentTarget.src = "https://paul-ndamba.netlify.app/asset/images/hero/NGPR.png";
                                e.currentTarget.alt = "Image non trouvée";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent"></div>
                        
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm font-light opacity-80">Nom :</p>
                            <p className="text-xl font-bold">Paul NDAMBA</p>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute -right-12 top-20 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/60"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-black text-xl">3+</div>
                            <div className="text-sm font-semibold text-slate-700 leading-tight">Années<br/>d'Expérience</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                        className="absolute -left-12 bottom-20 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/60"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">50</div>
                            <div className="text-sm font-semibold text-slate-700 leading-tight">Projets<br/>Réussis</div>
                        </div>
                    </motion.div>
                </div>
            </TiltCard>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sky-300 opacity-50"
      >
        <ChevronDown size={40} />
      </motion.div>
    </div>
  );
};

export default Home;
