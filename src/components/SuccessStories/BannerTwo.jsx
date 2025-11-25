"use client";
import React, { useEffect, useRef } from "react";

export default function SuccessCTA() {
  const containerRef = useRef(null);
  const banner1Ref = useRef(null);
  const banner2Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const b1 = banner1Ref.current;
    const b2 = banner2Ref.current;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);

      // Banner 1 fades & scales
      b1.style.transform = `scale(${1 - progress * 0.05}) translateY(${-progress * 20}px)`;
      b1.style.opacity = `${1 - progress * 0.4}`;

      // Banner 2 slides up
      b2.style.transform = `translateY(${100 - progress * 100}%)`;
      b2.style.opacity = `${progress * 1}`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] bg-black overflow-hidden touch-pan-y flex items-start justify-center"
    >
      {/* Banner 1 */}
      <section
        ref={banner1Ref}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10 transition-all"
      >
        <div
          className="relative flex flex-col-reverse md:flex-row items-center justify-between
            bg-[#111] text-white rounded-[32px] shadow-[0_0_40px_rgba(255,255,255,0.1)]
            backdrop-blur-lg border border-white/10 
            w-[92%] sm:w-[90%] md:w-[85%] h-[82vh] md:h-[66vh] max-w-[1400px]
            px-6 py-10 sm:p-12 md:p-16 md:mt-24 transition-transform"
        >
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
               Go Deeper with DLUX Insights 
            </h1>
            <p className="text-gray-300">
              Want to explore the thinking behind these results? 
            </p>
            <button className="px-6 py-3 bg-white text-black rounded-full">
             DLUX Blog
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/6igpJGV0u7i0sPa0q6maQE/6e4f801cc37c5253b1c71fd13a948ae9/futuristic-person-listening-music-ultra-modern-headphones__1__1__1_.png"
              className="w-[260px] md:w-[480px]"
            />
          </div>
        </div>
      </section>

      {/* Banner 2 */}
      <section
        ref={banner2Ref}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-20 opacity-0 transition-all translate-y-[100%]"
      >
        <div
          className="relative flex flex-col-reverse md:flex-row items-center justify-between
            bg-[#111] text-white rounded-[32px] shadow-[0_0_40px_rgba(255,255,255,0.1)]
            backdrop-blur-lg border border-white/10 
            w-[92%] sm:w-[90%] md:w-[85%] h-[82vh] md:h-[66vh] max-w-[1400px]
            px-6 py-10 sm:p-12 md:p-16 transition-transform"
        >
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Transform Ideas Into Reality.
            </h1>
            <p className="text-gray-300">From strategy to execution…</p>
            <button className="px-6 py-3 bg-white text-black rounded-full">
              Get Started
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/3F8qbhediGsOSUftO4zlhO/120f69c41ffd59ba04d1d30ba9f23adc/Screenshot_2025-11-12_102948.png"
              className="w-[260px] md:w-[480px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
