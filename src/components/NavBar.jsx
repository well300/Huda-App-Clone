import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logoimg/logo.png'; // Update the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position
  const [isVisible, setIsVisible] = useState(true); // Track visibility of the navbar

  const linkStyle = "text-white hover:text-[#FFEFA5] transition-colors duration-300";
  const buttonBaseStyle = "px-6 py-3 font-semibold rounded-xl transition-all duration-300";
  
  // Button style for the "Sign Up" button
  const buttonSignUpStyle = `${buttonBaseStyle}  mr-[120px] text-black bg-[#FFEFA5] hover:bg-[#0C5C59] hover:text-white border hover:border-white`;

  // Framer Motion variants
  const linkVariants = { hover: { scale: 1.03 } };
  const dropdownVariants = { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
  const buttonVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide the navbar when scrolling down and not at the top
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down and not at the top
      } else if (currentScrollY < prevScrollY || currentScrollY === 0) {
        setIsVisible(true); // Show navbar when scrolling up or at the top
      }

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Function to handle link click and close the mobile menu
  const handleLinkClick = (e, id) => {
    e.preventDefault(); // Prevent default anchor click behavior
    setIsOpen(false); // Close the mobile menu
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section
  };

  return (
    <motion.nav
      className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? "bg-gradient-to-r from-[#087D72] to-[#0C5C59] shadow-lg" : "bg-gradient-to-r from-[#087D72] to-[#0C5C59]"} ${isVisible ? "top-0" : "-top-20"}`} 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="w-full px-5 sm:px-8 md:px-24">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <motion.div
            className="flex items-center md:ml-9" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo}
              alt="HUDA Logo"
              className="w-38 h-14"
            />
          </motion.div>

          {/* Center Links - Adjusted for right-alignment */}
          <div className="hidden md:flex space-x-10 ml-[450px]"> {/* Add ml-auto to push the menu to the right */}
            {["Home", "Key Features", "For Reverts", "Dawah Centers"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className={`${linkStyle} text-md font-semibold`} 
                variants={linkVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right-side "Sign Up" Button */}
          <div className="hidden md:flex">
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
          </div>

          {/* Hamburger Menu Button for mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
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
              transition={{ duration: 0.2 }}
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
                  className="w-38 h-22"
                />
              </motion.div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-[#FFEFA5] text-[35px] focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>

              {["Home", "Key Features", "For Reverts", "Dawah Centers"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block py-4 text-lg"
                  variants={linkVariants}
                  whileHover="hover"
                  onClick={(e) => handleLinkClick(e, item.toLowerCase().replace(" ", ""))}
                >
                  {item}
                </motion.a>
              ))}

              {/* "Sign Up" Button in Mobile Menu */}
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
