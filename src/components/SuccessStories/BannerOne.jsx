import React, { forwardRef } from "react";

const BannerOne = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="banner absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
    >
      {/* content unchanged */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between
        bg-[#111] text-white rounded-[32px] shadow-[0_0_40px_rgba(255,255,255,0.1)]
        backdrop-blur-lg border border-white/10 
        w-[92%] sm:w-[90%] md:w-[85%] h-[82vh] md:h-[66vh] max-w-[1400px]
        px-6 py-10 sm:p-12 md:p-16 md:mt-24 transition-transform">
        
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Ready to Write Your Success Story?
          </h1>
          <p className="text-gray-300">Whether you’re looking to optimize, automate, or scale, DLUX delivers measurable outcomes. </p>
          <button className="px-6 py-3 bg-white text-black rounded-full">Start Your Journey</button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/pj0maraabon4/6igpJGV0u7i0sPa0q6maQE/6e4f801cc37c5253b1c71fd13a948ae9/futuristic-person-listening-music-ultra-modern-headphones__1__1__1_.png"
            className="w-[260px] md:w-[480px]"
          />
        </div>
      </div>
    </section>
  );
});

export default BannerOne;
