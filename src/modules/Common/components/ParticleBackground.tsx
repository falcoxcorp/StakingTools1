
import ParticlesBg from "particles-bg";

const ParticleBackground = () => {
  const particlesConfig = {
    num: [400], // Número de partículas
    rps: 0.1, // Rotaciones por segundo
    radius: [5, 10], // Tamaño de las partículas
    life: [1, 2], // Duración de la vida de las partículas
    v: [1, 3], // Velocidad de las partículas
    tha: [0, Math.PI], // Ángulo de las partículas
    alpha: [0.5, 1], // Opacidad de las partículas
    scale: [1, 2], // Escala de las partículas
    position: "center", // Posición de las partículas
    color: ["#e3bd52"], // Color primario
    cross: "transparent", // Color de cruz de partículas
    random: null, // Sin aleatorización
    g: 0.1, // Gravedad de las partículas
    f: [0.1, 0.2], // Fuerza de atracción de partículas
  };

  return (

    <ParticlesBg
      type="cobweb"
      bg={true}
      color="#e3bd52"
      config={particlesConfig}
    />
  );
};

export default ParticleBackground;
