import React, { useState, useRef } from "react";
import { ExpandableCard } from "./ExpandableCard";
import { cards } from "./CardsData";

export const ExpandableCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const containerRefs = useRef(new Array());

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
    <div className="expandableCards">
      {cards.map((card, i) => (
        <ExpandableCard
          card={card}
          index={i}
          onHandleExpand={handleExpand}
          selectedCard={selectedCard}
          containerRefs={containerRefs}
        />
      ))}
    </div>
  );
};
