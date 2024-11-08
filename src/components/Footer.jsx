import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is imported

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
      className="bg-white pt-8 pb-6 text-[#018563] shadow-lg w-full"
    >
      <div className="container mx-auto px-4">
        <motion.div className="flex flex-col lg:flex-row lg:text-left text-center">
          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold">Easypark</h3>
            <p className="text-sm mt-4 text-gray-600">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some injected.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-2">
              {/* Social Icons with Green Color and Border */}
              {["twitter", "facebook", "dribbble", "github"].map((icon) => (
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

          {/* Links Section */}
          <motion.div className="w-full lg:w-6/12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Useful Links */}
              <motion.div
                variants={itemVariants}
                className="w-full px-4 mb-4 lg:mb-0"
              >
                <span className="block text-[#018563] text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-none text-center lg:text-left">
                  {["About Us", "Blog", "Github", "Free Products"].map((link) => (
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

              {/* Other Resources */}
              <motion.div
                variants={itemVariants}
                className="w-full px-4 mb-4 lg:mb-0"
              >
                <span className="block text-[#018563] text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-none text-center lg:text-left">
                  {["MIT License", "Terms & Conditions", "Privacy Policy", "Contact Us"].map((link) => (
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

              {/* Get Services */}
              <motion.div
                variants={itemVariants}
                className="w-full px-4"
              >
                <span className="block text-[#018563] text-sm font-semibold mb-2">
                  Get Services
                </span>
                <ul className="list-none text-center lg:text-left">
                  {["Service 1", "Service 2", "Privacy Policy", "Contact Us"].map((link) => (
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
