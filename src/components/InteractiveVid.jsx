import React from "react";
import { motion } from "framer-motion";
import gridRightImage from '../assets/InteractiveVid.png';
import rightArrow from '../assets/right-arrow.svg'; // Assuming you have the right arrow icon in this path

const InteractiveVid = () => {
  return (
    <motion.section
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white md:mt-0" // Added padding and margin for responsiveness
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Side Image - Adjusted Size with Animation and Responsiveness */}
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:mr-8 order-last md:order-last"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={gridRightImage}
          alt="Grid Left"
          className="w-4/2 sm:w-4/5 md:w-3/4 h-auto mt-6 sm:mt-8 object-contain" // Increased the width in larger screens
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="w-full md:w-1/2 text-gray-900 font-poppins space-y-4 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >

        {/* Feature Title */}
        <h4
          className="text-lg lg:ml-16 md:text-xl font-semibold"
          style={{ color: '#087D72', fontSize: '24px' }}
        >
          Interactive Video Conferencing
        </h4>

        {/* Feature Description */}
        <p className="text-sm lg:ml-16 md:text-base" style={{ fontSize: '16px' }}>
        Join live video sessions with esteemed scholars. Schedule appointments and participate in ongoing discussions.
        </p>

        {/* Features List with Right Arrow Icons */}
        <div className="space-y-4 lg:ml-16">
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Video Conferencing</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Appointments</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Chat Sessions</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default InteractiveVid;
