import NavBar from "../components/Navbar";
import { motion } from "framer-motion";
import github from "../assets/github2_white.png";
import Navbar from "../components/Navbar";

function Page1() {
  return (
    <motion.div
      className="page1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
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
        className="page-body"
        initial={{
          y: -1050,
        }}
        animate={{
          y: 0,
        }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="page-title">Page #1</div>
        <div className="page-description">
          This is the page number 1 of the React.js Transition demo
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Page1;
