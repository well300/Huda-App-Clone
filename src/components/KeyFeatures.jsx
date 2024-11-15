import React from "react";
import { motion } from "framer-motion";
import gridLeftImage from '../assets/keyfeatures.png';
import rightArrow from '../assets/right-arrow.svg'; // Assuming you have the right arrow icon in this path

const KeyFeatures = () => {
  return (
    <motion.section
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16  bg-white mt-56 md:mt-0" // Added padding and margin for responsiveness
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Side Image - Adjusted Size with Animation and Responsiveness */}
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:mr-8 order-last md:order-first"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={gridLeftImage}
          alt="Grid Left"
          className="w-4/2 sm:w-4/5 md:w-3/4 lg:w-3/5 h-auto mt-6 sm:mt-8 object-contain" // Increased the width in larger screens
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="w-full md:w-1/2 text-gray-900 font-poppins space-y-4 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Section Header */}
        <h3 className="text-xl md:text-2xl font-medium" style={{ fontSize: '16px' }}>
          Key Features Section
        </h3>

        {/* Feature Title */}
        <h4
          className="text-lg md:text-xl font-semibold"
          style={{ color: '#087D72', fontSize: '24px' }}
        >
          Discover & Learn
        </h4>

        {/* Feature Description */}
        <p className="text-sm md:text-base lg:mr-16"  style={{ fontSize: '16px' }}>
          Access a comprehensive library of <span style={{ color: '#087D72', fontWeight: '16px'}}>articles, videos, and audio</span> content about Islam. Explore answers to frequently asked questions and engage with a curated knowledge base.
        </p>

        {/* Features List with Right Arrow Icons */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Text & Articles</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Videos</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Audios</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default KeyFeatures;
