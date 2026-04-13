import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { content } from '../data/content';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function PortfolioView() {
  const { language } = useLanguage();
  const t = content[language].portfolio;

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % t.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + t.images.length) % t.images.length);
    }
  };

  return (
    <section id="portfolio" className="min-h-screen py-24 px-6 max-w-7xl mx-auto space-y-32 relative">
      {/* Pre-production Section */}
      <div className="space-y-12">
        <div className="relative inline-block">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 font-heading relative z-10"
          >
            {t.preProductionTitle}
          </motion.h2>
          <div className="absolute -bottom-2 -right-4 w-full h-4 bg-pastel-pink/60 -z-10 rounded-full -rotate-1" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {t.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ scale: 1, opacity: 1, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              onClick={() => openLightbox(i)}
              className="aspect-[3/4] doodle-border bg-white p-2 cursor-pointer hand-drawn-shadow transition-all"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="space-y-12">
        <div className="relative inline-block">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 font-heading relative z-10"
          >
            {t.videoTitle}
          </motion.h2>
          <div className="absolute -bottom-2 -left-4 w-full h-4 bg-pastel-blue/60 -z-10 rounded-full rotate-1" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white doodle-border hand-drawn-shadow p-3 rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-100 doodle-border-soft">
                {video.type === 'youtube' ? (
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={video.url} 
                    controls 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-pastel-pink-dark transition-colors font-heading">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-pastel-pink-dark transition-colors z-[101]"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-pastel-pink-dark transition-colors z-[101]"
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-pastel-pink-dark transition-colors z-[101]"
            >
              <ChevronRight size={48} />
            </button>

            <motion.img
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={t.images[selectedImageIndex].url}
              alt={t.images[selectedImageIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-12 left-0 right-0 text-center text-white/70 text-sm font-body">
              {t.images[selectedImageIndex].title} ({selectedImageIndex + 1} / {t.images.length})
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
