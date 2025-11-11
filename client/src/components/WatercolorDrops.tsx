import { useEffect, useRef } from 'react';
import { ForceField } from './advanced-particles/ForceField';
import { Vector2D } from './advanced-particles/Vector2D';
import { FlockingBehavior } from './advanced-particles/FlockingBehavior';
import { Quadtree } from './advanced-particles/Quadtree';
import { Particle } from './advanced-particles/Particle';

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface WatercolorParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number; // Initial radial velocity for blending
  baseVy: number;
  radius: number;
  opacity: number;
  maxOpacity: number;
  age: number;
  lifetime: number;
  color: RGB; // Pre-converted RGB color
  centerColor: string; // Hot spot color (white/orange/yellow)
  dropId: number;
  // Density-based dispersion tracking
  densityTimer: number;        // Time spent in high-density state (ms)
  lastDispersionTime: number;  // Timestamp of last gentle expansion
  isDispersing: boolean;       // Currently in gentle expansion phase
  // Visual effects
  twinkleOffset: number;       // Random offset for individual sparkle timing
}

interface WatercolorDrop {
  x: number;
  y: number;
  spawnTime: number;
  color: RGB; // Pre-converted RGB color
  id: number;
}

interface WatercolorDropsProps {
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function WatercolorDrops({
  opacity = 0.3,
  className = '',
  style = {},
}: WatercolorDropsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<WatercolorParticle[]>([]);
  const dropsRef = useRef<WatercolorDrop[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.3 });
  const lastDropTimeRef = useRef<number>(0);
  const nextDropIdRef = useRef<number>(0);
  const forceFieldRef = useRef<ForceField | null>(null);
  // Reusable Particle adapters to avoid allocations every frame
  const particleAdaptersRef = useRef<Map<WatercolorParticle, Particle>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize wind force field
    forceFieldRef.current = new ForceField();

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking (normalized 0-1)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Helper function to boost saturation by 15%
    const boostSaturation = (rgb: RGB): RGB => {
      // Convert RGB to HSL
      const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const l = (max + min) / 2;

      let h = 0, s = 0;
      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
          case g: h = ((b - r) / d + 2) / 6; break;
          case b: h = ((r - g) / d + 4) / 6; break;
        }
      }

      // Boost saturation by 30% for better visibility against warm backgrounds
      s = Math.min(1, s + 0.30);

      // Convert back to RGB
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      let r2, g2, b2;
      if (s === 0) {
        r2 = g2 = b2 = l;
      } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r2 = hue2rgb(p, q, h + 1/3);
        g2 = hue2rgb(p, q, h);
        b2 = hue2rgb(p, q, h - 1/3);
      }

      return {
        r: Math.round(r2 * 255),
        g: Math.round(g2 * 255),
        b: Math.round(b2 * 255)
      };
    };

    // Watercolor palette - optimized for visibility against warm orange backgrounds
    // Emphasizes complementary cool tones (teals, blues, purples) with accent warm tones
    const colors: RGB[] = [
      boostSaturation({ r: 93, g: 181, b: 189 }),   // Saturated teal (contrasts with orange)
      boostSaturation({ r: 116, g: 196, b: 195 }),  // Bright cyan (contrasts with orange)
      boostSaturation({ r: 80, g: 150, b: 200 }),   // Soft blue (contrasts with orange)
      boostSaturation({ r: 100, g: 170, b: 210 }),  // Sky blue (contrasts with orange)
      boostSaturation({ r: 150, g: 120, b: 200 }),  // Lavender purple (contrasts with orange)
      boostSaturation({ r: 255, g: 223, b: 107 }),  // Bright yellow (warm accent)
      boostSaturation({ r: 255, g: 240, b: 200 }),  // Pale cream (light accent)
    ];

    // Create a drop at position
    const createDrop = (x: number, y: number, currentTime: number, initialAge?: number) => {
      const drop: WatercolorDrop = {
        x,
        y,
        spawnTime: currentTime,
        color: colors[Math.floor(Math.random() * colors.length)],
        id: nextDropIdRef.current++,
      };
      dropsRef.current.push(drop);

      // Spawn particles for organic ink bloom
      const particleCount = 60 + Math.floor(Math.random() * 40); // 60-100 particles
      const baseRadius = 20 + Math.random() * 15; // Initial spread radius

      for (let i = 0; i < particleCount; i++) {
        // Random angle for radial spread
        const angle = Math.random() * Math.PI * 2;

        // Gentle initial bloom - wind will take over
        const speed = 5 + Math.random() * 10; // 5-15 pixels per second
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        // Slightly larger particles for visible gradient effect
        const radius = 2.5 + Math.random() * 2.5; // 2.5-5px

        // Extended lifetimes for watching flocking evolution and cross-pollination
        const lifetime = 180000 + Math.random() * 300000; // 180-480 seconds (3-8 minutes)

        // Vary max opacity for depth/layering effect
        const maxOpacity = 0.2 + Math.random() * 0.25; // 0.2-0.45 (more visible)

        // Pick random center "hot spot" color for uniqueness
        const rand = Math.random();
        const centerColor =
          rand < 0.4 ? `rgba(255, 255, 255, ${maxOpacity})` :      // 40% white
          rand < 0.7 ? `rgba(255, 180, 100, ${maxOpacity})` :      // 30% orange
                       `rgba(255, 220, 120, ${maxOpacity})`;       // 30% yellow

        // Calculate age-based properties for pre-seeded particles
        const age = initialAge !== undefined ? initialAge : 0;

        // For aged particles, position them further from drop center based on simulated spread
        let particleX: number, particleY: number;
        if (initialAge !== undefined && initialAge > 0) {
          // Simulate particle movement over time (average velocity * age in seconds)
          const avgSpeed = 10; // Average of 5-15 px/s
          const spreadDistance = baseRadius + (avgSpeed * (initialAge / 1000)); // Convert ms to seconds
          particleX = x + Math.cos(angle) * spreadDistance * (0.5 + Math.random() * 0.5);
          particleY = y + Math.sin(angle) * spreadDistance * (0.5 + Math.random() * 0.5);
        } else {
          particleX = x + Math.cos(angle) * baseRadius * Math.random();
          particleY = y + Math.sin(angle) * baseRadius * Math.random();
        }

        // Calculate initial opacity based on lifecycle
        let initialOpacity: number;
        if (age > 0) {
          const initialLifeRatio = age / lifetime;
          if (initialLifeRatio < 0.05) {
            // Still in fade-in phase
            initialOpacity = maxOpacity * (initialLifeRatio / 0.05);
          } else {
            // In cyclic breathing phase
            const cycle = Math.sin(initialLifeRatio * Math.PI * 6);
            initialOpacity = maxOpacity * (0.1 + 0.9 * ((cycle + 1) / 2));
          }
        } else {
          initialOpacity = 0;
        }

        const particle: WatercolorParticle = {
          x: particleX,
          y: particleY,
          vx,
          vy,
          baseVx: vx, // Store initial radial velocity
          baseVy: vy,
          radius,
          opacity: initialOpacity,
          maxOpacity,
          age,
          lifetime,
          color: drop.color,
          centerColor,
          dropId: drop.id,
          // Density-based dispersion state
          densityTimer: 0,
          lastDispersionTime: 0,
          isDispersing: false,
          // Visual effects
          twinkleOffset: Math.random() * Math.PI * 2,  // Random phase 0-2π for individual sparkle
        };

        particlesRef.current.push(particle);
      }
    };

    // Pre-populate canvas with multiple drops at various ages for immediate visibility
    const prePopulateDrops = (currentTime: number) => {
      // Create 5-6 drops with staggered ages
      const dropCount = 5 + Math.floor(Math.random() * 2); // 5 or 6 drops
      const ageStagger = 5000; // 5 seconds between each drop's age

      for (let i = 0; i < dropCount; i++) {
        // Random position across canvas (avoid edges)
        const dropX = (0.15 + Math.random() * 0.7) * canvas.width;
        const dropY = (0.1 + Math.random() * 0.5) * canvas.height; // Bias toward top half

        // Stagger ages: 0s, 5s, 10s, 15s, 20s, 25s
        const initialAge = i * ageStagger + Math.random() * 2000; // Add 0-2s variation

        // Create drop with pre-aged particles
        createDrop(dropX, dropY, currentTime - initialAge, initialAge);
      }
    };

    // Animation loop
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1); // seconds
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new drops periodically (every 2-4.5 seconds)
      const timeSinceLastDrop = currentTime - lastDropTimeRef.current;
      const nextDropDelay = 2000 + Math.random() * 2500;

      if (timeSinceLastDrop > nextDropDelay) {
        lastDropTimeRef.current = currentTime;

        // 40% chance to spawn near mouse, 60% random
        let dropX: number, dropY: number;

        if (Math.random() < 0.4) {
          // Near mouse with some randomness
          dropX = (mouseRef.current.x + (Math.random() - 0.5) * 0.3) * canvas.width;
          dropY = (mouseRef.current.y + (Math.random() - 0.5) * 0.3) * canvas.height;
        } else {
          // Random position (avoid edges)
          dropX = (0.15 + Math.random() * 0.7) * canvas.width;
          dropY = (0.1 + Math.random() * 0.5) * canvas.height; // Bias toward top half
        }

        createDrop(dropX, dropY, currentTime);
      }

      // Update and draw particles
      const forceField = forceFieldRef.current;

      // Build Quadtree for efficient neighbor queries
      const bounds = { x: 0, y: 0, width: canvas.width, height: canvas.height };
      const quadtree = new Quadtree(bounds);

      // Get or create reusable adapters (reduces allocations from ~240K/sec to ~0)
      const adapters = particleAdaptersRef.current;

      // Insert all particles into quadtree (reusing adapters)
      for (const p of particlesRef.current) {
        let particleAdapter = adapters.get(p);
        if (!particleAdapter) {
          // Create new adapter only if this particle doesn't have one yet
          particleAdapter = new Particle(
            new Vector2D(p.x, p.y),
            new Vector2D(p.vx, p.vy)
          );
          adapters.set(p, particleAdapter);
        } else {
          // Reuse existing adapter by updating its values
          particleAdapter.position.x = p.x;
          particleAdapter.position.y = p.y;
          particleAdapter.velocity.x = p.vx;
          particleAdapter.velocity.y = p.vy;
        }
        quadtree.insert(particleAdapter);
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        // Age the particle
        p.age += deltaTime * 1000; // milliseconds

        // Remove dead particles
        if (p.age > p.lifetime) {
          particlesRef.current.splice(i, 1);
          // Clean up adapter to prevent memory leak
          adapters.delete(p);
          continue;
        }

        // Calculate lifecycle phase
        const lifeRatio = p.age / p.lifetime;
        // Wind influence ramps up quickly (reaches 100% at 1.5s) for visibility during peak opacity
        const windInfluence = Math.min(p.age / 1500, 1.0);

        // Query nearby neighbors for flocking and wind resistance
        // Increase perception radius in late phase to help reformed flocks find each other
        const basePerceptionRadius = 60;
        const latePhaseBonus = lifeRatio > 0.6 ? 25 : 0; // +25px radius after 60% lifetime for cross-pollination
        const perceptionRadius = basePerceptionRadius + latePhaseBonus;
        const neighbors = quadtree.query({
          x: p.x,
          y: p.y,
          radius: perceptionRadius,
        });

        // Count neighbors (excluding self)
        const neighborCount = Math.max(0, neighbors.length - 1);

        // Calculate wind resistance based on clustering AND distance from group center
        // More neighbors = more resistance to wind (group cohesion)
        // BUT: After gentle expansion, particles far from center get MORE wind (stirring effect)
        const maxNeighborsForResistance = 10;
        let windResistance = 1.0 - Math.min(neighborCount / maxNeighborsForResistance, 1.0) * 0.4;
        // Many neighbors (10+): 0.6x wind (60%) - allows gentle group drift
        // Few neighbors (0-2): 1.0x wind (100%)

        // Distance-based wind modifier for post-expansion stirring effect
        if (neighborCount > 0 && neighbors.length > 1) {
          const particleAdapter = adapters.get(p)!;

          // Calculate center of mass for distance measurement
          let centerOfMass = new Vector2D(0, 0);
          let validNeighbors = 0;
          for (const neighbor of neighbors) {
            if (neighbor !== particleAdapter) {
              centerOfMass = centerOfMass.add(neighbor.position);
              validNeighbors++;
            }
          }

          if (validNeighbors > 0) {
            centerOfMass = centerOfMass.divide(validNeighbors);
            const distanceFromCenter = particleAdapter.position.distance(centerOfMass);

            // During post-expansion phase, increase wind for distant particles (stirring effect)
            const timeSinceDispersion = currentTime - p.lastDispersionTime;
            const POST_DISPERSION_DURATION = 4000; // 4s window for enhanced wind drift
            const isPostExpansion = timeSinceDispersion < POST_DISPERSION_DURATION;

            if (isPostExpansion) {
              // Particles far from center (>50px) get gently increased wind
              const distanceBoost = Math.min(distanceFromCenter / 50, 1.5); // Up to 1.5x boost
              windResistance *= (1.0 + distanceBoost * 0.5); // Gentle increase
              windResistance = Math.min(windResistance, 2.0); // Cap at 2x normal wind
            }
          }
        }

        // Get wind force from force field
        if (forceField) {
          const windForce = forceField.getForceAt(
            new Vector2D(p.x, p.y),
            currentTime,
            canvas.width,
            canvas.height
          );

          // Apply wind with dynamic resistance
          const resistedWind = windForce.multiply(windResistance);

          // Apply wind force additively (allows accumulation with flocking)
          // Scale by windInfluence and deltaTime, with 2x power boost for stronger drift
          p.vx += resistedWind.x * windInfluence * deltaTime * 2.0;
          p.vy += resistedWind.y * windInfluence * deltaTime * 2.0;
        }

        // Apply flocking behavior with gentle density-based expansion during most of lifecycle (5-85%)
        if (lifeRatio > 0.05 && lifeRatio < 0.85 && neighbors.length > 1) {
          const particleAdapter = adapters.get(p)!;

          // Calculate local center of mass for density-based behavior
          let centerOfMass = new Vector2D(0, 0);
          let validNeighbors = 0;
          for (const neighbor of neighbors) {
            if (neighbor !== particleAdapter) {
              centerOfMass = centerOfMass.add(neighbor.position);
              validNeighbors++;
            }
          }
          if (validNeighbors > 0) {
            centerOfMass = centerOfMass.divide(validNeighbors);
          }

          // DENSITY DETECTION: Track time spent in high-density state for calming cycle
          const DENSITY_THRESHOLD = 8; // 8+ neighbors triggers gentle expansion
          const isHighDensity = neighborCount >= DENSITY_THRESHOLD;

          if (isHighDensity) {
            p.densityTimer += deltaTime * 1000; // Accumulate time in ms
          } else {
            p.densityTimer = 0; // Reset when density drops
          }

          // GENTLE EXPANSION TRIGGER: After 6-8 seconds of mesmerizing bunching
          const DENSITY_BUILDUP_TIME = 6000 + Math.random() * 2000; // 6-8 seconds of swirling
          const timeSinceLastDispersion = currentTime - p.lastDispersionTime;
          const canDisperse = timeSinceLastDispersion > 6000; // 6s cooldown (faster reflocking opportunities)

          if (p.densityTimer >= DENSITY_BUILDUP_TIME && canDisperse) {
            p.isDispersing = true;
            p.lastDispersionTime = currentTime;
            p.densityTimer = 0; // Reset timer
          }

          // Check if gentle expansion phase has ended
          const POST_DISPERSION_DURATION = 3000 + Math.random() * 1000; // 3-4s of slow expansion
          if (p.isDispersing && (currentTime - p.lastDispersionTime) > POST_DISPERSION_DURATION) {
            p.isDispersing = false;
          }

          // FORCE CALCULATION: Switch between normal flocking and gentle expansion
          let flockingForce: Vector2D;

          if (p.isDispersing) {
            // GENTLE EXPANSION MODE: Soft radial breathing from center of mass
            const awayFromCenter = particleAdapter.position.subtract(centerOfMass);
            if (awayFromCenter.magnitude() > 0) {
              const expansionDirection = awayFromCenter.normalize();
              const GENTLE_EXPANSION_STRENGTH = 220; // Soft, calming expansion
              flockingForce = expansionDirection.multiply(GENTLE_EXPANSION_STRENGTH);
            } else {
              flockingForce = Vector2D.zero();
            }
          } else {
            // NORMAL MODE: Standard flocking (cohesion + separation + alignment)
            flockingForce = FlockingBehavior.calculate(particleAdapter, neighbors);
          }

          // Apply flocking/expansion force
          const flockingPhase = (lifeRatio - 0.05) / 0.8; // 0 at 5%, 1 at 85%
          const baseInfluence = Math.sin(flockingPhase * Math.PI) * 1.2; // Peak 120% at 45% for dynamic movement

          // Boost early phase movement (5-29% of lifetime = first 30% of flocking window)
          const earlyBoost = flockingPhase < 0.3 ? 1.8 : 1.0; // 80% boost for rapid schooling formation

          // Boost reflocking after dispersion ends (helps particles regroup into mixed-color flocks)
          const timeSinceDispersion = currentTime - p.lastDispersionTime;
          const isReflocking = !p.isDispersing && timeSinceDispersion < 8000; // 8s post-dispersion window
          const reflockBoost = isReflocking ? 1.4 : 1.0; // 40% boost to help cross-pollination

          const flockingInfluence = p.isDispersing
            ? 0.8
            : baseInfluence * earlyBoost * reflockBoost; // Apply both boosts for dynamic behavior

          p.vx += flockingForce.x * deltaTime * flockingInfluence;
          p.vy += flockingForce.y * deltaTime * flockingInfluence;
        }

        // Light drag for organic settling (reduced to retain momentum longer)
        const drag = 0.985;
        p.vx *= drag;
        p.vy *= drag;

        // Update position
        p.x += p.vx * deltaTime;
        p.y += p.vy * deltaTime;

        // Cyclic fade in/out for evolving visibility
        if (lifeRatio < 0.05) {
          // Quick initial fade in over first 5% of lifetime
          p.opacity = p.maxOpacity * (lifeRatio / 0.05);
        } else {
          // Periodic fade in/out with sine wave (3 full cycles)
          // Particles "breathe" in visibility, appearing to drift away and return
          const cycle = Math.sin(lifeRatio * Math.PI * 6);
          // Map sine [-1,1] to opacity [0.1, 1.0] to maintain minimum visibility
          p.opacity = p.maxOpacity * (0.1 + 0.9 * ((cycle + 1) / 2));
        }

        // Draw particle with radial gradient (colored center hot spot, base color, transparent edges)
        // Use pre-converted RGB values (no conversion needed)
        const { r, g, b } = p.color;

        // Create radial gradient from center to edge
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,           // Inner circle (center)
          p.x, p.y, p.radius     // Outer circle (edge)
        );

        // Individual sparkle effect - each particle twinkles at its own pace (firefly effect)
        const sparkleFreq = 0.0006; // Slow twinkle (full cycle ~10-12 seconds)
        const sparklePhase = (currentTime * sparkleFreq) + p.twinkleOffset;
        const sparkleIntensity = 0.5 + Math.sin(sparklePhase) * 0.5; // 0.0-1.0 range (full variation)

        // Apply sparkle to center hot spot
        const twinkledCenterOpacity = p.maxOpacity * sparkleIntensity;
        const twinkledCenter = p.centerColor.replace(/[\d.]+\)$/, `${twinkledCenterOpacity})`);

        // Hot spot center (white/orange/yellow glow with individual twinkle)
        gradient.addColorStop(0, twinkledCenter);

        // Transition to base color at 30% radius
        gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${p.opacity * opacity})`);

        // Mid-range fade (60% opacity at 70% radius)
        gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${p.opacity * opacity * 0.6})`);

        // Transparent edge (fade to 0% at outer edge)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Clean up old drops (keep drops list manageable)
      dropsRef.current = dropsRef.current.filter(
        (drop) => currentTime - drop.spawnTime < 10000
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    // Pre-populate with 5-6 drops at various ages for immediate visibility
    const now = Date.now();
    prePopulateDrops(now);
    lastDropTimeRef.current = now;

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
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
