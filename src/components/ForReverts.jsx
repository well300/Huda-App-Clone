import React from "react";
import { motion } from "framer-motion";
import gridRightImage from '../assets/gridright.png';

const InteractiveVid = () => {
  return (
    <motion.section
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-32 py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full md:w-1/3 flex justify-center order-1 md:order-2 mb-8 md:mb-0"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={gridRightImage}
          alt="Interactive Feature"
          className="w-4/5 md:w-full h-auto object-contain"
          style={{
            transform: 'rotate(-30deg)',
          }}
        />
      </motion.div>

      <div className="w-full md:w-2/3 text-gray-900 font-poppins space-y-6 text-left md:mr-8 order-2 md:order-1">
        <h3 className="text-lg md:text-2xl font-medium" style={{ color: '#0C5C59' }}>
          Interactive Video Conferencing:
        </h3>

        <p className="text-base md:text-lg" style={{ fontSize: '16px' }}>
          Join live video sessions with esteemed scholars. Schedule appointments and participate in ongoing discussions.
        </p>

        <motion.a
          href="#"
          className="inline-block mt-4 px-6 py-3 text-white text-sm font-semibold rounded"
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

export default InteractiveVid;
