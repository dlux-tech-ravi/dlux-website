"use client";

import React, { useState, useEffect } from "react";
import "./ImageShuffle.css"; // we'll define animations here

const HeroBanner = () => {
  const images = [
    "https://images.ctfassets.net/pj0maraabon4/TcciqXaBG41DwA7MqVGCH/843264f254a68d9043243ab12ab7b73c/workfront_chatgpt.jpg",
    "https://images.ctfassets.net/pj0maraabon4/TcciqXaBG41DwA7MqVGCH/843264f254a68d9043243ab12ab7b73c/workfront_chatgpt.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setAnimating(false);
      }, 1200); // match CSS animation duration
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextIndex = (index + 1) % images.length;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full h-auto bg-black text-white py-12 md:py-20 gap-6 overflow-hidden">
      {/* Left Column */}
      <div className="w-full md:w-[8%] h-[600px] relative overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={images[index]}
            alt="Left"
            className={`image-stack rounded-r-3xl ${animating ? "fade-left" : ""}`}
          />
          <img
            src={images[nextIndex]}
            alt="Left Next"
            className={`image-stack rounded-r-3xl ${animating ? "fade-right" : "opacity-0"}`}
          />
        </div>
      </div>

      {/* Middle Column */}
      <div className="w-full md:w-[42%] text-center md:text-left space-y-6 z-20 px-[60px]">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Real Results. Real Clients. Real Impact.
        </h1>
        <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
          Contact Us
        </button>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[50%] h-[600px] relative rounded-3xl overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={images[index]}
            alt="Right"
            className={`image-stack ${animating ? "fade-left" : ""}`}
          />
          <img
            src={images[nextIndex]}
            alt="Right Next"
            className={`image-stack ${animating ? "fade-right" : "opacity-0"}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
