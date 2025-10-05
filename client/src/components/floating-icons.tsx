import { Heart, Star, Moon, Gift, Candy, Cloud, Sun, Zap, Smile } from "lucide-react";

interface FloatingIconsProps {
  onIconClick: (x: number, y: number, message: string) => void;
}

const icons = [
  { 
    Icon: Heart, 
    message: "Hey love… I miss you already 💜",
    position: "top-20 left-16",
    size: "text-4xl",
    delay: "animation-delay-0"
  },
  { 
    Icon: Star, 
    message: "Just a little more patience…. surprises are on the way ✨",
    position: "top-32 right-20",
    size: "text-3xl",
    delay: "animation-delay-1000"
  },
  { 
    Icon: Moon, 
    message: "Counting every second to see you smile! 😊",
    position: "bottom-32 left-24",
    size: "text-3xl",
    delay: "animation-delay-2000"
  },
  { 
    Icon: Gift, 
    message: "Stay curious … your special day is almost here🌸",
    position: "bottom-20 right-32",
    size: "text-4xl",
    delay: "animation-delay-3000"
  },
  { 
    Icon: Candy, 
    message: "Can't wait to spoil you! 😘 waise to kr nahi paungi but hehe me try !!",
    position: "top-1/2 left-8",
    size: "text-3xl",
    delay: "animation-delay-4000"
  },
  { 
    Icon: Cloud, 
    message: "Every moment thinking of me😏 heheh patience to hai hi nahi💭💜",
    position: "top-1/3 right-8",
    size: "text-3xl",
    delay: "animation-delay-5000"
  },
  { 
    Icon: Sun, 
    message: "Hawww baby… have thodu sa patience! 🌞💖",
    position: "bottom-16 left-32",
    size: "text-4xl",
    delay: "animation-delay-6000"
  },
  { 
    Icon: Zap, 
    message: "Stop clicking too much, my little babyyy😏⚡",
    position: "top-10 right-40",
    size: "text-3xl",
    delay: "animation-delay-7000"
  },
  { 
    Icon: Smile, 
    message: "Bacha, patience is key!😄💞",
    position: "bottom-10 left-10",
    size: "text-3xl",
    delay: "animation-delay-8000"
  }
];

export default function FloatingIcons({ onIconClick }: FloatingIconsProps) {
  const handleIconClick = (e: React.MouseEvent, message: string) => {
    e.stopPropagation();
    onIconClick(e.clientX, e.clientY, message);
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, message, position, size, delay }, index) => (
        <div
          key={index}
          className={`floating-icon absolute ${position} ${size} text-white/70 cursor-pointer pointer-events-auto hover:text-white/90 transition-colors duration-300`}
          onClick={(e) => handleIconClick(e, message)}
          style={{
            animationDelay: `${index * 0.5}s`
          }}
          data-testid={`floating-icon-${index}`}
        >
          <Icon className="drop-shadow-lg" />
        </div>
      ))}
    </div>
  );
}
