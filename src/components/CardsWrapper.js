import React from "react";

const CardsWrapper = (props) => {
  return (
    <div className={`cardsWrapper section${props.section}`}>
      {props.children}
    </div>
  );
};

export default CardsWrapper;
