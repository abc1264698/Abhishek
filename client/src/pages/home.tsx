import { useState, useEffect, useMemo } from "react";
import CountdownScreen from "@/components/countdown-screen";
import UnlockAnimation from "@/components/unlock-animation";
import MainContent from "@/components/main-content";
import { useCountdown } from "@/hooks/use-countdown";

export default function Home() {
  const [devMode, setDevMode] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);
  
  // Memoize the target date to prevent infinite re-renders
  const targetDate = useMemo(() => new Date("2025-10-06T00:00:00"), []);
  const { timeLeft, isExpired } = useCountdown(targetDate);

  useEffect(() => {
    if (isExpired && !devMode && !isUnlocked) {
      setShowUnlockAnimation(true);
    }
  }, [isExpired, devMode, isUnlocked]);

  const handleUnlockComplete = () => {
    setShowUnlockAnimation(false);
    setIsUnlocked(true);
  };

  const toggleDevMode = () => {
    setDevMode(!devMode);
  };

  // Cursor hearts effect
  useEffect(() => {
    let lastHeartTime = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastHeartTime > 200) {
        createCursorHeart(e.clientX, e.clientY);
        lastHeartTime = now;
      }
    };

    const createCursorHeart = (x: number, y: number) => {
      const heart = document.createElement('div');
      heart.className = 'cursor-hearts';
      heart.textContent = '💜';
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      document.body.appendChild(heart);
      
      setTimeout(() => heart.remove(), 2000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen gradient-bg overflow-x-hidden">


      {/* Show content based on state */}
      {!isUnlocked &&  !showUnlockAnimation && (
        <CountdownScreen timeLeft={timeLeft} />
      )}
      
      {showUnlockAnimation && (
        <UnlockAnimation onComplete={handleUnlockComplete} />
      )}
      
      {(isUnlocked ) && (
        <MainContent />
      )}
    </div>
  );
}
