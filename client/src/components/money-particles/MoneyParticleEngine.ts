/**
 * Money Particle Engine
 *
 * Orchestrates spawning, updating, and rendering of 3D money/number particles
 * that drift toward the viewer with perspective effects.
 */

import { MoneyParticle, createMoneyParticle } from './MoneyParticle';

export interface EngineConfig {
  spawnRate: number;      // Particles spawned per second (default: 1.5)
  maxParticles: number;   // Maximum simultaneous particles (default: 30)
  driftIntensity: number; // Drift amount multiplier (default: 1.0)
  depthSpeed: number;     // Speed multiplier for depth progression (default: 1.0)
}

export class MoneyParticleEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: MoneyParticle[] = [];
  private config: EngineConfig;

  // Animation state
  private animationId: number | null = null;
  private lastTime: number = 0;
  private isRunning: boolean = false;

  // Spawn timing
  private timeSinceLastSpawn: number = 0;
  private spawnInterval: number = 0;

  // Performance monitoring
  private fps: number = 60;
  private frameCount: number = 0;
  private lastFpsUpdate: number = 0;

  // Reduced motion support
  private prefersReducedMotion: boolean = false;

  constructor(canvas: HTMLCanvasElement, config: Partial<EngineConfig> = {}) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true, // Performance hint for animation
    });

    if (!ctx) {
      throw new Error('Could not get 2D context from canvas');
    }

    this.ctx = ctx;

    // Default configuration
    this.config = {
      spawnRate: config.spawnRate || 1.5,
      maxParticles: config.maxParticles || 30,
      driftIntensity: config.driftIntensity || 1.0,
      depthSpeed: config.depthSpeed || 1.0,
    };

    // Check for reduced motion preference
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Calculate spawn interval from spawn rate
    this.spawnInterval = 1000 / this.config.spawnRate; // ms between spawns

    // Set up canvas for high-quality rendering
    this.setupCanvas();

    // Spawn initial particles
    this.spawnInitialParticles();
  }

  /**
   * Set up canvas for crisp, high-quality rendering
   */
  private setupCanvas(): void {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();

    // Set actual size in memory (scaled by DPR)
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;

    // Scale context to match DPR
    this.ctx.scale(dpr, dpr);

    // Set display size
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
  }

  /**
   * Spawn initial particles distributed at various depths
   */
  private spawnInitialParticles(): void {
    // Start with ~40% of max particles for gradual build-up
    const initialCount = Math.floor(this.config.maxParticles * 0.4);

    for (let i = 0; i < initialCount; i++) {
      this.spawnParticle();
    }
  }

  /**
   * Spawn a single new particle
   */
  private spawnParticle(): void {
    if (this.particles.length >= this.config.maxParticles) {
      return; // Don't exceed max particle count
    }

    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.width / dpr;
    const height = this.canvas.height / dpr;

    const particle = createMoneyParticle(width, height);
    this.particles.push(particle);
  }

  /**
   * Start the animation loop
   */
  public start(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.lastTime = performance.now();
    this.lastFpsUpdate = this.lastTime;
    this.animate(this.lastTime);
  }

  /**
   * Stop the animation loop
   */
  public stop(): void {
    this.isRunning = false;
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  /**
   * Main animation loop
   */
  private animate = (currentTime: number): void => {
    if (!this.isRunning) return;

    // Calculate delta time
    const deltaTime = Math.min(currentTime - this.lastTime, 100); // Cap at 100ms
    this.lastTime = currentTime;

    // Update FPS counter
    this.updateFPS(currentTime);

    // Update and render
    this.update(deltaTime);
    this.render();

    // Continue loop
    this.animationId = requestAnimationFrame(this.animate);
  };

  /**
   * Update FPS counter
   */
  private updateFPS(currentTime: number): void {
    this.frameCount++;

    if (currentTime - this.lastFpsUpdate >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastFpsUpdate = currentTime;
    }
  }

  /**
   * Update simulation
   */
  private update(deltaTime: number): void {
    // Respect reduced motion preference
    const effectiveDelta = this.prefersReducedMotion ? deltaTime * 0.3 : deltaTime;

    // Update all particles
    for (const particle of this.particles) {
      particle.update(effectiveDelta);
    }

    // Remove dead particles
    this.particles = this.particles.filter((p) => !p.shouldRemove());

    // Spawn new particles based on spawn rate
    this.timeSinceLastSpawn += effectiveDelta;

    while (this.timeSinceLastSpawn >= this.spawnInterval && this.particles.length < this.config.maxParticles) {
      this.spawnParticle();
      this.timeSinceLastSpawn -= this.spawnInterval;

      // Add small randomization to spawn timing for organic feel
      this.spawnInterval = (1000 / this.config.spawnRate) * (0.8 + Math.random() * 0.4);
    }
  }

  /**
   * Render all particles
   */
  private render(): void {
    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.width / dpr;
    const height = this.canvas.height / dpr;

    // Clear canvas
    this.ctx.clearRect(0, 0, width, height);

    // Render all particles (they're already sorted by depth via natural ordering)
    // Particles farther away (lower depth) were spawned earlier, so render them first
    for (const particle of this.particles) {
      particle.render(this.ctx);
    }
  }

  /**
   * Handle window resize
   */
  public resize(width: number, height: number): void {
    const dpr = window.devicePixelRatio || 1;

    // Update canvas size
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;

    // Scale context
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);

    // Set display size
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    // Update all particles
    for (const particle of this.particles) {
      particle.resize(width, height);
    }
  }

  /**
   * Update configuration
   */
  public updateConfig(config: Partial<EngineConfig>): void {
    this.config = { ...this.config, ...config };
    this.spawnInterval = 1000 / this.config.spawnRate;
  }

  /**
   * Get current FPS
   */
  public getFPS(): number {
    return this.fps;
  }

  /**
   * Get debug information
   */
  public getDebugInfo(): {
    fps: number;
    particleCount: number;
    isRunning: boolean;
  } {
    return {
      fps: this.fps,
      particleCount: this.particles.length,
      isRunning: this.isRunning,
    };
  }

  /**
   * Clean up resources
   */
  public destroy(): void {
    this.stop();
    this.particles = [];
  }
}
