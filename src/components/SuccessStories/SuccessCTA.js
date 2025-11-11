"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const banners = [
  {
    id: 1,
    title: "Ready to Write Your Success Story?",
    text: "Whether you're looking to optimize, automate, or scale, DLUX delivers measurable outcomes.",
    button: "Let’s Connect",
    image: "/banner1.jpg", // replace with your image path
  },
  {
    id: 2,
    title: "Transform Ideas Into Reality.",
    text: "From strategy to execution, DLUX empowers your growth journey with next-gen solutions.",
    button: "Get Started",
    image: "/banner2.jpg", // replace with your image path
  },
];

export default function SuccessCTA() {
  const [step, setStep] = useState(0); // 0 = first banner, 1 = transition to second
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const section = document.getElementById("banner-overlap");
      if (!section) return;

      const rect = section.getBoundingClientRect();

      // Check if section is in viewport
      if (rect.top <= 0 && rect.bottom > window.innerHeight && !locked) {
        e.preventDefault();
        setLocked(true);
        document.body.style.overflow = "hidden";

        // Trigger transition
        setStep(1);

        // Unlock after animation
        setTimeout(() => {
          document.body.style.overflow = "auto";
          setLocked(false);
        }, 1500);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [locked]);

  return (
    <section id="banner-overlap" className="relative h-screen overflow-hidden">
      {/* Banner 1 */}
      <motion.div
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white rounded-[24px] p-10 md:p-20"
        initial={{ y: 0 }}
        animate={step === 1 ? { y: -100, opacity: 0.5 } : { y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            {banners[0].title}
          </h2>
          <p className="text-gray-300 mb-6 max-w-md">{banners[0].text}</p>
          <button className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition">
            {banners[0].button}
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={banners[0].image}
            alt={banners[0].title}
            className="w-[400px] md:w-[500px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </motion.div>

      {/* Banner 2 */}
      <motion.div
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white rounded-[24px] p-10 md:p-20"
        initial={{ y: "100%", opacity: 0 }}
        animate={step === 1 ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            {banners[1].title}
          </h2>
          <p className="text-gray-300 mb-6 max-w-md">{banners[1].text}</p>
          <button className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition">
            {banners[1].button}
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={banners[1].image}
            alt={banners[1].title}
            className="w-[400px] md:w-[500px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
