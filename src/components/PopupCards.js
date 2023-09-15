import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cards } from "./CardsData";
import { PopupCard } from "./PopupCard";

export const PopupCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef(new Array());

  const handlePanEnd = (e, info, card) => {
    if (selectedId) {
      const styles = getComputedStyle(containerRefs.current[card]);
      //const timeout = styles.transform.split(",")[4] * -0.6;
      setCanDrag(false);
      /*
      setTimeout(() => {
        setSelectedId(null);
      }, timeout);
      */
    } else {
      setCanDrag(true);
      setSelectedId(card);
    }
  };

  const handleCloseCard = () => {
    setSelectedId(null);
  };

  return (
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
  );
};
