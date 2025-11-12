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
  const jumpStartTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastUpdateRef.current) / 1000; // seconds
      lastUpdateRef.current = now;

      // Normal incrementation
      setValue((prev) => prev + incrementSpeed * deltaTime * 60);

      // Smooth glow fade
      if (jumpStartTimeRef.current > 0) {
        const timeSinceJump = now - jumpStartTimeRef.current;
        if (timeSinceJump < 400) {
          // Ramp down over 400ms (matching scale animation)
          const progress = timeSinceJump / 400;
          // Ease out cubic: 1 - (1-x)^3
          const eased = 1 - Math.pow(1 - progress, 3);
          setGlowIntensity(1 - eased);
        } else {
          setGlowIntensity(0);
          jumpStartTimeRef.current = 0;
        }
      }

      // Random jump logic
      const timeSinceLastJump = (now - lastJumpRef.current) / 1000;
      if (timeSinceLastJump >= jumpFrequency) {
        // Trigger jump
        const jumpAmount =
          jumpMinSize + Math.random() * (jumpMaxSize - jumpMinSize);
        setValue((prev) => prev + jumpAmount);
        lastJumpRef.current = now;
        jumpStartTimeRef.current = now;

        // Trigger flash effect
        setIsJumping(true);
        setGlowIntensity(1);

        // Reset flash after animation
        setTimeout(() => {
          setIsJumping(false);
        }, 200);
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
          <div className="relative px-4 py-3 md:px-6 md:py-4">
            <div
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider"
              style={{
                transform: isJumping ? "scale(1.05)" : "scale(1.0)",
                transition: isJumping
                  ? "transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                color: "#fb923c",
                fontFamily: "'Courier New', 'Consolas', monospace",
                fontVariantNumeric: "tabular-nums",
                textShadow: `
                  0 0 ${15 + glowIntensity * 30}px rgba(251, 146, 60, ${0.7 + glowIntensity * 0.3}),
                  0 0 ${30 + glowIntensity * 50}px rgba(249, 115, 22, ${0.5 + glowIntensity * 0.5}),
                  0 2px 4px rgba(0, 0, 0, 0.8)
                `,
                letterSpacing: "0.05em",
                WebkitTextStroke: isJumping ? "1px rgba(251,146,60,0.3)" : "0px",
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
