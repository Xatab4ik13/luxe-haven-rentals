import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "О доме", href: "#about" },
    { label: "СПА", href: "#spa" },
    { label: "Удобства", href: "#amenities" },
    { label: "Спальни", href: "#bedrooms" },
    { label: "Правила", href: "#rules" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "glass-dark py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="font-playfair text-xl md:text-2xl text-gradient-gold tracking-wider">
            БЕЛЫЙ ДОМ
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-montserrat text-sm text-cream/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden lg:block font-montserrat text-sm px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 tracking-wider uppercase hover-gold-glow"
        >
          Забронировать
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-cream p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-dark transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 border-b border-gold/20" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-montserrat text-sm text-cream/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-montserrat text-sm px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 tracking-wider uppercase text-center mt-4"
          >
            Забронировать
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
