/**
 * Flowing Streams Component
 *
 * A sophisticated particle effect that creates flowing, river-like streams
 * using curl noise and trail rendering. Perfect for representing workflows
 * and process flow.
 *
 * Features:
 * - Curl noise for organic, incompressible flow
 * - Multi-layer particles with parallax depth
 * - Motion blur trails using alpha decay
 * - Vortex/confluence points where streams swirl
 * - Smooth 60fps performance
 */

import { useEffect, useRef } from 'react';
import { FlowingStreamsEngine, EngineConfig } from './flowing-streams/FlowingStreamsEngine';

export interface FlowingStreamsProps {
  /**
   * Number of particles to render
   * @default 300
   */
  particleCount?: number;

  /**
   * Number of depth layers for parallax effect
   * @default 4
   */
  layers?: number;

  /**
   * Show flow field lines (for debugging/artistic effect)
   * @default false
   */
  showFlowLines?: boolean;

  /**
   * Opacity of flow lines if shown
   * @default 0.03
   */
  flowLineOpacity?: number;

  /**
   * CSS class name for the canvas container
   */
  className?: string;
}

export function FlowingStreams({
  particleCount = 300,
  layers = 4,
  showFlowLines = false,
  flowLineOpacity = 0.03,
  className = ''
}: FlowingStreamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<FlowingStreamsEngine | null>(null);
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
      particleCount,
      layers,
      showFlowLines,
      flowLineOpacity
    };

    engineRef.current = new FlowingStreamsEngine(canvas, config);
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
  }, [particleCount, layers, showFlowLines, flowLineOpacity]);

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
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
