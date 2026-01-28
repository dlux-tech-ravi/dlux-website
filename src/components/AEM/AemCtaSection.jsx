import React from "react";

export default function AemCtaSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      
      {/* Animated gradient blobs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-white/20 to-gray-400/10 blur-3xl animate-[floatSlow_18s_ease-in-out_infinite]" />

      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-gray-300/20 to-white/10 blur-3xl animate-[floatReverse_22s_ease-in-out_infinite]" />

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            See DLUX AEM in Action
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            We showcase real-world success with Adobe Experience Manager Sites
            and Assets delivering transformative results.
          </p>

          <div className="mt-10">
            <button className="inline-flex items-center justify-center rounded-xl bg-neutral-800 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/20">
              Learn More Through our Stories & Videos
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
