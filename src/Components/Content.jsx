import React from "react";
import { motion } from "framer-motion";
import Block1 from "./Block1"; // Import Block1 component
import Block2 from "./Block2"; // Import Block2 component

const Content = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-purple-800 to-black text-white py-16 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Fade-in effect
    >
      {/* Centered and semibold heading */}
      <motion.h1
        className="text-center text-4xl font-semibold mb-12"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }} // Slide-in effect for heading
      >
        Start Your Coding Journey with Coding Terminal
      </motion.h1>

      {/* Grid layout for blocks */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Render Block1 with animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }} // Block1 animation with slight delay
        >
          <Block1 />
        </motion.div>

        {/* Render Block2 with animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }} // Block2 animation with slight delay
        >
          <Block2 />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Content;
