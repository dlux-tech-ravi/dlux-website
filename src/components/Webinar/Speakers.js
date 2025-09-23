"use client";

import React from "react";
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
    image: "https://picsum.photos/400/400?random=1",
  },
  {
    id: 2,
    name: "SEAN CAMPBELL",
    role: "Principal Solutions Consultant",
    description:"Transformational Leader | AI Strategist | Architect of Memorable Customer Experiences ",
    company:"DLUX TECH",
    image: "https://picsum.photos/400/400?random=2",
  },
  {
    id: 3,
    name: "NIC MESKER ",
    role: "Sr. Martech Consultant",
    description:"Martech Visionary | AI Growth Strategist & Agile Transformation Leader ",
    company:"DLUX TECH",
    image: "https://picsum.photos/400/400?random=3",
  },
  
];

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
      <div className="absolute inset-0 opacity-80 bg-[url('https://images.ctfassets.net/pj0maraabon4/4fHeknVDit0tuXeRmqsfk4/b0dfcc317946d1afbb6540b7426ec47e/bg-image-speaker-section.png')] bg-contain bg-no-repeat"></div>

      <div className="relative w-full h-full items-center">
        
<h2 className="text-2xl md:text-3xl font-bold mb-10 text-white">SPEAKERS</h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:pl-[50px]">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="text-left">
              <div className="bg-gray-300 rounded-tl-3xl overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="lg:w-[90%]">
              <h3 className="mt-4 font-bold text-lg tracking-wide">
                {speaker.name}
              </h3>
              <h5 className="text-gray-300 text-lg font-semibold mt-2">{speaker.role}</h5>
               <p className="text-gray-300 text-sm mt-2">{speaker.description}</p>
                <p className="text-gray-300 text-sm mt-2">{speaker.company}</p>
                </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="pb-10"
          >
            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.id}>
                <div className="text-left">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
