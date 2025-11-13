"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStackBanners() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".banner", { willChange: "transform, opacity" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
        defaults: { ease: "power2.out", duration: 1.2 },
      });

      tl.to(".banner-1", {
        scale: 0.95,
        opacity: 0.6,
        yPercent: -5,
      });

      tl.to(
        ".banner-2",
        {
          yPercent: -100,
          opacity: 1,
        },
        "<+=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden touch-pan-y will-change-transform flex items-center justify-center"
    >
      {/* Banner 1 */}
      <section className="banner banner-1 absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className="relative flex flex-col md:flex-row items-center justify-between 
          bg-[#111] text-white rounded-[40px] shadow-[0_0_40px_rgba(255,255,255,0.1)] 
          backdrop-blur-lg border border-white/10 
          w-[90%] h-[80vh] max-w-[1400px] 
          p-10 md:p-16 
          transition-transform duration-700 ease-out will-change-transform"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-tight">
              Ready to Write Your Success Story?
            </h1>
            <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0">
              Whether you're looking to optimize, automate, or scale, DLUX
              delivers measurable outcomes.
            </p>
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition duration-500 ease-in-out">
              Let’s Connect
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/6igpJGV0u7i0sPa0q6maQE/6e4f801cc37c5253b1c71fd13a948ae9/futuristic-person-listening-music-ultra-modern-headphones__1__1__1_.png"
              alt="Banner 1"
              className="w-[400px] md:w-[500px] drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-700 ease-out will-change-transform"
            />
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Banner 2 */}
      <section className="banner banner-2 absolute top-full left-0 w-full h-full flex items-center justify-center z-20 opacity-0">
        <div className="relative flex flex-col md:flex-row items-center justify-between 
          bg-[#111] text-white rounded-[40px] shadow-[0_0_40px_rgba(255,255,255,0.1)] 
          backdrop-blur-lg border border-white/10 
          w-[90%] h-[80vh] max-w-[1400px] 
          p-10 md:p-16 
          transition-transform duration-700 ease-out will-change-transform"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-tight">
              Transform Ideas Into Reality.
            </h1>
            <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0">
              From strategy to execution, DLUX empowers your growth journey with
              next-gen solutions.
            </p>
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition duration-500 ease-in-out">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/3F8qbhediGsOSUftO4zlhO/120f69c41ffd59ba04d1d30ba9f23adc/Screenshot_2025-11-12_102948.png"
              alt="Banner 2"
              className="w-[400px] md:w-[500px] drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-700 ease-out will-change-transform"
            />
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
