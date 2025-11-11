/**
 * Money Particle with 3D Depth Effect
 *
 * Simulates particles moving from far away (background) toward the viewer,
 * with perspective scaling, drift, and dissolve effects.
 */

export interface MoneyParticleOptions {
  x: number;           // Starting X position
  y: number;           // Starting Y position
  depth: number;       // Initial depth (0.0 = far, 1.0 = close)
  content: string;     // Character to display ("0"-"9", "$", "€", etc.)
  driftX: number;      // Horizontal drift speed
  driftY: number;      // Vertical drift speed
  depthSpeed: number;  // How fast particle approaches viewer
}

export class MoneyParticle {
  // Position and movement
  private x: number;
  private y: number;
  private depth: number;        // 0.0 (far) to 1.0 (close)
  private depthSpeed: number;
  private driftX: number;
  private driftY: number;

  // Visual properties
  private content: string;
  private baseX: number;        // Original X for drift calculations
  private baseY: number;        // Original Y for drift calculations
  private rotation: number = 0;
  private rotationSpeed: number;

  // Lifecycle
  private age: number = 0;
  private isDead: boolean = false;

  // Canvas bounds
  private width: number;
  private height: number;

  constructor(options: MoneyParticleOptions, width: number, height: number) {
    this.x = options.x;
    this.y = options.y;
    this.baseX = options.x;
    this.baseY = options.y;
    this.depth = options.depth;
    this.content = options.content;
    this.driftX = options.driftX;
    this.driftY = options.driftY;
    this.depthSpeed = options.depthSpeed;
    this.width = width;
    this.height = height;

    // Random rotation speed for visual interest
    this.rotationSpeed = (Math.random() - 0.5) * 0.3; // ±0.15 radians/second
  }

  /**
   * Update particle state - move toward viewer with drift
   */
  public update(deltaTime: number): void {
    this.age += deltaTime;

    // Move toward viewer (increase depth)
    this.depth += this.depthSpeed * deltaTime * 0.0002; // ~5 seconds to travel full depth

    // Apply drift using sine wave for smooth organic movement
    const driftTime = this.age * 0.001; // Convert ms to seconds
    const driftOffsetX = Math.sin(driftTime * this.driftX) * 30 * (1 + this.depth);
    const driftOffsetY = Math.sin(driftTime * this.driftY + Math.PI / 4) * 20 * (1 + this.depth);

    this.x = this.baseX + driftOffsetX;
    this.y = this.baseY + driftOffsetY;

    // Rotate gently
    this.rotation += this.rotationSpeed * deltaTime * 0.001;

    // Mark as dead when it reaches the viewer
    if (this.depth >= 1.0) {
      this.isDead = true;
    }
  }

  /**
   * Calculate scale based on depth (perspective effect)
   * Far = small (0.3), Close = large (2.0)
   */
  private getScale(): number {
    return 0.3 + this.depth * 1.7;
  }

  /**
   * Calculate opacity based on depth
   * Fades in from 0.0 to 0.75, then rapidly fades out to create dissolve effect
   */
  private getOpacity(): number {
    if (this.depth < 0.15) {
      // Fade in over first 15% of journey
      return this.depth * 6.67 * 0.35; // 0 to 0.35
    } else if (this.depth < 0.75) {
      // Main visible range - much higher opacity
      return 0.35 + (this.depth - 0.15) * 1.08; // 0.35 to 1.0
    } else {
      // Gentle dissolve as approaching viewer (last 25%)
      return (1.0 - this.depth) * 4; // 1.0 to 0
    }
  }

  /**
   * Calculate blur amount based on depth
   * Far = blurry (atmospheric perspective), Close = sharp
   */
  private getBlur(): number {
    return Math.max(0, 4 - this.depth * 4); // 4px to 0px
  }

  /**
   * Calculate the background gradient color at the particle's current X position
   * Background gradient: left (deep coral) → right (warm amber)
   */
  private getBackgroundGradientColor(): { l: number; c: number; h: number } {
    const leftColor = { l: 0.65, c: 0.18, h: 35 };  // Deep coral (left edge)
    const rightColor = { l: 0.70, c: 0.16, h: 50 }; // Warm amber (right edge)

    // Calculate position along gradient (0.0 = left, 1.0 = right)
    const normalizedX = Math.max(0, Math.min(1, this.x / this.width));

    // Linear interpolation between left and right colors
    return {
      l: leftColor.l + (rightColor.l - leftColor.l) * normalizedX,
      c: leftColor.c + (rightColor.c - leftColor.c) * normalizedX,
      h: leftColor.h + (rightColor.h - leftColor.h) * normalizedX,
    };
  }

