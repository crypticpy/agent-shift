import { useEffect, useRef } from 'react';
import { ParticleEngine, ParticleEngineOptions } from './ParticleEngine';

interface AdvancedParticlesProps {
  count?: number;
  windSpeed?: number;
  flockingEnabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdvancedParticles({
  count = 100,
  windSpeed = 50,
  flockingEnabled = true,
  className = '',
  style = {},
}: AdvancedParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<ParticleEngine | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize engine
    const options: ParticleEngineOptions = {
      targetCount: count,
      windSpeed,
      flockingEnabled,
    };

    try {
      engineRef.current = new ParticleEngine(canvas, options);
      engineRef.current.start();
    } catch (error) {
      console.error('Failed to initialize particle engine:', error);
    }

    // Cleanup on unmount
    return () => {
      if (engineRef.current) {
        engineRef.current.stop();
        engineRef.current = null;
      }
    };
  }, [count, windSpeed, flockingEnabled]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        display: 'block',
        ...style,
      }}
    />
  );
}
