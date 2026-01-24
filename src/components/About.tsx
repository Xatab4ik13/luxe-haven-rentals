import { Film, Home, Users, MapPin } from "lucide-react";
import houseGroup from "@/assets/house-group.jpg";
import houseEvening from "@/assets/house-evening.jpg";

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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-sm text-gold tracking-widest uppercase">
            Добро пожаловать
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-4 mb-6">
            О нашем <span className="text-gradient-gold">доме</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Images */}
          <div className="relative">
            <div className="relative">
              <img
                src={houseEvening}
                alt="Дом вечером"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 border border-gold/30" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 hidden md:block">
              <img
                src={houseGroup}
                alt="Гости дома"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-gold" />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/20" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h3 className="font-playfair text-2xl md:text-3xl text-cream mb-6">
              Элитный дом с белоснежным фасадом
            </h3>
            <p className="font-montserrat text-muted-foreground leading-relaxed mb-6">
              Элитный дом в белом фасаде с белоснежной лестницей — шикарный, красивый, богатый. 
              Ранее не сдавался. Он известен в кино-индустрии: многие сериалы и кино-картины 
              снимались именно в этом доме.
            </p>
            <p className="font-montserrat text-muted-foreground leading-relaxed mb-8">
              Проведя отдых у нас — вы не пожалеете и будете желать вернуться и повторить! 
              Дом полностью оборудован для проживания: чистое постельное бельё, полотенца, посуда.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gold/20 hover:border-gold transition-colors">
                <span className="font-playfair text-3xl text-gold">6</span>
                <p className="font-montserrat text-xs text-muted-foreground mt-1 uppercase tracking-wider">Спален</p>
              </div>
              <div className="text-center p-4 border border-gold/20 hover:border-gold transition-colors">
                <span className="font-playfair text-3xl text-gold">50</span>
                <p className="font-montserrat text-xs text-muted-foreground mt-1 uppercase tracking-wider">Гостей</p>
              </div>
              <div className="text-center p-4 border border-gold/20 hover:border-gold transition-colors">
                <span className="font-playfair text-3xl text-gold">8</span>
                <p className="font-montserrat text-xs text-muted-foreground mt-1 uppercase tracking-wider">Машин</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border hover:border-gold transition-all duration-500"
            >
              <feature.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-playfair text-xl text-cream mb-3">{feature.title}</h4>
              <p className="font-montserrat text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
