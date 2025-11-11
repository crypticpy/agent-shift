/**
 * CursorGlow Component
 * Creates an elegant green glow that follows the cursor
 * Only visible on interactive elements for subtle sophistication
 */

import { useEffect } from 'react';

interface CursorGlowProps {
  enabled?: boolean;
  color?: string;
  size?: number;
  opacity?: number;
}

export function CursorGlow({
  enabled = true,
  color = 'oklch(0.65 0.24 155)',
  size = 200,
  opacity = 0.15,
}: CursorGlowProps) {
  useEffect(() => {
    if (!enabled) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Smooth interpolation for elegant trailing
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation (0.15 = subtle lag for elegance)
      currentX = lerp(currentX, mouseX, 0.15);
      currentY = lerp(currentY, mouseY, 0.15);

      document.documentElement.style.setProperty('--cursor-x', `${currentX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${currentY}px`);

      rafId = requestAnimationFrame(animate);
    };

    // Start tracking
    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    // Set CSS custom properties for glow styling
    document.documentElement.style.setProperty('--cursor-glow-color', color);
    document.documentElement.style.setProperty('--cursor-glow-size', `${size}px`);
    document.documentElement.style.setProperty('--cursor-glow-opacity', `${opacity}`);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled, color, size, opacity]);

  return null; // This is a pure effect component
}
