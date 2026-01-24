import { Droplets, Flame, Waves, Sparkles } from "lucide-react";
import sauna from "@/assets/sauna.jpg";
import shower from "@/assets/shower.jpg";

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
    <section id="spa" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-sm text-gold tracking-widest uppercase">
            Релакс и восстановление
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-4 mb-6">
            СПА <span className="text-gradient-gold">комплекс</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="relative overflow-hidden group">
                <img
                  src={sauna}
                  alt="Сауна"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-playfair text-xl text-cream">Русская баня</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src={shower}
                alt="Душ"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="font-playfair text-lg text-cream">Душевая</span>
              </div>
            </div>
            <div className="relative overflow-hidden group bg-card flex items-center justify-center">
              <div className="text-center p-4">
                <Waves className="w-12 h-12 text-gold mx-auto mb-3" />
                <span className="font-playfair text-lg text-cream">Бассейн</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-playfair text-2xl md:text-3xl text-cream mb-6">
              Цокольный этаж — ваш личный спа-центр
            </h3>
            <p className="font-montserrat text-muted-foreground leading-relaxed mb-6">
              На цокольном этаже расположен полноценный спа-комплекс: бассейн, турецкий хамам, 
              русская баня, мягкие диваны, домашний кинотеатр, караоке и электрический камин.
            </p>
            <p className="font-montserrat text-muted-foreground leading-relaxed mb-8">
              Разнообразные травяные заправки и веники на любой выбор придадут вам силы 
              и восстановят организм. Дополнительная оплата.
            </p>

            {/* SPA Features */}
            <div className="grid grid-cols-2 gap-4">
              {spaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 border border-border hover:border-gold transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-playfair text-cream text-sm mb-1">{feature.title}</h4>
                    <p className="font-montserrat text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Banner */}
        <div className="bg-card border border-gold/30 p-8 text-center">
          <p className="font-montserrat text-cream/80">
            <span className="text-gold">✨</span> Кальянная с авторскими миксами доступна за дополнительную плату{" "}
            <span className="text-gold">✨</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Spa;
