// Animation utilities and constants for the birthday website

export const animationDurations = {
  short: 300,
  medium: 600,
  long: 1000,
  confetti: 3000,
  float: 6000,
};

export const animationEasing = {
  easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

export const createFloatingAnimation = (delay: number = 0) => ({
  initial: { y: 0, rotate: 0 },
  animate: { 
    y: [-20, 0, -20], 
    rotate: [0, 5, 0] 
  },
  transition: {
    duration: animationDurations.float / 1000,
    ease: "easeInOut",
    repeat: Infinity,
    delay: delay / 1000,
  }
});

export const createFadeInAnimation = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: animationDurations.medium / 1000,
    delay: delay / 1000,
  }
});

export const createSlideUpAnimation = (delay: number = 0) => ({
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: animationDurations.medium / 1000,
    ease: animationEasing.easeOut,
    delay: delay / 1000,
  }
});

export const createScaleHoverAnimation = () => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
});

export const createHeartPulseAnimation = () => ({
  animate: { scale: [1, 1.1, 1] },
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  }
});
