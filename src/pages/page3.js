import NavBar from "../components/Navbar";
import { motion } from "framer-motion";

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
        duration: 0.2,
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
        <div className="page-title">Page #3</div>
        <div className="page-description">
          This is the page number 3 of the React.js Transition demo
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Page3;