import { useEffect, useRef } from 'react';

interface FractalFieldProps {
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function FractalField({
  opacity = 0.15,
  className = '',
  style = {},
}: FractalFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    glRef.current = gl;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader - Mandelbrot-inspired fractal
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 resolution;
      uniform float time;
      uniform vec2 mouse;
      uniform float opacity;

      vec3 oklchToRgb(float l, float c, float h) {
        // Simplified OKLCH to RGB approximation
        float hRad = h * 3.14159 / 180.0;
        float r = l + c * cos(hRad) * 0.5;
        float g = l + c * sin(hRad) * 0.3;
        float b = l - c * 0.2;
        return clamp(vec3(r, g, b), 0.0, 1.0);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy / resolution) * 2.0 - 1.0;
        uv.x *= resolution.x / resolution.y;

        // Slow zoom and pan influenced by mouse
        float zoom = 1.5 + sin(time * 0.00015) * 0.5;
        vec2 center = vec2(-0.5 + (mouse.x - 0.5) * 0.3, 0.0 + (mouse.y - 0.5) * 0.3);
        vec2 c = uv / zoom + center;

        // Mandelbrot iteration
        vec2 z = c;
        float iterations = 0.0;
        const float maxIterations = 64.0;

        for(float i = 0.0; i < 64.0; i++) {
          if (dot(z, z) > 4.0) break;

          // z = z^2 + c with time-based perturbation
          float xtemp = z.x * z.x - z.y * z.y + c.x + sin(time * 0.0001) * 0.05;
          z.y = 2.0 * z.x * z.y + c.y + cos(time * 0.00012) * 0.05;
          z.x = xtemp;

          iterations += 1.0;
        }

        // Smooth coloring
        float smoothIter = iterations - log2(log2(dot(z, z))) + 4.0;
        float colorValue = smoothIter / maxIterations;

        // Create flowing color effect with time
        float hue = mod(colorValue * 360.0 + time * 0.01, 360.0);
        float chroma = 0.18 + sin(colorValue * 3.14159 + time * 0.0002) * 0.08;
        float lightness = 0.70 + sin(colorValue * 6.28 + time * 0.00015) * 0.15;

        vec3 color = oklchToRgb(lightness, chroma, hue);

        // Fade based on distance from edges for vignette effect
        float dist = length(uv);
        float edgeFade = smoothstep(2.5, 0.5, dist);

        gl_FragColor = vec4(color, opacity * edgeFade * colorValue);
      }
    `;

    // Compile shader
    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;
    gl.useProgram(program);

    // Set up geometry (full-screen quad)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const timeLocation = gl.getUniformLocation(program, 'time');
    const mouseLocation = gl.getUniformLocation(program, 'mouse');
    const opacityLocation = gl.getUniformLocation(program, 'opacity');

    // Enable blending
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Animation loop
    let startTime = Date.now();

    const animate = () => {
      if (!gl || !program) return;

      const currentTime = Date.now() - startTime;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(opacityLocation, opacity);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (gl && program) {
        gl.deleteProgram(program);
      }
    };
  }, [opacity]);

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
