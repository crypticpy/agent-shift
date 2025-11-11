/**
 * 3D Simplex Noise Implementation
 *
 * Provides smooth, organic noise patterns for natural-looking flow fields.
 * This implementation uses 3D simplex noise which is computationally efficient
 * and produces better-looking results than classic Perlin noise.
 */

export class PerlinNoise {
  private perm: number[];
  private permMod12: number[];

  // Gradient vectors for 3D simplex noise
  private static readonly grad3: number[][] = [
    [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
    [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
    [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
  ];

  // Skewing and unskewing factors for 3D
  private static readonly F3 = 1.0 / 3.0;
  private static readonly G3 = 1.0 / 6.0;

  constructor(seed: number = Math.random()) {
    // Initialize permutation table with seed
    this.perm = new Array(512);
    this.permMod12 = new Array(512);

    const p = new Array(256);

    // Seeded random permutation
    for (let i = 0; i < 256; i++) {
      p[i] = i;
    }

    // Fisher-Yates shuffle with seed
    let random = this.seededRandom(seed);
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }

    // Duplicate the permutation table
    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  /**
   * Seeded random number generator
   * Returns a function that generates pseudo-random numbers based on seed
   */
  private seededRandom(seed: number): () => number {
    let s = seed;
    return () => {
      s = Math.sin(s) * 10000;
      return s - Math.floor(s);
    };
  }

  /**
   * Calculate dot product of gradient vector and distance vector
   */
  private dot(g: number[], x: number, y: number, z: number): number {
    return g[0] * x + g[1] * y + g[2] * z;
  }

  /**
   * 3D Simplex Noise
   *
   * @param x - X coordinate
   * @param y - Y coordinate
   * @param z - Z coordinate (often time for animation)
   * @returns Noise value in range [-1, 1]
   */
  public noise3D(x: number, y: number, z: number): number {
    let n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    const s = (x + y + z) * PerlinNoise.F3;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    const k = Math.floor(z + s);

    const t = (i + j + k) * PerlinNoise.G3;

    // Unskew the cell origin back to (x,y,z) space
    const X0 = i - t;
    const Y0 = j - t;
    const Z0 = k - t;

    // The x,y,z distances from the cell origin
    const x0 = x - X0;
    const y0 = y - Y0;
    const z0 = z - Z0;

    // Determine which simplex we are in
    let i1, j1, k1; // Offsets for second corner
    let i2, j2, k2; // Offsets for third corner

    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
      } else if (x0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1;
      } else {
        i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1;
      }
    } else {
      if (y0 < z0) {
        i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1;
      } else if (x0 < z0) {
        i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1;
      } else {
        i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
      }
    }

    // Offsets for remaining corners
    const x1 = x0 - i1 + PerlinNoise.G3;
    const y1 = y0 - j1 + PerlinNoise.G3;
    const z1 = z0 - k1 + PerlinNoise.G3;
    const x2 = x0 - i2 + 2.0 * PerlinNoise.G3;
    const y2 = y0 - j2 + 2.0 * PerlinNoise.G3;
    const z2 = z0 - k2 + 2.0 * PerlinNoise.G3;
    const x3 = x0 - 1.0 + 3.0 * PerlinNoise.G3;
    const y3 = y0 - 1.0 + 3.0 * PerlinNoise.G3;
    const z3 = z0 - 1.0 + 3.0 * PerlinNoise.G3;

    // Work out the hashed gradient indices of the four simplex corners
    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;

    const gi0 = this.permMod12[ii + this.perm[jj + this.perm[kk]]];
    const gi1 = this.permMod12[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]];
    const gi2 = this.permMod12[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]];
    const gi3 = this.permMod12[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]];

    // Calculate the contribution from the four corners
    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) {
      n0 = 0.0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * this.dot(PerlinNoise.grad3[gi0], x0, y0, z0);
    }

    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) {
      n1 = 0.0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * this.dot(PerlinNoise.grad3[gi1], x1, y1, z1);
    }

    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) {
      n2 = 0.0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * this.dot(PerlinNoise.grad3[gi2], x2, y2, z2);
    }

    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) {
      n3 = 0.0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * this.dot(PerlinNoise.grad3[gi3], x3, y3, z3);
    }

    // Add contributions from each corner to get the final noise value
    // The result is scaled to return values in the interval [-1,1]
    return 32.0 * (n0 + n1 + n2 + n3);
  }

  /**
   * Fractional Brownian Motion (fBm)
   *
   * Combines multiple octaves of noise for more natural-looking results.
   * Higher octaves add finer detail to the base pattern.
   *
   * @param x - X coordinate
   * @param y - Y coordinate
   * @param z - Z coordinate
   * @param octaves - Number of noise layers to combine (default: 4)
   * @param persistence - How much each octave contributes (default: 0.5)
   * @returns Combined noise value
   */
  public fbm(
    x: number,
    y: number,
    z: number,
    octaves: number = 4,
    persistence: number = 0.5
  ): number {
    let total = 0;
    let frequency = 1;
    let amplitude = 1;
    let maxValue = 0; // Used for normalizing result

    for (let i = 0; i < octaves; i++) {
      total += this.noise3D(x * frequency, y * frequency, z * frequency) * amplitude;

      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= 2;
    }

    return total / maxValue;
  }
}
