import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dvoretsEvening from "@/assets/dvorets-evening.jpg";
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return Math.min(100, prev + Math.random() * 12 + 3);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian overflow-hidden"
        >
          {/* Background Image with Ken Burns effect */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0"
          >
            <img
              src={dvoretsEvening}
              alt="Dvorets Dzzotti"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />
          </motion.div>

          {/* Radial gold glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="w-[700px] h-[700px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(38 85% 55% / 0.12) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-4">
            {/* Decorative top element */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-2 h-2 bg-gold rotate-45"
              />
              <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream tracking-[0.12em] uppercase font-light">
                Dvorets
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
                transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl md:text-5xl lg:text-6xl text-gradient-gold mt-1 md:mt-2 font-normal"
              >
                Dzzotti
              </motion.div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-body text-xs md:text-sm text-muted-foreground tracking-[0.35em] uppercase mt-8"
            >
              Luxury Private Estate
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-14 relative"
            >
              <div className="w-48 md:w-56 h-[1px] bg-charcoal-light/50 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress glow */}
              <motion.div
                className="absolute top-0 h-full bg-gold/50 blur-sm"
                style={{ width: `${progress}%` }}
              />
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-body text-xs text-gold/70 tracking-[0.2em]"
              >
                {Math.min(100, Math.round(progress))}%
              </motion.span>
            </motion.div>

            {/* Decorative bottom element */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mt-20"
            >
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="w-1.5 h-1.5 bg-gold/50 rotate-45"
              />
              <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute top-6 left-6 md:top-10 md:left-10 w-12 md:w-20 h-12 md:h-20 border-l border-t border-gold/20"
          />
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 md:w-20 h-12 md:h-20 border-r border-t border-gold/20"
          />
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-12 md:w-20 h-12 md:h-20 border-l border-b border-gold/20"
          />
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 md:w-20 h-12 md:h-20 border-r border-b border-gold/20"
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0, 0.6, 0],
                y: [-20, -150],
              }}
              transition={{
                duration: 4,
                delay: 2 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute w-1 h-1 bg-gold/40 rounded-full"
              style={{
                left: `${15 + i * 14}%`,
                bottom: '20%',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
