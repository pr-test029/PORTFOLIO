
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, Github, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Parallax Mouse Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const cloudX = useTransform(mouseX, [0, window.innerWidth], [20, -20]);
  const cloudY = useTransform(mouseY, [0, window.innerHeight], [20, -20]);
  const bgX = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Compétences', path: '/skills' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans text-slate-800 selection:bg-sky-500 selection:text-white">
      
      {/* --- Dynamic Animated Sky Background --- */}
      <motion.div 
        style={{ x: bgX }}
        className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-br from-sky-200 via-blue-100 to-white"
      >
        {/* Sun / Light Source */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-yellow-200/40 to-orange-100/20 rounded-full blur-[100px] animate-pulse"></div>
        
        {/* Parallax Clouds */}
        <motion.div style={{ x: cloudX, y: cloudY }} className="absolute inset-0">
            <div className="absolute top-[10%] left-[5%] w-64 h-24 bg-white/40 rounded-full blur-2xl"></div>
            <div className="absolute top-[20%] right-[10%] w-96 h-32 bg-white/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[20%] left-[15%] w-80 h-28 bg-white/50 rounded-full blur-2xl"></div>
            <div className="absolute bottom-[10%] right-[20%] w-72 h-24 bg-white/40 rounded-full blur-xl"></div>
        </motion.div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </motion.div>

      {/* --- Ultra Glass Header --- */}
      <header className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"></div>
        <div className="container mx-auto px-6 py-4 relative flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
                <div className="absolute inset-0 bg-sky-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg border border-white/50">
                <Cloud className="text-white w-5 h-5" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-800">N.G.P.R</span>
                <span className="text-[10px] uppercase tracking-widest text-sky-600 font-semibold">Portfolio</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/30 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/40 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-sky-600"
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive(link.path) ? 'text-sky-600' : 'text-slate-600'}`}>
                    {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Social Icons Desktop */}
          <div className="hidden lg:flex items-center gap-3">
             <a href="https://github.com" target="_blank" className="text-slate-500 hover:text-sky-600 transition-colors"><Github size={20} /></a>
             <a href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-sky-600 transition-colors"><Linkedin size={20} /></a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2 text-slate-700 bg-white/50 rounded-lg hover:bg-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: '100vh', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden fixed inset-0 top-[72px] bg-white/90 backdrop-blur-xl z-40"
                >
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link, i) => (
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={link.path}
                    >
                        <Link
                            to={link.path}
                            className={`block text-2xl font-bold ${
                                isActive(link.path) ? 'text-sky-600' : 'text-slate-400'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                    ))}
                </div>
                </motion.div>
            )}
        </AnimatePresence>
      </header>

      {/* --- Main Content with Page Transition --- */}
      <main className="relative z-10 pt-28 pb-12 min-h-screen">
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
      </main>

      {/* --- Footer --- */}
      <footer className="relative z-10 border-t border-white/50 bg-white/30 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-2 mb-4">
                        <Cloud className="text-sky-600 w-6 h-6" />
                        <span className="font-bold text-sky-900 text-lg">N.G.P.R</span>
                    </div>
                    <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
                        Créons ensemble l'avenir numérique de votre entreprise. Innovation, Design et Performance.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-sky-900 mb-4">Navigation</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li><Link to="/portfolio" className="hover:text-sky-600 transition-colors">Portfolio</Link></li>
                        <li><Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-sky-600 transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sky-900 mb-4">Réseaux</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-600 shadow-sm hover:scale-110 hover:shadow-md transition-all"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-600 shadow-sm hover:scale-110 hover:shadow-md transition-all"><Github size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-600 shadow-sm hover:scale-110 hover:shadow-md transition-all"><Twitter size={18} /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} NDAMBA GOSSAKI Paul Roger.</p>
                <p>Mfilou, NGAMABA, République du Congo</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
