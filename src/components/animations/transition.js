'use client';
import React from "react"; // Import React
import { motion } from "framer-motion";

const transition = (OgComponent) => {
  const TransitionComponent = () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );

  // Assign a display name to your component
  TransitionComponent.displayName = `Transition(${getDisplayName(OgComponent)})`;

  return TransitionComponent;
};

// A utility function to get the display name of a component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default transition;
