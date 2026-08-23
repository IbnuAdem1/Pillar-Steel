/**
 * Centralized Framer Motion animation variants & transitions
 * Strictly following Section 4 of pillar-ai-guide.md
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealImage = {
  hidden: { opacity: 0, scale: 1.08, clipPath: 'inset(8% 8% 8% 8%)' },
  show: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const textLetterReveal = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.03 },
  }),
};

export const imageHoverSubtle = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -6,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

export const buttonTap = {
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

export const imageZoom = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: 'easeIn' },
  },
};
