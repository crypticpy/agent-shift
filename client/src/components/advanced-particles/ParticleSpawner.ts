import { Particle, Rectangle } from './Particle';
import { Vector2D } from './Vector2D';
import { PARTICLE_CONFIG } from './config';
import { randomRange, randomGaussian, weightedRandom } from './utils';

enum Edge {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}

export class ParticleSpawner {
  private bounds: Rectangle;
  private spawnAccumulator: number = 0;

  constructor(bounds: Rectangle) {
    this.bounds = bounds;
  }

  updateBounds(bounds: Rectangle): void {
    this.bounds = bounds;
  }

  update(deltaTime: number, currentCount: number): Particle[] {
    const newParticles: Particle[] = [];

    // Don't spawn if at max count
    if (currentCount >= PARTICLE_CONFIG.MAX_COUNT) {
      return newParticles;
    }

    // Calculate spawn rate (increase if below target)
    let spawnRate = PARTICLE_CONFIG.SPAWN_RATE;
    if (currentCount < PARTICLE_CONFIG.TARGET_COUNT * 0.8) {
      spawnRate *= 1.5; // Boost spawn rate if significantly below target
    }

    // Accumulate spawn time
    this.spawnAccumulator += deltaTime * spawnRate;

    // Spawn particles based on accumulator
    while (this.spawnAccumulator >= 1 && currentCount + newParticles.length < PARTICLE_CONFIG.MAX_COUNT) {
      newParticles.push(this.spawnParticle());
      this.spawnAccumulator -= 1;
    }

    return newParticles;
  }

  private spawnParticle(): Particle {
    // Choose spawn edge (weighted by wind direction)
    const edge = this.chooseSpawnEdge();

    // Get position on edge
    const position = this.getPositionOnEdge(edge);

    // Calculate initial velocity towards canvas center
    const velocity = this.getInitialVelocity(position, edge);

    // Random size from power distribution (favors smaller)
    const sizeRandom = Math.pow(Math.random(), 1.5); // Power law
    const size =
      PARTICLE_CONFIG.SIZE_RANGE.min +
      sizeRandom * (PARTICLE_CONFIG.SIZE_RANGE.max - PARTICLE_CONFIG.SIZE_RANGE.min);

    // Choose color from weighted palette
    const colorData = weightedRandom(
      PARTICLE_CONFIG.COLORS.map((c) => ({ item: c.color, weight: c.weight }))
    );

    // Random lifetime with Gaussian distribution
    const lifetime = randomGaussian(
      (PARTICLE_CONFIG.LIFETIME_RANGE.min + PARTICLE_CONFIG.LIFETIME_RANGE.max) / 2,
      (PARTICLE_CONFIG.LIFETIME_RANGE.max - PARTICLE_CONFIG.LIFETIME_RANGE.min) / 6
    );
    const clampedLifetime = Math.max(
      PARTICLE_CONFIG.LIFETIME_RANGE.min,
      Math.min(PARTICLE_CONFIG.LIFETIME_RANGE.max, lifetime)
    );

    return new Particle(position, velocity, size, colorData, clampedLifetime);
  }

  private chooseSpawnEdge(): Edge {
    // Weighted by wind direction (right edge = particles blown in from right)
    const weights = [
      { edge: Edge.TOP, weight: 0.25 },
      { edge: Edge.RIGHT, weight: 0.4 }, // Wind blows from right
      { edge: Edge.BOTTOM, weight: 0.25 },
      { edge: Edge.LEFT, weight: 0.1 }, // Against wind
    ];

    return weightedRandom(weights.map((w) => ({ item: w.edge, weight: w.weight })));
  }

  private getPositionOnEdge(edge: Edge): Vector2D {
    const { x, y, width, height } = this.bounds;

    switch (edge) {
      case Edge.TOP:
        return new Vector2D(randomRange(x, x + width), y);
      case Edge.RIGHT:
        return new Vector2D(x + width, randomRange(y, y + height));
      case Edge.BOTTOM:
        return new Vector2D(randomRange(x, x + width), y + height);
      case Edge.LEFT:
        return new Vector2D(x, randomRange(y, y + height));
    }
  }

  private getInitialVelocity(position: Vector2D, edge: Edge): Vector2D {
    const { x, y, width, height } = this.bounds;
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    // Target point near center with some randomness
    const targetX = centerX + randomRange(-100, 100);
    const targetY = centerY + randomRange(-100, 100);
    const target = new Vector2D(targetX, targetY);

    // Direction towards target
    const direction = target.subtract(position).normalize();

    // Random speed
    const speed = randomRange(10, 50);

    return direction.multiply(speed);
  }
}
