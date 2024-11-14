import React from "react";
import hero1Image from "../assets/heroimg/hero1.png";
import hero2Image from "../assets/heroimg/hero2.png";
import googleStore from "../assets/storesimg/google_store.png";
import appleStore from "../assets/storesimg/apple_store.png";
import bgVector from "../assets/bgimg/bgVector.png";

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-between px-5 md:px-32 py-16"
      style={{
        backgroundImage: `url(${bgVector})`, 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '30%', 
      }}
    >
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 text-gray-900 space-y-3 font-poppins">
        {/* Welcome Text */}
        <h1
          className="text-4xl sm:text-5xl font-medium"
          style={{ fontSize: "30px", color: "#0C5C59" }}
        >
          Welcome to
        </h1>

        {/* App Name */}
        <h2
          className="text-5xl font-semibold"
          style={{ fontSize: "46px", color: "#0C5C59" }}
        >
          Huda App
        </h2>

        {/* Subtitle */}
        <p className="text-xl font-medium" style={{ fontSize: "22px" }}>
          Connect, Learn, and Grow with Trusted Islamic Resources and Support
        </p>

        {/* Description */}
        <p className="text-lg" style={{ fontSize: "16px" }}>
          In today’s fast-paced world, finding reliable, comprehensive, and
          easily accessible resources for Islamic knowledge can be challenging.
          The Huda App has been created to bridge this gap and become your
          ultimate companion for learning, exploration, and connection within
          the Muslim community.
        </p>

        {/* App Store Images */}
        <div className="mt-6 flex space-x-4">
          <a href="#" target="_blank">
            <img
              src={googleStore}
              alt="Google Play Store"
              className="w-36 h-30 object-contain"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={appleStore}
              alt="Apple App Store"
              className="w-36 h-30 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Right Side Images (In 2 Columns, Smaller Size) */}
      <div className="hidden md:flex md:w-1/2">
        <div className="w-1/2">
          <img
            src={hero1Image}
            alt="Huda App - Hero Image 1"
            className="w-full h-auto object-cover"
            style={{ maxWidth: "220px", margin: "0 120px", paddingTop: "30px" }} // Smaller images
          />
        </div>
        <div className="w-1/2">
          <img
            src={hero2Image}
            alt="Huda App - Hero Image 2"
            className="w-full h-auto object-cover"
            style={{ maxWidth: "200px", margin: "0 50px", paddingTop: "120px" }} // Smaller images
          />
        </div>
      </div>

      {/* Right Side Images for Mobile View */}
      <div className="md:hidden order-last w-full mt-8 flex flex-row justify-center space-x-3">
        <img
          src={hero1Image}
          alt="Huda App - Hero Image 1"
          className="w-1/2 h-auto object-cover" 
          style={{ maxWidth: "150px", paddingTop: "30px" }} 
        />
        <img
          src={hero2Image}
          alt="Huda App - Hero Image 2"
          className="w-1/2 h-auto object-cover" 
          style={{ maxWidth: "150px", paddingTop: "100px"}} 
        />
      </div>
    </section>
  );
};

export default Hero;
