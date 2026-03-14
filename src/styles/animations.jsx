// Basic Fade-In Animation
export const fadeIn = {
    hidden: {
        opacity: 0,
        y: 30, // Slightly more pronounced initial offset for better visibility
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4, // Reduced duration for faster animations
            ease: "easeOut",
        },
    },
};
// Staggered Container Animation
export const staggerContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Reduced delay between children
            delayChildren: 0.05, // Minimized delay for faster rendering
        },
    },
};
// Horizontal Slide-In Animation
export const slideIn = {
    hidden: {
        x: -100, // Increased offset for better emphasis
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.6, // Adjusted for smoother performance
        },
    },
};
// Vertical Slide-In Animation
export const slideUp = {
    hidden: {
        y: 80, // Enhanced vertical offset
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.6,
        },
    },
};
// Scale-In Animation
export const scaleIn = {
    hidden: {
        scale: 0.9, // Slightly less shrink for smoother scaling
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.25, // Subtle bounce effect
            duration: 0.5,
        },
    },
};
// Page Transition Animation (For Route Changes)
export const pageTransition = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5, // Unified timing for consistency
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: "easeIn",
        },
    },
};
// Hover Animation (For Interactive Elements)
export const hoverEffect = {
    rest: {
        scale: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    hover: {
        scale: 1.08, // Slightly increased scaling for emphasis
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};
// Rotate-In Animation
export const rotateIn = {
    hidden: {
        rotate: -180,
        opacity: 0,
    },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120, // More stiffness for quicker snapping
            damping: 12, // Adjusted damping for smoother rotation
            duration: 0.7,
        },
    },
};
// New: Fade-In with Scale (Useful for buttons or pop-ups)
export const fadeInScale = {
    hidden: {
        scale: 0.95,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};
// New: Bounce Animation (For Attention-Grabbing Elements)
export const bounce = {
    hidden: {
        y: 0,
    },
    visible: {
        y: [0, -15, 0], // Bounce effect
        transition: {
            duration: 0.8,
            repeat: Infinity, // Infinite loop
            repeatType: "loop",
            ease: "easeInOut",
        },
    },
};
