import { Heart, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="font-playfair text-xl text-gradient-gold tracking-wider">
              БЕЛЫЙ ДОМ
            </span>
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              className="font-montserrat text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider"
            >
              О доме
            </a>
            <a
              href="#spa"
              className="font-montserrat text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider"
            >
              СПА
            </a>
            <a
              href="#amenities"
              className="font-montserrat text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider"
            >
              Удобства
            </a>
            <a
              href="#bedrooms"
              className="font-montserrat text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider"
            >
              Спальни
            </a>
            <a
              href="#rules"
              className="font-montserrat text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider"
            >
              Правила
            </a>
            <a
              href="#contact"
              className="font-montserrat text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider"
            >
              Контакты
            </a>
          </nav>

          {/* Copyright */}
          <p className="font-montserrat text-xs text-muted-foreground flex items-center gap-1">
            © {currentYear} Сделано с <Heart className="w-3 h-3 text-gold" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
