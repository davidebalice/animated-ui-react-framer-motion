import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logoWhite.png";
import Submenu from "./Submenu";

function NavBar() {
  const [isHover, toggleHover] = useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  return (
    <div className="navbar">
      <div className="nav-title">
        <motion.img
          src={logo}
          alt=""
          className="dbLogo"
          initial={{
            y: -250,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1,
          }}
        ></motion.img>
      </div>
      <div className="nav-options">
        <motion.div
          className="navButton"
          initial={{
            y: -250,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.1,
          }}
        >
          <Link to="/">Home</Link>
        </motion.div>

        <motion.div
          className="navButton"
          initial={{
            y: -250,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.2,
          }}
        >
          <motion.div
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <Link to="/page1">Page 1</Link>
            <Submenu isHover={isHover} />
          </motion.div>
        </motion.div>

        <motion.div
          className="navButton"
          initial={{
            y: -250,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.3,
          }}
        >
          <Link to="/page2"> Page 2 </Link>
        </motion.div>

        <motion.div
          className="navButton"
          initial={{
            y: -250,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.4,
          }}
        >
          <Link to="/page3"> Page 3</Link>
        </motion.div>

        <motion.div
          className="navButton"
          initial={{
            y: -250,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.5,
          }}
        >
          <Link to="/page4"> Page 4</Link>
        </motion.div>

      </div>
    </div>
  );
}

export default NavBar;
