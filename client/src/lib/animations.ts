/**
 * Framer Motion Animation Variants Library
 * Reusable animation configurations for consistent motion throughout the app
 */

import { Variants } from "framer-motion";

/**
 * Fade in from bottom with slide up
 * Perfect for cards, sections, and content blocks
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Fade in with scale
 * Great for modals, popups, and emphasis
 */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Stagger children animations
 * Use on parent container to cascade child animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Slide in from left
 * Good for navigation items and side content
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Slide in from right
 * Good for images and feature highlights
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Hero entrance animation
 * Bold, attention-grabbing for main headlines
 */
export const heroEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Hover lift effect
 * Subtle elevation on interactive elements
 */
export const hoverLift = {
  scale: 1.02,
  y: -4,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
};

/**
 * Hover glow effect (for use with whileHover)
 */
export const hoverGlow = {
  boxShadow: "0 0 25px rgba(99, 226, 183, 0.3)",
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
};

/**
 * Tap scale effect
 * Visual feedback for button presses
 */
export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: [0.4, 0, 0.2, 1],
  },
};

/**
 * Scroll reveal with viewport detection
 * Automatically triggers when element enters viewport
 */
export const scrollReveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Counter animation config
 * For animating numbers with spring physics
 */
export const counterSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

/**
 * Page transition variants
 * Smooth transitions between routes
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Particle float animation
 * For background decoration particles
 */
export const particleFloat: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, -10, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

/**
 * Gradient shift animation
 * For animated gradient backgrounds
 */
export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

/**
 * Viewport animation config
 * Consistent settings for scroll-triggered animations
 */
export const viewportConfig = {
  once: true, // Only animate once when entering viewport
  amount: 0.3, // Trigger when 30% of element is visible
  margin: "0px 0px -100px 0px", // Start animation slightly before element enters
};
