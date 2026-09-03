"use client";

import { motion } from "framer-motion";

const AnimatedConnector = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-[2px] h-50 bg-[#D94536] origin-top mx-auto z-10"
    />
  );
};

export default AnimatedConnector;