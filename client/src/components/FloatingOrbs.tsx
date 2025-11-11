/**
 * FloatingOrbs Component
 * Creates an ethereal aurora-like depth effect with large, soft gradient orbs
 * Now with synchronized complementary color cycling that harmonizes with particle flow
 */

import { useComplementaryColors } from '@/hooks/useComplementaryColors';

export function FloatingOrbs() {
  const { complementaryHue, complementLight, complementDark } = useComplementaryColors();

  return (
    <div className="floating-orbs-container">
      {/* Orb 1: Complementary gradient - gentle drift top-left */}
      <div
        className="floating-orb floating-orb-1"
        style={{
          width: '500px',
          height: '500px',
          top: '0%',
          left: '0%',
          background: `radial-gradient(circle, oklch(0.70 0.22 ${complementaryHue} / 35%), transparent 60%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 2: Complementary light gradient - slow drift bottom-right */}
      <div
        className="floating-orb floating-orb-2"
        style={{
          width: '400px',
          height: '400px',
          bottom: '0%',
          right: '0%',
          background: `radial-gradient(circle, oklch(0.75 0.20 ${complementLight} / 20%), transparent 60%)`,
          filter: 'blur(100px)',
        }}
      />

      {/* Orb 3: Complementary dark gradient - circular motion center */}
      <div
        className="floating-orb floating-orb-3"
        style={{
          width: '600px',
          height: '600px',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: `radial-gradient(circle, oklch(0.65 0.24 ${complementDark} / 25%), transparent 60%)`,
          filter: 'blur(60px)',
        }}
      />

      {/* Orb 4: Complementary gradient - subtle accent top-right */}
      <div
        className="floating-orb floating-orb-4"
        style={{
          width: '350px',
          height: '350px',
          top: '10%',
          right: '15%',
          background: `radial-gradient(circle, oklch(0.72 0.18 ${complementaryHue} / 28%), transparent 60%)`,
          filter: 'blur(90px)',
        }}
      />

      {/* Orb 5: Complementary light gradient - circular orbital motion bottom-left */}
      <div
        className="floating-orb floating-orb-5"
        style={{
          width: '450px',
          height: '450px',
          bottom: '20%',
          left: '10%',
          background: `radial-gradient(circle, oklch(0.73 0.21 ${complementLight} / 22%), transparent 60%)`,
          filter: 'blur(85px)',
        }}
      />
    </div>
  );
}
