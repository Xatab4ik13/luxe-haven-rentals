import { motion } from "framer-motion";
import { Droplets, Flame, Waves, Sparkles } from "lucide-react";
import sauna from "@/assets/sauna.jpg";
import saunaNew from "@/assets/sauna-new.jpg";
import shower from "@/assets/shower.jpg";
import jacuzzi from "@/assets/jacuzzi.jpg";
import basement from "@/assets/basement.jpg";
import bathroomGold from "@/assets/bathroom-gold.jpg";
import bathroomSpa from "@/assets/bathroom-spa.jpg";

const Spa = () => {
  const spaFeatures = [
    {
      icon: Droplets,
      title: "Турецкий Хамам",
      description: "Паровая комната для глубокого очищения и расслабления",
    },
    {
      icon: Flame,
      title: "Русская Баня",
      description: "Традиционная парная с разнообразными вениками",
    },
    {
      icon: Waves,
      title: "Бассейн",
      description: "Тёплый бассейн для плавания и отдыха",
    },
    {
      icon: Sparkles,
      title: "Джакузи",
      description: "Гидромассаж в мастер-спальне",
    },
  ];


  return (
    <section id="spa" className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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
            <Waves className="w-5 h-5 text-gold" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <span className="font-body text-sm text-gold tracking-[0.3em] uppercase">
            Релакс и восстановление
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 mb-6">
            СПА <span className="text-gradient-gold">комплекс</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              className="col-span-2 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={sauna}
                alt="Сауна"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4">
                <span className="font-display text-xl text-cream">Русская баня</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={shower}
                alt="Душ"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3">
                <span className="font-display text-lg text-cream">Душевая</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={basement}
                alt="Цокольный этаж"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3">
                <span className="font-display text-lg text-cream">Цоколь</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl md:text-3xl text-cream mb-6">
              Цокольный этаж — ваш личный спа-центр
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              На цокольном этаже расположен полноценный спа-комплекс: бассейн, турецкий хамам, 
              русская баня, мягкие диваны, домашний кинотеатр, караоке и электрический камин.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Разнообразные травяные заправки и веники на любой выбор придадут вам силы 
              и восстановят организм. Дополнительная оплата.
            </p>

            {/* SPA Features */}
            <div className="grid grid-cols-2 gap-4">
              {spaFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ borderColor: "hsl(38 85% 55%)", y: -4 }}
                  className="flex items-start gap-3 p-4 border border-border transition-all duration-500"
                >
                  <feature.icon className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-cream text-sm mb-1">{feature.title}</h4>
                    <p className="font-body text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ borderColor: "hsl(38 85% 55%)" }}
          className="bg-card border border-gold/30 p-8 text-center transition-colors duration-500"
        >
          <p className="font-body text-cream/80">
            <span className="text-gold">✨</span> Кальянная с авторскими миксами доступна за дополнительную плату{" "}
            <span className="text-gold">✨</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Spa;
