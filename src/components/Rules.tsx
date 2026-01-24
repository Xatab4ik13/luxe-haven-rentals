import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Wallet,
  PawPrint,
  Sparkles,
} from "lucide-react";
import facadeFront from "@/assets/facade-front.jpg";
import facadeBack from "@/assets/facade-back.jpg";

const Rules = () => {
  const required = [
    "Обязателен вывоз за собой мусора (рядом в посёлке мусорные контейнеры)",
    "Всю посуду, которой пользовались, включая шампуры, решётки, казан — помыть",
    "Уборка дома 10 000 ₽ от клининговой компании с полной дезинфекцией",
  ];

  const prohibited = [
    "Запрещается ходить в доме в уличной обуви",
    "Строго запрещено курение, в том числе электронных сигарет (есть зона для курящих)",
    "Запрещено разжигать открытые источники огня в доме и на веранде",
    "Запрещено использовать любую пиротехнику и конфетти",
    "Запрещено проведение шумных вечеринок (музыка до 21:00 на улице)",
  ];

  const infoCards = [
    {
      icon: Wallet,
      title: "Залог",
      description: "Залог равен суткам проживания. Возвращается в течение 24 часов после выезда при условии соблюдения правил и сохранности имущества.",
    },
    {
      icon: Clock,
      title: "Заезд и выезд",
      description: "Ранний заезд и поздний выезд оговаривается и оплачивается дополнительно. Уборка в стоимость не входит.",
    },
    {
      icon: PawPrint,
      title: "С животными",
      description: "При заселении с животными условия обговариваются отдельно. Свяжитесь с нами для уточнения деталей.",
    },
  ];

  return (
    <section id="rules" className="py-24 md:py-32 bg-background overflow-hidden">
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <span className="font-body text-sm text-gold tracking-[0.3em] uppercase">
            Важная информация
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 mb-6">
            Правила <span className="text-gradient-gold">проживания</span>
          </h2>
        </motion.div>

        {/* Image Gallery - 2 images */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 gap-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden group"
          >
            <img
              src={facadeFront}
              alt="Фасад спереди"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden group"
          >
            <img
              src={facadeBack}
              alt="Фасад сзади"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
          </motion.div>
        </motion.div>

        {/* Age restriction banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ borderColor: "hsl(38 85% 55%)" }}
          className="mb-16 p-8 bg-gold/5 border-2 border-gold flex items-center justify-center gap-4 transition-colors duration-500"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <AlertTriangle className="w-8 h-8 text-gold flex-shrink-0" />
          </motion.div>
          <p className="font-body text-cream text-center text-lg">
            <span className="font-semibold">Строгое ограничение по возрасту:</span> Гости не младше 25 лет
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Required */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ borderColor: "hsl(142 76% 36% / 0.5)" }}
            className="p-8 bg-card border border-border transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="font-display text-2xl text-cream">Обязательно</h3>
            </div>
            <ul className="space-y-5">
              {required.map((rule, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span className="font-body text-muted-foreground leading-relaxed">
                    {rule}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Prohibited */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ borderColor: "hsl(0 84% 60% / 0.5)" }}
            className="p-8 bg-card border border-border transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <XCircle className="w-8 h-8 text-red-500" />
              <h3 className="font-display text-2xl text-cream">Запрещено</h3>
            </div>
            <ul className="space-y-5">
              {prohibited.map((rule, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span className="font-body text-muted-foreground leading-relaxed">
                    {rule}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Additional Info Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid md:grid-cols-3 gap-6"
        >
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-gold/30"
            >
              <card.icon className="w-10 h-10 text-gold mb-5" />
              <h4 className="font-display text-xl text-cream mb-3">{card.title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;
