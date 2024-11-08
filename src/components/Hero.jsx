import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from '../assets/hero.png'; 
import googleStore from '../assets/google_store.png'; 
import appleStore from '../assets/apple_store.png'; 

const Hero = () => {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Event listener to track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate movement based on mouse position
  const movementX = (mousePosition.x - window.innerWidth / 2) / 60;
  const movementY = (mousePosition.y - window.innerHeight / 2) / 60;

  return (
    <motion.section
      className="w-full h-screen bg-white flex items-center justify-between px-8 md:px-32 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        

      {/* Left Side Content */}
      <div className="w-full md:w-1/2 text-gray-900 space-y-6 font-poppins">
        {/* Welcome Text */}
        <motion.h1
          className="text-4xl sm:text-5xl font-medium"
          style={{ fontSize: '34px', color: '#0C5C59' }} // Custom Green color
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to
        </motion.h1>

        {/* App Name */}
        <motion.h2
          className="text-5xl font-semibold"
          style={{ fontSize: '46px', color: '#0C5C59' }} // Custom Green color
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Huda App
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl font-medium"
          style={{ fontSize: '22px' }} // Adjusted size for better readability
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Connect, Learn, and Grow with Trusted Islamic Resources and Support
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg"
          style={{ fontSize: '18px' }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          In today’s fast-paced world, finding reliable, comprehensive, and easily accessible resources for Islamic knowledge can be challenging. The Huda App has been created to bridge this gap and become your ultimate companion for learning, exploration, and connection within the Muslim community.
        </motion.p>

        {/* App Store Images */}
        <motion.div
          className="mt-6 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a href="#" target="_blank">
            <img
              src={googleStore}
              alt="Google Play Store"
              className="w-36 h-auto object-contain"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={appleStore}
              alt="Apple App Store"
              className="w-36 h-auto object-contain"
            />
          </a>
        </motion.div>
      </div>

      {/* Right Side Image with Mouse Movement Effect */}
      <motion.div
        className="hidden md:block w-2/2" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          transform: `translateX(${movementX}px) translateY(${movementY}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={heroImage}
          alt="Huda App"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
