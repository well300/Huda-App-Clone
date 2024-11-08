import React from "react";
import { motion } from "framer-motion";
import bgopImage from '../assets/bgop.png';  // Ensure the correct image path is used

const NewUpdates = () => {
  const animationSettings = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto text-center px-4 md:px-16 relative">
        {/* Title */}
        <motion.h2
          className="text-3xl font-medium text-[#018563] mb-4"
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 0.2 }}
        >
          Get New Updates
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-md text-gray-700 mb-6 px-4 md:px-24 sm:text-sm"
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 0.4 }}
        >
          There are many variations of passages of Lorem Ipsum
        </motion.p>

        {/* Green Gradient Box with Image as Background */}
        <div className="relative bg-gradient-to-r from-[#087D72] to-[#0C5C59] p-8 rounded-lg flex flex-col items-start overflow-hidden z-0">
          {/* Image as Background */}
          <img
            src={bgopImage}  // Ensure the correct image is imported
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover rounded-lg z-0" // Cover the container and round corners
          />

          {/* Content on top of the Image */}
          <motion.div
            className="relative z-10 text-white text-left w-full"
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-4">Get New Updates</h3>
            <p className="text-md mb-4">
              Stay updated with the latest news and offers.
            </p>
          </motion.div>

          {/* Email Box */}
          <motion.div
            className="flex flex-col sm:flex-row items-center bg-white rounded-lg p-2 w-full max-w-full sm:max-w-sm justify-start relative z-10"
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 1 }}
          >
            <input
              type="email"
              className="flex-grow p-2 rounded-md text-gray-700 border-none outline-none mb-4 sm:mb-0 sm:mr-4"
              placeholder="Enter your email"
            />
            <button className="bg-[#FFEFA5] text-black px-8 py-2 rounded-md w-full sm:w-auto" style={{ fontSize: '12px' }}>
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewUpdates;
