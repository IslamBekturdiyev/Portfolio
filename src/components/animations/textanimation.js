import React from "react";
import { motion, wrap } from "framer-motion";

const AnimatedText = ({ text, classname }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1.2 * 1},
    }),
  };

  const child = {
    visible: (index) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.3 * index,
      },
    }),
    hidden: {
      opacity: 0,
      y: -10,
      x: -20,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      },
    },
  };

  return (
    <motion.div
      className="text"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} custom={index} className={classname} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
