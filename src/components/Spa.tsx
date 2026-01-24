import { motion } from "framer-motion";
import { Droplets, Flame, Waves, Sparkles } from "lucide-react";
import { useHoverCapable } from "@/hooks/use-hover-capable";
import spaPool from "@/assets/spa-pool.jpg";
import spaJacuzzi from "@/assets/spa-jacuzzi.jpg";
import spaBanya from "@/assets/spa-banya.jpg";
import spaHamam from "@/assets/spa-hamam.jpg";

const spaImages = [
  {
    src: spaPool,
    title: "Бассейн",
    icon: Waves,
    description: "Тёплый бассейн для плавания и отдыха",
  },
  {
    src: spaJacuzzi,
    title: "Джакузи",
    icon: Sparkles,
    description: "Гидромассаж для расслабления",
  },
  {
    src: spaBanya,
    title: "Русская Баня",
    icon: Flame,
    description: "Традиционная парная с разнообразными вениками",
  },
  {
    src: spaHamam,
    title: "Турецкий Хамам",
    icon: Droplets,
    description: "Паровая комната для глубокого очищения",
  },
];

const Spa = () => {
  const isHoverCapable = useHoverCapable();

  return (
    <section id="spa" className="py-24 md:py-32 bg-charcoal overflow-hidden">
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
          {/* Images Grid - 4 spa components */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {spaImages.map((item, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden group aspect-square"
                whileHover={isHoverCapable ? { scale: 1.02 } : undefined}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHoverCapable ? "group-hover:scale-110" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className={`absolute inset-0 border transition-colors duration-500 ${isHoverCapable ? "border-gold/0 group-hover:border-gold/50" : "border-gold/0"}`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-display text-lg text-cream">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {spaImages.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 border border-border"
                >
                  <feature.icon className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-cream text-sm mb-1">{feature.title}</h4>
                    <p className="font-body text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>


        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={isHoverCapable ? { borderColor: "hsl(38 85% 55%)" } : undefined}
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