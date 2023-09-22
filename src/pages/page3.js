import NavBar from "../components/Navbar";
import { motion } from "framer-motion";
import github from "../assets/github2_white.png";
import Navbar from "../components/Navbar";

function Page3() {
  return (
    <motion.div
      className="page3"
      initial={{
        width: "0%",
      }}
      animate={{
        width: "100%",
      }}
      exit={{
        width: "0%",
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <p> </p>
        <Navbar />
        <a
          href="https://github.com/davidebalice/animated-ui-react-framer-motion"
          target="_blank"
          rel="noreferrer"
          className="githubLogo"
        >
          <img src={github} alt="" className="dbLogo" />
        </a>
      </div>
      <motion.div
        className="pageBody"
        initial={{
          y: -1050,
        }}
        animate={{
          y: 0,
        }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="pageTitle"
          initial={{
            y: -1050,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Page 3
        </motion.div>
        <motion.div
          className="pageDescription"
          initial={{
            y: -1050,
          }}
          animate={{
            y: 0,
          }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Scale transition
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Page3;
