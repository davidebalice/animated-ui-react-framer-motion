import TsParticles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particles = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 22,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },

      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <TsParticles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </>
  );
};

export default Particles;
