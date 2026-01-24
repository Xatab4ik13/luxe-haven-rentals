import { motion } from "framer-motion";
import {
  Music,
  Tv,
  Flame,
  Car,
  UtensilsCrossed,
  Shield,
  Baby,
  Gamepad2,
  Sparkles,
} from "lucide-react";
import { useHoverCapable } from "@/hooks/use-hover-capable";
import livingRoom from "@/assets/living-room.jpg";
import livingArea from "@/assets/living-area.jpg";
import kitchen from "@/assets/kitchen.jpg";
import houseEvening from "@/assets/house-evening.jpg";
import houseGroup from "@/assets/house-group.jpg";
import houseMain from "@/assets/house-main.jpg";

const Amenities = () => {
  const isHoverCapable = useHoverCapable();
  const amenities = [
    {
      icon: Music,
      title: "Караоке",
      description: "Для душевных вечеров и песенных баталий",
    },
    {
      icon: Gamepad2,
      title: "Бильярд",
      description: "Для интеллектуальных поединков и дружеских соревнований",
    },
    {
      icon: Tv,
      title: "Домашний кинотеатр",
      description: "Большой экран и качественный звук",
    },
    {
      icon: Flame,
      title: "Мангальная зона",
      description: "Для кулинарных экспериментов и вкуснейших посиделок",
    },
    {
      icon: UtensilsCrossed,
      title: "Оборудованная кухня",
      description: "Современная техника и вся необходимая посуда",
    },
    {
      icon: Car,
      title: "Парковка на 8 машин",
      description: "Охраняемая парковка на территории",
    },
    {
      icon: Baby,
      title: "Детская площадка",
      description: "Для активных малышей рядом с домом",
    },
    {
      icon: Shield,
      title: "Круглосуточная охрана",
      description: "Безопасность каждого гостя",
    },
  ];

  const galleryImages = [
    { src: livingArea, alt: "Гостиная зона", label: "Гостиная" },
    { src: kitchen, alt: "Кухня", label: "Кухня" },
    { src: houseEvening, alt: "Дом вечером", label: "Вечер" },
    { src: houseGroup, alt: "Групповое фото", label: "Атмосфера" },
    { src: houseMain, alt: "Главный дом", label: "Фасад" },
  ];

  return (
    <section id="amenities" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <span className="font-body text-sm text-gold tracking-[0.3em] uppercase">
            Всё для вашего комфорта
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 mb-6">
            Удобства и <span className="text-gradient-gold">развлечения</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden">
              <motion.img
                whileHover={isHoverCapable ? { scale: 1.02 } : undefined}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                src={livingRoom}
                alt="Гостиная"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 border border-gold/30" />
            </div>
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 hidden md:block"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -top-4 -left-4 w-16 h-16 border border-gold hidden md:block"
            />
          </motion.div>

          {/* Amenities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Если вы хотите тихо и спокойно отдохнуть или отметить ваше важное событие, 
              насладиться природой, поиграть в настольные игры, попеть в караоке, попариться в баньке, 
              поплавать в тёплом бассейне, поиграть в бильярд, теннис, футбол или волейбол, 
              пожарить шашлыки — наш дом идеально подойдёт вам.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={isHoverCapable ? { 
                    borderColor: "hsl(38 85% 55%)", 
                    y: -4,
                    boxShadow: "0 10px 30px -10px hsl(38 85% 55% / 0.2)"
                  } : undefined}
                  className="group flex items-start gap-3 p-4 bg-card border border-border transition-all duration-500"
                >
                  <motion.div 
                    className={`p-2 bg-gold/10 transition-colors ${isHoverCapable ? "group-hover:bg-gold/20" : ""}`}
                    whileHover={isHoverCapable ? { scale: 1.1, rotate: 5 } : undefined}
                  >
                    <amenity.icon className="w-5 h-5 text-gold" />
                  </motion.div>
                  <div>
                    <h4 className="font-display text-cream text-sm mb-1">
                      {amenity.title}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground">
                      {amenity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery Grid - 5 images masonry style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20"
        >
          {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={isHoverCapable ? { scale: 1.02, zIndex: 10 } : undefined}
              className={`relative overflow-hidden group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 ease-out ${isHoverCapable ? "group-hover:scale-105" : ""} ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />
              <div className={`absolute inset-0 border transition-colors duration-500 ${isHoverCapable ? "border-gold/0 group-hover:border-gold" : "border-gold/0"}`} />
              <div className="absolute bottom-3 left-3">
                <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">{image.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="font-display text-xl md:text-2xl text-cream italic">
            "Этот уголок рая подходит как для семьи, так и для больших компаний друзей. 
            Наслаждайтесь каждым моментом вашей жизни в приятной обстановке загородного дома."
          </blockquote>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-16 h-[1px] bg-gold mx-auto mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
