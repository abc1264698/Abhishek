import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sweetNotes = [
  "You're my sunshine my love ☀️",
  "Can't wait to spoil you on your special day! I have Rs. 10 paisea hi paisa yk khikhikhi 🤭🤭",
  "You're perfect just the way you are  and i love you my gentlemenn 💜",
  "Thinking of you always makes me smile and blushh 😊",
  "Every date with you is a dream ✨",
  "You make my heart skip a beat 💓",
  "No matter what happens, you’ll always be my Sheky, my heart, my forever 💌💖",
  "I love teasing youuu my cutie !! 🤭",
  "You're my favorite person in the world 🌍",
  "Hey Sheky, you make my heart skip beats and my days so much brighter 💜✨.",
  "itni jldi picha nahi chodungi tumhara stalker hu mein tumhari wardrobe mein hu ab bhi dekh rhi hu tumhein kya sexy 😏💞lg rha hai mera maal black shirt mein 😚",
  "hey cutiee !!! do you misss mee ?? cause i for sure do my love <3",
  "Even when we fight, I secretly love it because I know we’ll laugh about it later 😏💞"
];

export default function SweetNotes() {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

  const nextNote = () => {
    setCurrentNoteIndex((prev) => (prev + 1) % sweetNotes.length);
  };

  const prevNote = () => {
    setCurrentNoteIndex((prev) => (prev - 1 + sweetNotes.length) % sweetNotes.length);
  };

  return (
    <section className="pt-8 pb-16 px-6" data-testid="sweet-notes">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-script text-white mb-12">Sweet Notes 💌</h2>
        
        <div className="relative">
          <div className="min-h-96 flex items-center justify-center">
            <div className="note-card bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl max-w-md cursor-pointer hover:scale-105 transition-all">
              <div className="text-white text-center">
                <div className="text-4xl mb-6 text-accent animate-pulse-soft">💜</div>
                <p className="text-xl font-script leading-relaxed" data-testid="current-note">
                  {sweetNotes[currentNoteIndex]}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={prevNote}
              className="px-6 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all"
              data-testid="button-prev-note"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextNote}
              className="px-6 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all"
              data-testid="button-next-note"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
