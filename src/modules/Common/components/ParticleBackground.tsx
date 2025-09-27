import { memo } from "react";

const ParticleBackground = () => {
  // Fallback CSS-only particle effect to maintain visual consistency
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 50%, rgba(227, 189, 82, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(227, 189, 82, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(227, 189, 82, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default memo(ParticleBackground);
