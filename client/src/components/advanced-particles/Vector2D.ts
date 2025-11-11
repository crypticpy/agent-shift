export class Vector2D {
  constructor(
    public x: number = 0,
    public y: number = 0
  ) {}

  static zero(): Vector2D {
    return new Vector2D(0, 0);
  }

  static fromAngle(angle: number, magnitude: number = 1): Vector2D {
    return new Vector2D(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
  }

  static random(): Vector2D {
    const angle = Math.random() * Math.PI * 2;
    return Vector2D.fromAngle(angle);
  }

  clone(): Vector2D {
    return new Vector2D(this.x, this.y);
  }

  add(v: Vector2D): Vector2D {
    return new Vector2D(this.x + v.x, this.y + v.y);
  }

  subtract(v: Vector2D): Vector2D {
    return new Vector2D(this.x - v.x, this.y - v.y);
  }

  multiply(scalar: number): Vector2D {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  divide(scalar: number): Vector2D {
    if (scalar === 0) return this.clone();
    return new Vector2D(this.x / scalar, this.y / scalar);
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  magnitudeSquared(): number {
    return this.x * this.x + this.y * this.y;
  }

  normalize(): Vector2D {
    const mag = this.magnitude();
    if (mag === 0) return Vector2D.zero();
    return this.divide(mag);
  }

  limit(max: number): Vector2D {
    const magSq = this.magnitudeSquared();
    if (magSq > max * max) {
      return this.normalize().multiply(max);
    }
    return this.clone();
  }

  setMagnitude(newMag: number): Vector2D {
    const mag = this.magnitude();
    if (mag === 0) return Vector2D.zero();
    return this.normalize().multiply(newMag);
  }

  distance(v: Vector2D): number {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  distanceSquared(v: Vector2D): number {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  dot(v: Vector2D): number {
    return this.x * v.x + this.y * v.y;
  }

  angle(): number {
    return Math.atan2(this.y, this.x);
  }

  angleBetween(v: Vector2D): number {
    const mag1 = this.magnitude();
    const mag2 = v.magnitude();

    // Protect against zero magnitude vectors
    if (mag1 === 0 || mag2 === 0) return 0;

    // Calculate dot product ratio
    const dotProduct = this.dot(v);
    const ratio = dotProduct / (mag1 * mag2);

    // Clamp to [-1, 1] to handle floating point errors
    const clampedRatio = Math.max(-1, Math.min(1, ratio));

    return Math.acos(clampedRatio);
  }

  rotate(angle: number): Vector2D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vector2D(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }

  lerp(v: Vector2D, amount: number): Vector2D {
    return new Vector2D(
      this.x + (v.x - this.x) * amount,
      this.y + (v.y - this.y) * amount
    );
  }
}
