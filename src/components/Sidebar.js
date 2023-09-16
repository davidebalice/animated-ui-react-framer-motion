import React, { useRef, useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../utils/useDimensions";
import { MenuToggle } from "../components/MenuToggle";
import { Navigation } from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),

  closed: () => ({
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

function Sidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [shortHeight, setShortHeight] = useState(false);
  const [showSidebar, setShowSidebar] = useState("none");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSidebar("block");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setShortHeight(true);
      }, 1200);

      return () => clearTimeout(timeout);
    } else {
      setShortHeight(false);
    }
  }, [isOpen]);

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{
        height: shortHeight ? "30%" : "100%",
        display: showSidebar,
        zIndex: "19",
      }}
    >
      <motion.div className="sidebarContainer" variants={sidebar} />

      <div className="sidebar">
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
    </motion.nav>
  );
}

export default Sidebar;
