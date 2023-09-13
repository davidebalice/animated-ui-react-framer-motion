import NavBar from "../components/Navbar";
import { motion } from "framer-motion";

function Page4() {
  return (
    <motion.div
      className="page4"
      initial={{
        scaleX: 0,
        y: -150,
      }}
      animate={{
        scaleX: 1,
        y: 0,
      }}
      exit={{
        scale: 0,
        y: -150,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <NavBar></NavBar>
      <motion.div
        className="page-body"
        initial={{
          y: -1050,
        }}
        animate={{
          y: 0,
        }}
        transition={{ delay: 0.4 }}
      >
        <div className="page-title">Page #4</div>
        <div className="page-description">
          This is the page number 4 of the React.js Transition demo
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Page4;
