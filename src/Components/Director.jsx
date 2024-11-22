// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion"; // For animations
import directorImage from "/assets/dir1.webp"; // Replace with the correct path to your image
import additionalImage from "/assets/dir2.webp"; // Replace with the correct path to the second image

export const Director = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      {/* Images Section */}
      <motion.div
        className="w-full flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={directorImage}
          alt="Portrait of the Director"
          className="max-w-full h-auto w-80 md:w-96 rounded-lg shadow-xl"
        />
        <img
          src={additionalImage}
          alt="Additional Context Image"
          className="max-w-full h-auto w-80 md:w-96 rounded-lg shadow-xl"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-3/4 text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          The <span className="text-blue-600">Director</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-800">
          Satendra Singh has over 11 years of teaching experience and is dedicated to delivering a results-oriented education system. He was trained at ICAR (AIEEA) under MAU Parbhani, which has now been renamed Vasantrao Naik Marathwada Krishi Vidyapeeth in Maharashtra.
          <br />
          <br />
          In Gwalior, Satendra Singh is well-known for his agricultural courses, primarily through the SCI कृषि संस्थान, which offers preparation courses for PAT, ICAR, and other agricultural exams. The SCI Institute operates two locations in Gwalior, providing students with the opportunity to take courses both in-person and online.
          <br />
          <br />
          Satendra Singh’s approach focuses not just on academic excellence, but also on fostering emotional bonds, social interactions, and spiritual growth among students. The institution places great importance on reviewing the program’s fee structure, faculty qualifications, and infrastructure to ensure quality education. His faculty is known for being young, well-educated, and experienced.
          <br />
          <br />
          By focusing on core concepts and promoting an in-depth understanding, Satendra Singh aims to inspire students to dedicate themselves fully to their studies. He extends his best wishes to all students, faculty, and staff for a successful journey in education.
        </p>
      </motion.div>
    </div>
  );
};
