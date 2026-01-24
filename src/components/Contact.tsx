import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Star, Sparkles } from "lucide-react";
import houseChristmas from "@/assets/house-christmas.jpg";
import dvoretsWinter from "@/assets/dvorets-winter.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import facadeFront from "@/assets/facade-front.jpg";
import facadeBack from "@/assets/facade-back.jpg";

const Contact = () => {
  const contactImages = [
    { src: dvoretsWinter, alt: "Dvorets зимой" },
    { src: facadeNight, alt: "Фасад ночью" },
    { src: facadeFront, alt: "Фасад спереди" },
    { src: facadeBack, alt: "Фасад сзади" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={houseChristmas}
          alt="Дом зимой"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <span className="font-body text-sm text-gold tracking-[0.3em] uppercase">
            Забронируйте заранее
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 mb-6">
            Свяжитесь <span className="text-gradient-gold">с нами</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Сделайте правильный выбор и забронируйте наше предложение заранее, 
            чтобы провести насыщенные дни в кругу близких и родных.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {contactImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.a
            href="tel:+79001234567"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{ 
              y: -8, 
              borderColor: "hsl(38 85% 55%)",
              boxShadow: "0 20px 40px -20px hsl(38 85% 55% / 0.3)"
            }}
            className="group p-8 bg-card border border-border text-center transition-all duration-500"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
            </motion.div>
            <h4 className="font-display text-xl text-cream mb-2">Телефон</h4>
            <p className="font-body text-sm text-muted-foreground">
              Позвоните нам
            </p>
          </motion.a>

          <motion.a
            href="https://wa.me/79001234567"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              y: -8, 
              borderColor: "hsl(38 85% 55%)",
              boxShadow: "0 20px 40px -20px hsl(38 85% 55% / 0.3)"
            }}
            className="group p-8 bg-card border border-border text-center transition-all duration-500"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
            </motion.div>
            <h4 className="font-display text-xl text-cream mb-2">WhatsApp</h4>
            <p className="font-body text-sm text-muted-foreground">
              Напишите в мессенджер
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              y: -8, 
              borderColor: "hsl(38 85% 55%)",
              boxShadow: "0 20px 40px -20px hsl(38 85% 55% / 0.3)"
            }}
            className="p-8 bg-card border border-border text-center transition-all duration-500"
          >
            <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
            <h4 className="font-display text-xl text-cream mb-2">Локация</h4>
            <p className="font-body text-sm text-muted-foreground">
              30 мин от Москвы, выезд на ЦКАД
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              y: -8, 
              borderColor: "hsl(38 85% 55%)",
              boxShadow: "0 20px 40px -20px hsl(38 85% 55% / 0.3)"
            }}
            className="p-8 bg-card border border-border text-center transition-all duration-500"
          >
            <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
            <h4 className="font-display text-xl text-cream mb-2">Доступность</h4>
            <p className="font-body text-sm text-muted-foreground">
              Бронирование 24/7
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ borderColor: "hsl(38 85% 55%)" }}
          className="text-center p-12 bg-card border-2 border-gold transition-colors duration-500"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                <Star className="w-6 h-6 text-gold" fill="currentColor" />
              </motion.div>
            ))}
          </motion.div>
          <h3 className="font-display text-3xl md:text-4xl text-cream mb-4">
            Мы будем рады вам!
          </h3>
          <p className="font-body text-muted-foreground mb-10 max-w-lg mx-auto">
            Мы сделаем всё, чтобы ваш отдых был незабываемым и вы снова приехали к нам. 
            Ждём вас в гости!
          </p>
          <motion.a
            href="https://wa.me/79001234567"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(38 85% 55% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block font-body px-12 py-5 bg-gold text-obsidian font-medium tracking-[0.2em] uppercase transition-all duration-500"
          >
            Забронировать сейчас
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
