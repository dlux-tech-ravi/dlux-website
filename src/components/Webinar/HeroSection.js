"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiChevronsDown } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Social Icons Container
const socialContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // one by one
  },
};

// Social Icon Item
const socialItem = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15, // smoother slow effect
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative h-full md:h-screen w-full bg-cover bg-center pt-[150px] md:pt-4"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/pj0maraabon4/2hm6Mm2p7tipTtFvqVqkqW/84d2f24a63db2c656f5ce11316c222cf/hero-section-image-02.png')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]  to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Empty Column */}
        <div className="flex-1 hidden md:block"></div>

        {/* Right Column Content */}
        <div className="flex-1 text-center md:text-left text-white max-w-xl content-center">
          <motion.h1
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            MarTech Secrets, Straight from the Frontlines 
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-base md:text-[16px] mb-6"
          >
            Join DLUX experts, certified consultants, and industry leaders as they unpack real-world use cases, seamless integrations, and future-ready strategies across Martech, AI, and enterprise innovation. 
          </motion.p>

          <motion.a
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            href="#about"
            className="inline-flex items-center text-[16px] font-medium text-white no-underline hover:underline transition"
          >
            Missed it live? Catch the insights anytime
            <FiChevronsDown className="ml-2 w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Left Side Bottom Card */}
      <motion.div
        variants={fadeLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-block relative md:absolute mt-6 md:bottom-8  md:left-16 lg:w-[30%] justify-items-center"
      >
        <img
          src="/webinar-assets/webinar-hero-section-02.png"
          className="relative lg:absolute w-[95%] lg:left-[3%] lg:bottom-[100%]"
        />
        <div className="bg-[#0a1631]/60 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white w-[60%] justify-items-center text-center">
          <p className="text-xs uppercase tracking-widest mb-1">
            9 June 2023 <span className="mx-2">|</span> Limited Seat
          </p>
          <h3 className="text-lg md:text-xl font-semibold mb-3">LIVE. ON-DEMAND  </h3>
          <button className="px-4 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-[#0a1631] transition">
            START DIGGING DEEPER
          </button>
        </div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        variants={socialContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative md:absolute md:bottom-8  md:right-16 flex gap-4 text-white text-lg justify-center mt-8"
      >
        <motion.a
          variants={socialItem}
          href="https://www.facebook.com/DLUXTech/"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFacebookF className="hover:text-[#ff3901] transition" />
        </motion.a>

        <motion.a
          variants={socialItem}
          href="https://x.com/Dlux_Tech"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTwitter className="hover:text-[#ff3901] transition" />
        </motion.a>

        <motion.a
          variants={socialItem}
          href="https://www.linkedin.com/company/dlux-tech-corp"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedinIn className="hover:text-[#ff3901] transition" />
        </motion.a>

        <motion.a
          variants={socialItem}
          href="https://www.instagram.com/dlux_tech/"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram className="hover:text-[#ff3901] transition" />
        </motion.a>
      </motion.div>
    </section>
  );
}
