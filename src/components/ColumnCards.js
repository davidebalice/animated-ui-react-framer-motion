import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cards } from "../data/cards";
import { ColumnCard } from "./ColumnCard";
import Spacer from "./Spacer";
import { PiRowsFill } from "react-icons/pi";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";

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
        Change column and type of card with animation
      </motion.p>
      <div className="buttonContainer">
        <div>
          Columns:
          <div className="buttonColumnWrapper">
            <div
              onClick={() => handleColumn(1)}
              className="buttonColumn"
              style={column === 1 ? { outline: "2px solid #336699" } : {}}
            >
              1
            </div>
            <div
              onClick={() => handleColumn(2)}
              className="buttonColumn"
              style={column === 2 ? { outline: "2px solid #336699" } : {}}
            >
              2
            </div>
            <div
              onClick={() => handleColumn(3)}
              className="buttonColumn"
              style={column === 3 ? { outline: "2px solid #336699" } : {}}
            >
              3
            </div>
            <div
              onClick={() => handleColumn(4)}
              className="buttonColumn"
              style={column === 4 ? { outline: "2px solid #336699" } : {}}
            >
              4
            </div>
            <div
              onClick={() => handleColumn(5)}
              className="buttonColumn"
              style={column === 5 ? { outline: "2px solid #336699" } : {}}
            >
              5
            </div>
          </div>
        </div>

        <div>
          Type of card:
          <div className="buttonColumnWrapper">
            <div
              onClick={() => handleTypeCard("column")}
              className="buttonColumn"
              style={
                typeCard === "column" ? { outline: "2px solid #336699" } : {}
              }
            >
              <TfiLayoutColumn3Alt size={20} />
            </div>
            <div
              onClick={() => handleTypeCard("row")}
              className="buttonColumn"
              style={typeCard === "row" ? { outline: "2px solid #336699" } : {}}
            >
              <PiRowsFill size={28} />
            </div>
          </div>
        </div>

        <div>
          Expand first column
          <div className="buttonColumnWrapper">
            <label className="buttonColumn">
              <input
                type="checkbox"
                checked={firstColumn}
                onChange={handleFirstColumn}
                className="checkboxColumn"
              />
            </label>
          </div>
        </div>
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
