import { motion } from "framer-motion";
import React from "react";

export const ColumnCard = ({
  card,
  containerRefs,
  selectedCard,
  index,
  firstColumn,
  typeCard,
}) => {
  return (
    <motion.div
      className={
        typeCard === "column" ? "columnCard" : "columnCard columnCardRow"
      }
      key={"columnCard" + index}
      layout
      style={firstColumn && index === 0 ? { gridColumn: "span 2" } : {}}
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
      <>
        <div
          className={typeCard === "column" ? "columnCardImg" : "columnCardImg2"}
          style={{ backgroundImage: `url(${card.img})` }}
        ></div>

        <div
          className={
            typeCard === "column"
              ? "columnCardTextContainer"
              : "columnCardTextContainer columnCardTextContainerRow"
          }
        >
          <div className="cardTextTitle">
            {card.title}
            <br />
            {selectedCard !== card && (
              <span className="category">{card.category}</span>
            )}
          </div>
          {selectedCard !== card && (
            <motion.div className="expandableCardButtonContainer">
              <div className="cardButton">detail</div>
            </motion.div>
          )}
        </div>
      </>
    </motion.div>
  );
};
