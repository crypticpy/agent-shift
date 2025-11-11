import { Vector2D } from './Vector2D';
import { PARTICLE_CONFIG } from './config';
import { perlin } from './utils';

interface WindPuff {
  origin: Vector2D;      // Where the puff originates
  startTime: number;     // When it started
  duration: number;      // How long it lasts (ms)
  direction: Vector2D;   // Direction of the puff
  strength: number;      // Initial force strength
  radius: number;        // Affected area
}

export class ForceField {
  private baseDirection: Vector2D;
  private baseSpeed: number;
  private gustFrequency: number;
  private gustMagnitude: number;
  private turbulenceScale: number;
  private turbulenceStrength: number;
  private lastDirectionChange: number = 0;
  private currentDirection: Vector2D;

  // Wind puff system
  private windPuffs: WindPuff[] = [];
  private lastPuffTime: number = 0;
  private readonly PUFF_INTERVAL = 30000; // 30 seconds

  constructor() {
    const config = PARTICLE_CONFIG.WIND;
    this.baseDirection = new Vector2D(config.BASE_DIRECTION.x, config.BASE_DIRECTION.y).normalize();
    this.currentDirection = this.baseDirection.clone();
    this.baseSpeed = config.BASE_SPEED;
    this.gustFrequency = config.GUST_FREQUENCY;
    this.gustMagnitude = config.GUST_MAGNITUDE;
    this.turbulenceScale = config.TURBULENCE_SCALE;
    this.turbulenceStrength = config.TURBULENCE_STRENGTH;
  }

  /**
   * Create a wind puff from a random edge position
   */
  private createWindPuff(time: number, canvasWidth: number, canvasHeight: number): void {
    // Random edge position (50% from sides, 50% from top/bottom)
    let origin: Vector2D;
    let direction: Vector2D;

    if (Math.random() < 0.5) {
      // From left or right edge
      const fromLeft = Math.random() < 0.5;
      origin = new Vector2D(
        fromLeft ? 0 : canvasWidth,
        Math.random() * canvasHeight
      );
      direction = new Vector2D(fromLeft ? 1 : -1, (Math.random() - 0.5) * 0.4);
    } else {
      // From top or bottom edge
      const fromTop = Math.random() < 0.5;
      origin = new Vector2D(
        Math.random() * canvasWidth,
        fromTop ? 0 : canvasHeight
      );
      direction = new Vector2D((Math.random() - 0.5) * 0.4, fromTop ? 1 : -1);
    }

    const puff: WindPuff = {
      origin,
      startTime: time,
      duration: 2000 + Math.random() * 1000, // 2-3 seconds
      direction: direction.normalize(),
      strength: 400 + Math.random() * 200,   // 400-600 force
      radius: 300 + Math.random() * 200      // 300-500px affected area
    };

    this.windPuffs.push(puff);
  }

  /**
   * Calculate puff force at a position
   */
  private getPuffForceAt(position: Vector2D, time: number): Vector2D {
    let totalPuffForce = Vector2D.zero();

    // Clean up expired puffs and calculate forces
    this.windPuffs = this.windPuffs.filter(puff => {
      const age = time - puff.startTime;
      if (age > puff.duration) return false;

      // Calculate distance from puff origin
      const toParticle = position.subtract(puff.origin);
      const distance = toParticle.magnitude();

      // Only affect particles within radius
      if (distance > puff.radius) return true;

      // Calculate force falloff (stronger at origin, weaker at edge)
      const falloff = 1 - (distance / puff.radius);

      // Exponential ramp up/down (smooth pulse)
      const ageRatio = age / puff.duration;
      const pulse = Math.sin(ageRatio * Math.PI); // 0→1→0 over duration

      // Radial force: push particles away from origin in puff direction
      // Mix directional (70%) and radial (30%) for "dandelion" effect
      const directionalForce = puff.direction.multiply(0.7);
      const radialForce = toParticle.normalize().multiply(0.3);
      const combinedDirection = directionalForce.add(radialForce).normalize();

      const force = combinedDirection
        .multiply(puff.strength)
        .multiply(falloff)
        .multiply(pulse);

      totalPuffForce = totalPuffForce.add(force);
      return true;
    });

    return totalPuffForce;
  }

  getForceAt(position: Vector2D, time: number, canvasWidth?: number, canvasHeight?: number): Vector2D {
    // Create new puff every ~30 seconds if canvas dimensions provided
    if (canvasWidth && canvasHeight) {
      const timeSincePuff = time - this.lastPuffTime;
      if (timeSincePuff > this.PUFF_INTERVAL) {
        this.lastPuffTime = time;
        this.createWindPuff(time, canvasWidth, canvasHeight);
      }
    }

    // Occasionally change wind direction (every 8-15 seconds)
    const timeSinceChange = time - this.lastDirectionChange;
    if (timeSinceChange > 8000 + Math.random() * 7000) {
      this.lastDirectionChange = time;

      // Pick a new random direction (but favor horizontal flow)
      const angle = (Math.random() - 0.5) * Math.PI * 0.8; // ±72 degrees
      const newDir = new Vector2D(Math.cos(angle), Math.sin(angle));

      // Smoothly interpolate to new direction
      this.currentDirection = this.currentDirection.lerp(newDir, 0.1);
    }

    // Base wind force with current direction
    let baseForce = this.currentDirection.multiply(this.baseSpeed);

    // Dramatic gusts - occasional strong pushes
    const gustPhase = time * this.gustFrequency * 0.001;
    const gustSine = Math.sin(gustPhase);

    // Create occasional dramatic gusts (when sine is near peak)
    let gustModifier = 1.0;
    if (gustSine > 0.8) {
      // POWERFUL GUST! Push particles dramatically across the page
      gustModifier = 2.0 + (gustSine - 0.8) * 8.0; // Up to 3.6x wind during strong gust
    } else if (gustSine > 0.6) {
      // Medium gust
      gustModifier = 1.3 + (gustSine - 0.6) * 2.0;
    } else {
      // Normal gentle flow
      gustModifier = 0.8 + this.gustMagnitude * gustSine;
    }

    baseForce = baseForce.multiply(gustModifier);

    // Add swirling turbulence (creates vortices)
    const noiseX = perlin.noise(
      position.x * this.turbulenceScale,
      position.y * this.turbulenceScale,
      time * 0.0002
    );
    const noiseY = perlin.noise(
      position.x * this.turbulenceScale + 1000,
      position.y * this.turbulenceScale,
      time * 0.0002
    );

    // Make turbulence create circular patterns
    const turbulence = new Vector2D(
      (noiseX - 0.5) * this.turbulenceStrength * 150,
      (noiseY - 0.5) * this.turbulenceStrength * 150
    );

    // Calculate puff force (additive layer)
    const puffForce = this.getPuffForceAt(position, time);

    // Combine base forces (wind + turbulence) and scale for physics
    const scaledBaseForces = baseForce.add(turbulence).multiply(0.01);

    // Puff force is already scaled appropriately, just scale it down slightly for integration
    const scaledPuffForce = puffForce.multiply(0.02);

    // Combine all forces
    return scaledBaseForces.add(scaledPuffForce);
  }

  // Get wind strength at a point (for visualization or debugging)
  getWindStrength(position: Vector2D, time: number): number {
    return this.getForceAt(position, time).magnitude();
  }

  // Get wind direction at a point
  getWindDirection(position: Vector2D, time: number): Vector2D {
    return this.getForceAt(position, time).normalize();
  }
}
