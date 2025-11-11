/**
 * Money Particles Component
 *
 * Creates a 3D depth effect with numbers and currency symbols that
 * drift toward the viewer and dissolve. Perfect for calculator/finance pages.
 *
 * Features:
 * - 3D perspective simulation (far to close)
 * - Organic drift movement with sine wave patterns
 * - Dissolve effect as particles approach viewer
 * - Atmospheric perspective (blur + color desaturation at distance)
 * - Smooth 60fps performance
 */

import { useEffect, useRef } from 'react';
import { MoneyParticleEngine, EngineConfig } from './money-particles/MoneyParticleEngine';

export interface MoneyParticlesProps {
  /**
   * Particles spawned per second
   * @default 1.5
   */
  spawnRate?: number;

  /**
   * Maximum simultaneous particles
   * @default 30
   */
  maxParticles?: number;

  /**
   * Drift intensity multiplier
   * @default 1.0
   */
  driftIntensity?: number;

  /**
   * Depth speed multiplier (how fast particles approach)
   * @default 1.0
   */
  depthSpeed?: number;

  /**
   * CSS class name for the canvas container
   */
  className?: string;
}

export function MoneyParticles({
  spawnRate = 1.5,
  maxParticles = 30,
  driftIntensity = 1.0,
  depthSpeed = 1.0,
  className = '',
}: MoneyParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<MoneyParticleEngine | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    // Initialize canvas size
    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    };

    const { width, height } = updateSize();

    // Set initial canvas size
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Create engine
    const config: Partial<EngineConfig> = {
      spawnRate,
      maxParticles,
      driftIntensity,
      depthSpeed,
    };

    engineRef.current = new MoneyParticleEngine(canvas, config);
    engineRef.current.start();

    // Handle resize
    const handleResize = () => {
      const { width, height } = updateSize();
      engineRef.current?.resize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, [spawnRate, maxParticles, driftIntensity, depthSpeed]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          display: 'block',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
