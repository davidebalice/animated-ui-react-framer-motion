import React from "react";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const PopupCardFullpage = ({
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
      className={selectedCard === card ? "openedCardContainerFull" : "card"}
      key={'openedCard'+index}
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
      {selectedCard === card ? (
        <>
          <div className="openedCardFull">
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
                  key={'expandableCardCategory'+index}
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
              <div className="expandableCardFullTitle">{card.title}</div>
            </div>
            <div className="cardTextContainer">
              <motion.div
                className="expandableCardTitle"
                key={'expandableCardTitle'+index}
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
                  {selectedCard === card && (
                    <div className="expandableBody">
                      <div className="expandableBodyCol col-md-6 col-12">
                        <motion.div
                          key={'expandableBody'+index}
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
                            <AiFillFacebook size={40} className="facebook" />
                            <AiFillInstagram size={40} className="instagram" />
                            <AiFillLinkedin size={40} className="linkedin" />
                          </div>
                        </motion.div>

                        <motion.p
                          className="expandableDescription"
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
                      </div>

                      <motion.p
                        className="expandableBodyCol col-md-6 col-12"
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
                        <Form className="form">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="your name"
                              className="input"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              className="input"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              className="input"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <div className="sendButton">Send</div>
                          </Form.Group>
                        </Form>
                      </motion.p>
                    </div>
                  )}
                </motion.p>

                {selectedCard !== card && (
                  <motion.div className="expandableCardButtonContainer">
                    <div className="cardButton">detail</div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="cardImgFull"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="cardTextContainerFull">
              <div className="cardTextContainerFullCol1">
                {" "}
                {card.title}
                <br />
                {selectedCard !== card && (
                  <span className="category2">{card.category}</span>
                )}
              </div>
              <div className="cardTextContainerFullCol2">
                {selectedCard !== card && (
                  <motion.div className="expandableCardButtonContainer">
                    <div className="cardButton2">detail</div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};
