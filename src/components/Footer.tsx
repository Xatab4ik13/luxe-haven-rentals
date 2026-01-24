import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "О дворце" },
    { href: "#spa", label: "СПА" },
    { href: "#amenities", label: "Удобства" },
    { href: "#bedrooms", label: "Спальни" },
    { href: "#rules", label: "Правила" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Star className="w-5 h-5 text-gold" fill="currentColor" />
            <span className="font-display text-2xl text-gradient-gold tracking-[0.15em]">
              DVORETS DZZOTTI
            </span>
            <Star className="w-5 h-5 text-gold" fill="currentColor" />
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ color: "hsl(38 85% 55%)", y: -2 }}
                className="font-body text-xs text-muted-foreground transition-colors uppercase tracking-[0.2em]"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-xs text-muted-foreground flex items-center gap-2"
          >
            © {currentYear} Dvorets Dzzotti · Сделано с{" "}
            <Heart className="w-3 h-3 text-gold" fill="currentColor" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
