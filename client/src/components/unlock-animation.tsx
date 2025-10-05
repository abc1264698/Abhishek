import { useState, useEffect } from "react";

interface UnlockAnimationProps {
  onComplete: () => void;
}

const EMOJIS = ["🎉", "🎈", "🎂", "🎁", "💖", "✨", "🥳", "🪅", "🍰", "🎊"];

export default function UnlockAnimation({ onComplete }: UnlockAnimationProps) {
  const [showBirthdayText, setShowBirthdayText] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showCelebrationEmojis, setShowCelebrationEmojis] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Envelope appears
    setTimeout(() => {
      setShowEnvelope(true);
      // Confetti starts immediately when envelope appears
      setShowConfetti(true);
    }, 800);

    setTimeout(() => setShowBirthdayText(true), 1500);
  }, []);

  const handleEnvelopeClick = () => setEnvelopeOpened(true);

  const handleLetterButtonClick = () => {
    // Start emojis floating
    setShowCelebrationEmojis(true);
    setTimeout(() => onComplete(), 4500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">

      {/* Birthday Text */}
      {showBirthdayText && (
        <div className="absolute top-20 text-center text-white font-script text-5xl animate-fade-in z-10">
          Happieesstt Birthdayyyy Babyyyy! 🤭💕
        </div>
      )}

      {/* Envelope */}
      <div className="relative flex flex-col items-center">
        <div
          onClick={handleEnvelopeClick}
          className="relative w-64 h-40 cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
        >
          {/* Envelope Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-200 rounded-lg shadow-lg"></div>

          {/* Envelope Flap */}
          <div
            className={`absolute top-0 left-0 w-full h-20 bg-purple-400 rounded-t-lg border-b border-purple-500 transition-transform duration-500 ${
              envelopeOpened ? "-translate-y-20" : ""
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Heart Seal */}
              <span className="text-pink-300 text-2xl">💖</span>
            </div>
          </div>

          {/* Envelope Content */}
          <div
            className={`absolute inset-0 p-4 transition-opacity duration-500 flex flex-col items-center justify-center ${
              envelopeOpened ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-purple-50/90 rounded-lg p-4 flex flex-col items-center justify-center w-full h-full text-center">
              <div className="text-2xl mb-2">💌</div>
              <p className="text-sm text-purple-800 font-medium">
                Click to read!
              </p>
            </div>
          </div>
        </div>

        {/* Envelope Label */}
        {!envelopeOpened && (
          <div className="absolute w-full flex flex-col items-center justify-center -bottom-0 left-1/2 transform -translate-x-1/2 text-center z-10 pointer-events-none">
            <p className="font-script text-2xl text-purple-400 font-bold">
              Open Me 💌
            </p>
            <p className="text-sm text-purple-400 mt-1">
              Click the envelope above!
            </p>
          </div>
        )}
      </div>

      {/* Letter after opening */}
      {envelopeOpened && (
        <div className="relative w-64 h-48 bg-purple-50 rounded-xl shadow-2xl p-4 flex flex-col justify-between items-center mt-4 animate-fade-in">
          <p className="text-center text-purple-800 font-script text-lg">
            Happy Birthday Darlinggg !!! 💜
            I loveee youu sooo muchh babyyy🤭💕 !! hehee look what i made for you go ahead browse through it khikhi 🤭🤭💕
          </p>
          <button
            className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all"
            onClick={handleLetterButtonClick}
          >
            Click me to see further ✨
          </button>
        </div>
      )}

      {/* Confetti starts with envelope */}
      {showConfetti &&
        Array.from({ length: 100 }).map((_, i) => {
          const colors = ["#e91e63","#9c27b0","#673ab7","#3f51b5","#ff9800","#ffc107","#4caf50"];
          const shapes = ["circle","square","triangle"];
          const shape = shapes[Math.floor(Math.random()*shapes.length)];
          const size = 6 + Math.random()*8;
          const style: React.CSSProperties = {
            width: `${size}px`,
            height: `${size}px`,
            left: Math.random()*100 + "%",
            top: "-5%",
            backgroundColor: colors[Math.floor(Math.random()*colors.length)],
            animationDelay: Math.random()*2 + "s"
          };
          if(shape === "circle") style.borderRadius = "50%";
          if(shape === "triangle") style.clipPath = "polygon(50% 0%,0% 100%,100% 100%)";

          return <div key={`confetti-${i}`} className="absolute animate-confetti" style={style}></div>;
        })
      }

      {/* Emojis float after clicking letter */}
      {showCelebrationEmojis &&
        Array.from({ length: 180 }).map((_, i) => {
          const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
          return (
            <div
              key={`emoji-${i}`}
              className="absolute text-3xl animate-emoji-float"
              style={{
                left: Math.random() * 100 + "%",
                bottom: "-5%",
                animationDelay: Math.random() * 2 + "s",
                transform: `scale(${0.8 + Math.random() * 0.6})`,
              }}
            >
              {emoji}
            </div>
          );
        })}

      <style>{`
        @keyframes fade-in {
          0% { opacity:0; transform: scale(0.95);}
          100% {opacity:1; transform: scale(1);}
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards;}

        @keyframes emoji-float {
          0% { transform: translateY(0) rotate(0deg); opacity:0;}
          10% {opacity:1;}
          100% { transform: translateY(-120vh) rotate(360deg); opacity:0;}
        }
        .animate-emoji-float { animation: emoji-float 5s ease-in-out forwards;}

        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity:1;}
          100% { transform: translateY(120vh) rotate(360deg) translateX(20px); opacity:0;}
        }
        .animate-confetti { animation: confetti-fall 5s linear forwards;}
      `}</style>
    </div>
  );
}
