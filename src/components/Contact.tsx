import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send, Star, Sparkles } from "lucide-react";
import houseChristmas from "@/assets/house-christmas.jpg";
import BookingModal from "./BookingModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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


        {/* Contact Cards - Only 2 now */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
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
              Позвоните нам напрямую
            </p>
          </motion.a>

          <motion.button
            onClick={() => setIsModalOpen(true)}
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
              <Send className="w-12 h-12 text-gold mx-auto mb-4" />
            </motion.div>
            <h4 className="font-display text-xl text-cream mb-2">Заявка</h4>
            <p className="font-body text-sm text-muted-foreground">
              Оставьте заявку через Telegram
            </p>
          </motion.button>
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
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(38 85% 55% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block font-body px-12 py-5 bg-gold text-obsidian font-medium tracking-[0.2em] uppercase transition-all duration-500"
          >
            Забронировать сейчас
          </motion.button>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;
