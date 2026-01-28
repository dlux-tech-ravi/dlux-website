import React from "react";

const AemHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://videos.ctfassets.net/pj0maraabon4/3o2G8BwlADTKKiWh4k3vD5/5fd146a64ef299e7d96913455d6a91cb/GettyImages-937055824.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-5xl text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Adobe Experience Manager | <br className="hidden md:block" />
            Unified AI-Powered CMS & DAM Platform
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Create, manage, optimize, and deliver high-performance, personalized
            digital experiences across web, mobile, apps, and every channel —
            all while governing and activating millions of assets efficiently.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
             <button class="gradient-btn">
  <span>Watch Overview</span>
</button>
           <button class="gradient-btn">
  <span>Contact Us</span>
</button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AemHero;
