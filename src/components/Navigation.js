import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import pages  from "../data/pages";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className="navigation">
    {pages.map((page, i) => (
      <MenuItem i={i} key={'menuItem'+i} page={page} />
    ))}
  </motion.ul>
);
