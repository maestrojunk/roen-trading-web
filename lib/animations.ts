import { Variants, Transition } from 'framer-motion';

// Refined Apple-style easing curve
export const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const defaultTransition: Transition = {
  duration: 0.85,
  ease: premiumEase,
};

export const slowTransition: Transition = {
  duration: 1.15,
  ease: premiumEase,
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.9,
      ease: premiumEase,
    },
  },
};
