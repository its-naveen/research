import { motion } from "framer-motion";

export default function PageAnimation({ direction, pageVariants, children }) {
  return (
    <motion.div 
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit">
      {children}
    </motion.div>
  );
}
