import { Bed, DoorOpen, Bath, Eye } from "lucide-react";
import bedroomBlue from "@/assets/bedroom-blue.jpg";
import bedroomTwin from "@/assets/bedroom-twin.jpg";
import bedroomMultiple from "@/assets/bedroom-multiple.jpg";

const Bedrooms = () => {
  const bedrooms = [
    {
      image: bedroomBlue,
      title: "Мастер-спальня",
      description: "С джакузи и выходом на балкон",
      features: ["Джакузи", "Балкон", "King-size кровать"],
    },
    {
      image: bedroomTwin,
      title: "Двухместная спальня",
      description: "Две раздельные кровати с видом на лес",
      features: ["Балкон", "Вид на лес", "2 кровати"],
    },
    {
      image: bedroomMultiple,
      title: "Большая комната",
      description: "До 6 спальных мест для компании",
      features: ["6 кроватей", "Просторная", "Современный дизайн"],
    },
  ];

  const floorInfo = [
    {
      floor: "Цокольный этаж",
      items: ["СПА-комплекс", "Бассейн", "Хамам", "Баня", "Кинотеатр", "Караоке"],
    },
    {
      floor: "1 этаж",
      items: ["Банкетный зал 100+ м²", "Кухня с панорамным видом", "Круглый большой стол"],
    },
    {
      floor: "2 этаж",
      items: ["6 спален", "4 балкона", "Мастер-спальня с джакузи", "20 спальных мест"],
    },
  ];

  return (
    <section id="bedrooms" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-sm text-gold tracking-widest uppercase">
            20 спальных мест
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-4 mb-6">
            Спальни и <span className="text-gradient-gold">этажи</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Bedrooms Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {bedrooms.map((bedroom, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={bedroom.image}
                  alt={bedroom.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors" />
              </div>
              <h3 className="font-playfair text-xl text-cream mb-2">{bedroom.title}</h3>
              <p className="font-montserrat text-sm text-muted-foreground mb-3">
                {bedroom.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {bedroom.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-montserrat text-gold border border-gold/30 uppercase tracking-wider"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floor Plan Info */}
        <div className="grid md:grid-cols-3 gap-6">
          {floorInfo.map((floor, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border hover:border-gold transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {index === 0 && <Bath className="w-6 h-6 text-gold" />}
                {index === 1 && <DoorOpen className="w-6 h-6 text-gold" />}
                {index === 2 && <Bed className="w-6 h-6 text-gold" />}
                <h4 className="font-playfair text-lg text-cream">{floor.floor}</h4>
              </div>
              <ul className="space-y-2">
                {floor.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-montserrat text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View highlight */}
        <div className="mt-16 p-8 border border-gold/30 bg-card/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Eye className="w-8 h-8 text-gold" />
            <div>
              <h4 className="font-playfair text-xl text-cream">Панорамный вид на лес</h4>
              <p className="font-montserrat text-sm text-muted-foreground">
                Дом на возвышенности — самый красивый вид в посёлке!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="font-montserrat text-sm px-6 py-3 bg-gold text-background tracking-wider uppercase hover:bg-gold-light transition-colors"
          >
            Забронировать
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bedrooms;
