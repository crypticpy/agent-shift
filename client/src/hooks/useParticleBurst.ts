/**
 * useParticleBurst Hook
 * Creates a particle burst effect radiating from click position
 * Returns click handler to attach to button elements
 */

import { useCallback } from 'react';

interface ParticleBurstOptions {
  particleCount?: number;
  colors?: string[];
  duration?: number;
}

export function useParticleBurst(options: ParticleBurstOptions = {}) {
  const {
    particleCount = 10,
    colors = [
      'oklch(0.65 0.24 155)', // Vibrant green
      'oklch(0.75 0.20 45)',  // Amber
      'oklch(0.70 0.22 35)',  // Coral
    ],
    duration = 700,
  } = options;

  const createBurst = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();

      // Get click position relative to button
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Create container for this burst
      const container = document.createElement('div');
      container.className = 'particle-burst-container';
      container.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
      `;
      button.appendChild(container);

      // Create particles radiating in all directions
      const angleStep = (Math.PI * 2) / particleCount;

      for (let i = 0; i < particleCount; i++) {
        const angle = angleStep * i;
        const distance = 40 + Math.random() * 30; // 40-70px
        const size = 4 + Math.random() * 4; // 4-8px
        const colorIndex = Math.floor(Math.random() * colors.length);

        const particle = document.createElement('div');
        particle.className = 'burst-particle';
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: ${colors[colorIndex]};
          border-radius: 50%;
          pointer-events: none;
          --angle: ${angle}rad;
          --distance: ${distance}px;
          --duration: ${duration}ms;
          animation: particleBurst var(--duration) cubic-bezier(0.4, 0, 0.6, 1) forwards;
        `;

        container.appendChild(particle);
      }

      // Clean up after animation completes
      setTimeout(() => {
        container.remove();
      }, duration);
    },
    [particleCount, colors, duration]
  );

  return createBurst;
}
