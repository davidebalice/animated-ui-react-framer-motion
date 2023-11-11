import React from "react";
import { FlipCard } from "./FlipCard";

export const FlipCards = () => {
  const frontContent = "Welcome to GFG.";
  const backContent = "Computer Science Portal.";

  return (
    <>
      <div className="flipCardContainer">
        <FlipCard frontContent={frontContent} backContent={backContent} rotation={'flippedH'} />
        <FlipCard frontContent={frontContent} backContent={backContent} rotation={'flippedV'}/>
        <FlipCard frontContent={frontContent} backContent={backContent} rotation={'flippedH'}/>
        <FlipCard frontContent={frontContent} backContent={backContent} rotation={'flippedV'}/>
      </div>
    </>
  );
};
