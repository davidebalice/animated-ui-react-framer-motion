import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const PopupCard = ({
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
        duration: 0.4,
        y: { duration: 0.6, delay: `0.${index + 1}` },
        opacity: { duration: 0.5, delay: `0.${index + 1}` },
      }}
    >
      {selectedId === card ? (
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
            <div
              className="cardImg"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <button
                className="buttonClose"
                onClick={(e) => {
                  handleCloseCard(card);
                }}
              >
                X
              </button>
              ddddddddddd
            </div>
            <div className="CardTextContainer">ddddddddddd</div>
          </div>
        </>
      ) : (
        <>
          {card.type === "fullpage" ? (
            <>
              <div
                className="cardImgFull"
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className="CardTextContainerFull">
                  <div className="CardTextContainerFullCol1">
                    ddddddddddd
                  </div>
                  <div className="CardTextContainerFullCol2">
                    ddddddddddd
                  </div>
                  </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="cardImg"
                style={{ backgroundImage: `url(${card.img})` }}
              >
                ddddddddddd
              </div>
              <div className="CardTextContainer">ddddddddddd</div>
            </>
          )}
        </>
      )}
    </motion.div>
  );
};
