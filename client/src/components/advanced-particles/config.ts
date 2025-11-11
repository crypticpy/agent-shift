export const PARTICLE_CONFIG = {
  TARGET_COUNT: 150,
  MAX_COUNT: 180,
  SPAWN_RATE: 5, // particles per second

  SIZE_RANGE: { min: 2, max: 5 },
  LIFETIME_RANGE: { min: 8000, max: 15000 }, // milliseconds

  COLORS: [
    { color: 'oklch(0.85 0.15 35)', weight: 0.25 }, // Soft coral
    { color: 'oklch(0.88 0.12 45)', weight: 0.25 }, // Soft amber
    { color: 'oklch(0.82 0.18 155)', weight: 0.25 }, // Soft green
    { color: 'oklch(0.90 0.10 50)', weight: 0.15 }, // Pale yellow
    { color: 'oklch(0.80 0.20 25)', weight: 0.10 }, // Vibrant coral
  ],

  WIND: {
    BASE_DIRECTION: { x: -1, y: -0.1 }, // Starting direction (will vary)
    BASE_SPEED: 80, // Base wind (gusts will push it higher)
    GUST_FREQUENCY: 0.12, // Slower wave = longer gusts
    GUST_MAGNITUDE: 0.6, // Moderate normal variation
    TURBULENCE_SCALE: 0.002, // Large turbulence features
    TURBULENCE_STRENGTH: 1.8, // Strong swirling patterns
  },

  FLOCKING: {
    PERCEPTION_RADIUS: 100, // See neighbors further away
    SEPARATION_DISTANCE: 15, // Closer clustering
    SEPARATION_WEIGHT: 0.6, // Allow even more clustering
    ALIGNMENT_WEIGHT: 3.0, // Very strong - swirl together dramatically
    COHESION_WEIGHT: 2.5, // Very strong - cluster and flow together
    MAX_SPEED: 180, // Allow very fast movement during gusts
    MAX_FORCE: 4.0, // Strong steering for dramatic interactions
  },

  PHYSICS: {
    BUOYANCY: -5, // Reduced upward force (wind does the work)
    EDGE_FORCE_MULTIPLIER: 1.5,
    FRICTION: 0.99, // Less friction = wind has more effect
  },

  OPACITY: {
    FADE_IN_PERCENT: 0.15, // First 15% of lifetime
    FADE_OUT_PERCENT: 0.25, // Last 25% of lifetime
    BASE_RANGE: { min: 0.5, max: 0.9 },
    PULSE_AMOUNT: 0.1,
    PULSE_SPEED: 0.003,
  },
};
