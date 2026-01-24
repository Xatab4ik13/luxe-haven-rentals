import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Animated House SVG */}
      <div className="relative mb-8">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-draw-house"
        >
          {/* Roof */}
          <path
            d="M50 10 L10 45 L90 45 Z"
            stroke="hsl(43 74% 49%)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-house"
          />
          {/* House body */}
          <rect
            x="15"
            y="45"
            width="70"
            height="45"
            stroke="hsl(43 74% 49%)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-house"
            style={{ animationDelay: "0.5s" }}
          />
          {/* Door */}
          <rect
            x="40"
            y="60"
            width="20"
            height="30"
            stroke="hsl(43 74% 49%)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-house"
            style={{ animationDelay: "1s" }}
          />
          {/* Windows */}
          <rect
            x="22"
            y="55"
            width="12"
            height="12"
            stroke="hsl(43 74% 49%)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-house"
            style={{ animationDelay: "1.2s" }}
          />
          <rect
            x="66"
            y="55"
            width="12"
            height="12"
            stroke="hsl(43 74% 49%)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-house"
            style={{ animationDelay: "1.4s" }}
          />
          {/* Chimney */}
          <rect
            x="70"
            y="18"
            width="10"
            height="20"
            stroke="hsl(43 74% 49%)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-house"
            style={{ animationDelay: "1.6s" }}
          />
          {/* Balcony railings */}
          <line
            x1="15"
            y1="52"
            x2="35"
            y2="52"
            stroke="hsl(43 74% 49%)"
            strokeWidth="1"
            className="animate-draw-house"
            style={{ animationDelay: "1.8s" }}
          />
          <line
            x1="65"
            y1="52"
            x2="85"
            y2="52"
            stroke="hsl(43 74% 49%)"
            strokeWidth="1"
            className="animate-draw-house"
            style={{ animationDelay: "1.8s" }}
          />
        </svg>
        
        {/* Glowing effect */}
        <div className="absolute inset-0 blur-xl bg-gold/20 animate-pulse-gold" />
      </div>

      {/* Text */}
      <h1 className="font-playfair text-2xl md:text-3xl text-gradient-gold mb-6 tracking-wider">
        БЕЛЫЙ ДОМ
      </h1>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-muted overflow-hidden rounded-full">
        <div
          className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-4 font-montserrat text-sm text-muted-foreground tracking-widest">
        {progress}%
      </p>
    </div>
  );
};

export default Preloader;
