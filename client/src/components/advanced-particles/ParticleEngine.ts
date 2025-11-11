import { Particle, Rectangle } from './Particle';
import { Vector2D } from './Vector2D';
import { Quadtree } from './Quadtree';
import { ForceField } from './ForceField';
import { FlockingBehavior } from './FlockingBehavior';
import { ParticleSpawner } from './ParticleSpawner';
import { PARTICLE_CONFIG } from './config';

export interface ParticleEngineOptions {
  targetCount?: number;
  windSpeed?: number;
  flockingEnabled?: boolean;
}

export class ParticleEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private forceField: ForceField;
  private spawner: ParticleSpawner;
  private animationId: number | null = null;
  private lastTime: number = 0;
  private flockingEnabled: boolean = true;

  constructor(canvas: HTMLCanvasElement, options: ParticleEngineOptions = {}) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context from canvas');
    }
    this.ctx = context;

    // Initialize systems
    this.forceField = new ForceField();
    this.spawner = new ParticleSpawner(this.getBounds());
    this.flockingEnabled = options.flockingEnabled ?? true;

    // Set up canvas size
    this.resizeCanvas();

    // Handle resize
    window.addEventListener('resize', this.handleResize);
  }

  private handleResize = (): void => {
    this.resizeCanvas();
    this.spawner.updateBounds(this.getBounds());
  };

  private resizeCanvas(): void {
    const rect = this.canvas.getBoundingClientRect();

    // Set canvas size to match display size (no DPR scaling for simplicity)
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  private getBounds(): Rectangle {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: 0,
      y: 0,
      width: rect.width,
      height: rect.height,
    };
  }

  start(): void {
    this.lastTime = performance.now();
    this.loop();
  }

  stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    window.removeEventListener('resize', this.handleResize);
  }

  private loop = (): void => {
    const currentTime = performance.now();
    const deltaTime = Math.min((currentTime - this.lastTime) / 1000, 0.1); // Cap at 100ms
    this.lastTime = currentTime;

    // Clear canvas
    const bounds = this.getBounds();
    this.ctx.clearRect(0, 0, bounds.width, bounds.height);

    // Build quadtree for spatial queries
    const quadtree = new Quadtree(bounds);
    this.particles.forEach((p) => quadtree.insert(p));

    // Update and draw particles
    for (const particle of this.particles) {
      // Apply wind force
      const windForce = this.forceField.getForceAt(particle.position, currentTime);
      particle.applyForce(windForce);

      // Apply flocking forces
      if (this.flockingEnabled) {
        const neighbors = quadtree.query({
          x: particle.position.x,
          y: particle.position.y,
          radius: PARTICLE_CONFIG.FLOCKING.PERCEPTION_RADIUS,
        });

        if (neighbors.length > 1) {
          const flockForce = FlockingBehavior.calculate(particle, neighbors);
          particle.applyForce(flockForce);
        }
      }

      // Apply edge avoidance
      const edgeForce = particle.avoidEdges(bounds);
      particle.applyForce(edgeForce.multiply(PARTICLE_CONFIG.PHYSICS.EDGE_FORCE_MULTIPLIER));

      // Apply buoyancy (upward force)
      const buoyancy = new Vector2D(0, PARTICLE_CONFIG.PHYSICS.BUOYANCY);
      particle.applyForce(buoyancy.multiply(1 / particle.mass));

      // Update particle physics
      particle.update(deltaTime);

      // Draw particle
      particle.draw(this.ctx);
    }

    // Remove dead or off-screen particles
    this.particles = this.particles.filter(
      (p) => p.isAlive() && !p.isOffScreen(bounds)
    );

    // Spawn new particles
    const newParticles = this.spawner.update(deltaTime, this.particles.length);
    this.particles.push(...newParticles);

    // Continue loop
    this.animationId = requestAnimationFrame(this.loop);
  };

  // Public API
  getParticleCount(): number {
    return this.particles.length;
  }

  setFlockingEnabled(enabled: boolean): void {
    this.flockingEnabled = enabled;
  }
}
