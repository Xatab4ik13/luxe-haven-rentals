import { ChevronDown, MapPin, Users, Star } from "lucide-react";
import houseMain from "@/assets/house-main.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={houseMain}
          alt="Элитный белый дом"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <Star className="w-4 h-4 text-gold" fill="currentColor" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Title */}
        <h1 
          className="font-playfair text-4xl md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Элитный <span className="text-gradient-gold">Белый Дом</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="font-montserrat text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Роскошная резиденция для незабываемого отдыха. 
          Известен в кино-индустрии — здесь снимались звёзды.
        </p>

        {/* Features */}
        <div 
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-2 text-cream/70">
            <Users className="w-5 h-5 text-gold" />
            <span className="font-montserrat text-sm">До 50 гостей</span>
          </div>
          <div className="flex items-center gap-2 text-cream/70">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="font-montserrat text-sm">30 мин от Москвы</span>
          </div>
          <div className="flex items-center gap-2 text-cream/70">
            <Star className="w-5 h-5 text-gold" fill="currentColor" />
            <span className="font-montserrat text-sm">Премиум класс</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#contact"
            className="font-montserrat px-8 py-4 bg-gold text-background font-medium tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover-gold-glow"
          >
            Забронировать
          </a>
          <a
            href="#about"
            className="font-montserrat px-8 py-4 border border-cream/30 text-cream font-medium tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Узнать больше
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-cream/50 hover:text-gold transition-colors">
          <span className="font-montserrat text-xs tracking-widest uppercase">Листайте</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Side decorations */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
