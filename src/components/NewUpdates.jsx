import React from "react";
import { motion } from "framer-motion";
import bgopImage from '../assets/bgop.png';  // Ensure the correct image path is used
import googleStore from "../assets/storesimg/google_store.png";  // Google Store image
import appleStore from "../assets/storesimg/apple_store.png";  // Apple Store image

const NewUpdates = () => {
  const animationSettings = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto text-center px-4 md:px-16 relative">

        {/* Green Gradient Box with Image as Background */}
        <div className="relative bg-gradient-to-r from-[#087D72] to-[#0C5C59] p-8 rounded-lg flex flex-col items-center overflow-hidden z-0">
          {/* Image as Background */}
          <img
            src={bgopImage}
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
          />

          {/* Content on top of the Image */}
          <motion.div
            className="relative z-10 text-white text-center w-full"
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.6 }}
          >
            <h3 className="text-lg md:text-2xl font-medium mb-4">Download Now</h3>
            <p className="text-sm md:text-base mb-4">
              Now Available on both Android & iOS
            </p>

            {/* App Store Images */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <img
                src={googleStore}
                alt="Google Play Store"
                className="w-32 sm:w-36 h-auto cursor-pointer transition-transform hover:scale-105"
              />
              <img
                src={appleStore}
                alt="Apple App Store"
                className="w-32 sm:w-36 h-auto cursor-pointer transition-transform hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewUpdates;
