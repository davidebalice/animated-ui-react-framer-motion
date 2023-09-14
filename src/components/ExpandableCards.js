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

export const ExpandableCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const containerRefs = useRef(new Array());

  const handleExpand = (e, card) => {
    if (selectedId) {
      const styles = getComputedStyle(containerRefs.current[card]);
      const timeout = styles.transform.split(",")[4] * -0.6;
      setTimeout(() => {
        setSelectedId(null);
      }, timeout);
    } else {
      setSelectedId(card);
    }
  };

  return (
    <div className="expandableCards">
      {cards.map((card, i) => (
        <motion.div
          className="expandableCard"
          key={i}
          onClick={(e) => handleExpand(e, card)}
          ref={(el) => (containerRefs.current[card] = el)}
          initial={{
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          animate={{
            width: selectedId === card ? "150%" : "100%",
            height: selectedId === card ? "150%" : "100%",
            zIndex: selectedId === card ? 100 : 1,
          }}
          end={{
            width: "100%",
            height: "100%",
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <motion.div
            className=""
            style={{
              width: "100%",
              height: "70%",
              position: "relative",
              display: "flex",
            }}
            key={i}
            initial={{
              flexDirection: "row",
            }}
            animate={{
              flexDirection: selectedId === card ? "column" : "row",
              transition: { duration: 1, delay: 0.2 },
            }}
            exit={{
              flexDirection: "row",
              transition: { duration: 1, delay: 2 },
            }}
            transition={{
              duration: 0.2,
              delay: 0.1,
            }}
          >
            <motion.div
              className=""
              style={{
                width: "40%",
                height: "40%",
                background: "#ff0000",
                borderRadius: "6px",
                margin: "2%",
              }}
              key={i}
              initial={{
                width: "40%",
                height: "40%",
                borderRadius: "6px",
                margin: "2%",
              }}
              animate={{
                width: selectedId === card ? "100%" : "40%",
                height: selectedId === card ? "150%" : "40%",
                borderRadius: selectedId === card ? "0" : "6px",
                margin: selectedId === card ? "0%" : "2%",
              }}
              end={{
                width: "100%",
                height: "40%",
                borderRadius: "6px",
                margin: "2%",
              }}
              transition={{
                duration: 0.2,
                delay: 0.3,
              }}
            >
              img
            </motion.div>

            <motion.div
              className=""
              style={{ width: "40%", height: "40%" }}
              key={i}
              initial={{
                width: "40%",
                height: "40%",
              }}
              animate={{
                width: selectedId === card ? "100%" : "40%",
                height: selectedId === card ? "100%" : "40%",
              }}
              end={{
                width: "100%",
                height: "40%",
              }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
            >
              text
            </motion.div>
          </motion.div>

          <motion.div
            className=""
            style={{ width: "100%", background: "yellow" }}
            key={i}
            initial={{
              display: "none",
            }}
            animate={{
              display: selectedId === card ? "block" : "none",
            }}
            end={{
              height: "20%",
            }}
            transition={{
              duration: 0.2,
            }}
          >
            footer
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
