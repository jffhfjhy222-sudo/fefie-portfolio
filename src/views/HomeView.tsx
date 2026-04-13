import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { content } from '../data/content';
import { Star, Heart, Sparkles, Moon, Sun } from 'lucide-react';

export default function HomeView() {
  const { language } = useLanguage();
  const t = content[language].home;

  const doodles = [
    { Icon: Star, color: 'text-pastel-yellow-dark', top: '15%', left: '10%', size: 32, delay: 0 },
    { Icon: Heart, color: 'text-pastel-pink-dark', top: '20%', right: '15%', size: 28, delay: 0.5 },
    { Icon: Sparkles, color: 'text-pastel-blue-dark', bottom: '25%', left: '20%', size: 36, delay: 1 },
    { Icon: Moon, color: 'text-pastel-purple', top: '40%', right: '10%', size: 24, delay: 1.5 },
    { Icon: Sun, color: 'text-pastel-yellow-dark', bottom: '15%', right: '25%', size: 40, delay: 2 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Background Doodles */}
      {doodles.map((doodle, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: doodle.delay, duration: 1 }}
          className="absolute pointer-events-none floating"
          style={{ 
            top: doodle.top, 
            left: doodle.left, 
            right: doodle.right, 
            bottom: doodle.bottom 
          }}
        >
          <doodle.Icon size={doodle.size} className={doodle.color} />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        transition={{ 
          duration: 1, 
          ease: 'easeOut',
          whileHover: { duration: 0.3 }
        }}
        className="relative mb-12"
      >
        <div className="absolute inset-0 bg-pastel-pink rounded-full blur-2xl opacity-30 -z-10" />
        <img
          src="/images/logo.png"
          alt="FEFIE Logo"
          className="w-48 h-48 md:w-64 md:h-64 object-contain doodle-border hand-drawn-shadow bg-white p-4"
          referrerPolicy="no-referrer"
        />
        {/* Decorative dots around logo */}
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-pastel-yellow-dark floating" />
        <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-pastel-blue-dark floating" style={{ animationDelay: '1s' }} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-xl md:text-2xl text-slate-500 mb-4 font-heading italic tracking-wide">
          {t.greeting}
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight font-display relative">
          <span className="bg-gradient-to-r from-pastel-pink-dark via-pastel-blue-dark to-pastel-yellow-dark bg-clip-text text-transparent">
            {t.name}
          </span>
          <motion.span 
            className="absolute -top-8 -right-8 text-pastel-pink-dark"
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Sparkles size={40} />
          </motion.span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-2xl mx-auto font-heading">
          {t.roles.map((role, i) => (
            <motion.span 
              key={role} 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <span className="text-base md:text-lg text-slate-600 font-medium px-4 py-1 doodle-border-soft bg-white/50">
                {role}
              </span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
