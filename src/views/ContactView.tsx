import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { content } from '../data/content';
import { Mail, ExternalLink, Heart, Star } from 'lucide-react';

export default function ContactView() {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="min-h-screen py-24 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute bottom-20 left-10 text-pastel-pink-dark opacity-30 -rotate-12">
        <Heart size={80} />
      </div>
      <div className="absolute top-40 right-20 text-pastel-yellow-dark opacity-30 rotate-45">
        <Star size={100} />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full space-y-16 relative z-10"
      >
        <div className="space-y-4">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight font-heading relative z-10">
              {t.title}
            </h2>
            <div className="absolute -bottom-2 -left-4 w-full h-6 bg-pastel-yellow/60 -z-10 rounded-full rotate-1" />
          </div>
        </div>

        <div className="space-y-12 font-body">
          <a 
            href={`mailto:${t.email}`}
            className="group flex flex-col items-center justify-center gap-4 text-2xl md:text-4xl font-bold text-slate-700 hover:text-pastel-pink-dark transition-colors"
          >
            <div className="w-20 h-20 rounded-full bg-white doodle-border flex items-center justify-center group-hover:bg-pastel-pink/20 transition-all group-hover:rotate-12 hand-drawn-shadow">
              <Mail size={32} />
            </div>
            <span className="underline decoration-pastel-pink-dark decoration-4 underline-offset-8">{t.email}</span>
          </a>

          <motion.a
            href={t.linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10, rotate: 2 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-white doodle-border text-slate-700 rounded-full font-bold shadow-xl hand-drawn-shadow hover:bg-pastel-blue/10 transition-all text-xl"
          >
            {t.linktreeLabel}
            <ExternalLink size={24} />
          </motion.a>
        </div>

        <footer className="pt-32 text-slate-400 text-base font-heading flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            Made with <Heart size={20} className="text-pastel-pink-dark fill-pastel-pink-dark floating" /> by FEFIE © 2024
          </div>
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-pastel-pink" />
            <div className="w-3 h-3 rounded-full bg-pastel-blue" />
            <div className="w-3 h-3 rounded-full bg-pastel-yellow" />
          </div>
        </footer>
      </motion.div>
    </section>
  );
}
