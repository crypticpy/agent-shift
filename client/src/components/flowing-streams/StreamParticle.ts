/**
 * Stream Particle with Trail Rendering
 *
 * Particles that follow the flow field and leave beautiful motion blur trails.
 * Uses alpha decay for smooth trail rendering without canvas blur.
 */

import { FlowField, Vector2D } from './FlowField';

export interface ParticleOptions {
  x: number;
  y: number;
  layer: number;        // Depth layer (0-3) for parallax
  speed: number;        // Movement speed multiplier
  size: number;         // Particle size
  trailLength: number;  // How many trail segments
}

interface TrailPoint {
  x: number;
  y: number;
}

export class StreamParticle {
  // Position and movement
  public x: number;
  public y: number;
  private vx: number = 0;
  private vy: number = 0;

  // Visual properties
  public layer: number;
  public speed: number;
  public size: number;
  public opacity: number;

  // Trail rendering
  private trail: TrailPoint[] = [];
  private trailLength: number;

  // Lifecycle
  private age: number = 0;
  private lifespan: number;
  private isDead: boolean = false;

  // Canvas bounds
  private width: number;
  private height: number;

  constructor(options: ParticleOptions, width: number, height: number) {
    this.x = options.x;
    this.y = options.y;
    this.layer = options.layer;
    this.speed = options.speed;
    this.size = options.size;
    this.trailLength = options.trailLength;
    this.width = width;
    this.height = height;

    // Random lifespan to create natural variation (extra long for winding curly paths)
    this.lifespan = 6000 + Math.random() * 3000;

    // Opacity varies by layer for depth effect
    this.opacity = 0.2 + (this.layer / 3) * 0.3; // 0.2 to 0.5

    // Initialize trail
    this.trail = [{ x: this.x, y: this.y }];
  }

  /**
   * Update particle position based on flow field
   */
  public update(flowField: FlowField, deltaTime: number): void {
    this.age++;

    // Get flow vector at current position
    const flow = flowField.getFlow(this.x, this.y);

    // Apply flow with speed multiplier and layer-based parallax
    const layerSpeed = 0.5 + (this.layer / 3) * 0.5; // 0.5 to 1.0
    const speedMultiplier = this.speed * layerSpeed * deltaTime * 0.07;

    this.vx = flow.x * speedMultiplier;
    this.vy = flow.y * speedMultiplier;

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Add current position to trail
    this.trail.unshift({ x: this.x, y: this.y });

    // Limit trail length
    if (this.trail.length > this.trailLength) {
      this.trail.pop();
    }

    // Check if particle is out of bounds or too old
    this.checkBounds();
    if (this.age > this.lifespan) {
      this.isDead = true;
    }
  }

  /**
   * Apply wave ripple force to particle
   * Called by engine when wave passes through particle's position
   */
  public applyWaveForce(force: { x: number; y: number }): void {
    // Add wave force to current velocity
    // Wave forces are additive with flow field forces
    this.vx += force.x * 1.5;
    this.vy += force.y * 1.5;

    // Update position with wave influence (visible push)
    this.x += force.x * 1.0; // Clear immediate push from wave
    this.y += force.y * 1.0; // Visible vertical undulation
  }

  /**
   * Wrap or respawn particle when it goes out of bounds
   * Randomizes Y position to prevent horizontal lane locking
   */
  private checkBounds(): void {
    const margin = 50;

    // If particle goes too far off screen, respawn with randomized Y position
    // This prevents stable horizontal row formation
    if (this.x > this.width + margin) {
      this.respawn(-margin, Math.random() * this.height);
    } else if (this.x < -margin) {
      this.respawn(this.width + margin, Math.random() * this.height);
    }

    if (this.y > this.height + margin) {
      this.respawn(Math.random() * this.width, -margin);
    } else if (this.y < -margin) {
      this.respawn(Math.random() * this.width, this.height + margin);
    }
  }

  /**
   * Respawn particle at a new position
   */
  private respawn(x: number, y: number): void {
    this.x = x;
    this.y = y;
    this.trail = [{ x, y }];
    this.age = 0;
  }

  /**
   * Calculate color for current hue based on layer depth
   * Maintains layer-based depth variations while cycling hue
   */
  private getColorForHue(hue: number): { l: number; c: number; h: number } {
    // Layer-specific lightness and chroma for depth perception
    const layerConfigs = [
      { l: 0.75, c: 0.15 }, // Layer 0: Soft, lighter (background)
      { l: 0.73, c: 0.17 }, // Layer 1: Medium-light
      { l: 0.70, c: 0.19 }, // Layer 2: Medium-rich
      { l: 0.68, c: 0.21 }  // Layer 3: Rich, darker (foreground)
    ];

    const config = layerConfigs[this.layer] || layerConfigs[0];

    return {
      l: config.l,
      c: config.c,
      h: hue
    };
  }

  /**
   * Render particle as a simple circle with current hue
   */
  public render(ctx: CanvasRenderingContext2D, currentHue: number): void {
    // Get color based on current global hue and layer depth
    const { l, c, h } = this.getColorForHue(currentHue);

    // Draw particle as a simple circle with soft glow
    const particleColor = `oklch(${l} ${c} ${h} / ${this.opacity})`;
    ctx.fillStyle = particleColor;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    // Optional: Add a subtle glow effect with a slightly larger, more transparent circle
    const glowColor = `oklch(${l} ${c} ${h} / ${this.opacity * 0.3})`;
    ctx.fillStyle = glowColor;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 1.8, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * Check if particle should be removed
   */
  public shouldRemove(): boolean {
    return this.isDead;
  }

  /**
   * Update canvas dimensions
   */
  public resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  /**
   * Get particle data for debugging
   */
  public getDebugInfo(): { x: number; y: number; vx: number; vy: number; age: number } {
    return {
      x: this.x,
      y: this.y,
      vx: this.vx,
      vy: this.vy,
      age: this.age
    };
  }
}

/**
 * Factory function to create particles with smart distribution
 */
export function createStreamParticle(
  width: number,
  height: number,
  layer: number,
  isInitialSpawn: boolean = false
): StreamParticle {
  // Initial spawn: distribute across screen to avoid lineup
  // Respawn: enter from off-screen left for flowing effect
  const x = isInitialSpawn
    ? Math.random() * width
    : -50 - Math.random() * 100;
  const y = Math.random() * height;

  // Speed varies by layer (faster = closer) - reduced for slower flow
  const speed = 0.5 + (layer / 3) * 0.4; // 0.5 to 0.9

  // Size varies by layer (bigger = closer)
  const size = 1.2 + (layer / 3) * 1.3; // 1.2 to 2.5

  // Trail length varies by layer (longer = faster/closer)
  const trailLength = 15 + layer * 8; // 15 to 39

  const options: ParticleOptions = {
    x,
    y,
    layer,
    speed,
    size,
    trailLength
  };

  return new StreamParticle(options, width, height);
}
