import React, { forwardRef } from "react";

const BannerTwo = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="banner absolute top-full left-0 w-full h-full flex items-center justify-center z-20 opacity-0"
    >
      {/* content unchanged */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between
        bg-[#111] text-white rounded-[32px] shadow-[0_0_40px_rgba(255,255,255,0.1)]
        backdrop-blur-lg border border-white/10 
        w-[92%] sm:w-[90%] md:w-[85%] h-[82vh] md:h-[66vh] max-w-[1400px]
        px-6 py-10 sm:p-12 md:p-16 transition-transform">
        
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Transform Ideas Into Reality.
          </h1>
          <p className="text-gray-300">From strategy to execution…</p>
          <button className="px-6 py-3 bg-white text-black rounded-full">Get Started</button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/pj0maraabon4/3F8qbhediGsOSUftO4zlhO/120f69c41ffd59ba04d1d30ba9f23adc/Screenshot_2025-11-12_102948.png"
            className="w-[260px] md:w-[480px]"
          />
        </div>
      </div>
    </section>
  );
});

export default BannerTwo;
