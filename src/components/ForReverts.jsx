import React from "react";
import { motion } from "framer-motion";
import gridLeftImage from '../assets/forrevert.png';
import rightArrow from '../assets/right-arrow.svg'; 
import googleStore from "../assets/storesimg/google_store.png";
import appleStore from "../assets/storesimg/apple_store.png";

const ForReverts = () => {
  return (
    <motion.section
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white md:mt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Side Image */}
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
          className="w-4/2 sm:w-4/5 md:w-3/4 h-auto mt-6 sm:mt-8 object-contain"
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="w-full md:w-1/2 text-gray-900 font-poppins space-y-6 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Section Header */}
        <h3 className="text-xl md:text-2xl font-medium" style={{ fontSize: '16px' }}>
          For Reverts
        </h3>

        {/* Feature Title */}
        <h4
          className="text-lg md:text-xl font-semibold"
          style={{ color: '#087D72', fontSize: '24px' }}
        >
          Want to become a Muslim?
        </h4>

        {/* Feature Description */}
        <p className="text-sm md:text-base lg:mr-16" style={{ fontSize: '16px' }}>
          If you're interested in becoming a Muslim and have questions, you can connect with an available Da’ee (Islamic preacher) for guidance. Feel free to ask your questions, chat, or even have an audio or video call to get the answers you need. When you're ready, you can declare your Shahadah (the Islamic declaration of faith).
        </p>

        {/* Features List with Right Arrow Icons */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Ask Your Questions</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Chat, Audio Call or Video Call</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" style={{ filter: 'invert(26%) sepia(74%) saturate(1600%) hue-rotate(145deg) brightness(89%) contrast(103%)' }} />
            <span className="text-sm font-semibold">Declare Your Shahadah</span>
          </div>
        </div>

        {/* App Store Images */}
        <div className="mt-6 flex items-center space-x-4">
          <img
            src={googleStore}
            alt="Google Play Store"
            className="w-36 h-auto cursor-pointer transition-transform hover:scale-105"
          />
          <img
            src={appleStore}
            alt="Apple App Store"
            className="w-36 h-auto cursor-pointer transition-transform hover:scale-105"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ForReverts;
