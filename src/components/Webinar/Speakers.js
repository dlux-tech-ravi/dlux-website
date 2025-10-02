"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const speakers = [
  {
    id: 1,
    name: "LUXMAN PAI",
    role: "President & CEO",
    description:"Martech | Gen AI Advisory Strategy, Innovation & Enterprise Leadership",
    company:"DLUX TECH",
    image: "https://images.ctfassets.net/pj0maraabon4/4XHOwXn2rVjuzI70MFqXIJ/ecac53d6220b37703ad88b86258c17e4/lux.png",
  },
  {
    id: 2,
    name: "SEAN CAMPBELL",
    role: "Principal Solutions Consultant",
    description:"Transformational Leader | AI Strategist | Architect of Memorable Customer Experiences ",
    company:"DLUX TECH",
    image: "https://images.ctfassets.net/pj0maraabon4/6zcanEn3hppAEzniWa6P7a/1457305c2d13767d26313055ed785c15/SEAN.png",
  },
  {
    id: 3,
    name: "NIC MESKER ",
    role: "Sr. Martech Consultant",
    description:"Martech Visionary | AI Growth Strategist & Agile Transformation Leader ",
    company:"DLUX TECH",
    image: "https://images.ctfassets.net/pj0maraabon4/jX3ZezUkaoABpsXJKi8Ze/7e8fabd65d06766b2bc0f37ab7a0939e/nic.png",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Speakers() {
  return (
    <section
      className="relative flex items-center justify-center px-6 md:px-12 lg:px-20 py-[120px] text-white bg-black"
    >
      <div
        className="absolute top-[20%] -left-[10%] w-80 h-80 rounded-full 
        bg-gradient-to-r from-[#F12D06] to-[#F17C06] 
        blur-[130px] opacity-70 z-1"
      />
      <div
        className="absolute top-[70%] right-[0%] w-80 h-80 rounded-full 
        bg-gradient-to-r from-[#F12D06] to-[#F17C06] 
        blur-[130px] opacity-70 z-1"
      />
      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-80 "></div>

      <motion.div
        className="relative w-full h-full items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading fade down */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-10 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SPEAKERS
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-[50px]">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="text-left"
              variants={cardVariants}
            >
              <div className=" overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-[450px] object-contain"
                />
              </div>
              <div className="lg:w-[70%] ml-20">
                <h3 className="mt-4 font-bold text-lg tracking-wide">
                  {speaker.name}
                </h3>
                <h5 className="text-gray-300 text-lg font-semibold mt-2">{speaker.role}</h5>
                <p className="text-gray-300 text-sm mt-2">{speaker.description}</p>
                <p className="text-gray-300 text-sm mt-2">{speaker.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            className="pb-10"
          >
            {speakers.map((speaker) => (
              <div key={speaker.id}>
                <motion.div
                  className="text-left mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="bg-gray-300 rounded-tl-3xl overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-lg tracking-wide">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">{speaker.role}</p>
                  <p className="text-gray-300 text-sm mt-2">{speaker.description}</p>
                  <p className="text-gray-300 text-sm mt-2">{speaker.company}</p>
                </motion.div>
            </div>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
