/**
 * CardMagicDust Component
 * Creates floating magic dust particles on card hover
 * Designed for tool cards and other interactive card elements
 */

import { useEffect, useRef, useState } from 'react';

interface CardMagicDustProps {
  isHovered: boolean;
}

export function CardMagicDust({ isHovered }: CardMagicDustProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered || !containerRef.current) {
      // Clear interval when not hovering
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Create particles periodically while hovering
    intervalRef.current = window.setInterval(() => {
      if (!containerRef.current) return;

      // Create 1-2 particles per interval
      const particleCount = Math.random() > 0.5 ? 2 : 1;

      for (let i = 0; i < particleCount; i++) {
        createParticle();
      }
    }, 150); // Create particles every 150ms

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const createParticle = () => {
    if (!containerRef.current) return;

    // Random position along the bottom of the card
    const left = Math.random() * 100;

    // Size (2-5px for subtle effect)
    const size = Math.random() * 3 + 2;

    // Random duration (1.5-2.5s)
    const duration = Math.random() * 1000 + 1500;

    // Random drift
    const drift = (Math.random() - 0.5) * 40;

    // Random color from chameleon palette
    const colors = [
      'oklch(0.85 0.15 35)',  // Soft coral
      'oklch(0.88 0.12 45)',  // Soft amber
      'oklch(0.82 0.18 155)', // Soft green
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const particle = document.createElement('div');
    particle.className = 'magic-dust-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: 0;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      filter: blur(1px);
      --drift: ${drift}px;
      animation: magicDustFloat ${duration}ms ease-out forwards;
    `;

    containerRef.current?.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, duration);
  };

  return (
    <div
      ref={containerRef}
      className="magic-dust-container"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
      }}
    />
  );
}
