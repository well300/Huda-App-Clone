import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import DawahImg from '../assets/DawahImg.png';

const DawahSection = () => {
  // Common animation properties for fade-in
  const fadeIn = { opacity: 0, y: 20 };
  const fadeInUp = { opacity: 0, y: -20 };
  
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      {/* Sub Title */}
      <motion.h4
        className="text-[16px] mb-2"
        initial={fadeIn}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dawah Centers
      </motion.h4>

      {/* Title */}
      <motion.h1
        className="text-[24px] text-[#087D72] mb-3 leading-snug"
        initial={fadeInUp}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Dashboard for Dawah Centers <br /> & Mobile App for Daees
      </motion.h1>

      {/* Image */}
      <motion.img
        src={DawahImg}
        alt="Dawah Representation"
        className="w-full max-w-4xl h-auto mb-8"
        initial={fadeIn}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <motion.p
        className="text-base text-gray-600 leading-relaxed max-w-4xl mb-6 text-justify"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        We offer a comprehensive Dashboard for Dawah Centers and a dedicated Mobile App for Daees. 
        If you are a Daee or part of a Dawah Center, connect with us to access powerful tools designed 
        to enhance your outreach. Our app allows Daees to engage directly with users, answering their 
        queries and providing guidance. Meanwhile, the Dawah Center Dashboard enables centers to 
        efficiently manage their team of Daees, monitor their activities, and streamline their operations 
        for better impact.
      </motion.p>

      {/* Button */}
      <motion.button
        className="bg-[#0C5C59] text-white py-3 px-6 rounded-md text-lg hover:bg-[#087D72] transition"
        initial={fadeIn}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Join Us
      </motion.button>
    </div>
  );
};

export default DawahSection;
