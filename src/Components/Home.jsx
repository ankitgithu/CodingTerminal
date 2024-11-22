import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };

  const backgroundVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-purple-800 to-black text-white px-6 py-12 md:py-32 overflow-hidden h-screen flex items-center"
    >
      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-500 rounded-full blur-3xl opacity-30 -z-10"
        variants={backgroundVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-purple-700 to-yellow-500 rounded-full blur-3xl opacity-30 -z-10"
        variants={backgroundVariant}
        initial="hidden"
        animate="visible"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center h-full">
        {/* Text Section */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Start Your Coding Skills with us!
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md text-sm sm:text-lg"
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center relative"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Background for Image */}
          <motion.div
            className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full blur-3xl opacity-40 -z-10"
            variants={backgroundVariant}
          />
          {/* Image */}
          <div className="bg-white rounded-full p-1 sm:p-2 relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <img
              src="https://via.placeholder.com/400"
              alt="Business Team"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
