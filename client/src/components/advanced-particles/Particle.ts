import { Vector2D } from './Vector2D';
import { PARTICLE_CONFIG } from './config';
import { easeInCubic, easeOutCubic, clamp } from './utils';

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Particle {
  position: Vector2D;
  velocity: Vector2D;
  acceleration: Vector2D;
  mass: number;
  size: number;
  baseOpacity: number;
  color: string;
  lifetime: number;
  age: number;

  constructor(
    position: Vector2D,
    velocity: Vector2D,
    size: number,
    color: string,
    lifetime: number
  ) {
    this.position = position.clone();
    this.velocity = velocity.clone();
    this.acceleration = Vector2D.zero();
    this.size = Math.max(size, 1); // Ensure size is at least 1
    this.mass = Math.max(this.size / 4, 0.1); // Mass proportional to size, minimum 0.1
    this.color = color;
    this.lifetime = lifetime;
    this.age = 0;

    // Base opacity varies by size
    const { min, max } = PARTICLE_CONFIG.OPACITY.BASE_RANGE;
    const sizeRatio = (size - PARTICLE_CONFIG.SIZE_RANGE.min) /
                      (PARTICLE_CONFIG.SIZE_RANGE.max - PARTICLE_CONFIG.SIZE_RANGE.min);
    this.baseOpacity = min + sizeRatio * (max - min);
  }

  applyForce(force: Vector2D): void {
    // F = ma, so a = F/m
    const f = force.divide(this.mass);
    this.acceleration = this.acceleration.add(f);
  }

  update(deltaTime: number): void {
    // Update physics
    this.velocity = this.velocity.add(this.acceleration.multiply(deltaTime));

    // Apply max speed limit
    this.velocity = this.velocity.limit(PARTICLE_CONFIG.FLOCKING.MAX_SPEED);

    // Apply friction
    this.velocity = this.velocity.multiply(PARTICLE_CONFIG.PHYSICS.FRICTION);

    this.position = this.position.add(this.velocity.multiply(deltaTime));

    // Reset acceleration
    this.acceleration = Vector2D.zero();

    // Age the particle
    this.age += deltaTime * 1000; // Convert to milliseconds
  }

  avoidEdges(bounds: Rectangle): Vector2D {
    const margin = 100;
    const turnForce = 5;
    let steer = Vector2D.zero();

    // Left edge
    if (this.position.x < margin) {
      const dist = Math.max(this.position.x, 1); // Prevent division by zero
      steer = steer.add(new Vector2D(turnForce / dist, 0));
    }
    // Right edge
    if (this.position.x > bounds.width - margin) {
      const dist = Math.max(bounds.width - this.position.x, 1);
      steer = steer.add(new Vector2D(-turnForce / dist, 0));
    }
    // Top edge
    if (this.position.y < margin) {
      const dist = Math.max(this.position.y, 1);
      steer = steer.add(new Vector2D(0, turnForce / dist));
    }
    // Bottom edge
    if (this.position.y > bounds.height - margin) {
      const dist = Math.max(bounds.height - this.position.y, 1);
      steer = steer.add(new Vector2D(0, -turnForce / dist));
    }

    return steer;
  }

  calculateOpacity(): number {
    const progress = this.age / this.lifetime;
    const { FADE_IN_PERCENT, FADE_OUT_PERCENT, PULSE_AMOUNT, PULSE_SPEED } = PARTICLE_CONFIG.OPACITY;

    let opacity = this.baseOpacity;

    // Fade in
    if (progress < FADE_IN_PERCENT) {
      opacity *= easeInCubic(progress / FADE_IN_PERCENT);
    }
    // Fade out
    else if (progress > 1 - FADE_OUT_PERCENT) {
      const remaining = (1 - progress) / FADE_OUT_PERCENT;
      opacity *= easeOutCubic(remaining);
    }
    // Subtle pulsing in middle
    else {
      const pulse = 1 + PULSE_AMOUNT * Math.sin(this.age * PULSE_SPEED);
      opacity *= pulse;
    }

    return clamp(opacity, 0, 1);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const opacity = this.calculateOpacity();

    ctx.save();

    // Draw glow effect
    ctx.globalAlpha = opacity * 0.3;
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 20;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    // Draw particle core
    ctx.globalAlpha = opacity;
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  isAlive(): boolean {
    return this.age < this.lifetime;
  }

  isOffScreen(bounds: Rectangle, margin: number = 50): boolean {
    return (
      this.position.x < -margin ||
      this.position.x > bounds.width + margin ||
      this.position.y < -margin ||
      this.position.y > bounds.height + margin
    );
  }
}
