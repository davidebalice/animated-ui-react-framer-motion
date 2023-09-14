import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const Card = ({
  card,
  handlePanEnd,
  canDrag,
  containerRefs,
  selectedId,
  index,
  handleCloseCard,
}) => {
  return (
    <motion.div
      className={
        selectedId === card
          ? card.type === "fullpage"
            ? "openedCardContainerFull"
            : "openedCardContainer"
          : "card"
      }
      key={index}
      layout
      drag={selectedId === card ? "x" : false}
      dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
      dragElastic={0.2}
      onPanEnd={(e, info) => handlePanEnd(e, info, card)}
      onClick={(e, info) => handlePanEnd(e, info, card)}
      ref={(el) => (containerRefs.current[card] = el)}
      initial={{
        y: -250,
        opacity: 0,
        delay: 0.1,
      }}
      animate={{
        y: 0,
        opacity: 1,
        delay: 0.1,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {selectedId === card && (
        <>
          <div
            className={
              selectedId === card
                ? card.type === "fullpage"
                  ? "openedCardFull"
                  : "openedCard"
                : "openedCard"
            }
          >
            
              <button
                className="buttonClose"
                onClick={(e) => {
                  handleCloseCard(card);
                }}
              >
                X
              </button>
            
          </div>
        </>
      )}
    </motion.div>
  );
};
