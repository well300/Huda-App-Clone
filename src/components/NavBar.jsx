import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logoimg/logo.png'; // Update the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const linkStyle = "text-white text-[15px] hover:text-[#FFEFA5] transition-colors duration-300";
  const buttonBaseStyle = "px-5 py-2 lg:ml-[12px] text-[15px] font-semibold rounded-xl transition-all duration-300";
  const buttonSignUpStyle = `${buttonBaseStyle} mr-[120px] text-black bg-[#FFEFA5] hover:bg-[#0C5C59] hover:text-white border hover:border-white`;

  // Framer Motion variants
  const linkVariants = { hover: { scale: 1.03 } };
  const dropdownVariants = { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
  const buttonVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

  // Scroll event handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY && currentScrollY > 50) {
      setIsVisible(false); // Hide navbar when scrolling down and not at the top
    } else if (currentScrollY < prevScrollY || currentScrollY === 0) {
      setIsVisible(true); // Show navbar when scrolling up or at the top
    }

    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = ["Home", "Key Features", "For Reverts", "Dawah Centers"];

  return (
    <motion.nav
      className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? "bg-gradient-to-r from-[#087D72] to-[#0C5C59] shadow-lg" : "bg-gradient-to-r from-[#087D72] to-[#0C5C59]"} ${isVisible ? "top-0" : "-top-20"}`} 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="w-full px-5 sm:px-8 md:px-24">
        <div className="flex justify-between items-center py-3">
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

          {/* Center Links */}
          <div className="hidden lg:flex space-x-10 ml-auto">
            {menuItems.map((item) => (
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

          {/* "Sign Up" Button */}
          <div className="hidden lg:flex">
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
            className="lg:hidden text-white focus:outline-none"
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
              className="fixed inset-0 bg-gradient-to-r from-[#087D72] to-[#0C5C59] text-white flex flex-col justify-center items-center lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.2 }}
            >
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

              {menuItems.map((item) => (
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
