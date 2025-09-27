import { memo } from "react";
import ParticlesBg from 'particles-bg';

const ParticleBackground = () => {
  return (
    <ParticlesBg 
      type="circle" 
      bg={{
        position: 'fixed',
        zIndex: -1,
        top: 0,
        left: 0
      }}
      color="#e3bd52"
      num={50}
    />
  );
};

export default memo(ParticleBackground);
