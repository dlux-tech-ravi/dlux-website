"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const speakers = [
  {
    id: 1,
    name: "LUXMAN PAI",
    role: "President & CEO",
    description:
      "Martech | Gen AI Advisory Strategy, Innovation & Enterprise Leadership",
    company: "DLUX TECH",
    image:
      "https://images.ctfassets.net/pj0maraabon4/4XHOwXn2rVjuzI70MFqXIJ/ecac53d6220b37703ad88b86258c17e4/lux.png",
    linkedin: "https://www.linkedin.com/in/luxmanpai/",
  },
  {
    id: 2,
    name: "SEAN CAMPBELL",
    role: "Principal Solutions Consultant",
    description:
      "Transformational Leader | AI Strategist | Architect of Memorable Customer Experiences",
    company: "DLUX TECH",
    image:
      "https://images.ctfassets.net/pj0maraabon4/6zcanEn3hppAEzniWa6P7a/1457305c2d13767d26313055ed785c15/SEAN.png",
    linkedin: "https://www.linkedin.com/in/seancampbell/",
  },
  {
    id: 3,
    name: "NIC MESKER",
    role: "Sr. Martech Consultant",
    description:
      "Martech Visionary | AI Growth Strategist & Agile Transformation Leader",
    company: "DLUX TECH",
    image:
      "https://images.ctfassets.net/pj0maraabon4/jX3ZezUkaoABpsXJKi8Ze/7e8fabd65d06766b2bc0f37ab7a0939e/nic.png",
    linkedin: "https://www.linkedin.com/in/nicmesker/",
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
    <section className="relative flex items-center justify-center px-6 md:px-12 lg:px-20 py-[60px] text-white bg-black">
      {/* Background glows */}
      <div className="absolute top-[20%] -left-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-[#F12D06] to-[#F17C06] blur-[130px] opacity-70 z-1" />
      <div className="absolute top-[70%] right-[0%] w-80 h-80 rounded-full bg-gradient-to-r from-[#F12D06] to-[#F17C06] blur-[130px] opacity-70 z-1" />

      <motion.div
        className="relative w-full h-full items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-10 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SPEAKERS
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-[50px]">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="relative w-full group rounded-[15px] overflow-hidden shadow-lg"
              variants={cardVariants}
            >
              {/* Background Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-[450px] object-cover rounded-[15px] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Always visible speaker name */}
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white text-xl font-bold drop-shadow-lg">
                  {speaker.name}
                </h3>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />

              {/* Info on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h5 className="text-gray-300 font-semibold">{speaker.role}</h5>
                <p className="text-gray-300 text-sm mt-2">{speaker.description}</p>
                <p className="text-gray-400 text-sm mt-1">{speaker.company}</p>

                <div className="mt-4 flex items-center gap-3">
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300 flex items-center gap-2"
                    >
                      Read More <FaLinkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="md:hidden">
          <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={1} className="pb-10">
            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.id}>
                <motion.div
                  className="relative group rounded-[15px] overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-60 object-cover rounded-[15px] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Always visible speaker name */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <h3 className="text-white text-lg font-bold drop-shadow-lg">
                      {speaker.name}
                    </h3>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />

                  {/* Info on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h5 className="text-gray-300 font-semibold">{speaker.role}</h5>
                    <p className="text-gray-300 text-sm mt-2">{speaker.description}</p>
                    <p className="text-gray-400 text-sm">{speaker.company}</p>

                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300 flex items-center gap-2"
                      >
                        Read More <FaLinkedin size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
