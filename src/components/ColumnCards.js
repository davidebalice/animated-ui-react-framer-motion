import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cards } from "../data/cards";
import { ColumnCard } from "./ColumnCard";
import Spacer from "./Spacer";

export const ColumnCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const [column, setColumn] = useState(3);
  const [firstColumn, setFirstColumn] = useState(false);
  const [typeCard, setTypeCard] = useState("column");
  const containerRefs = useRef(new Array());

  const handleColumn = (count) => {
    setColumn(count);
  };

  const handleFirstColumn = () => {
    if (firstColumn) {
      setFirstColumn(false);
    } else {
      setFirstColumn(true);
    }
  };

  const handleTypeCard = (type) => {
    setTypeCard(type);
  };

  const handlePanEnd = (e, info, card) => {
    if (selectedCard) {
      setCanDrag(false);
    } else {
      setCanDrag(true);
      setSelectedCard(card);
    }
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <motion.p
        className="text3"
        initial={{
          y: -250,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.5,
        }}
      >
        Change view
      </motion.p>
      <motion.p
        className="text4"
        initial={{
          y: -250,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.7,
        }}
      >
        Change column e type of card with animation
      </motion.p>
      <div
        className="selector"
        style={{ border: "1px solid", fontSize: "20px", textAlign: "center" }}
      >
        <div onClick={() => handleColumn(1)}>1 Columns</div>
        <div onClick={() => handleColumn(2)}>2 Columns</div>
        <div onClick={() => handleColumn(3)}>3 Columns</div>
        <div onClick={() => handleColumn(4)}>4 Columns</div>
        <div onClick={() => handleColumn(5)}>5 Columns</div>
        <div onClick={() => handleFirstColumn(true)}>expand first col</div>
        <div onClick={() => handleTypeCard("column")}>column</div>
        <div onClick={() => handleTypeCard("row")}>row</div>
        <label>
          <input
            type="checkbox"
            checked={firstColumn}
            onChange={handleFirstColumn}
          />
          Checkbox
        </label>
      </div>

      <div
        className={
          typeCard === "column" ? "columnCards" : "columnCards columnCardsRow"
        }
        style={{
          gridTemplateColumns: `repeat(${column}, 1fr)`,
        }}
      >
        {cards.map((card, index) => (
          <>
            <ColumnCard
              card={card}
              handlePanEnd={handlePanEnd}
              canDrag={canDrag}
              containerRefs={containerRefs}
              selectedCard={selectedCard}
              index={index}
              handleCloseCard={handleCloseCard}
              firstColumn={firstColumn}
              typeCard={typeCard}
            />
          </>
        ))}
      </div>
      <Spacer height="100" />
    </div>
  );
};
