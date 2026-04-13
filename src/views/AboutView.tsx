import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { content } from '../data/content';
import { Sparkles, Heart, Star } from 'lucide-react';

export default function AboutView() {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <section id="about" className="min-h-screen py-24 px-6 max-w-6xl mx-auto relative">
      {/* Decorative background doodles */}
      <div className="absolute top-10 right-10 text-pastel-blue-dark opacity-40 rotate-12">
        <Sparkles size={60} />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight font-heading relative z-10">
              {t.title}
            </h2>
            <div className="absolute -bottom-2 -left-2 w-full h-4 bg-pastel-yellow/60 -z-10 rounded-full rotate-1" />
          </div>
          
          <div className="space-y-6 text-slate-700 leading-relaxed text-xl font-body">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="relative">
                {p}
                {i === 0 && <span className="absolute -left-8 top-0 text-pastel-pink-dark">✨</span>}
              </p>
            ))}
          </div>

          <div className="p-8 bg-white doodle-border hand-drawn-shadow rotate-1">
            <h3 className="text-2xl font-bold text-slate-800 font-heading mb-4 flex items-center gap-3">
              <Heart size={24} className="text-pastel-pink-dark fill-pastel-pink-dark" />
              {t.goalsTitle}
            </h3>
            <ul className="space-y-3 font-body text-lg">
              {t.goals.map((goal, i) => (
                <li key={goal} className="flex items-center gap-3 text-slate-600">
                  <span className="text-pastel-blue-dark font-bold">0{i + 1}.</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-8"
        >
          {t.images.map((img, i) => (
            <div 
              key={i} 
              className={`relative ${i === 1 ? 'mt-16' : ''}`}
            >
              <div className={`absolute inset-0 bg-pastel-pink-dark/20 doodle-border rotate-${i === 0 ? '3' : '-3'} -z-10`} />
              <img 
                src={img} 
                alt="Profile" 
                className={`w-full h-full object-cover aspect-[3/4] doodle-border bg-white p-2 rotate-${i === 0 ? '-2' : '2'} hover:rotate-0 transition-transform duration-500`}
                referrerPolicy="no-referrer"
              />
              {i === 0 && <Star size={32} className="absolute -top-6 -left-6 text-pastel-yellow-dark floating" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
