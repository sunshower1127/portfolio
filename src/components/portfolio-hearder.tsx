import { motion } from "framer-motion";

export default function PortfolioHeader() {
  return (
    <motion.h1
      initial={{
        fontSize: "50rem",
        height: "100vh",
      }}
      animate={{
        fontSize: "7rem",
        height: "7rem",
        marginTop: "4rem",
        marginBottom: "5rem",
      }}
      transition={{
        duration: 3.0,
        ease: "circOut",
      }}
      className="text-center flex items-center justify-center overflow-hidden whitespace-nowrap"
      style={{
        transformOrigin: "center center",
      }}
    >
      Portfolio
    </motion.h1>
  );
}
