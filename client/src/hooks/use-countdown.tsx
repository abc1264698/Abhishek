import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        if (!isExpired) {
          setIsExpired(true);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(prevTimeLeft => {
        // Only update if the values actually changed
        if (prevTimeLeft.days !== days || prevTimeLeft.hours !== hours || 
            prevTimeLeft.minutes !== minutes || prevTimeLeft.seconds !== seconds) {
          return { days, hours, minutes, seconds };
        }
        return prevTimeLeft;
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate, isExpired]);

  return { timeLeft, isExpired };
}
