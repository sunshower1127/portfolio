import { motion } from "framer-motion";

export default function PortfolioHeader() {
  return (
    <motion.h1
      initial={{
        fontSize: "50vw",
        height: "100vh",
      }}
      animate={{
        fontSize: "15vw",
        height: "15vw",
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
