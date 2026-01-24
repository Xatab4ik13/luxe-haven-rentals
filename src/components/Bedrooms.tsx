import { motion } from "framer-motion";
import { Bed, DoorOpen, Bath, Eye, Sparkles } from "lucide-react";
import masterBedroom from "@/assets/master-bedroom.jpg";
import bedroomVelvet from "@/assets/bedroom-velvet.jpg";
import bedroomBalcony from "@/assets/bedroom-balcony.jpg";
import bedroomArched from "@/assets/bedroom-arched.jpg";
import bedroomBlue from "@/assets/bedroom-blue.jpg";
import bedroomTwin from "@/assets/bedroom-twin.jpg";
import bedroomMultiple from "@/assets/bedroom-multiple.jpg";
import bathroomGold from "@/assets/bathroom-gold.jpg";
import bathroomSpa from "@/assets/bathroom-spa.jpg";
import jacuzzi from "@/assets/jacuzzi.jpg";

const Bedrooms = () => {
  const bedrooms = [
    {
      image: masterBedroom,
      title: "Мастер-спальня",
    },
    {
      image: bedroomVelvet,
      title: "Бархатная спальня",
    },
    {
      image: bedroomBalcony,
      title: "Спальня с террасой",
    },
    {
      image: bedroomArched,
      title: "Арочная спальня",
    },
    {
      image: bedroomBlue,
      title: "Голубая спальня",
    },
    {
      image: bedroomTwin,
      title: "Двухместная спальня",
    },
  ];

  const bathroomGallery = [
    { src: bathroomGold, alt: "Золотая ванная", label: "Золотая ванная" },
    { src: bathroomSpa, alt: "СПА ванная", label: "СПА ванная" },
    { src: jacuzzi, alt: "Джакузи", label: "Джакузи" },
    { src: bedroomMultiple, alt: "Дополнительная спальня", label: "Спальня" },
  ];

  const floorInfo = [
    {
      floor: "Цокольный этаж",
      icon: Bath,
      items: ["СПА-комплекс", "Бассейн", "Хамам", "Баня", "Кинотеатр", "Караоке"],
    },
    {
      floor: "1 этаж",
      icon: DoorOpen,
      items: ["Банкетный зал 100+ м²", "Кухня с панорамным видом", "Круглый большой стол"],
    },
    {
      floor: "2 этаж",
      icon: Bed,
      items: ["6 спален", "4 балкона", "Мастер-спальня с джакузи", "20 спальных мест"],
    },
  ];

  return (
    <section id="bedrooms" className="py-24 md:py-32 bg-charcoal overflow-hidden">
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
            <Bed className="w-5 h-5 text-gold" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <span className="font-body text-sm text-gold tracking-[0.3em] uppercase">
            20 спальных мест
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 mb-6">
            Спальни и <span className="text-gradient-gold">этажи</span>
          </h2>
        </motion.div>

        {/* Bedrooms Gallery - 6 bedrooms grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bedrooms.map((bedroom, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden mb-4"
              >
                <img
                  src={bedroom.image}
                  alt={bedroom.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gold/10 flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-gold" />
                </motion.div>
              </motion.div>
              <h3 className="font-display text-xl text-cream">{bedroom.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Bathroom Gallery - 4 images */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl text-cream text-center mb-8">
            Ванные комнаты и <span className="text-gradient-gold">удобства</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bathroomGallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className="relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold transition-colors duration-500" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-body text-xs text-gold tracking-[0.15em] uppercase">{image.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floor Plan Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {floorInfo.map((floor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ borderColor: "hsl(38 85% 55%)", y: -4 }}
              className="p-8 bg-card border border-border transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <floor.icon className="w-8 h-8 text-gold" />
                <h4 className="font-display text-xl text-cream">{floor.floor}</h4>
              </div>
              <ul className="space-y-3">
                {floor.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-body text-sm text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* View highlight */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ borderColor: "hsl(38 85% 55%)" }}
          className="p-10 border border-gold/30 bg-card/50 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-500"
        >
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Eye className="w-12 h-12 text-gold" />
            </motion.div>
            <div>
              <h4 className="font-display text-2xl text-cream">Панорамный вид на лес</h4>
              <p className="font-body text-muted-foreground mt-1">
                Дом на возвышенности — самый красивый вид в посёлке!
              </p>
            </div>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(38 85% 55% / 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="font-body text-sm px-8 py-4 bg-gold text-obsidian tracking-[0.15em] uppercase transition-all duration-300"
          >
            Забронировать
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Bedrooms;
