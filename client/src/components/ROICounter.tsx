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
    <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
      <div className="text-center">
        {/* Label */}
        <div
          className="text-white/60 text-sm md:text-base font-medium mb-2 tracking-wider uppercase"
          style={{
            textShadow: "0 0 10px rgba(255,255,255,0.3)",
          }}
        >
          Total Value Created Today
        </div>

        {/* Counter */}
        <div
          className={`text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-200 ${
            isJumping ? "scale-110" : "scale-100"
          }`}
          style={{
            fontFamily: "'Courier New', 'Courier', monospace",
            textShadow: `
              0 0 ${20 + glowIntensity * 40}px rgba(255, 255, 255, ${0.4 + glowIntensity * 0.6}),
              0 0 ${40 + glowIntensity * 60}px rgba(251, 146, 60, ${0.3 + glowIntensity * 0.7}),
              0 4px 8px rgba(0, 0, 0, 0.3)
            `,
            opacity: isJumping ? 1 : 0.95,
            filter: `blur(${isJumping ? "1px" : "0px"})`,
          }}
        >
          ${formattedValue}
        </div>

        {/* Subtle pulse indicator */}
        {isJumping && (
          <div
            className="absolute inset-0 bg-white/10 rounded-full animate-ping"
            style={{
              animation: "ping 0.5s cubic-bezier(0, 0, 0.2, 1)",
            }}
          />
        )}
      </div>

      {/* Background animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 50%,
              rgba(251, 146, 60, ${0.3 + glowIntensity * 0.4}) 0%,
              transparent 70%
            )
          `,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
