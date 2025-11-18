"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";

gsap.registerPlugin(ScrollTrigger);

export default function SuccessCTA() {
  const containerRef = useRef(null);
  const banner1Ref = useRef(null);
  const banner2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(banner1Ref.current, {
        scale: 0.95,
        opacity: 0.6,
        yPercent: -5,
      });

      tl.to(
        banner2Ref.current,
        {
          yPercent: -100,
          opacity: 1,
        },
        "<+=0.2"
      );
    }, containerRef);

    return () => ctx.revert(); // safe cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden touch-pan-y flex items-center justify-center"
    >
      <BannerOne ref={banner1Ref} />
      <BannerTwo ref={banner2Ref} />
    </div>
  );
}
