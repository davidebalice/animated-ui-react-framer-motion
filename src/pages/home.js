import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import bg from "../assets/bg1.jpg";
import framerMotionLogo from "../assets/framer-motion.png";
import github from "../assets/github2_white.png";
import reactLogo from "../assets/react.png";
import CardsWrapper from "../components/CardsWrapper";
import { ColumnCards } from "../components/ColumnCards";
import { ExpandableCards } from "../components/ExpandableCards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";
import { PopupCards } from "../components/PopupCards";
import Tabs from "../components/Tabs";
import tabs from "../data/tabs";

import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";

const Home = () => {
  useEffect(() => {
    const preloadImages = (sources) => {
      sources.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages([bg2, bg3, bg4, bg5]);
  }, []);

  return (
    <>
      <Particles />

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
          style={{ backgroundImage: `url("${bg}")` }}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <p> </p>
              <Navbar />
              <a
                href="https://github.com/davidebalice/animated-ui-react-framer-motion"
                target="_blank"
                rel="noreferrer"
                className="githubLogo"
              >
                <img src={github} alt="" className="dbLogo" />
              </a>
            </div>
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
                Examples of ui animations with
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
        <CardsWrapper section={1}>
          <ExpandableCards />
          <PopupCards />
        </CardsWrapper>
        <CardsWrapper section={2}>
          <ColumnCards />
        </CardsWrapper>
        <Tabs tabs={tabs} />
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
