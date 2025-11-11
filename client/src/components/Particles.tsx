/**
 * Particles Component
 * CSS-based floating particles for hero backgrounds
 * Lightweight and performant with no dependencies
 */

interface ParticlesProps {
  count?: number;
  className?: string;
}

export function Particles({ count = 30, className = "" }: ParticlesProps) {
  return (
    <div className={`particles-container ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        // Randomize particle properties for organic feel
        const size = Math.random() * 8 + 3; // 3-11px
        const left = Math.random() * 100; // 0-100%
        const delay = Math.random() * 4; // 0-4s (reduced from 0-8s)
        const duration = Math.random() * 7 + 8; // 8-15s (reduced from 15-25s)
        const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4

        // Color variation: amber, coral, or green
        const colorIndex = i % 3;
        const colors = [
          "oklch(0.75 0.20 45)", // Amber
          "oklch(0.70 0.22 25)", // Coral
          "oklch(0.65 0.24 150)", // Green
        ];

        return (
          <div
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity,
              background: colors[colorIndex],
            }}
          />
        );
      })}
    </div>
  );
}

// CSS for particles (add to index.css if not using styled-components)
export const particlesStyles = `
  .particles-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .particle {
    position: absolute;
    bottom: -10px;
    border-radius: 50%;
    filter: blur(2px);
    animation: floatUp linear infinite;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: var(--particle-opacity, 0.3);
    }
    90% {
      opacity: var(--particle-opacity, 0.3);
    }
    100% {
      transform: translateY(-100vh) translateX(calc(var(--drift, 50px))) rotate(360deg);
      opacity: 0;
    }
  }

  /* Add subtle horizontal drift */
  .particle:nth-child(3n) {
    --drift: 30px;
  }

  .particle:nth-child(3n+1) {
    --drift: -40px;
  }

  .particle:nth-child(3n+2) {
    --drift: 20px;
  }

  /* Dark mode particles are brighter */
  .dark .particle {
    filter: blur(3px);
    opacity: 0.4;
  }
`;