  /**
   * Calculate particle color based on background gradient and depth
   * Particles are rendered lighter + more saturated than background for contrast
   */
  private getColor(): { l: number; c: number; h: number } {
    // Get background color at this particle's position
    const bgColor = this.getBackgroundGradientColor();

    // Add variation based on particle age for visual interest
    const hueVariation = Math.sin(this.age * 0.002) * 8; // ±8 degree variation

    // Far particles (depth < 0.3): subtle contrast, more transparent appearance
    if (this.depth < 0.3) {
      return {
        l: bgColor.l + 0.10 + this.depth * 0.10,  // +0.10 to +0.20 lighter than background
        c: bgColor.c + 0.04 + this.depth * 0.04,  // +0.04 to +0.08 more saturated
        h: bgColor.h + hueVariation,
      };
    }
    // Mid to close particles (depth >= 0.3): strong contrast, fully visible
    else {
      return {
        l: bgColor.l + 0.20 + (this.depth - 0.3) * 0.05, // +0.20 to +0.25 lighter
        c: bgColor.c + 0.08 + (this.depth - 0.3) * 0.02, // +0.08 to +0.10 more saturated
        h: bgColor.h + hueVariation,
      };
    }
  }

  /**
   * Render particle to canvas with 3D perspective effects
   */
  public render(ctx: CanvasRenderingContext2D): void {
    const scale = this.getScale();
    const opacity = this.getOpacity();
    const blur = this.getBlur();
    const { l, c, h } = this.getColor();

    // Skip rendering if too transparent (performance optimization)
    if (opacity < 0.01) return;

    // Save context state
    ctx.save();

    // Apply transforms
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.scale(scale, scale);

    // Apply blur filter
    ctx.filter = blur > 0.5 ? `blur(${blur.toFixed(1)}px)` : 'none';

    // Set text properties
    const fontSize = 48; // Base size, scaled by transform
    ctx.font = `bold ${fontSize}px 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = `oklch(${l.toFixed(2)} ${c.toFixed(2)} ${h.toFixed(0)} / ${opacity.toFixed(2)})`;

    // Draw character
    ctx.fillText(this.content, 0, 0);

    // Restore context state
    ctx.restore();
  }

  /**
   * Check if particle should be removed from simulation
   */
  public shouldRemove(): boolean {
    return this.isDead;
  }

  /**
   * Update canvas dimensions
   */
  public resize(width: number, height: number): void {
    // Adjust base position to maintain relative position
    const xRatio = this.baseX / this.width;
    const yRatio = this.baseY / this.height;

    this.width = width;
    this.height = height;

    this.baseX = xRatio * width;
    this.baseY = yRatio * height;
  }

  /**
   * Get debug information
   */
  public getDebugInfo(): { x: number; y: number; depth: number; opacity: number } {
    return {
      x: this.x,
      y: this.y,
      depth: this.depth,
      opacity: this.getOpacity(),
    };
  }
}

/**
 * Factory function to create money/number particles with smart randomization
 */
export function createMoneyParticle(
  width: number,
  height: number
): MoneyParticle {
  // Random starting position across screen
  const x = Math.random() * width;
  const y = Math.random() * height;

  // Start at various depths in the back (0.0 to 0.2)
  const depth = Math.random() * 0.2;

  // Character selection: 60% numbers, 40% currency symbols
  const isNumber = Math.random() < 0.6;
  const content = isNumber
    ? String(Math.floor(Math.random() * 10)) // "0" to "9"
    : ['$', '€', '¥', '£', '₹', '¢'][Math.floor(Math.random() * 6)];

  // Random drift speeds for organic movement
  const driftX = 0.8 + Math.random() * 1.4; // 0.8 to 2.2 (sine wave frequency)
  const driftY = 0.6 + Math.random() * 1.2; // 0.6 to 1.8

  // Random depth speed with slight variation
  const depthSpeed = 0.6 + Math.random() * 0.3; // 0.6 to 0.9 (slower, more uniform)

  const options: MoneyParticleOptions = {
    x,
    y,
    depth,
    content,
    driftX,
    driftY,
    depthSpeed,
  };

  return new MoneyParticle(options, width, height);
}
