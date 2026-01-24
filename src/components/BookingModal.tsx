import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Calendar, Users, Phone, User } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !date || !guests) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-telegram-booking", {
        body: {
          name: name.trim(),
          phone: phone.trim(),
          date: format(date, "dd.MM.yyyy", { locale: ru }),
          guests: guests,
        },
      });

      if (error) {
        throw error;
      }

      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setName("");
      setPhone("");
      setDate(undefined);
      setGuests("");
      onClose();
    } catch (error) {
      console.error("Error sending booking:", error);
      toast.error("Ошибка отправки. Попробуйте позже или позвоните нам.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none"
          >
            <div className="bg-card border-2 border-gold/50 p-8 relative w-full max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-cream transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <Send className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl text-cream">Оставить заявку</h3>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Заполните форму и мы свяжемся с вами
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-background border border-border text-cream placeholder:text-muted-foreground font-body focus:border-gold focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-background border border-border text-cream placeholder:text-muted-foreground font-body focus:border-gold focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full pl-12 pr-4 py-4 bg-background border border-border text-left font-body focus:border-gold focus:outline-none transition-colors relative",
                        date ? "text-cream" : "text-muted-foreground"
                      )}
                    >
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      {date ? format(date, "dd MMMM yyyy", { locale: ru }) : "Выберите дату"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-gold/50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      locale={ru}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>

                {/* Guests */}
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-background border border-border text-cream font-body focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled className="text-muted-foreground">
                      Количество гостей
                    </option>
                    {[...Array(80)].map((_, i) => (
                      <option key={i + 1} value={i + 1} className="bg-card text-cream">
                        {i + 1} {i === 0 ? "гость" : i < 4 ? "гостя" : "гостей"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gold text-obsidian font-body font-medium tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_hsl(38_85%_55%/0.4)]"
                >
                  {isLoading ? "Отправка..." : "Отправить заявку"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
