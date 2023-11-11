import React, { useState } from "react";

export const FlipCard = ({ frontContent, backContent, rotation }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const handleMouseOver = () => {
    setFlipped(true);
  };

  const handleMouseOut = () => {
    setFlipped(false);
  };

  return (
    <>
      <div
        className={`flipCard ${isFlipped ? rotation : ""}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="flipCardInner">
          <div className="flipCardFront">
            <div className="flipCardContent">{frontContent}</div>
            <button className="flipButton" onClick={handleFlip}>
              Flip
            </button>
          </div>
          <div
            className={`flipCardBack ${
              rotation === "flippedV" ? "flipCardBackV" : "flipCardBackH"
            }`}
          >
            <div className="flipCardContent">{backContent}</div>
            <button className="flipButton" onClick={handleFlip}>
              Flip
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
