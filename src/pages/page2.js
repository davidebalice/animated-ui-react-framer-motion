import NavBar from "../components/Navbar";
import { motion } from "framer-motion";

function Page2() {
  return (
    <motion.div
      className="page2"
      initial={{
        y: -150,
      }}
      animate={{
        y: 0,
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
        <div className="page-title">Page #2</div>
        <div className="page-description">
          This is the page number 2 of the React.js Transition demo
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Page2;