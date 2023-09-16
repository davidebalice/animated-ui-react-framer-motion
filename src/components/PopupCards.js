import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cards } from "../data/cards";
import { PopupCard } from "./PopupCard";
import Spacer from "../components/Spacer";

export const PopupCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef(new Array());

  const handlePanEnd = (e, info, card) => {
    if (selectedId) {
      setCanDrag(false);
    } else {
      setCanDrag(true);
      setSelectedId(card);
    }
  };

  const handleCloseCard = () => {
    setSelectedId(null);
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
        Popup cards
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
        Click on card to open in popup and view more details or open in full
        screen
      </motion.p>

      <div className="cards">
        {cards.map((card, i) => (
          <PopupCard
            card={card}
            handlePanEnd={handlePanEnd}
            canDrag={canDrag}
            containerRefs={containerRefs}
            selectedId={selectedId}
            index={i}
            handleCloseCard={handleCloseCard}
          />
        ))}
        <motion.div
          className="dim-layer"
          animate={{ opacity: selectedId ? 0.3 : 0 }}
        />
      </div>
      <Spacer height="100" />
    </div>
  );
};
