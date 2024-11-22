import React from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-800 to-black">
      {/* Flex container for both blocks */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-16 px-8">
        
        {/* Contact Form Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg w-96 mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Contact Us</h2>

          <form className="space-y-4">
            {/* Name Field */}
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                color="primary"
                required
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                color="primary"
                required
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                color="primary"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className="py-2"
              >
                Submit
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Join Our Community Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-96 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-lg mb-6">
            Stay updated with the latest news, tips, and resources. Join our community of like-minded individuals.
          </p>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className="w-full py-2"
            >
              Join Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
