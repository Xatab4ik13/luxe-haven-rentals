import { motion } from "framer-motion";
import { Film, Home, Users, MapPin, Sparkles } from "lucide-react";
import dvoretsEvening from "@/assets/dvorets-evening.jpg";
import dvoretsWinter from "@/assets/dvorets-winter.jpg";
import dvoretsFront from "@/assets/dvorets-front.jpg";
import hallMain from "@/assets/hall-main.jpg";
import hallMarble from "@/assets/hall-marble.jpg";
import kitchen from "@/assets/kitchen.jpg";
import livingArea from "@/assets/living-area.jpg";
import livingRoom from "@/assets/living-room.jpg";

const About = () => {
  const features = [
    {
      icon: Film,
      title: "Кино-локация",
      description: "Дом известен в кино-индустрии. Здесь снимались популярные сериалы и фильмы со звёздами.",
    },
    {
      icon: Home,
      title: "3 этажа роскоши",
      description: "Цокольный СПА-комплекс, банкетный зал на 1 этаже и 7 спален на 2 этаже.",
    },
    {
      icon: Users,
      title: "До 80 гостей",
      description: "Идеально для любых мероприятий: свадьбы, корпоративы, дни рождения, семейный отдых.",
    },
    {
      icon: MapPin,
      title: "30 мин до ЦКАД",
      description: "Удобный выезд на ЦКАД. Рядом магазины, аптеки, кафе. Любая доставка!",
    },
  ];


  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
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
            Добро пожаловать
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 mb-6">
            О нашем <span className="text-gradient-gold">дворце</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                src={dvoretsEvening}
                alt="Dvorets Dzzotti вечером"
                className="w-full h-[450px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 border border-gold/30" />
              
              {/* Floating accent image */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -bottom-10 -right-10 w-56 h-56 hidden lg:block"
              >
                <img
                  src={dvoretsWinter}
                  alt="Dvorets зимой"
                  className="w-full h-full object-cover shadow-xl"
                />
                <div className="absolute inset-0 border-2 border-gold" />
              </motion.div>

              {/* Additional floating image */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -top-8 -left-8 w-40 h-40 hidden lg:block"
              >
                <img
                  src={dvoretsFront}
                  alt="Dvorets фасад"
                  className="w-full h-full object-cover shadow-xl"
                />
                <div className="absolute inset-0 border border-gold/50" />
              </motion.div>
            </div>
            
            {/* Decorative corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -top-16 -left-16 w-28 h-28 border border-gold/20"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:pl-8"
          >
            <h3 className="font-display text-2xl md:text-4xl text-cream mb-6">
              Элитный дворец с белоснежным фасадом
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-lg">
              Элитный дом в белом фасаде с белоснежной лестницей — шикарный, красивый, богатый. 
              Ранее не сдавался. Он известен в кино-индустрии: многие сериалы и кино-картины 
              снимались именно в этом доме.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Проведя отдых у нас — вы не пожалеете и будете желать вернуться и повторить! 
              Дом полностью оборудован для проживания: чистое постельное бельё, полотенца, посуда.
            </p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: "7", label: "Спален" },
                { value: "80", label: "Гостей" },
                { value: "15", label: "Машин" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-5 border border-gold/20"
                >
                  <span className="font-display text-4xl text-gold">{stat.value}</span>
                  <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>



        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border"
            >
              <feature.icon className="w-12 h-12 text-gold mb-6" />
              <h4 className="font-display text-xl text-cream mb-3">{feature.title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
