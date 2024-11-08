import React from "react";
import { motion } from "framer-motion";
import gridLeftImage from '../assets/gridleft.png';

const KeyFeatures = () => {
  return (
    <motion.section
      className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Side Image - Adjusted Size with Animation and Responsiveness */}
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:mr-8"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={gridLeftImage}
          alt="Grid Left"
          className="w-5/6 md:w-3/4 lg:w-full h-auto object-contain"
        />
      </motion.div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 text-gray-900 font-poppins space-y-4 text-left">
        {/* Section Header */}
        <h3 className="text-lg font-medium" style={{ fontSize: '22px' }}>
          Key Features Section:
        </h3>

        {/* Feature Title */}
        <h4
          className="text-lg font-semibold"
          style={{ color: '#0C5C59', fontSize: '22px' }}
        >
          Discover & Learn:
        </h4>

        {/* Feature Description */}
        <p className="text-sm" style={{ fontSize: '16px' }}>
          Access a comprehensive library of articles, videos, and audio content about Islam. Explore answers to frequently asked questions and engage with a curated knowledge base.
        </p>

        {/* 'See More' Button */}
        <motion.a
          href="#"
          className="inline-block mt-4 px-4 py-2 text-white text-sm font-semibold rounded"
          style={{
            background: "linear-gradient(90deg, #087D72, #0C5C59)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See more
        </motion.a>
      </div>
    </motion.section>
  );
};

export default KeyFeatures;
