import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useHoverCapable } from "@/hooks/use-hover-capable";

// Import all gallery images
import dvoretsEvening from "@/assets/dvorets-evening.jpg";
import dvoretsWinter from "@/assets/dvorets-winter.jpg";
import dvoretsFront from "@/assets/dvorets-front.jpg";
import facadeBack from "@/assets/facade-back.jpg";
import facadeFront from "@/assets/facade-front.jpg";
import facadeHero from "@/assets/facade-hero.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import hallMain from "@/assets/hall-main.jpg";
import hallMarble from "@/assets/hall-marble.jpg";
import kitchen from "@/assets/kitchen.jpg";
import livingArea from "@/assets/living-area.jpg";
import livingRoom from "@/assets/living-room.jpg";
import masterBedroom from "@/assets/master-bedroom.jpg";
import bedroomVelvet from "@/assets/bedroom-velvet.jpg";
import bedroomBalcony from "@/assets/bedroom-balcony.jpg";
import bedroomArched from "@/assets/bedroom-arched.jpg";
import bedroomBlue from "@/assets/bedroom-blue.jpg";
import bedroomTwin from "@/assets/bedroom-twin.jpg";
import bathroomGold from "@/assets/bathroom-gold.jpg";
import bathroomSpa from "@/assets/bathroom-spa.jpg";
import jacuzzi from "@/assets/jacuzzi.jpg";
import sauna from "@/assets/sauna.jpg";
import pool from "@/assets/pool.jpg";
import houseChristmas from "@/assets/house-christmas.jpg";
import houseEvening from "@/assets/house-evening.jpg";
import houseMain from "@/assets/house-main.jpg";

const galleryImages = [
  { src: facadeHero, alt: "Фасад дворца" },
  { src: dvoretsEvening, alt: "Дворец вечером" },
  { src: hallMain, alt: "Главный зал" },
  { src: livingRoom, alt: "Гостиная" },
  { src: masterBedroom, alt: "Мастер-спальня" },
  { src: kitchen, alt: "Кухня" },
  { src: pool, alt: "Бассейн" },
  { src: dvoretsWinter, alt: "Дворец зимой" },
  { src: hallMarble, alt: "Мраморный холл" },
  { src: bedroomVelvet, alt: "Бархатная спальня" },
  { src: livingArea, alt: "Зона отдыха" },
  { src: sauna, alt: "Сауна" },
  { src: facadeFront, alt: "Фасад" },
  { src: bedroomBalcony, alt: "Спальня с террасой" },
  { src: bathroomGold, alt: "Золотая ванная" },
  { src: jacuzzi, alt: "Джакузи" },
  { src: houseEvening, alt: "Дом вечером" },
  { src: bedroomArched, alt: "Арочная спальня" },
  { src: bathroomSpa, alt: "СПА ванная" },
  { src: dvoretsFront, alt: "Фасад дворца" },
  { src: bedroomBlue, alt: "Голубая спальня" },
  { src: facadeBack, alt: "Вид сзади" },
  { src: bedroomTwin, alt: "Двухместная спальня" },
  { src: houseChristmas, alt: "Новогодний дом" },
  { src: facadeNight, alt: "Фасад ночью" },
  { src: houseMain, alt: "Главный вид" },
];

const Gallery = () => {
  const isHoverCapable = useHoverCapable();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    align: "start",
  });

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi || isHovered) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Camera className="w-5 h-5 text-gold" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <span className="font-body text-sm text-gold tracking-[0.3em] uppercase">
            Фотографии интерьера
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 mb-6">
            Галерея <span className="text-gradient-gold">дворца</span>
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-obsidian/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-obsidian/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                className="flex-[0_0_300px] md:flex-[0_0_400px] lg:flex-[0_0_500px] relative group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHoverCapable ? "group-hover:scale-110" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
                  <div className={`absolute inset-0 border transition-colors duration-500 ${isHoverCapable ? "border-gold/0 group-hover:border-gold" : "border-gold/0"}`} />
                  
                  {/* Hover overlay */}
                  {isHoverCapable && (
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body text-sm text-cream tracking-wider">
                        Открыть
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="font-body text-xs text-gold tracking-[0.15em] uppercase">{image.alt}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-obsidian/95 backdrop-blur-sm z-50"
            />

            {/* Lightbox content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-card border border-gold/30 flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-all duration-300 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev button */}
              <button
                onClick={goToPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-gold/30 flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-gold/30 flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="max-w-[90vw] max-h-[85vh] relative">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
                  <span className="font-body text-sm text-gold tracking-wider">
                    {galleryImages[selectedIndex].alt}
                  </span>
                  <span className="font-body text-xs text-muted-foreground ml-4">
                    {selectedIndex + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
