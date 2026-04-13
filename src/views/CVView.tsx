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
        
        <div className="w-full aspect-[1/1.4] bg-white doodle-border hand-drawn-shadow overflow-hidden relative group rotate-1">
          {/* Placeholder for PDF embed */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-pastel-blue/10 font-body">
            <FileText size={80} className="text-pastel-blue-dark mb-4 floating" />
            <p className="text-slate-400 font-bold text-xl">PDF Preview Placeholder</p>
            <p className="text-slate-300 text-sm">(Embed your CV PDF here)</p>
          </div>
        </div>

        <motion.a
          href={t.pdfUrl}
          download
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center gap-3 px-10 py-5 bg-pastel-pink-dark text-white rounded-full font-bold shadow-lg shadow-pastel-pink/30 hover:bg-pink-400 transition-all doodle-border border-white"
        >
          <Download size={24} />
          {t.downloadLabel}
        </motion.a>
      </motion.div>
    </section>
  );
}
