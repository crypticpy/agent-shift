// Simplified Perlin Noise implementation
class PerlinNoise {
  private permutation: number[];

  constructor(seed: number = Math.random()) {
    // Initialize permutation table
    const p: number[] = [];
    for (let i = 0; i < 256; i++) {
      p[i] = i;
    }

    // Shuffle using seed
    let n = 256;
    while (n > 1) {
      n--;
      const k = Math.floor((seed * 9301 + 49297) % 233280 / 233280 * (n + 1));
      seed = (seed * 9301 + 49297) % 233280;
      const tmp = p[n];
      p[n] = p[k];
      p[k] = tmp;
    }

    // Duplicate permutation table
    this.permutation = [...p, ...p];
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number): number {
    const h = hash & 7;
    const u = h < 4 ? x : y;
    const v = h < 4 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise(x: number, y: number, z: number = 0): number {
    // Find unit cube containing point
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    // Find relative x, y, z of point in cube
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    // Compute fade curves
    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    // Hash coordinates of cube corners
    const A = this.permutation[X] + Y;
    const AA = this.permutation[A] + Z;
    const AB = this.permutation[A + 1] + Z;
    const B = this.permutation[X + 1] + Y;
    const BA = this.permutation[B] + Z;
    const BB = this.permutation[B + 1] + Z;

    // Blend results from 8 corners
    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(u, this.grad(this.permutation[AA], x, y), this.grad(this.permutation[BA], x - 1, y)),
        this.lerp(u, this.grad(this.permutation[AB], x, y - 1), this.grad(this.permutation[BB], x - 1, y - 1))
      ),
      this.lerp(
        v,
        this.lerp(u, this.grad(this.permutation[AA + 1], x, y), this.grad(this.permutation[BA + 1], x - 1, y)),
        this.lerp(u, this.grad(this.permutation[AB + 1], x, y - 1), this.grad(this.permutation[BB + 1], x - 1, y - 1))
      )
    );
  }
}

// Create a shared Perlin noise instance
export const perlin = new PerlinNoise(Date.now());

// Easing functions
export function easeInCubic(t: number): number {
  return t * t * t;
}

export function easeOutCubic(t: number): number {
  const f = t - 1;
  return f * f * f + 1;
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Random helpers
export function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomInt(min: number, max: number): number {
  return Math.floor(randomRange(min, max + 1));
}

export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function weightedRandom<T>(items: Array<{ item: T; weight: number }>): T {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const { item, weight } of items) {
    if (random < weight) return item;
    random -= weight;
  }

  return items[items.length - 1].item;
}

// Gaussian distribution (Box-Muller transform)
export function randomGaussian(mean: number = 0, stddev: number = 1): number {
  const u1 = Math.random();
  const u2 = Math.random();
  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return z0 * stddev + mean;
}

// Map value from one range to another
export function map(value: number, start1: number, stop1: number, start2: number, stop2: number): number {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

// Clamp value between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

// Linear interpolation
export function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount;
}
