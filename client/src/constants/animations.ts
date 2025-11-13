/**
 * Animation Constants
 * Centralized configuration for all animation-related magic numbers
 */

/**
 * Particle system configuration
 */
export const PARTICLE_COUNTS = {
  /** High-end desktop experience - Index page */
  INDEX_PAGE_DESKTOP: 150,
  /** Medium particle count - Catalog page */
  CATALOG_PAGE_DESKTOP: 60,
  /** Reduced count for mobile devices */
  MOBILE: 30,
  /** Low-end device fallback */
  LOW_END: 15,
} as const;

/**
 * Particle burst effect configuration
 */
export const PARTICLE_BURST = {
  /** Default number of particles in a burst */
  DEFAULT_COUNT: 10,
  /** Minimum distance particles travel (px) */
  MIN_DISTANCE: 40,
  /** Maximum additional distance (px) */
  MAX_DISTANCE_DELTA: 30,
  /** Minimum particle size (px) */
  MIN_SIZE: 4,
  /** Maximum additional size (px) */
  MAX_SIZE_DELTA: 4,
  /** Animation duration (ms) */
  DURATION: 700,
} as const;

/**
 * Intersection Observer reveal animation timings
 */
export const INTERSECTION_DELAYS = {
  /** Base delay between card reveals (ms) */
  CARD_REVEAL_STAGGER: 100,
  /** Reduced stagger for faster reveal (ms) */
  CARD_REVEAL_FAST: 50,
  /** Intersection observer threshold (0-1) */
  THRESHOLD: 0.1,
} as const;

/**
 * Color cycling configuration
 */
export const COLOR_CYCLING = {
  /** Full cycle duration (ms) */
  CYCLE_TIME: 187500,
  /** Starting hue (degrees) */
  START_HUE: 35,
  /** Minimum hue change to trigger update (degrees) */
  UPDATE_THRESHOLD: 1,
} as const;

/**
 * Navigation height and spacing
 */
export const NAVIGATION = {
  /** Navigation bar height in pixels */
  HEIGHT: 64,
  /** Additional offset for smooth scrolling (px) */
  SCROLL_OFFSET: 16,
} as const;

/**
 * Loading and transition durations
 */
export const DURATIONS = {
  /** Standard loading spinner duration */
  LOADING: 2000,
  /** Page transition duration (ms) */
  PAGE_TRANSITION: 400,
  /** Hover effect duration (ms) */
  HOVER: 300,
  /** Click feedback duration (ms) */
  TAP: 100,
} as const;

/**
 * Breakpoints (must match Tailwind config)
 */
export const BREAKPOINTS = {
  /** Mobile breakpoint (px) */
  MOBILE: 768,
  /** Tablet breakpoint (px) */
  TABLET: 1024,
  /** Desktop breakpoint (px) */
  DESKTOP: 1280,
} as const;

/**
 * Performance thresholds
 */
export const PERFORMANCE = {
  /** Target FPS for animations */
  TARGET_FPS: 60,
  /** Low FPS threshold to trigger optimizations */
  LOW_FPS_THRESHOLD: 30,
  /** Debounce delay for resize events (ms) */
  RESIZE_DEBOUNCE: 150,
} as const;
