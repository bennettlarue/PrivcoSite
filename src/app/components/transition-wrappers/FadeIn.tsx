"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children?: React.ReactNode; // Optional children
  delay?: number; // Optional delay for the animation in seconds
}

const FadeIn: React.FC<FadeInProps> = ({
  children, // Destructure children
  delay = 0, // Default delay to 0 if not passed
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 5 }} // Start slightly below
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 5 }} // Animate opacity and vertical position
      transition={{
        opacity: { duration: 0.5, delay }, // Set delay for opacity
        y: { duration: 0.3, delay }, // Apply same delay to the vertical movement
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
