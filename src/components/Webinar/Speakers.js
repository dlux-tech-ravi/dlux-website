"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper } from "swiper/react";
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
      "https://images.ctfassets.net/pj0maraabon4/4XHOwXn2rVjuzI70MFqXIJ/90650ef0eb6962f3c908cb49c3931cc3/lux.webp",
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
      "https://images.ctfassets.net/pj0maraabon4/6zcanEn3hppAEzniWa6P7a/d9170c15580e56cfdddc86261c172beb/SEAN.webp",
    linkedin: "https://www.linkedin.com/in/campbell/",
  },
  {
    id: 3,
    name: "NIC MESKER",
    role: "Sr. Martech Consultant",
    description:
      "Martech Visionary | AI Growth Strategist & Agile Transformation Leader",
    company: "DLUX TECH",
    image:
      "https://images.ctfassets.net/pj0maraabon4/jX3ZezUkaoABpsXJKi8Ze/1dc4c2acbc10ecd4392734190e8df739/nic.webp",
    linkedin: "https://www.linkedin.com/in/nic-mesker-11b9911b/",
  },
];

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
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-10 text-white text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SPEAKERS
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="relative w-[340px] h-[440px] group rounded-[15px] overflow-hidden shadow-lg bg-[#111]"
            >
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-500 rounded-[15px]" />

              {/* Background Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover object-top rounded-[15px] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />

              {/* Speaker Name */}
              <h3
                className="
                  absolute left-4 bottom-4 text-white text-xl font-bold z-20
                  transform transition-all duration-600 ease-out
                  group-hover:bottom-[160px]
                "
              >
                {speaker.name}
              </h3>

              {/* Details (appear after short delay) */}
              <div
                className="
                  absolute inset-x-0 bottom-0 p-4 z-10
                  opacity-0 translate-y-8
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500 ease-out delay-400
                "
              >
                <h5 className="text-gray-300 font-semibold">{speaker.role}</h5>
                <p className="text-gray-300 text-sm mt-2">
                  {speaker.description}
                </p>
                <p className="text-gray-400 text-sm mt-1">{speaker.company}</p>

                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-2 py-2 bg-white text-black font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300"
                  >
                 <FaLinkedin size={18} />
                  </a>
                )}
              </div>
            </div>
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
              <div key={speaker.id} className="mb-8">
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-500 rounded-[15px]" />
                <div className="relative group rounded-[15px] overflow-hidden h-[480px] bg-[#111]">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top rounded-[15px] transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />

                  {/* Name */}
                  <h3
                    className="
                      absolute left-3 bottom-3 text-white text-lg font-bold z-20
                      transform transition-all duration-700 ease-out
                      group-hover:bottom-[160px] 
                    "
                  >
                    {speaker.name}
                  </h3>

                  {/* Details */}
                  <div
                    className="
                      absolute inset-x-0 bottom-0 p-4 z-10
                      opacity-0 translate-y-8
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500 ease-out delay-200
                    "
                  >
                    <h5 className="text-gray-300 font-semibold">
                      {speaker.role}
                    </h5>
                    <p className="text-gray-300 text-sm mt-2">
                      {speaker.description}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {speaker.company}
                    </p>

                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300 inline-block items-center gap-2"
                      >
                      <FaLinkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
