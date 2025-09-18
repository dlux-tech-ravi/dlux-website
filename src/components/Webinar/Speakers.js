"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const speakers = [
  {
    id: 1,
    name: "JENNA SMITH",
    role: "Business Strategy and Innovation, Business and Leadership",
    image: "https://picsum.photos/400/400?random=1",
  },
  {
    id: 2,
    name: "ROBERT P. STONES",
    role: "Film and Television Production, Entertainment and Culture",
    image: "https://picsum.photos/400/400?random=2",
  },
  {
    id: 3,
    name: "PETER JONES",
    role: "Sustainable Development and Corporate Social Responsibility, Social Impact and Sustainability",
    image: "https://picsum.photos/400/400?random=3",
  },
  {
    id: 4,
    name: "MARY LOU",
    role: "Circular Economy and Sustainable Business Models, Social Impact and Sustainability",
    image: "https://picsum.photos/400/400?random=4",
  },
];

export default function Speakers() {
  return (
    <section
      className="relative h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 text-white"
      style={{
        background:
          "linear-gradient(135deg, #081c3c 0%, #0a2540 100%), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
      }}
    >
      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')] bg-cover"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">SPEAKERS</h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="text-left">
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
