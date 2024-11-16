import React from "react";
import { motion } from "framer-motion";
import hero1Image from "../assets/heroimg/hero1.png";
import hero2Image from "../assets/heroimg/hero2.png";
import googleStore from "../assets/storesimg/google_store.png";
import appleStore from "../assets/storesimg/apple_store.png";

const Hero = () => {
  return (
    <motion.section
      className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-between px-5 md:px-32 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Side Content */}
      <motion.div
        className="w-full md:w-1/2 text-gray-900 space-y-3 font-poppins"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Welcome Text */}
        <motion.h1
          className="text-4xl sm:text-5xl font-medium"
          style={{ fontSize: "30px", color: "#0C5C59" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to
        </motion.h1>

        {/* App Name */}
        <motion.h2
          className="text-5xl font-semibold"
          style={{ fontSize: "46px", color: "#0C5C59" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Huda App
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl font-medium"
          style={{ fontSize: "22px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Connect, Learn, and Grow with Trusted Islamic Resources and Support
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-justify"
          style={{ fontSize: "16px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          In today’s fast-paced world, finding reliable, comprehensive, and
          easily accessible resources for Islamic knowledge can be challenging.
          The Huda App has been created to bridge this gap and become your
          ultimate companion for learning, exploration, and connection within
          the Muslim community.
        </motion.p>

        {/* App Store Images */}
        <div className="mt-6 flex space-x-4">
          <motion.a
            href="#"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              src={googleStore}
              alt="Google Play Store"
              className="w-36 h-30 object-contain"
            />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <img
              src={appleStore}
              alt="Apple App Store"
              className="w-36 h-30 object-contain"
            />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side Images (In 2 Columns, Smaller Size) */}
      <div className="hidden md:flex md:w-1/2 flex-wrap justify-center items-center">
        <motion.div
          className="w-1/2 md:w-1/3"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img
            src={hero1Image}
            alt="Huda App - Hero Image 1"
            className="w-full h-auto object-cover"
            style={{ maxWidth: "200px", marginLeft: "20px" }}
          />
        </motion.div>
        <motion.div
          className="w-1/2 md:w-1/3"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <img
            src={hero2Image}
            alt="Huda App - Hero Image 2"
            className="w-full h-auto object-cover"
            style={{ maxWidth: "200px", marginLeft: "30px", marginTop: "80px" }}
          />
        </motion.div>
      </div>

      {/* Right Side Images for Mobile View */}
      <div className="md:hidden order-last w-full mt-8 flex flex-row justify-center space-x-3">
        <motion.img
          src={hero1Image}
          alt="Huda App - Hero Image 1"
          className="w-1/2 h-auto object-cover"
          style={{ maxWidth: "150px", paddingTop: "30px" }}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={hero2Image}
          alt="Huda App - Hero Image 2"
          className="w-1/2 h-auto object-cover"
          style={{ maxWidth: "150px", paddingTop: "100px" }}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
