import { Particle, Rectangle } from './Particle';
import { Vector2D } from './Vector2D';

export interface Circle {
  x: number;
  y: number;
  radius: number;
}

export class Quadtree {
  private boundary: Rectangle;
  private capacity: number;
  private particles: Particle[];
  private divided: boolean;
  private northeast?: Quadtree;
  private northwest?: Quadtree;
  private southeast?: Quadtree;
  private southwest?: Quadtree;

  constructor(boundary: Rectangle, capacity: number = 4) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.particles = [];
    this.divided = false;
  }

  insert(particle: Particle): boolean {
    // Ignore particles outside boundary
    if (!this.contains(particle.position)) {
      return false;
    }

    // If capacity not reached, add particle here
    if (this.particles.length < this.capacity) {
      this.particles.push(particle);
      return true;
    }

    // Otherwise, subdivide and add to children
    if (!this.divided) {
      this.subdivide();
    }

    return (
      this.northeast!.insert(particle) ||
      this.northwest!.insert(particle) ||
      this.southeast!.insert(particle) ||
      this.southwest!.insert(particle)
    );
  }

  private contains(point: Vector2D): boolean {
    return (
      point.x >= this.boundary.x &&
      point.x < this.boundary.x + this.boundary.width &&
      point.y >= this.boundary.y &&
      point.y < this.boundary.y + this.boundary.height
    );
  }

  private subdivide(): void {
    const x = this.boundary.x;
    const y = this.boundary.y;
    const w = this.boundary.width / 2;
    const h = this.boundary.height / 2;

    const ne = { x: x + w, y: y, width: w, height: h };
    const nw = { x: x, y: y, width: w, height: h };
    const se = { x: x + w, y: y + h, width: w, height: h };
    const sw = { x: x, y: y + h, width: w, height: h };

    this.northeast = new Quadtree(ne, this.capacity);
    this.northwest = new Quadtree(nw, this.capacity);
    this.southeast = new Quadtree(se, this.capacity);
    this.southwest = new Quadtree(sw, this.capacity);

    this.divided = true;

    // Move existing particles to children
    for (const particle of this.particles) {
      this.northeast.insert(particle) ||
      this.northwest.insert(particle) ||
      this.southeast.insert(particle) ||
      this.southwest.insert(particle);
    }

    // Clear current node (particles now in children)
    this.particles = [];
  }

  query(range: Circle, found: Particle[] = []): Particle[] {
    // If range doesn't intersect boundary, return empty
    if (!this.intersects(range)) {
      return found;
    }

    // Check particles at this level
    for (const particle of this.particles) {
      if (this.circleContains(range, particle.position)) {
        found.push(particle);
      }
    }

    // If divided, check children
    if (this.divided) {
      this.northwest!.query(range, found);
      this.northeast!.query(range, found);
      this.southwest!.query(range, found);
      this.southeast!.query(range, found);
    }

    return found;
  }

  private intersects(range: Circle): boolean {
    // Find closest point on rectangle to circle
    const closestX = Math.max(
      this.boundary.x,
      Math.min(range.x, this.boundary.x + this.boundary.width)
    );
    const closestY = Math.max(
      this.boundary.y,
      Math.min(range.y, this.boundary.y + this.boundary.height)
    );

    // Check if closest point is within circle
    const dx = range.x - closestX;
    const dy = range.y - closestY;
    return dx * dx + dy * dy < range.radius * range.radius;
  }

  private circleContains(circle: Circle, point: Vector2D): boolean {
    const dx = point.x - circle.x;
    const dy = point.y - circle.y;
    return dx * dx + dy * dy < circle.radius * circle.radius;
  }
}
