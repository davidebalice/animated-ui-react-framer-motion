import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    name: "react",
    dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
    img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
  },
  {
    id: 2,
    name: "garphql",
    dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
    img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
  },
  {
    id: 3,
    name: "js",
    dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
    img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
  },
  {
    id: 4,
    name: "nodejs",
    dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
    img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
  },
];

export const Cards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef(new Array());

  const handlePanEnd = (e, info, card) => {
    if (selectedId) {
      const styles = getComputedStyle(containerRefs.current[card]);
      const timeout = styles.transform.split(",")[4] * -0.6;
      setCanDrag(false);
      setTimeout(() => {
        setSelectedId(null);
      }, timeout);
    } else {
      setCanDrag(true);
      setSelectedId(card);
    }
  };

  return (
    <div className="cards">
      {cards.map((card, i) => (
        <motion.div
          className={selectedId === card ? "openedCardContainer" : "card"}
          key={i}
          layout
          drag={selectedId === card ? "x" : false}
          dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
          dragElastic={0.2}
          onPanEnd={(e, info) => handlePanEnd(e, info, card)}
          onClick={(e, info) => handlePanEnd(e, info, card)}
          ref={(el) => (containerRefs.current[card] = el)}
        >
          {selectedId === card && (
            <>
              <div className="openedCard">
                <div />
                ewfwefewfwefwefwef
                <div />
              </div>
            </>
          )}
        </motion.div>
      ))}
      <motion.div
        className="dim-layer"
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </div>
  );
};
