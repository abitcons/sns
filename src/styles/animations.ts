import { Variants } from 'framer-motion';

// Basic Fade-In Animation
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

// Staggered Container Animation
export const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between children animations
      delayChildren: 0.1 // Optional delay before staggering begins
    }
  }
};

// Horizontal Slide-In Animation
export const slideIn: Variants = {
  hidden: { 
    x: -60, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// Vertical Slide-In Animation
export const slideUp: Variants = {
  hidden: { 
    y: 60, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// Scale-In Animation
export const scaleIn: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6
    }
  }
};

// Page Transition Animation (Good for Route Changes)
export const pageTransition: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6, 
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.4, 
      ease: 'easeIn'
    }
  }
};

// Hover Animation (For Interactive Elements)
export const hoverEffect: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// Rotate-In Animation
export const rotateIn: Variants = {
  hidden: { 
    rotate: -180, 
    opacity: 0 
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8
    }
  }
};