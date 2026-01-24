import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Wallet,
  PawPrint,
} from "lucide-react";

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

  return (
    <section id="rules" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-sm text-gold tracking-widest uppercase">
            Важная информация
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-cream mt-4 mb-6">
            Правила <span className="text-gradient-gold">проживания</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Age restriction banner */}
        <div className="mb-12 p-6 bg-gold/10 border border-gold flex items-center justify-center gap-4">
          <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0" />
          <p className="font-montserrat text-cream text-center">
            <span className="font-semibold">Строгое ограничение по возрасту:</span> Гости не младше 25 лет
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Required */}
          <div className="p-6 bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="font-playfair text-xl text-cream">Обязательно</h3>
            </div>
            <ul className="space-y-4">
              {required.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="font-montserrat text-sm text-muted-foreground">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prohibited */}
          <div className="p-6 bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-500" />
              <h3 className="font-playfair text-xl text-cream">Запрещено</h3>
            </div>
            <ul className="space-y-4">
              {prohibited.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="font-montserrat text-sm text-muted-foreground">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Deposit */}
          <div className="p-6 bg-card border border-gold/30 hover:border-gold transition-colors">
            <Wallet className="w-8 h-8 text-gold mb-4" />
            <h4 className="font-playfair text-lg text-cream mb-2">Залог</h4>
            <p className="font-montserrat text-sm text-muted-foreground">
              Залог равен суткам проживания. Возвращается в течение 24 часов после выезда 
              при условии соблюдения правил и сохранности имущества.
            </p>
          </div>

          {/* Check-in/out */}
          <div className="p-6 bg-card border border-gold/30 hover:border-gold transition-colors">
            <Clock className="w-8 h-8 text-gold mb-4" />
            <h4 className="font-playfair text-lg text-cream mb-2">Заезд и выезд</h4>
            <p className="font-montserrat text-sm text-muted-foreground">
              Ранний заезд и поздний выезд оговаривается и оплачивается дополнительно. 
              Уборка в стоимость не входит.
            </p>
          </div>

          {/* Pets */}
          <div className="p-6 bg-card border border-gold/30 hover:border-gold transition-colors">
            <PawPrint className="w-8 h-8 text-gold mb-4" />
            <h4 className="font-playfair text-lg text-cream mb-2">С животными</h4>
            <p className="font-montserrat text-sm text-muted-foreground">
              При заселении с животными условия обговариваются отдельно. 
              Свяжитесь с нами для уточнения деталей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
