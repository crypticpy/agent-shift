import { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  color: string;
}

interface MorphingBlobsProps {
  blobCount?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MorphingBlobs({
  blobCount = 4,
  className = '',
  style = {},
}: MorphingBlobsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize blobs
    const colors = [
      'oklch(0.75 0.15 35)',  // Soft coral
      'oklch(0.78 0.12 45)',  // Soft amber
      'oklch(0.72 0.14 155)', // Soft green
      'oklch(0.80 0.10 25)',  // Pale coral
    ];

    blobsRef.current = Array.from({ length: blobCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 80 + Math.random() * 120, // 80-200px radius
      vx: 0,
      vy: 0,
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
      color: colors[i % colors.length],
    }));

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Pick new target for blob
    const pickNewTarget = (blob: Blob) => {
      blob.targetX = Math.random() * canvas.width;
      blob.targetY = Math.random() * canvas.height;
    };

    // Metaball field calculation
    const getFieldStrength = (x: number, y: number): number => {
      let sum = 0;
      for (const blob of blobsRef.current) {
        const dx = x - blob.x;
        const dy = y - blob.y;
        const distSq = dx * dx + dy * dy;
        if (distSq > 0) {
          sum += (blob.radius * blob.radius) / distSq;
        }
      }
      return sum;
    };

    let lastTargetChange = Date.now();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();

      // Update blob positions
      for (const blob of blobsRef.current) {
        // Change target every 5-8 seconds
        if (now - lastTargetChange > 5000 + Math.random() * 3000) {
          pickNewTarget(blob);
          lastTargetChange = now;
        }

        // Subtle mouse attraction
        const mouseDx = mouseRef.current.x - blob.x;
        const mouseDy = mouseRef.current.y - blob.y;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDist < 300 && mouseDist > 0) {
          const mouseForce = 0.02 * (1 - mouseDist / 300);
          blob.vx += (mouseDx / mouseDist) * mouseForce;
          blob.vy += (mouseDy / mouseDist) * mouseForce;
        }

        // Move toward target (very slow)
        const dx = blob.targetX - blob.x;
        const dy = blob.targetY - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          blob.vx += (dx / dist) * 0.001;
          blob.vy += (dy / dist) * 0.001;
        }

        // Apply velocity with friction
        blob.x += blob.vx;
        blob.y += blob.vy;
        blob.vx *= 0.98;
        blob.vy *= 0.98;

        // Bounce off edges
        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1;
        blob.x = Math.max(0, Math.min(canvas.width, blob.x));
        blob.y = Math.max(0, Math.min(canvas.height, blob.y));
      }

      // Draw metaballs using threshold
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // Sample at lower resolution for performance
      const step = 4;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const strength = getFieldStrength(x, y);

          // Threshold for metaball effect
          if (strength > 1.2) {
            // Find which blob is dominant for coloring
            let maxInfluence = 0;
            let dominantColor = blobsRef.current[0].color;

            for (const blob of blobsRef.current) {
              const dx = x - blob.x;
              const dy = y - blob.y;
              const distSq = dx * dx + dy * dy;
              const influence = (blob.radius * blob.radius) / (distSq + 1);

              if (influence > maxInfluence) {
                maxInfluence = influence;
                dominantColor = blob.color;
              }
            }

            // Parse OKLCH color and draw
            const opacity = Math.min((strength - 1.2) * 0.15, 0.3); // Very subtle

            // Fill pixel block
            for (let dy = 0; dy < step; dy++) {
              for (let dx = 0; dx < step; dx++) {
                const px = x + dx;
                const py = y + dy;
                if (px < canvas.width && py < canvas.height) {
                  const i = (py * canvas.width + px) * 4;
                  // Approximate OKLCH color to RGB
                  const rgb = oklchToRgb(dominantColor);
                  data[i] = rgb.r;
                  data[i + 1] = rgb.g;
                  data[i + 2] = rgb.b;
                  data[i + 3] = opacity * 255;
                }
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [blobCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        width: '100%',
        height: '100%',
        zIndex: 1,
        ...style,
      }}
    />
  );
}

// Approximate OKLCH to RGB conversion
function oklchToRgb(oklchStr: string): { r: number; g: number; b: number } {
  // This is a simplified approximation
  // For full accuracy, would need proper color space conversion
  const match = oklchStr.match(/oklch\(([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\)/);
  if (!match) return { r: 200, g: 150, b: 100 };

  const l = parseFloat(match[1]);
  const c = parseFloat(match[2]);
  const h = parseFloat(match[3]);

  // Very rough approximation for display purposes
  const hRad = (h * Math.PI) / 180;
  const r = Math.round(255 * (l + c * Math.cos(hRad) * 0.5));
  const g = Math.round(255 * (l + c * Math.sin(hRad) * 0.3));
  const b = Math.round(255 * (l - c * 0.2));

  return {
    r: Math.max(0, Math.min(255, r)),
    g: Math.max(0, Math.min(255, g)),
    b: Math.max(0, Math.min(255, b)),
  };
}
