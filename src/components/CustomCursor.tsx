import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Star } from 'lucide-react';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Add a sparkle more frequently
      if (Math.random() > 0.6) {
        const colors = ['#ff80ab', '#82b1ff', '#ffd54f']; // Darker pastel versions for better visibility
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 40, // Increased range
          y: e.clientY + (Math.random() - 0.5) * 40, // Increased range
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        setSparkles((prev) => [...prev.slice(-25), newSparkle]); // Increased number of particles
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-pastel-pink-dark pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>

      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ scale: 0, opacity: 1, rotate: 0 }}
          animate={{ scale: 2.5, opacity: 0, rotate: 180 }} // Increased scale
          transition={{ duration: 1.2, ease: "easeOut" }} // Slightly longer duration for elegance
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: sparkle.x,
            y: sparkle.y,
            translateX: '-50%',
            translateY: '-50%',
            color: sparkle.color,
          }}
        >
          <Star size={16} fill="currentColor" /> 
        </motion.div>
      ))}
    </>
  );
}
