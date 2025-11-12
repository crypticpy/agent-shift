import { useEffect, useRef, useState } from "react";

interface ROICounterProps {
  startValue?: number;
  incrementSpeed?: number; // dollars per frame
  jumpFrequency?: number; // seconds between jumps
  jumpMinSize?: number; // minimum jump amount
  jumpMaxSize?: number; // maximum jump amount
  className?: string;
}

export function ROICounter({
  startValue = 132456789.23,
  incrementSpeed = 150, // ~$9k per second at 60fps
  jumpFrequency = 3, // jump every 3 seconds
  jumpMinSize = 10000,
  jumpMaxSize = 150000,
  className = "",
}: ROICounterProps) {
  const [value, setValue] = useState(startValue);
  const [isJumping, setIsJumping] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const animationFrameRef = useRef<number>();
  const lastJumpRef = useRef<number>(Date.now());
  const lastUpdateRef = useRef<number>(Date.now());

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastUpdateRef.current) / 1000; // seconds
      lastUpdateRef.current = now;

      // Normal incrementation
      setValue((prev) => prev + incrementSpeed * deltaTime * 60);

      // Random jump logic
      const timeSinceLastJump = (now - lastJumpRef.current) / 1000;
      if (timeSinceLastJump >= jumpFrequency) {
        // Trigger jump
        const jumpAmount =
          jumpMinSize + Math.random() * (jumpMaxSize - jumpMinSize);
        setValue((prev) => prev + jumpAmount);
        lastJumpRef.current = now;

        // Trigger flash effect
        setIsJumping(true);
        setGlowIntensity(1);

        // Reset flash after animation
        setTimeout(() => {
          setIsJumping(false);
        }, 200);

        // Fade glow
        setTimeout(() => {
          setGlowIntensity(0);
        }, 500);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [incrementSpeed, jumpFrequency, jumpMinSize, jumpMaxSize]);

  // Format number with commas and 2 decimal places
  const formattedValue = value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={`absolute top-8 left-1/2 -translate-x-1/2 ${className}`}>
      <div className="text-center">
        {/* Ticker-style counter */}
        <div className="relative inline-block min-w-[450px] md:min-w-[650px] lg:min-w-[800px]">
          {/* Background panel - like a flip clock or LED display (STATIC) */}
          <div
            className="absolute inset-0 bg-black/40 rounded-lg"
            style={{
              boxShadow: `
                inset 0 2px 8px rgba(0, 0, 0, 0.6),
                0 4px 16px rgba(0, 0, 0, 0.4),
                0 0 ${30 + glowIntensity * 60}px rgba(251, 146, 60, ${0.2 + glowIntensity * 0.3})
              `,
            }}
          />

          {/* Counter display */}
          <div className="relative px-6 py-4 md:px-8 md:py-5">
            <div
              className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-wider transition-all duration-200 ${
                isJumping ? "scale-105" : "scale-100"
              }`}
              style={{
                color: "#fbbf24",
                fontFamily: "'Courier New', 'Consolas', monospace",
                fontVariantNumeric: "tabular-nums",
                textShadow: `
                  0 0 ${15 + glowIntensity * 30}px rgba(251, 191, 36, ${0.8 + glowIntensity * 0.2}),
                  0 0 ${30 + glowIntensity * 50}px rgba(251, 146, 60, ${0.5 + glowIntensity * 0.5}),
                  0 2px 4px rgba(0, 0, 0, 0.8)
                `,
                letterSpacing: "0.05em",
                WebkitTextStroke: isJumping ? "1px rgba(251,191,36,0.4)" : "0px",
              }}
            >
              ${formattedValue}
            </div>
          </div>

          {/* Scan line effect (like LED displays) */}
          <div
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
            }}
          />

          {/* Flash effect on jump */}
          {isJumping && (
            <div
              className="absolute inset-0 bg-white/20 rounded-lg"
              style={{
                animation: "flash 0.2s ease-out",
              }}
            />
          )}
        </div>

        {/* Label below */}
        <div
          className="mt-3 text-white/70 text-xs md:text-sm font-semibold tracking-widest uppercase"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            letterSpacing: "0.15em",
          }}
        >
          Total Value Created Today
        </div>
      </div>

      <style>{`
        @keyframes flash {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
