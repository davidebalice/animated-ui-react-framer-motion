import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CardsWrapper from "../components/CardsWrapper";
import { PopupCards } from "../components/PopupCards";
import { ExpandableCards } from "../components/ExpandableCards";
import TabComponent from "../components/TabComponent";
import tabs from "../data/tabs";
import reactLogo from "../assets/react.png";
import framerMotionLogo from "../assets/framer-motion.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
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
        value: 20,
        density: {
          enable: true,
          value_area: 800,
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
        value: 24,
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
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />

      <motion.div
        initial={{
          y: -250,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.1,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -250,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
            delay: 0.3,
          }}
          className="homepage"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -1250,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.7,
            }}
            className="fadeWrapper"
          >
            {" "}
            <Navbar />
            <div>
              <div className="fadeWrapperLogo">
                <motion.img
                  src={reactLogo}
                  alt=""
                  className="framerMotionImg"
                  initial={{
                    opacity: 0,
                    y: -50,
                    scale: 0.1,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                  }}
                />
                <motion.img
                  src={framerMotionLogo}
                  alt=""
                  className="framerMotionImg2"
                  initial={{
                    opacity: 0,
                    y: -50,
                    scale: 0.1,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1.3,
                  }}
                />
              </div>
              <motion.p
                className="text1"
                initial={{
                  opacity: 0,
                  y: 650,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.7,
                }}
              >
                Examples of implementing ui animations with
                <br />
                React and Framer Motion
              </motion.p>
              <motion.p
                className="text2"
                initial={{
                  opacity: 0,
                  y: 650,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.9,
                }}
              >
                Sidebar, cards, tabs, page transition, particles
              </motion.p>
            </div>
            <div>&nbsp;</div>
          </motion.div>
        </motion.div>
        <CardsWrapper>
          <ExpandableCards />
          <PopupCards />
        </CardsWrapper>
        <TabComponent tabs={tabs} />
      </motion.div>
    </>
  );
};

export default Home;
