"use client";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function SuccessCTA() {
  const containerRef = useRef(null);
  const b1Ref = useRef(null);
  const b2Ref = useRef(null);

  useEffect(() => {
    const section = containerRef.current;
    const b1 = b1Ref.current;
    const b2 = b2Ref.current;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;

      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

      /* ------------------------------------------------
       * END OF SCROLL → REMOVE FIXED/STICKY FOR BOTH
       * ------------------------------------------------ */
      if (progress >= 1) {
        b1.style.position = "absolute";
        b1.style.top = "0px";

        b2.style.position = "absolute";
        b2.style.top = `${window.innerHeight}px`;
        b2.style.transform = "translateY(0)";
        b2.style.opacity = 1;

        return; // IMPORTANT STOP
      }

      /* --------------------------
       * BANNER 1 (STICKY)
       * -------------------------*/
      if (rect.top <= 0) {
        b1.style.position = "fixed";
        b1.style.top = "0px";
      } else {
        b1.style.position = "absolute";
        b1.style.top = "0px";
      }

      /* --------------------------
       * BANNER 2 (STICKY)
       * -------------------------*/
      if (rect.top <= -window.innerHeight) {
        b2.style.position = "fixed";
        b2.style.top = "0px";
      } else {
        b2.style.position = "absolute";
        b2.style.top = "100vh";
      }

      /* SLIDE UP ANIMATION */
      b2.style.transform = `translateY(${(1 - progress) * 100}%)`;
      b2.style.opacity = progress;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] bg-black overflow-hidden"
    >
      {/* BANNER 1 */}
      <section
        ref={b1Ref}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10"
      >
        <div
          className="relative flex flex-col-reverse md:flex-row items-center justify-between
          bg-[#111] text-white rounded-[32px] shadow-[0_0_40px_rgba(255,255,255,0.1)]
          backdrop-blur-lg border border-white/10 
          w-[92%] sm:w-[90%] md:w-[85%] h-auto md:h-[66vh] max-w-[1400px]
          px-6 py-10 sm:p-12 md:p-16"
        >
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
             Go Deeper with DLUX Insights
            </h2>
            <p className="text-gray-300">
             Want to explore the thinking behind these results?
            </p>
             <Link to="/blog" target="_blank"
  rel="noopener noreferrer">
            <button className="px-6 py-3 bg-white text-black rounded-full mt-4">
              DLUX Blog
            </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/6igpJGV0u7i0sPa0q6maQE/6e4f801cc37c5253b1c71fd13a948ae9/futuristic-person-listening-music-ultra-modern-headphones__1__1__1_.png"
              className="w-[260px] md:w-[480px]"
            />
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <section
        ref={b2Ref}
        className="absolute left-0 w-full h-screen flex items-center justify-center z-20"
        style={{ top: "100vh", transform: "translateY(100%)", opacity: 0 }}
      >
        <div
          className="relative flex flex-col-reverse md:flex-row items-center justify-between
          bg-[#111] text-white rounded-[32px] shadow-[0_0_40px_rgba(255,255,255,0.1)]
          backdrop-blur-lg border border-white/10 
          w-[92%] sm:w-[90%] md:w-[85%] h-auto md:h-[66vh] max-w-[1400px]
          px-6 py-10 sm:p-12 md:p-16"
        >
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
               Ready to Write Your Success Story?  
            </h2>
            <p className="text-gray-300">Whether you’re looking to optimize, automate, or scale, DLUX delivers measurable outcomes. </p>
              <Link to="/contact-us" target="_blank"
  rel="noopener noreferrer">
            <button className="px-6 py-3 bg-white text-black rounded-full mt-4">
              Start Your Journey
            </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://downloads.ctfassets.net/pj0maraabon4/75SYUJoCmL7G5FwQnad9Ab/690130c7c42c011b65db2a52f03f9ee3/humanoid-robot-interacting-with-digital-tablet.png"
              className="w-[260px] md:w-[480px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
