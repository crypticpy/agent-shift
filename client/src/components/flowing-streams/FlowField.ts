/**
 * Flow Field Generator with Curl Noise
 *
 * Creates a 2D vector field using curl noise, which produces smooth,
 * swirling, incompressible flow patterns. Perfect for creating organic
 * "river-like" particle flows.
 */

import { PerlinNoise } from './PerlinNoise';

export interface Vector2D {
  x: number;
  y: number;
}

export interface ConfluencePoint {
  x: number;
  y: number;
  strength: number; // How strong the vortex is
  radius: number;   // Influence radius
  clockwise: boolean;
}

export class FlowField {
  private noise: PerlinNoise;
  private width: number;
  private height: number;
  private resolution: number;
  private cols: number;
  private rows: number;
  private field: Vector2D[][];
  private confluencePoints: ConfluencePoint[];

  // Flow parameters
  private noiseScale: number = 0.003; // How zoomed in the noise is
  private timeScale: number = 0.0002;  // How fast the flow evolves
  private curlScale: number = 0.01;    // Finite difference step for curl calculation

  constructor(
    width: number,
    height: number,
    resolution: number = 20,
    seed?: number
  ) {
    this.noise = new PerlinNoise(seed);
    this.width = width;
    this.height = height;
    this.resolution = resolution;

    // Calculate grid dimensions
    this.cols = Math.ceil(width / resolution);
    this.rows = Math.ceil(height / resolution);

    // Initialize field
    this.field = Array(this.cols)
      .fill(null)
      .map(() => Array(this.rows).fill({ x: 0, y: 0 }));

    // Create strategic confluence points (vortex centers)
    this.confluencePoints = this.createConfluencePoints();
  }

  /**
   * Create confluence points where streams converge and swirl
   * These create the beautiful vortex effects
   */
  private createConfluencePoints(): ConfluencePoint[] {
    const points: ConfluencePoint[] = [];

    // Create 2-3 strategic vortex points across the canvas
    // Positioned to create interesting flow patterns

    // Left-center vortex (weakened to prevent particle trapping)
    points.push({
      x: this.width * 0.25,
      y: this.height * 0.4,
      strength: 0.15,
      radius: 200,
      clockwise: true
    });

    // Right-center vortex (counter-rotating, weakened)
    points.push({
      x: this.width * 0.75,
      y: this.height * 0.6,
      strength: 0.12,
      radius: 180,
      clockwise: false
    });

    // Optional third point for complexity (weakened)
    if (this.width > 800) {
      points.push({
        x: this.width * 0.5,
        y: this.height * 0.3,
        strength: 0.1,
        radius: 150,
        clockwise: true
      });
    }

    return points;
  }

  /**
   * Calculate curl noise at a point
   *
   * Curl noise is created by taking the curl of a potential field.
   * For 2D, we use: curl = (∂P/∂y, -∂P/∂x) where P is our noise potential.
   *
   * This creates divergence-free flow (incompressible, like fluids).
   */
  private calculateCurl(x: number, y: number, time: number): Vector2D {
    const eps = this.curlScale;

    // Sample noise at slightly offset positions
    const n1 = this.noise.fbm(
      x * this.noiseScale,
      (y + eps) * this.noiseScale,
      time * this.timeScale,
      3,
      0.5
    );

    const n2 = this.noise.fbm(
      x * this.noiseScale,
      (y - eps) * this.noiseScale,
      time * this.timeScale,
      3,
      0.5
    );

    const n3 = this.noise.fbm(
      (x + eps) * this.noiseScale,
      y * this.noiseScale,
      time * this.timeScale,
      3,
      0.5
    );

    const n4 = this.noise.fbm(
      (x - eps) * this.noiseScale,
      y * this.noiseScale,
      time * this.timeScale,
      3,
      0.5
    );

    // Calculate curl using finite differences
    const dx = (n1 - n2) / (2 * eps);
    const dy = -(n3 - n4) / (2 * eps);

    return { x: dx, y: dy };
  }

