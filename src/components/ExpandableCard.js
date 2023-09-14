import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const ExpandableCard = ({
  card,
  index,
  onHandleExpand,
  selectedCard,
  containerRefs,
}) => {
  return (
    <motion.div
      className="expandableCard"
      key={index}
      onClick={(e) => onHandleExpand(e, card)}
      ref={(el) => (containerRefs.current[card] = el)}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        width: selectedCard === card ? "150%" : "100%",
        height: selectedCard === card ? "300%" : "100%",
        zIndex: selectedCard === card ? 100 : 1,
      }}
      transition={{
        duration: selectedCard === card ? 0.6 : 0.5,
        delay: selectedCard === card ? 0.1 : 0.5,
        zIndex: { delay: selectedCard === card ? 0.1 : 1 },
        y: { duration: 0.6, delay: `0.${index + 1}` },
        opacity: { duration: 0.5, delay: `0.${index + 1}` },
      }}
    >
      <motion.div
        className="expandableCardWrapper"
        key={index}
        initial={{
          width: "100%",
          height: "100%",
        }}
        animate={{
          flexDirection: selectedCard === card ? "column" : "row",
          transition: {
            duration: 0,
            delay: selectedCard === card ? 0 : 0.5,
          },
        }}
        transition={{
          duration: 0,
          delay: selectedCard === card ? 0 : 0.5,
        }}
      >
        <motion.div
          className={
            selectedCard === card
              ? "expandableCardImg expandableCardImgSelected"
              : "expandableCardImg"
          }
          style={{
            backgroundImage: `url(${card.img})`,
          }}
          key={index}
          initial={{
            width: "40%",
            height: "108%",
          }}
          animate={{
            width: selectedCard === card ? "100%" : "40%",
            height: selectedCard === card ? "300%" : "108%",
            borderRadius: selectedCard === card ? "0" : "6px",
            margin: selectedCard === card ? "0%" : "2%",
          }}
          transition={{
            duration: 0.3,
            delay: selectedCard === card ? 0.4 : 0.4,
          }}
        >
          <motion.div
            className="expandableCardCategory"
            key={index}
            initial={{
              opacity: 0,
              y: -150,
            }}
            animate={{
              opacity: selectedCard === card ? 1 : 0,
              y: selectedCard === card ? 0 : -150,
            }}
            transition={{
              duration: 0.5,
              delay: selectedCard === card ? 0.1 : 0.8,
            }}
          >
            {card.category} 45456654456
          </motion.div>
        </motion.div>

        <motion.div
          className="expandableCardTitle"
          key={index}
          initial={{
            width: "62%",
            height: "118%",
          }}
          animate={{
            width: selectedCard === card ? "100%" : "62%",
            height: selectedCard === card ? "250%" : "118%",
            fontSize: selectedCard === card ? "24px" : "16px",
            textAlign: selectedCard === card ? "center" : "left",
          }}
          transition={{
            duration: 0.2,
            delay: selectedCard === card ? 0.7 : 0.5,
          }}
        >
          {card.title} {index}
          <motion.div className="expandableCardButtonContainer">
            footer 2
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="expandableCardFooter"
        key={index}
        animate={{
          opacity: selectedCard === card ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        footer
      </motion.div>
    </motion.div>
  );
};
