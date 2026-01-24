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
      description: "Цокольный СПА-комплекс, банкетный зал на 1 этаже и 6 спален на 2 этаже.",
    },
    {
      icon: Users,
      title: "До 50 гостей",
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
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                src={dvoretsEvening}
                alt="Dvorets Dzzotti вечером"
                className="w-full h-[450px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 border border-gold/30" />
              
              {/* Floating accent image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-16 -left-16 w-28 h-28 border border-gold/20"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "6", label: "Спален" },
                { value: "50", label: "Гостей" },
                { value: "8", label: "Машин" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ borderColor: "hsl(38 85% 55%)", y: -4 }}
                  className="text-center p-5 border border-gold/20 transition-all duration-500"
                >
                  <span className="font-display text-4xl text-gold">{stat.value}</span>
                  <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* Banquet Hall Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-24"
        >
          <div className="relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
              src={hallMain}
              alt="Банкетный зал"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 border border-gold/20" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 md:left-12">
            <span className="font-body text-xs text-gold tracking-[0.3em] uppercase">Банкетный зал</span>
            <h3 className="font-display text-2xl md:text-3xl text-cream mt-2">
              Более 100 м² для ваших мероприятий
            </h3>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                borderColor: "hsl(38 85% 55%)",
                boxShadow: "0 20px 40px -20px hsl(38 85% 55% / 0.3)"
              }}
              className="group p-8 bg-card border border-border transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-12 h-12 text-gold mb-6" />
              </motion.div>
              <h4 className="font-display text-xl text-cream mb-3">{feature.title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
