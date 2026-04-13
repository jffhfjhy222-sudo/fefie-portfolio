import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { content } from '../data/content';
import { Download, FileText } from 'lucide-react';

export default function CVView() {
  const { language } = useLanguage();
  const t = content[language].cv;

  return (
    <section id="cv" className="min-h-screen py-24 px-6 max-w-5xl mx-auto flex flex-col items-center relative">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-12 w-full"
      >
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 font-heading relative z-10">{t.title}</h2>
          <div className="absolute -bottom-2 -right-2 w-full h-4 bg-pastel-purple/60 -z-10 rounded-full rotate-1" />
        </div>
        
        <div className="w-full h-[600px] md:h-[800px] bg-white doodle-border hand-drawn-shadow overflow-hidden relative rotate-1">
          <iframe
            src={t.pdfUrl}
            className="w-full h-full border-none rounded-lg"
            title="CV PDF"
          />
        </div>

        <motion.a
          href={t.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center gap-3 px-10 py-5 bg-pastel-pink-dark text-white rounded-full font-bold shadow-lg shadow-pastel-pink/30 hover:bg-pink-400 transition-all doodle-border border-white font-heading"
        >
          <Download size={24} />
          {t.downloadLabel}
        </motion.a>
      </motion.div>
    </section>
  );
}
