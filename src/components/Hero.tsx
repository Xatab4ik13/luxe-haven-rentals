import { motion } from "framer-motion";
import { ChevronDown, MapPin, Users, Star, Sparkles } from "lucide-react";
import dvoretsEvening from "@/assets/dvorets-evening-hd.jpg";
import { useHoverCapable } from "@/hooks/use-hover-capable";
const Hero = () => {
  const isHoverCapable = useHoverCapable();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <img
          src={dvoretsEvening}
          alt="Dvorets Dzzotti"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/40" />
      </motion.div>

      {/* Animated overlay patterns */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(38 85% 55% / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px bg-gradient-to-r from-transparent to-gold"
          />
          <Sparkles className="w-5 h-5 text-gold animate-glow-pulse" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px bg-gradient-to-l from-transparent to-gold"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-body text-xs md:text-sm text-gold tracking-[0.4em] uppercase mb-6"
        >
          Luxury Private Estate
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-cream mb-4 tracking-[0.05em]"
        >
          Дворец{" "}
          <span className="text-gradient-gold">Дзотти</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-body text-base md:text-lg text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Роскошная резиденция для эксклюзивных мероприятий и незабываемого отдыха.
          <br className="hidden md:block" />
          Известна в кино-индустрии — здесь снимались звёзды.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-14"
        >
          {[
            { icon: Users, text: "До 80 гостей" },
            { icon: MapPin, text: "30 мин от Москвы" },
            { icon: Star, text: "Премиум класс" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-cream/60"
            >
              <item.icon className="w-5 h-5 text-gold" />
              <span className="font-body text-sm tracking-wide">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={isHoverCapable ? { scale: 1.02, boxShadow: "0 0 40px hsl(38 85% 55% / 0.4)" } : undefined}
            whileTap={{ scale: 0.98 }}
            className="font-body px-10 py-4 bg-gold text-obsidian font-medium text-sm tracking-[0.15em] uppercase transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Забронировать</span>
            <div className={`absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 transition-opacity duration-300 ${isHoverCapable ? "group-hover:opacity-100" : ""}`} />
          </motion.a>
          <motion.a
            href="#about"
            whileHover={isHoverCapable ? { scale: 1.02, borderColor: "hsl(38 85% 55%)" } : undefined}
            whileTap={{ scale: 0.98 }}
            className={`font-body px-10 py-4 border border-cream/30 text-cream font-medium text-sm tracking-[0.15em] uppercase transition-all duration-300 ${isHoverCapable ? "hover:text-gold" : ""}`}
          >
            Подробнее
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-cream/40 hover:text-gold transition-colors duration-300 group"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase">Листайте</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>

      {/* Side decorations */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 120 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 120 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent"
      />
    </section>
  );
};

export default Hero;
