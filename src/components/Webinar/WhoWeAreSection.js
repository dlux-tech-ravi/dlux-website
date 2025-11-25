"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: "https://images.ctfassets.net/pj0maraabon4/3ZALbYrFUyfd79jmP338zw/0705372f0ef3973b91c3205de0e6c458/Certified___Industry_Expertise.png",
    title: "Certified & Industry Expertise  ",
  },
  {
    id: 2,
    icon: "https://images.ctfassets.net/pj0maraabon4/l2AbpSmHDR0A38AmpG1jW/eea06b1b63c4b5ca3c26d90fa63f9d91/Center_of_Excellence_Approachâ____New.png",
    title: "Center of Excellence Approach ",
  },
  {
    id: 3,
    icon: "https://images.ctfassets.net/pj0maraabon4/6EXom6NVRFIbjMLVYtwUvY/33db6391f6f82b6e9bdf22ca8dde5427/End-to-End_Solution.png",
    title: "End-to-End Solution  ",
  },
  {
    id: 4,
    icon:"https://images.ctfassets.net/pj0maraabon4/1bPWgVpQL3nbFGXR8Az5nj/3b427b9301a087f241c3608e7376b72a/Trusted_by_Global_Enterprisesâ__.png",
    title: "Trusted by Global Enterprises",
  },
];

export default function WhoWeAreSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="relative w-full overflow-hidden bg-black text-white lg:pb-[20px] px-6 md:px-10 lg:py-[60px] lg:flex flex-col md:flex-row items-center justify-evenly gap-10 font-sans">
      <div
        className="absolute top-[20%] left-[40%] w-80 h-80 rounded-full 
        bg-gradient-to-r from-[#F12D06] to-[#F17C06] 
        blur-[120px] opacity-70 z-10"
      />
      
      {/* Left Column */}
      <motion.div
        className="relative lg:w-1/2 py-8  space-y-6 z-[100]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold">WHY ATTEND DLUX WEBINAR  </h2>
        <p className="leading-relaxed max-w-2xl text-justify">
          As a Top leading Martech business consulting firm in Sydney,
          Australia, DLUX brings together strategy and technology to help you
          master complex projects, scale your marketing and technology
          operations, and stay ahead in the fast-changing AI & Martech. 
        </p>
        <ul className="space-y-3 text-white text-base md:text-lg leading-relaxed ">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
            <span className="text-white">Deep Dives – Learn the why and the how, not just the features</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
            <span className="text-white">Case Studies – Real client success brought vividly to life today</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
            <span className="text-white">Expert Insights – Tech-certified pros and DLUX CoE leaders share expertise</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
            <span className="text-white">Live Q&A – Ask, interact, and get instant answers from experts</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
            <span className="text-white">On-Demand – Replay anytime, anywhere with ease on your schedule</span>
          </li>
        </ul>
        
          <Link target="_blank" rel="noopener noreferrer" to="/contact-us">
               <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 bg-gradient-to-r from-[#ff3901] to-[#F07800] px-4 py-3 relative rounded-full font-medium flex items-center gap-2 overflow-hidden text-white"
                   onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {/* Blur overlay only on hover */}
                  {hovered && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-full backdrop-blur-md bg-white/10 border border-white/40"
                    />
                  )}

                  {/* Text */}
                  <span className="relative z-10 text-white">
                 Contact Us
                  </span>

                  {/* Arrow Animation */}
                  <div className="relative w-5 h-5 overflow-hidden">
                    <AnimatePresence initial={false} mode="wait">
                      {hovered ? (
                        <motion.div
                          key="arrow-hover"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 20, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute"
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="arrow-normal"
                          initial={{ x: 0, opacity: 1 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 20, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute"
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
                </Link>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="lg:w-2/5 gap-6 z-[10] relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-4">
          BENEFITS OF CHOOSING US 
        </h3>
        <div className="md:flex">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col md:w-[240px] md:h-[222px] items-center justify-center border
               border-[#F07800] bg-white p-6 text-center cursor-pointer transition duration-300 hover:bg-[#ffe0c8] hover:from-[#de8f69] hover:to-[#de8f69] hover:border-transparent"
            >
              <div className="mb-3">
                <img src={benefit.icon} alt={benefit.title} className="w-20 h-20 md:w-full"/>
              </div>
              <h4 className="text-lg font-medium text-black">{benefit.title}</h4>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
