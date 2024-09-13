import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Spacer from "../components/Spacer";
import { cards } from "../data/cards";
import { ExpandableCard } from "./ExpandableCard";

export const ExpandableCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const containerRefs = useRef([]);

  const handleExpand = (e, card) => {
    if (selectedCard) {
      const styles = getComputedStyle(containerRefs.current[card]);
      const timeout = styles.transform.split(",")[4] * -0.6;
      setTimeout(() => {
        setSelectedCard(null);
      }, timeout);
    } else {
      setSelectedCard(card);
    }
  };

  return (
    <div className="expandableCardsWrapper">
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
        Expandable cards
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
        Click on card to expand and view more details
      </motion.p>

      <div className="expandableCards">
        {cards.map((card, i) => (
          <ExpandableCard
            card={card}
            index={i}
            key={"expandableCards" + i}
            onHandleExpand={handleExpand}
            selectedCard={selectedCard}
            containerRefs={containerRefs}
          />
        ))}
      </div>
      <Spacer height="50" />
    </div>
  );
};
