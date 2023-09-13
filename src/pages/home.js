import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Cards } from "../components/Cards";
import TabComponent from "../components/TabComponent";
import tabs from "../components/tabs";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <motion.div
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
          duration: 0.1,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -250,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
            delay: 0.3,
          }}
          className="homepage"
        >
          {" "}
          <Navbar />
        </motion.div>
        <Cards />
        <TabComponent tabs={tabs} />
      </motion.div>
    </>
  );
};

export default Home;
