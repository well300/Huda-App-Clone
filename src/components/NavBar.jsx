import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linkStyle = "text-white hover:text-[#FFEFA5] transition-colors duration-300";
  const buttonBaseStyle = "px-6 py-3 font-semibold rounded-xl transition-all duration-300";
  
  // Extra button styles for variants
  const buttonSignUpStyle = `${buttonBaseStyle} text-white bg-[#087D72] hover:bg-[#0C5C59]`;
  const buttonSignInStyle = `${buttonBaseStyle} text-black bg-[#FFEFA5] hover:bg-[#fdc479]`;

  // Framer Motion variants
  const linkVariants = { hover: { scale: 1.1 } };
  const dropdownVariants = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
  const buttonVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#087D72] to-[#0C5C59] shadow-lg"
          : "bg-gradient-to-r from-[#087D72] to-[#0C5C59]"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
<div className="container mx-auto px-8 md:px-24">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo}
              alt="HUDA Logo"
              className="w-38 h-16"
            />
          </motion.div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "How It Works", "Faqs", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className={linkStyle}
                variants={linkVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right-side Buttons */}
          <div className="hidden md:flex space-x-4">
            <motion.button
              className={buttonSignUpStyle}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              Sign up
            </motion.button>
            <motion.button
              className={buttonSignInStyle}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              Sign in
            </motion.button>
          </div>

          {/* Hamburger Menu Button for mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown Menu for mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-r from-[#087D72] to-[#0C5C59] text-white flex flex-col justify-center items-center md:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
            >
              {/* Logo inside dropdown */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={logo}
                  alt="HUDA Logo"
                  className="w-38 h-16"
                />
              </motion.div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>

              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block py-4 text-lg"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              ))}

              {/* Bottom Buttons and Social Icons */}
              <div className="mt-8 w-full flex flex-col items-center space-y-4 px-6">
                <motion.button
                  className={`${buttonBaseStyle} text-white font-semibold border border-white hover:bg-white hover:text-[#087D72] w-full sm:w-auto`}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Sign up
                </motion.button>
                <motion.button
                  className={`${buttonBaseStyle} text-black font-semibold bg-[#FFEFA5] rounded-xl hover:bg-white hover:text-[#087D72] w-full sm:w-auto`}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Sign in
                </motion.button>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4">
                  {["twitter", "facebook", "dribbble", "github"].map((icon) => (
                    <motion.a
                      key={icon}
                      href="#"
                      className="text-white text-2xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
