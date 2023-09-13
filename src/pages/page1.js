import NavBar from "../components/Navbar";
import { motion } from "framer-motion";

function Page1() {
  return (
    <motion.div
      className="page1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
        <div className="page-title">Page #1</div>
        <div className="page-description">
          This is the page number 1 of the React.js Transition demo
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Page1;
