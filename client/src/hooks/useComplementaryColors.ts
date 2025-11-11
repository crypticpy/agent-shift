import { useState, useEffect } from 'react';

/**
 * Custom hook for synchronized color cycling across the application
 *
 * Creates a smooth color cycle that all components can sync to:
 * - Particles cycle through: orange → yellow → green → teal → blue → purple
 * - Complementary UI elements shift to contrasting colors for harmony
 *
 * @param cycleTime - Duration of one full color cycle in milliseconds (default: 37500ms = 37.5 seconds)
 * @param startHue - Starting hue in degrees (default: 35 for orange)
 * @returns Object with current particle hue and complementary hue
 */
export function useComplementaryColors(cycleTime: number = 37500, startHue: number = 35) {
  const [currentHue, setCurrentHue] = useState<number>(startHue);

  useEffect(() => {
    let animationFrameId: number;

    const updateHue = () => {
      const now = performance.now();

      // Calculate current position in the cycle (0-1)
      const cyclePosition = (now % cycleTime) / cycleTime;

      // Map to full spectrum (0-360 degrees), starting at startHue
      const hue = (cyclePosition * 360 + startHue) % 360;

      setCurrentHue(hue);
      animationFrameId = requestAnimationFrame(updateHue);
    };

    updateHue();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [cycleTime, startHue]);

  // Calculate complementary hue (180 degrees opposite)
  const complementaryHue = (currentHue + 180) % 360;

  // Calculate slight variations for richer gradients
  const complementLight = (currentHue + 160) % 360;
  const complementDark = (currentHue + 200) % 360;

  return {
    particleHue: currentHue,
    complementaryHue,
    complementLight,
    complementDark,
    // CSS variables ready to inject into style props
    cssVariables: {
      '--particle-hue': currentHue.toFixed(0),
      '--complement-hue': complementaryHue.toFixed(0),
      '--complement-light': complementLight.toFixed(0),
      '--complement-dark': complementDark.toFixed(0)
    } as React.CSSProperties
  };
}
