import { Particle } from './Particle';
import { Vector2D } from './Vector2D';
import { PARTICLE_CONFIG } from './config';

export class FlockingBehavior {
  /**
   * Calculate flocking force for a particle based on its neighbors
   * Uses the Boids algorithm with three rules:
   * 1. Separation - avoid crowding neighbors
   * 2. Alignment - steer towards average heading
   * 3. Cohesion - steer towards average position
   */
  static calculate(particle: Particle, neighbors: Particle[]): Vector2D {
    // Filter out self from neighbors
    const actualNeighbors = neighbors.filter((n) => n !== particle);

    if (actualNeighbors.length === 0) {
      return Vector2D.zero();
    }

    const separation = this.separation(particle, actualNeighbors);
    const alignment = this.alignment(particle, actualNeighbors);
    const cohesion = this.cohesion(particle, actualNeighbors);

    const config = PARTICLE_CONFIG.FLOCKING;

    // Combine forces with weights
    return separation
      .multiply(config.SEPARATION_WEIGHT)
      .add(alignment.multiply(config.ALIGNMENT_WEIGHT))
      .add(cohesion.multiply(config.COHESION_WEIGHT));
  }

  /**
   * Separation - Avoid crowding local flockmates
   * Steer away from neighbors that are too close
   */
  private static separation(particle: Particle, neighbors: Particle[]): Vector2D {
    const desiredDistance = PARTICLE_CONFIG.FLOCKING.SEPARATION_DISTANCE;
    let steer = Vector2D.zero();
    let count = 0;

    for (const neighbor of neighbors) {
      const distance = particle.position.distance(neighbor.position);

      if (distance > 0 && distance < desiredDistance) {
        // Calculate repulsion vector away from neighbor
        const diff = particle.position.subtract(neighbor.position);
        const normalized = diff.normalize();
        // Weight by distance (closer = stronger repulsion)
        const weighted = normalized.divide(distance);
        steer = steer.add(weighted);
        count++;
      }
    }

    if (count > 0) {
      steer = steer.divide(count);

      // Steering = desired - velocity
      if (steer.magnitude() > 0) {
        steer = steer.setMagnitude(PARTICLE_CONFIG.FLOCKING.MAX_SPEED);
        steer = steer.subtract(particle.velocity);
        steer = steer.limit(PARTICLE_CONFIG.FLOCKING.MAX_FORCE);
      }
    }

    return steer;
  }

  /**
   * Alignment - Steer towards the average heading of local flockmates
   */
  private static alignment(particle: Particle, neighbors: Particle[]): Vector2D {
    const perceptionRadius = PARTICLE_CONFIG.FLOCKING.PERCEPTION_RADIUS;
    let avgVelocity = Vector2D.zero();
    let count = 0;

    for (const neighbor of neighbors) {
      const distance = particle.position.distance(neighbor.position);

      if (distance > 0 && distance < perceptionRadius) {
        avgVelocity = avgVelocity.add(neighbor.velocity);
        count++;
      }
    }

    if (count > 0) {
      avgVelocity = avgVelocity.divide(count);
      avgVelocity = avgVelocity.setMagnitude(PARTICLE_CONFIG.FLOCKING.MAX_SPEED);

      // Steering = desired - velocity
      const steer = avgVelocity.subtract(particle.velocity);
      return steer.limit(PARTICLE_CONFIG.FLOCKING.MAX_FORCE);
    }

    return Vector2D.zero();
  }

  /**
   * Cohesion - Steer towards the average position of local flockmates
   */
  private static cohesion(particle: Particle, neighbors: Particle[]): Vector2D {
    const perceptionRadius = PARTICLE_CONFIG.FLOCKING.PERCEPTION_RADIUS;
    let centerOfMass = Vector2D.zero();
    let count = 0;

    for (const neighbor of neighbors) {
      const distance = particle.position.distance(neighbor.position);

      if (distance > 0 && distance < perceptionRadius) {
        centerOfMass = centerOfMass.add(neighbor.position);
        count++;
      }
    }

    if (count > 0) {
      centerOfMass = centerOfMass.divide(count);

      // Desired direction to center of mass
      const desired = centerOfMass.subtract(particle.position);

      if (desired.magnitude() > 0) {
        const desiredNormalized = desired.setMagnitude(PARTICLE_CONFIG.FLOCKING.MAX_SPEED);

        // Steering = desired - velocity
        const steer = desiredNormalized.subtract(particle.velocity);
        return steer.limit(PARTICLE_CONFIG.FLOCKING.MAX_FORCE);
      }
    }

    return Vector2D.zero();
  }
}
