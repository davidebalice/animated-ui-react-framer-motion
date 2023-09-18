import React from "react";
import { motion } from "framer-motion";
import { cards } from "../data/cards";

const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2,
    },
  },
  inactive: {
    display: "none",
  },
};

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5,
    },
  },
};

const Tab = ({ id, active, key }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <div className="tabCards">
      {id === "Nature"
        ? cards.map((card, index) => (
            <motion.div key={index} variants={cardVariant} className="tabCard">
              <div
                className="tabCardImg"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
              <div className="tabCardTitle">{card.title}</div>
            </motion.div>
          ))
        : cards
            .filter((card) => card.category === id)
            .map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                className="tabCard"
              >
                <div
                  className="tabCardImg"
                  style={{ backgroundImage: `url(${card.img})` }}
                ></div>
                <div className="tabCardTitle">{card.title}</div>
              </motion.div>
            ))}
    </div>
  </motion.div>
);

export default Tab;
