/**
 * Flowing Streams Rendering Engine
 *
 * Orchestrates the flow field, particles, and rendering to create
 * the sophisticated flowing river effect with curl noise and trails.
 */

import { FlowField, Vector2D } from './FlowField';
import { StreamParticle, createStreamParticle } from './StreamParticle';

export interface EngineConfig {
  particleCount: number;
  layers: number;
  showFlowLines: boolean;
  flowLineOpacity: number;
}

export interface Wave {
  x: number;          // Current horizontal position
  speed: number;      // Pixels per second
  amplitude: number;  // Push strength multiplier
  width: number;      // Wave influence width in pixels
  active: boolean;    // Is wave currently traveling
}

export class FlowingStreamsEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private flowField: FlowField;
  private particles: StreamParticle[] = [];
  private config: EngineConfig;

  // Animation state
  private animationId: number | null = null;
  private lastTime: number = 0;
  private time: number = 0;
  private isRunning: boolean = false;

  // Performance monitoring
  private fps: number = 60;
  private frameCount: number = 0;
  private lastFpsUpdate: number = 0;

  // Reduced motion support
  private prefersReducedMotion: boolean = false;

  // Wave ripple system
  private waves: Wave[] = [];
  private timeSinceLastWave: number = 0;
  private waveInterval: number = 20000; // Start with 20 second delay before first wave

  // Color cycling system
  private currentHue: number = 35; // Start at orange
  private readonly HUE_SPEED = 360 / 37500; // 360 degrees / 37.5 seconds = 0.0096°/ms

  // Adaptive random injection system (prevents pattern formation)
  private engineStartTime: number = 0;
  private lastInjectionTime: number = 0;
  private nextInjectionInterval: number = 10000; // Initial interval

  constructor(canvas: HTMLCanvasElement, config: Partial<EngineConfig> = {}) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true // Performance hint for animation
    });

    if (!ctx) {
      throw new Error('Could not get 2D context from canvas');
    }

    this.ctx = ctx;

    // Default configuration
    this.config = {
      particleCount: config.particleCount || 300,
      layers: config.layers || 4,
      showFlowLines: config.showFlowLines !== undefined ? config.showFlowLines : false,
      flowLineOpacity: config.flowLineOpacity || 0.03
    };

    // Check for reduced motion preference
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize flow field
    this.flowField = new FlowField(
      canvas.width,
      canvas.height,
      20 // Grid resolution
    );

    // Initialize particles
    this.initializeParticles();

    // Set up canvas for high-quality rendering
    this.setupCanvas();
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
   * Initialize particle system with layered distribution
   */
  private initializeParticles(): void {
    this.particles = [];

    const particlesPerLayer = Math.floor(this.config.particleCount / this.config.layers);

    for (let layer = 0; layer < this.config.layers; layer++) {
      for (let i = 0; i < particlesPerLayer; i++) {
        const particle = createStreamParticle(
          this.canvas.width,
          this.canvas.height,
          layer,
          true // Initial spawn: distribute across screen
        );
        this.particles.push(particle);
      }
    }

    // Sort by layer (background to foreground) for proper rendering order
    this.particles.sort((a, b) => a.layer - b.layer);
  }

  /**
   * Start the animation loop
   */
  public start(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.lastTime = performance.now();
    this.lastFpsUpdate = this.lastTime;
    this.engineStartTime = this.lastTime;
    this.lastInjectionTime = this.lastTime;
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
    this.time += deltaTime;

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

    // Update color cycling (always smooth, regardless of reduced motion)
    this.currentHue = (this.currentHue + (deltaTime * this.HUE_SPEED)) % 360;

    // Update flow field
    this.flowField.update(this.time);

    // Update particles
    for (const particle of this.particles) {
      particle.update(this.flowField, effectiveDelta);
    }

    // Remove dead particles and spawn new ones
    this.particles = this.particles.filter(p => !p.shouldRemove());

    // Maintain particle count
    while (this.particles.length < this.config.particleCount) {
      const layer = Math.floor(Math.random() * this.config.layers);

      // 35% chance of mid-screen spawn, 65% from left edge (prevents left-edge clustering)
      const isMidScreenSpawn = Math.random() < 0.35;

      const particle = createStreamParticle(
        this.canvas.width,
        this.canvas.height,
        layer,
        isMidScreenSpawn // Mid-screen spawn uses same logic as initial spawn
      );
      this.particles.push(particle);
    }

    // Re-sort occasionally to maintain render order
    if (this.frameCount % 60 === 0) {
      this.particles.sort((a, b) => a.layer - b.layer);
    }

    // Update wave system
    this.updateWaves(effectiveDelta);

    // Adaptive random particle injection to prevent pattern formation
    this.updateRandomInjection(this.time);
  }

  /**
   * Inject random particles to break up clustering patterns
   * Injection rate increases over time as patterns become more likely
   */
  private updateRandomInjection(currentTime: number): void {
    const timeSinceLastInjection = currentTime - this.lastInjectionTime;

    // Check if it's time to inject
    if (timeSinceLastInjection >= this.nextInjectionInterval) {
      // Calculate session age
      const sessionAge = currentTime - this.engineStartTime;

      // Determine injection interval based on session age
      let baseInterval: number;
      let variance: number;

      if (sessionAge < 90000) {
        // 0-90 seconds: Low injection rate (patterns haven't formed yet)
        baseInterval = 8000;
        variance = 4000;
      } else if (sessionAge < 180000) {
        // 90-180 seconds: Medium injection rate (patterns starting)
        baseInterval = 5000;
        variance = 3000;
      } else {
        // 180+ seconds: High injection rate (combat stable patterns)
        baseInterval = 3000;
        variance = 2000;
      }

      // Calculate next interval with randomization
      this.nextInjectionInterval = baseInterval + Math.random() * variance;

      // Inject a random "chaos particle"
      const layer = Math.floor(Math.random() * this.config.layers);
      const particle = createStreamParticle(
        this.canvas.width,
        this.canvas.height,
        layer,
        true // Force random screen position (not left edge)
      );
      this.particles.push(particle);

      // Update injection timer
      this.lastInjectionTime = currentTime;
    }
  }

  /**
   * Spawn a new wave ripple
   */
  private spawnWave(): void {
    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.width / dpr;

    this.waves.push({
      x: -300, // Start off-screen left
      speed: 150 + Math.random() * 100, // 150-250 px/sec
      amplitude: 0.5 + Math.random() * 0.4, // 0.5-0.9 visible push strength
      width: 250 + Math.random() * 150, // 250-400px wave width
      active: true
    });
  }

  /**
   * Update wave system - spawning and movement
   */
  private updateWaves(deltaTime: number): void {
    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.width / dpr;

    // Update wave timer
    this.timeSinceLastWave += deltaTime;

    // Spawn new wave if enough time has passed
    if (this.timeSinceLastWave >= this.waveInterval) {
      this.spawnWave();

      // 40% chance of spawning a second wave shortly after (creates 1-2 ripple effect)
      if (Math.random() < 0.4) {
        const secondWaveDelay = 800 + Math.random() * 1200; // 0.8-2 seconds later
        setTimeout(() => {
          if (this.isRunning) {
            this.spawnWave();
          }
        }, secondWaveDelay);
      }

      this.timeSinceLastWave = 0;
      // Randomize next interval (15-25 seconds for subtle, occasional waves)
      this.waveInterval = 15000 + Math.random() * 10000;
    }

    // Update existing waves
    for (const wave of this.waves) {
      if (!wave.active) continue;

      // Move wave right
      wave.x += (wave.speed * deltaTime) / 1000;

      // Deactivate wave if it's off-screen right
      if (wave.x > width + 300) {
        wave.active = false;
      }
    }

    // Remove inactive waves
    this.waves = this.waves.filter(w => w.active);

    // Apply wave forces to particles
    this.applyWaveForces();
  }

  /**
   * Apply wave forces to particles
   * Creates the "ripple to shore" pushing effect
   */
  private applyWaveForces(): void {
    for (const wave of this.waves) {
      if (!wave.active) continue;

      for (const particle of this.particles) {
        // Calculate distance from particle to wave center
        const distX = Math.abs(particle.x - wave.x);

        // Only affect particles within wave width
        if (distX < wave.width) {
          // Calculate wave influence using sine curve (0 → 1 → 0)
          // This creates the crest and trough effect
          const normalizedDist = distX / wave.width;
          const sineInfluence = Math.sin((1 - normalizedDist) * Math.PI);

          // Calculate push force (forward and slightly vertical for rolling effect)
          const pushStrength = wave.amplitude * sineInfluence;

          // Horizontal push (main forward motion) - strengthened for visible effect
          const pushX = pushStrength * 1.2;

          // Vertical undulation (rolling wave motion) - strengthened for visible rolling
          // Particles at crest go up, at trough go down
          const wavePhase = (1 - normalizedDist) * Math.PI;
          const pushY = Math.sin(wavePhase * 2) * pushStrength * 0.5;

          // Apply wave force to particle
          particle.applyWaveForce({ x: pushX, y: pushY });
        }
      }
    }
  }

  /**
   * Render frame
   */
  private render(): void {
    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.width / dpr;
    const height = this.canvas.height / dpr;

    // Clear canvas
    this.ctx.clearRect(0, 0, width, height);

    // Optional: Draw flow field lines (for debugging/visualization)
    if (this.config.showFlowLines) {
      this.renderFlowLines(width, height);
    }

    // Render wave ripple indicators with current hue
    for (const wave of this.waves) {
      if (!wave.active) continue;

      const gradient = this.ctx.createRadialGradient(
        wave.x, height / 2, 0,
        wave.x, height / 2, wave.width
      );
      gradient.addColorStop(0, `oklch(0.75 0.15 ${this.currentHue} / 0.08)`);
      gradient.addColorStop(0.5, `oklch(0.75 0.15 ${this.currentHue} / 0.04)`);
      gradient.addColorStop(1, `oklch(0.75 0.15 ${this.currentHue} / 0)`);

      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(wave.x - wave.width, 0, wave.width * 2, height);
    }

    // Render particles (back to front) with current hue
    for (const particle of this.particles) {
      particle.render(this.ctx, this.currentHue);
    }
  }

  /**
   * Render flow field lines (optional visualization)
   *
   * Shows the invisible forces guiding the particles
   * Creates a beautiful "wind map" effect
   */
  private renderFlowLines(width: number, height: number): void {
    const spacing = 30;
    const lineLength = 15;

    this.ctx.strokeStyle = `oklch(0.65 0.15 ${this.currentHue} / ${this.config.flowLineOpacity})`;
    this.ctx.lineWidth = 1;

    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        const flow = this.flowField.getFlow(x, y);

        const angle = Math.atan2(flow.y, flow.x);
        const magnitude = Math.sqrt(flow.x * flow.x + flow.y * flow.y);

        const length = lineLength * Math.min(magnitude * 10, 1);

        const x1 = x;
        const y1 = y;
        const x2 = x + Math.cos(angle) * length;
        const y2 = y + Math.sin(angle) * length;

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
      }
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

    // Update flow field
    this.flowField.resize(width, height);

    // Update particles
    for (const particle of this.particles) {
      particle.resize(width, height);
    }
  }

  /**
   * Update configuration
   */
  public updateConfig(config: Partial<EngineConfig>): void {
    this.config = { ...this.config, ...config };

    // Reinitialize particles if count changed
    if (config.particleCount !== undefined) {
      this.initializeParticles();
    }
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
    time: number;
  } {
    return {
      fps: this.fps,
      particleCount: this.particles.length,
      time: this.time
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