  /**
   * Calculate vortex influence at a point
   *
   * Creates swirling motion around confluence points
   */
  private calculateVortexInfluence(x: number, y: number): Vector2D {
    let totalX = 0;
    let totalY = 0;

    for (const point of this.confluencePoints) {
      const dx = x - point.x;
      const dy = y - point.y;
      const distSq = dx * dx + dy * dy;
      const dist = Math.sqrt(distSq);

      // Only influence within radius
      if (dist < point.radius && dist > 0) {
        // Falloff based on distance
        const falloff = 1 - (dist / point.radius);
        const falloffCurve = falloff * falloff; // Quadratic falloff

        // Tangential velocity for vortex (perpendicular to radius)
        const angle = Math.atan2(dy, dx);
        const tangentAngle = angle + (point.clockwise ? Math.PI / 2 : -Math.PI / 2);

        // Strength decreases with distance
        const strength = point.strength * falloffCurve;

        totalX += Math.cos(tangentAngle) * strength;
        totalY += Math.sin(tangentAngle) * strength;
      }
    }

    return { x: totalX, y: totalY };
  }

  /**
   * Add directional bias to create left-to-right flow
   *
   * Creates the "river flowing" effect
   */
  private calculateDirectionalBias(x: number, y: number): Vector2D {
    // Stronger flow in the middle, weaker at edges (like a river)
    const centerY = this.height / 2;
    const distFromCenter = Math.abs(y - centerY) / (this.height / 2);
    const centerStrength = 1 - (distFromCenter * distFromCenter * 0.5);

    // Left-to-right bias (strengthened for full-screen flow)
    const biasX = 0.45 * centerStrength;

    // Slight vertical variation for organic feel
    const wavyY = Math.sin(x * 0.002) * 0.02;

    return { x: biasX, y: wavyY };
  }

  /**
   * Update the flow field for the current time
   */
  public update(time: number): void {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const x = i * this.resolution;
        const y = j * this.resolution;

        // Combine multiple flow influences
        const curl = this.calculateCurl(x, y, time);
        const vortex = this.calculateVortexInfluence(x, y);
        const bias = this.calculateDirectionalBias(x, y);

        // Blend all influences (curl weighted higher for organic swimming motion)
        const combinedX = curl.x * 0.45 + vortex.x * 0.25 + bias.x * 0.3;
        const combinedY = curl.y * 0.45 + vortex.y * 0.25 + bias.y * 0.3;

        this.field[i][j] = {
          x: combinedX,
          y: combinedY
        };
      }
    }
  }

  /**
   * Get flow vector at any position (with bilinear interpolation)
   */
  public getFlow(x: number, y: number): Vector2D {
    // Clamp to field bounds
    x = Math.max(0, Math.min(x, this.width - 1));
    y = Math.max(0, Math.min(y, this.height - 1));

    // Get grid position
    const col = x / this.resolution;
    const row = y / this.resolution;

    // Grid cell indices
    const col0 = Math.floor(col);
    const col1 = Math.min(col0 + 1, this.cols - 1);
    const row0 = Math.floor(row);
    const row1 = Math.min(row0 + 1, this.rows - 1);

    // Interpolation weights
    const tx = col - col0;
    const ty = row - row0;

    // Bilinear interpolation
    const v00 = this.field[col0][row0];
    const v10 = this.field[col1][row0];
    const v01 = this.field[col0][row1];
    const v11 = this.field[col1][row1];

    const vx0 = v00.x * (1 - tx) + v10.x * tx;
    const vx1 = v01.x * (1 - tx) + v11.x * tx;
    const vx = vx0 * (1 - ty) + vx1 * ty;

    const vy0 = v00.y * (1 - tx) + v10.y * tx;
    const vy1 = v01.y * (1 - tx) + v11.y * tx;
    const vy = vy0 * (1 - ty) + vy1 * ty;

    return { x: vx, y: vy };
  }

  /**
   * Resize the field when window size changes
   */
  public resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.cols = Math.ceil(width / this.resolution);
    this.rows = Math.ceil(height / this.resolution);

    this.field = Array(this.cols)
      .fill(null)
      .map(() => Array(this.rows).fill({ x: 0, y: 0 }));

    // Recreate confluence points for new dimensions
    this.confluencePoints = this.createConfluencePoints();
  }

  /**
   * Get confluence points for visualization
   */
  public getConfluencePoints(): ConfluencePoint[] {
    return this.confluencePoints;
  }
}
