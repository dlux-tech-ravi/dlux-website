"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.6, // delay each child
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

export default function CtaBanner() {
  return (
    <section className="relative w-full py-12 px-4 sm:px-8 ">
      <div className="absolute top-[30%] left-[10%] w-80 h-80 rounded-full 
      bg-gradient-to-r from-[#BB7CE4] to-[#02162F] 
      blur-[100px] opacity-80 z-0" />
      {/* Glassy Card with Content + Image */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers earlier
        className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 pt-8"
      >
        {/* Text Content */}
        <motion.div
          variants={contentVariants}
          className="flex-1 text-white p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Watched {" "}
            <span className="bg-[#BB7CE4] bg-clip-text text-transparent">
             Our Videos.
            </span>{" "}
             Ready for More?
          </h2>
          <p className="text-gray-200 mb-6 max-w-md">
           From Project Management to AI , Martech Tools our videos are just the beginning. Let’s talk about solutions that fit your enterprise needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-full bg-white text-black font-medium border border-transparent hover:border-white/40 transition-all"
          >
           Connect to Expert
          </motion.button>
        </motion.div>

        {/* Image Inside Glassy Box */}
        <motion.div
          variants={imageVariants}
          className="flex-1 flex justify-end"
        >
          <img
            src="https://images.ctfassets.net/pj0maraabon4/3a28AU8s1QapOml16jHS7f/bc4d97c8dcbd1d439085bea698afcdd5/cta-banner-image.png"
            alt="Insurance"
            className=" drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
