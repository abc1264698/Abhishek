import { useState } from "react";
import { RotateCcw } from "lucide-react";

const flirtyMessages = [
  "You're dangerously adorable… handle with care 😘",
  "If I were there right now… you know what would happen 💋",
  "Truth or dare? Choose wisely, love… 😇",
  "Your smile makes my heart race 💜",
  "Can you guess what's on my mind? 💭💜",
  "You owe me a hug 🤗",
  "I kinda want to break the rules… pull you in and kiss you before you even realize 😘",
  "You, me, a sudden kiss… your reaction is what I’m dying to see 💫",
  "I’m thinking… just a little pull, a little tease, and a kiss that makes you forget everything else 😏",
  "If I were with you right now…",
  "Can't stop thinking about you 😍",
  "Are you French? Because Eiffel for you.🤭💕😏",
  "Abhi… I kinda want to grab your collar and pull you in for a quick, intense kiss… you’d let me, right? 💜",
  "Do you have a map? I just keep getting lost in your texts."
];

export default function FlirtyCards() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const shuffleCards = () => {
    setIsFlipped(false);
    setCurrentMessageIndex((prev) => (prev + 1) % flirtyMessages.length);
  };

  return (
    <section className="pt-8 pb-16 px-6" data-testid="flirty-cards">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-script text-white mb-12">Flirty Cards Just For You 💕</h2>
        
        <div className="relative inline-block">
          <div className="relative">
            {/* Card Stack */}
            <div 
              className={`flip-card w-80 h-48 mx-auto mb-8 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
              onClick={handleCardClick}
              data-testid="flip-card"
            >
              <div className="flip-card-inner w-full h-full relative">
                <div className="flip-card-front absolute w-full h-full bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-4">💜</div>
                    <p className="text-xl font-script">Click me! 💜</p>
                  </div>
                </div>
                <div className="flip-card-back absolute w-full h-full bg-white rounded-xl flex items-center justify-center shadow-2xl">
                  <p className="text-gray-800 text-lg font-script px-6 text-center" data-testid="card-message">
                    {flirtyMessages[currentMessageIndex]}
                  </p>
                </div>
              </div>
            </div>
            
            {/* More cards in stack (slightly offset) */}
            <div className="absolute top-2 left-2 w-80 h-48 bg-gradient-to-br from-secondary to-primary rounded-xl shadow-lg opacity-70 -z-10"></div>
            <div className="absolute top-4 left-4 w-80 h-48 bg-gradient-to-br from-accent to-secondary rounded-xl shadow-lg opacity-50 -z-20"></div>
          </div>
          
          <button
            onClick={shuffleCards}
            className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all"
            data-testid="button-shuffle-cards"
          >
            <RotateCcw className="w-4 h-4 mr-2 inline" />
            Shuffle Cards
          </button>
        </div>
      </div>
    </section>
  );
}
