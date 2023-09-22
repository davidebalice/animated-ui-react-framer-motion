import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CardsWrapper from "../components/CardsWrapper";
import { PopupCards } from "../components/PopupCards";
import { ExpandableCards } from "../components/ExpandableCards";
import { ColumnCards } from "../components/ColumnCards";
import Tabs from "../components/Tabs";
import tabs from "../data/tabs";
import reactLogo from "../assets/react.png";
import framerMotionLogo from "../assets/framer-motion.png";
import Particles from "../components/Particles";
import Footer from "../components/Footer";
import github from "../assets/github2_white.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
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
