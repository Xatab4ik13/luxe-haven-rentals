import {
  Music,
  Tv,
  Flame,
  Car,
  UtensilsCrossed,
  Shield,
  Baby,
  Gamepad2,
} from "lucide-react";
import livingRoom from "@/assets/living-room.jpg";

const Amenities = () => {
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

  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-sm text-gold tracking-widest uppercase">
            Всё для вашего комфорта
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-4 mb-6">
            Удобства и <span className="text-gradient-gold">развлечения</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src={livingRoom}
                alt="Гостиная"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 border border-gold/30" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 hidden md:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold hidden md:block" />
          </div>

          {/* Amenities Grid */}
          <div className="order-1 lg:order-2">
            <p className="font-montserrat text-muted-foreground leading-relaxed mb-8">
              Если вы хотите тихо и спокойно отдохнуть или отметить ваше важное событие, 
              насладиться природой, поиграть в настольные игры, попеть в караоке, попариться в баньке, 
              поплавать в тёплом бассейне, поиграть в бильярд, теннис, футбол или волейбол, 
              пожарить шашлыки — наш дом идеально подойдёт вам.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 p-4 bg-card border border-border hover:border-gold transition-all duration-300"
                >
                  <div className="p-2 bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <amenity.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-cream text-sm mb-1">
                      {amenity.title}
                    </h4>
                    <p className="font-montserrat text-xs text-muted-foreground">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="font-playfair text-xl md:text-2xl text-cream italic">
            "Этот уголок рая подходит как для семьи, так и для больших компаний друзей. 
            Наслаждайтесь каждым моментом вашей жизни в приятной обстановке загородного дома."
          </blockquote>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
