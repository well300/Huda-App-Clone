import React from "react";
import { motion } from "framer-motion";

const KnowUsMore = () => {
  // Animation for numbers (counting effect)
  const numberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 1, ease: "easeInOut" },
    },
  };

  // Animation for the boxes (entry animation)
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white py-16 px-4 md:px-8 mt-8">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-16">
        {/* Title and Description */}
        <motion.h2
          className="text-3xl font-bold text-[#0C5C59] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Get Know Us
        </motion.h2>
        <motion.p
  className="text-md text-[gray-700] mb-12 px-4 md:px-24 sm:text-sm"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 1 }}
>
There are many variations of passages of Lorem Ipsum  
</motion.p>


        {/* State Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Box 1 - Customer */}
          <motion.div
            className="bg-[#0C5C59] bg-opacity-20 p-6 rounded-lg shadow-lg text-center w-full sm:w-[18rem] h-[14rem] mx-auto flex flex-col justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
          >
            <motion.h3
              className="text-4xl font-semibold text-[#018563] mb-4"
              variants={numberVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 2 }}
                className="block"
              >
                700k+
              </motion.span>
            </motion.h3>
            <p className="text-lg text-gray-600">Customer</p>
          </motion.div>

          {/* Box 2 - Country */}
          <motion.div
            className="bg-[#0C5C59] bg-opacity-20 p-6 rounded-lg shadow-lg text-center w-full sm:w-[18rem] h-[14rem] mx-auto flex flex-col justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
          >
            <motion.h3
              className="text-4xl font-semibold text-[#018563] mb-4"
              variants={numberVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 2 }}
                className="block"
              >
                80
              </motion.span>
            </motion.h3>
            <p className="text-lg text-gray-600">Country Market</p>
          </motion.div>

          {/* Box 3 - Rating */}
          <motion.div
            className="bg-[#0C5C59] bg-opacity-20 p-6 rounded-lg shadow-lg text-center w-full sm:w-[18rem] h-[14rem] mx-auto flex flex-col justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
          >
            <motion.h3
              className="text-4xl font-semibold text-[#018563] mb-4"
              variants={numberVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 2 }}
                className="block"
              >
                25,000+
              </motion.span>
            </motion.h3>
            <p className="text-lg text-gray-600">Best Rating App</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KnowUsMore;
