import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, page }) => {
  return (
    <Link to={page.root} className="menuItemA">
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="menuItem"
      >
        <div className="iconPlaceholder">
          {page.icon}
        </div>
        <div className="textPlaceholder">
          {page.title}
        </div>
      </motion.li>
    </Link>
  );
};
