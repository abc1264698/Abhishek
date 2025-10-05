import { useState } from "react";
import FloatingIcons from "./floating-icons";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownScreenProps {
  timeLeft: TimeLeft;
}

export default function CountdownScreen({ timeLeft }: CountdownScreenProps) {
  const [messageBubbles, setMessageBubbles] = useState<Array<{
    id: string;
    x: number;
    y: number;
    message: string;
  }>>([]);

  const showMessageBubble = (x: number, y: number, message: string) => {
    const id = Date.now().toString();
    const bubble = {
      id,
      x: Math.min(x, window.innerWidth - 200),
      y: Math.max(y - 60, 20),
      message
    };
    
    setMessageBubbles(prev => [...prev, bubble]);
    
    setTimeout(() => {
      setMessageBubbles(prev => prev.filter(b => b.id !== id));
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="countdown-screen">
      {/* Floating Icons */}
      <FloatingIcons onIconClick={showMessageBubble} />

      {/* Countdown Box */}
      <div className="glass-effect rounded-3xl p-8 text-center text-white shadow-2xl hover:scale-105 transition-all duration-300" data-testid="countdown-box">
        <h1 className="font-script text-5xl mb-4">Just a little longer… ✨</h1>
        <div className="font-sans text-2xl font-light mb-4">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold" data-testid="text-days">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" data-testid="text-hours">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" data-testid="text-minutes">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" data-testid="text-seconds">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Seconds</div>
            </div>
          </div>
        </div>
        <p className="font-script text-xl opacity-90">Until your special day arrives! 💜</p>
      </div>

      {/* Message Bubbles */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {messageBubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="fixed z-50 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-xs animate-bounce-soft"
            style={{
              left: bubble.x + 'px',
              top: bubble.y + 'px',
            }}
            data-testid={`bubble-${bubble.id}`}
          >
            <p className="text-gray-800 font-script text-sm">{bubble.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
