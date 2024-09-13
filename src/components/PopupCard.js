import React from "react";
import { motion } from "framer-motion";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const PopupCard = ({
  card,
  handlePanEnd,
  canDrag,
  containerRefs,
  selectedCard,
  index,
  handleCloseCard,
}) => {
  return (
    <motion.div
      className={selectedCard === card ? "openedCardContainer" : "card"}
      key={'popupCard'+index}
      layout
      drag={selectedCard === card ? "x" : false}
      dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
      dragElastic={0.2}
      onPanEnd={(e, info) => handlePanEnd(e, info, card)}
      onClick={(e, info) => handlePanEnd(e, info, card)}
      ref={(el) => (containerRefs.current[card] = el)}
      initial={{
        y: -250,
        opacity: 0,
        delay: 0.1,
      }}
      animate={{
        y: 0,
        opacity: 1,
        delay: 0.1,
      }}
      transition={{
        duration: 0.4,
        y: { duration: 0.6, delay: `0.${index + 1}` },
        opacity: { duration: 0.5, delay: `0.${index + 1}` },
      }}
    >
      <>
        {selectedCard === card ? (
          <>
            <div className={selectedCard === card && "openedCard"}>
              <div
                className="cardImg"
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <button
                  className="buttonClose"
                  onClick={(e) => {
                    handleCloseCard(card);
                  }}
                >
                  X
                </button>
                <div className="expandableCardCategoryContainer">
                  <motion.div
                    className="expandableCardCategory"
                    key={'popupCard2_'+index}
                    initial={{
                      opacity: 0,
                      y: -150,
                    }}
                    animate={{
                      opacity: selectedCard === card ? 1 : 0,
                      y: selectedCard === card ? 0 : -150,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: selectedCard === card ? 0.1 : 0.8,
                    }}
                  >
                    {card.category}
                  </motion.div>
                </div>
              </div>
              <div className="cardTextContainer">
                <motion.div
                  className="expandableCardTitle"
                  key={'popupCard3_'+index}
                  initial={{
                    width: "62%",
                    height: "100%",
                  }}
                  animate={{
                    width: selectedCard === card ? "100%" : "62%",
                    height: selectedCard === card ? "250%" : "100%",
                    fontSize: selectedCard === card ? "24px" : "16px",
                    textAlign: selectedCard === card ? "center" : "left",
                  }}
                  transition={{
                    duration: 0.2,
                    delay: selectedCard === card ? 0.7 : 0,
                  }}
                >
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8,
                    }}
                  >
                    <>
                      {card.title}

                      {selectedCard !== card && (
                        <>
                          <br />
                          <span className="category">{card.category}</span>
                        </>
                      )}
                      {selectedCard === card && (
                        <motion.p
                          className="description"
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 1,
                          }}
                        >
                          {card.description}
                        </motion.p>
                      )}
                    </>
                  </motion.p>

                  {selectedCard !== card && (
                    <motion.div className="expandableCardButtonContainer">
                      <div className="cardButton">detail</div>
                    </motion.div>
                  )}
                </motion.div>

                {selectedCard === card && (
                  <motion.div
                    className="cardFooter"
                    key={'popupCard4_'+index}
                    initial={{
                      opacity: 0,
                      y: 250,
                    }}
                    animate={{
                      opacity: selectedCard === card ? 1 : 0,
                      y: selectedCard === card ? 0 : 250,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 1,
                    }}
                  >
                    <div className="expandableCardSocial">
                      <AiFillFacebook size={26} className="facebook" />
                      <AiFillInstagram size={26} className="instagram" />
                      <AiFillLinkedin size={26} className="linkedin" />
                    </div>
                    <div>
                      {" "}
                      <motion.div className="expandableCardButtonContainer">
                        <div className="cardButton">detail</div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="cardImg"
              style={{ backgroundImage: `url(${card.img})` }}
            ></div>

            <div className="cardTextContainer" style={{ padding: "10px" }}>
              <div className="cardTextTitle">
                {card.title}
                <br />
                {selectedCard !== card && (
                  <span className="category">{card.category}</span>
                )}
              </div>
              {selectedCard !== card && (
                <motion.div className="expandableCardButtonContainer">
                  <div className="cardButton">detail</div>
                </motion.div>
              )}
            </div>
          </>
        )}
      </>
    </motion.div>
  );
};
