import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logoWhite.png";

function Submenu({ isHover }) {
  const subMenuAnimate = {
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
      display: "block",
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.1,
        delay: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      className="subMenu"
      initial="exit"
      animate={isHover ? "enter" : "exit"}
      variants={subMenuAnimate}
    >
      <div className="subMenuBg">
        {isHover && (
          <>
            <motion.div
              className="subMenuItem"
              initial={{
                x: -250,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.1,
              }}
            >
              Subpage 1
            </motion.div>

            <motion.div
              className="subMenuItem"
              initial={{
                x: -250,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
            >
              Subpage 2
            </motion.div>

            <motion.div
              className="subMenuItem"
              initial={{
                x: -250,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
            >
              Subpage 3
            </motion.div>

            <motion.div
              className="subMenuItem"
              initial={{
                x: -250,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.4,
              }}
            >
              Subpage 4
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Submenu;
