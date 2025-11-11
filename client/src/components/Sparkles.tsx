/**
 * Sparkles Component
 * Creates dancing snowflakes effect with tiny twinkling particles
 * Designed for Getting Started page background
 */

interface SparklesProps {
  count?: number;
}

export function Sparkles({ count = 80 }: SparklesProps) {
  const sparkles = Array.from({ length: count }).map((_, i) => {
    // Tiny sizes for delicate effect (2-6px)
    const size = Math.random() * 4 + 2;

    // Random starting position
    const left = Math.random() * 100;

    // Stagger animations for continuous effect
    const delay = Math.random() * 8;

    // Varied durations for natural movement (10-18s)
    const duration = Math.random() * 8 + 10;

    // Side-to-side drift amount
    const drift = (Math.random() - 0.5) * 80;

    // Rotation amount (sparkle while drifting)
    const rotation = Math.random() * 720 - 360;

    // Color variety - warm chameleon colors
    const colors = [
      "oklch(0.85 0.15 35)", // Soft coral
      "oklch(0.88 0.12 45)", // Soft amber
      "oklch(0.82 0.18 155)", // Soft green
      "oklch(0.90 0.10 50)", // Pale yellow
    ];
    const colorIndex = Math.floor(Math.random() * colors.length);

    return {
      id: i,
      size,
      left,
      delay,
      duration,
      drift,
      rotation,
      color: colors[colorIndex],
    };
  });

  return (
    <div className="sparkles-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            background: sparkle.color,
            // Pass drift and rotation as CSS variables
            ['--drift' as string]: `${sparkle.drift}px`,
            ['--rotation' as string]: `${sparkle.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
}
