
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Palette, Users, Cpu } from 'lucide-react';
import { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill; color: string }> = ({ skill, color }) => (
  <div className="mb-5">
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold text-slate-700 text-sm">{skill.name}</span>
      <span className="text-xs font-bold text-slate-400">{skill.percentage}%</span>
    </div>
    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Développement Full Stack',
      icon: <Code className="text-white" size={20} />,
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: 'Frontend (React, TS, Tailwind)', percentage: 95 },
        { name: 'Backend & API', percentage: 85 },
        { name: 'Webmastering', percentage: 90 },
      ]
    },
    {
      title: 'Intelligence Artificielle',
      icon: <Bot className="text-white" size={20} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: 'IA Générative (LLMs)', percentage: 95 },
        { name: 'IA Agentique (Antigravity, Claude-code)', percentage: 95 },
      ]
    },
    {
      title: 'Design & Infographie',
      icon: <Palette className="text-white" size={20} />,
      color: "from-orange-500 to-red-400",
      skills: [
        { name: 'Adobe Suite (PS, AI, PR, AE)', percentage: 90 },
        { name: 'Canva (Maîtrise totale)', percentage: 100 },
      ]
    },
    {
      title: 'Gestion & RH',
      icon: <Users className="text-white" size={20} />,
      color: "from-emerald-500 to-teal-400",
      skills: [
        { name: 'Gestion RH & Administration', percentage: 90 },
        { name: 'Microsoft Office (Word, Excel, PPT, Publisher)', percentage: 100 },
        { name: 'Entrepreneuriat & Community Management', percentage: 90 },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
            Arsenal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Compétences</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
           Une expertise polyvalente alliant gestion, design, IA et développement web.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/60"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transform rotate-3`}>
                        {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
                </div>
                <div>
                    {category.skills.map((skill, idx) => (
                        <SkillBar key={idx} skill={skill} color={category.color} />
                    ))}
                </div>
            </motion.div>
        ))}
      </div>

      {/* Animated Tech Badges */}
      <div className="mt-16 overflow-hidden">
        {[
          ['React', 'TypeScript', 'Tailwind', 'Adobe Suite', 'Canva'],
          ['IA Agentique', 'Microsoft Office', 'Community Management', 'Entrepreneuriat']
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="flex overflow-hidden mb-4">
            <motion.div 
              className="flex gap-4"
              animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...row, ...row].map((tech, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff", color: "#0284c7" }}
                  className="px-6 py-3 bg-white rounded-full text-sm font-bold text-slate-600 shadow-md border border-slate-100 cursor-pointer whitespace-nowrap"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
