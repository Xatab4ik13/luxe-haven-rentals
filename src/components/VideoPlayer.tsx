import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { useHoverCapable } from "@/hooks/use-hover-capable";

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoId: string;
  title?: string;
}

const VideoPlayer = ({ thumbnailUrl, videoId, title = "Смотреть видео" }: VideoPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHoverCapable = useHoverCapable();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Thumbnail with play button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative cursor-pointer group"
        onClick={openModal}
      >
        <div className="relative overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHoverCapable ? "group-hover:scale-105" : ""
            }`}
          />
          <div className="absolute inset-0 bg-obsidian/40 transition-opacity duration-300 group-hover:bg-obsidian/20" />
          <div className="absolute inset-0 border border-gold/30" />
          
          {/* Play button */}
          <motion.div
            whileHover={isHoverCapable ? { scale: 1.1 } : undefined}
            whileTap={{ scale: 0.95 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/90 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_30px_hsl(38_85%_55%/0.5)]">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-obsidian ml-1" fill="currentColor" />
            </div>
          </motion.div>
        </div>
        
        {/* Title under thumbnail */}
        <div className="mt-3 flex items-center gap-2">
          <Play className="w-4 h-4 text-gold" />
          <span className="font-body text-sm text-cream/80 tracking-wide">{title}</span>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 }}
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-cream/70 hover:text-gold transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Video container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl mx-4 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                className="w-full h-full border-2 border-gold/30"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoPlayer;
