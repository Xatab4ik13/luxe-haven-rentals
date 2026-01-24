import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import houseChristmas from "@/assets/house-christmas.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={houseChristmas}
          alt="Дом зимой"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-sm text-gold tracking-widest uppercase">
            Забронируйте заранее
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-4 mb-6">
            Свяжитесь <span className="text-gradient-gold">с нами</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="font-montserrat text-muted-foreground max-w-xl mx-auto">
            Сделайте правильный выбор и забронируйте наше предложение заранее, 
            чтобы провести насыщенные дни в кругу близких и родных.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a
            href="tel:+79001234567"
            className="group p-6 bg-card border border-border hover:border-gold transition-all duration-300 text-center"
          >
            <Phone className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-playfair text-lg text-cream mb-2">Телефон</h4>
            <p className="font-montserrat text-sm text-muted-foreground">
              Позвоните нам
            </p>
          </a>

          <a
            href="https://wa.me/79001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-card border border-border hover:border-gold transition-all duration-300 text-center"
          >
            <MessageCircle className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-playfair text-lg text-cream mb-2">WhatsApp</h4>
            <p className="font-montserrat text-sm text-muted-foreground">
              Напишите в мессенджер
            </p>
          </a>

          <div className="p-6 bg-card border border-border text-center">
            <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
            <h4 className="font-playfair text-lg text-cream mb-2">Локация</h4>
            <p className="font-montserrat text-sm text-muted-foreground">
              30 мин от Москвы, выезд на ЦКАД
            </p>
          </div>

          <div className="p-6 bg-card border border-border text-center">
            <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
            <h4 className="font-playfair text-lg text-cream mb-2">Доступность</h4>
            <p className="font-montserrat text-sm text-muted-foreground">
              Бронирование 24/7
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 bg-card border border-gold">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />
            ))}
          </div>
          <h3 className="font-playfair text-2xl md:text-3xl text-cream mb-4">
            Мы будем рады вам!
          </h3>
          <p className="font-montserrat text-muted-foreground mb-8 max-w-lg mx-auto">
            Мы сделаем всё, чтобы ваш отдых был незабываемым и вы снова приехали к нам. 
            Ждём вас в гости!
          </p>
          <a
            href="https://wa.me/79001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-montserrat px-10 py-4 bg-gold text-background font-medium tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover-gold-glow"
          >
            Забронировать сейчас
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
