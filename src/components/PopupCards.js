import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cards } from "../data/cards";
import { PopupCard } from "./PopupCard";
import { PopupCardFullpage } from "./PopupCardFullpage";
import Spacer from "../components/Spacer";

export const PopupCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef([]);

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
        Click on card to open in popup and view more details 
        <br />
        or open card in full screen
      </motion.p>

      <div className="cards">
        {cards.map((card, index) => (
          <>
            {card.type === "fullpage" ? (
              <PopupCardFullpage
                card={card}
                key={'fullpage'+index}
                handlePanEnd={handlePanEnd}
                canDrag={canDrag}
                containerRefs={containerRefs}
                selectedCard={selectedCard}
                index={index}
                handleCloseCard={handleCloseCard}
              />
            ) : (
              <PopupCard
                card={card}
                key={'popupCard'+index}
                handlePanEnd={handlePanEnd}
                canDrag={canDrag}
                containerRefs={containerRefs}
                selectedCard={selectedCard}
                index={index}
                handleCloseCard={handleCloseCard}
              />
            )}
          </>
        ))}
        <motion.div
          className="dim-layer"
          animate={{ opacity: selectedCard ? 0.3 : 0 }}
        />
      </div>
      <Spacer height="100" />
    </div>
  );
};
