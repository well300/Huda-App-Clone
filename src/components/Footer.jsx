import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is imported
import logo from "../assets/logoimg/logo2.png"; // Updated logo path

const Footer = () => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6, when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gray-100 pt-8 pb-6 text-[#018563] shadow-lg w-full"
    >
      <div className="container mx-auto px-24">
        <motion.div className="flex flex-col lg:flex-row lg:text-left text-center">
          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0"
          >
            <img src={logo} alt="Logo" className="w-full lg:w-3/12 px-4 mb-6 lg:mb-0" />
            <p className="text-sm mt-4 text-gray-600">
              Connect, Learn, and Grow with <br /> Trusted Islamic Resources and Support.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-2">
              {/* Social Icons with Green Color and Border */}
              {["instagram", "google", "linkedin", "x"].map((icon) => (
                <motion.button
                  key={icon}
                  className="bg-white border border-[#018563] text-[#018563] shadow-lg h-10 w-10 flex items-center justify-center rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`fab fa-${icon}`}></i>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Access and Contact Section */}
          <motion.div className="w-full lg:w-6/12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Quick Access */}
              <motion.div
                variants={itemVariants}
                className="w-full px-4 mb-4 lg:mb-0"
              >
                <span className="block text-[#018563] text-sm font-semibold mb-2">
                  Quick Access
                </span>
                <ul className="list-none text-center lg:text-left">
                  {["Key Features", "For Reverts", "Dawah Centers"].map((link) => (
                    <motion.li
                      key={link}
                      className="text-gray-700 hover:text-[#018563] font-normal pb-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href="#">{link}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div
                variants={itemVariants}
                className="w-full px-4"
              >
                <span className="block text-[#018563] text-sm font-semibold mb-2">
                  Contact
                </span>
                <ul className="list-none text-center lg:text-left">
                  {["Contact", "Privacy Policy", "Cookies Policy"].map((link) => (
                    <motion.li
                      key={link}
                      className="text-gray-700 hover:text-[#018563] font-normal pb-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href="#">{link}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
