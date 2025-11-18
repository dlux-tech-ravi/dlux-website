"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Chillin’ with Lux: How Martech is Changing the Game",
    date: "4 April 2025",
    time: "12:45",
    url: "https://dluxtech.com/webinar-page-video-01.mp4",
    thumbnail: "https://images.ctfassets.net/pj0maraabon4/27kMtuEMdO2yP1iYFwQLXy/79a613e4db9615171b387530ca282190/webinar-thumbnail_Artboard_1-01.jpg",
  },
  {
    id: 2,
    title: "Building a Scalable Content Supply Chain for Growing Businesses",
    date: "4 April 2025",
    time: "12:45",
    url: "https://dluxtech.com/webinar-page-video-02.mp4",
    thumbnail: "https://images.ctfassets.net/pj0maraabon4/1vIieWQ3wq3kJK7wJByTkF/7f7bf3fba6fbc8b2830e236fedc21dbb/webinar-thumbnail-02.jpg",
  },
  {
    id: 3,
    title: "Hack the Stack: Smarter Martech for Content Ops That Work",
    date: "4 April 2025",
    time: "12:45",
    url: "https://dluxtech.com/webinar-page-video-03.mp4",
    thumbnail: "https://images.ctfassets.net/pj0maraabon4/zQdF2uBLlJfhTIDzR5T1d/7c971e4cfe949ca96eaa2021e92a04ee/webinar-thumbnail-03_2.jpg",
  },
];

const VideoShowcase = () => {
  const [hovered, setHovered] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const stackRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobileOrTablet(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Mobile stacked autoplay (stops when popup is open)
  useEffect(() => {
    if (!isMobileOrTablet) return;
    const stack = stackRef.current;
    if (!stack) return;

    let interval;

    const moveCard = () => {
      const cards = stack.querySelectorAll(".card");
      const lastCard = cards[cards.length - 1];
      if (lastCard) {
        lastCard.classList.add("swap");
        setTimeout(() => {
          lastCard.classList.remove("swap");
          stack.insertBefore(lastCard, stack.firstChild);
        }, 1200);
      }
    };

    // ✅ Only run animation if popup is not open
    if (!activeVideo) {
      interval = setInterval(moveCard, 4000);
    }

    return () => clearInterval(interval);
  }, [isMobileOrTablet, activeVideo]);

  // Disable scroll when popup open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [activeVideo]);

  return (
    <motion.section
      className="w-full px-4 md:px-16 py-16 text-white bg-black" id="webinar-vid-section"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/pj0maraabon4/191BOERTELcczZ9QlKGvAi/a473b5e73cc2b491b035ffbb227f1065/video-section-bg-img.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Watch Our Past{" "}
          <span className="bg-gradient-to-r from-[#ff3901] to-[#F07800] bg-clip-text text-transparent ml-2">
            Webinars
          </span>
          <br /> On-Demand
        </h2>

        {/* Mobile/Tablet Stacked Autoplay */}
        {isMobileOrTablet ? (
          <div
            ref={stackRef}
            className="stack relative flex items-center justify-center h-[320px] sm:h-[380px] overflow-hidden"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className={`card absolute top-1/2 left-[45%] h-[260px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-lg transition-transform duration-700 sm:h-[380px] sm:w-[250px]`}
                onClick={() => setActiveVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full rounded-2xl object-contain"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center bg-white/20">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}

            {/* Stacked card styles */}
            <style jsx>{`
              .card:nth-last-child(n + 5) {
                --x: calc(-50% + 90px);
                transform: translate(var(--x), -50%) scale(0.85);
              }
              .card:nth-last-child(4) {
                --x: calc(-50% + 60px);
                transform: translate(var(--x), -50%) scale(0.9);
              }
              .card:nth-last-child(3) {
                --x: calc(-50% + 30px);
                transform: translate(var(--x), -50%) scale(0.95);
              }
              .card:nth-last-child(2) {
                --x: calc(-50%);
                transform: translate(var(--x), -50%) scale(1);
              }
              .card:nth-last-child(1) {
                --x: calc(-50% - 30px);
                transform: translate(var(--x), -50%) scale(1.05);
                box-shadow: 0 1px 5px 5px rgba(255, 193, 111, 0.5);
              }
              .swap {
                animation: swap 1.3s ease-out forwards;
              }
              @keyframes swap {
                30% {
                  transform: translate(calc(var(--x) - 150px), -50%) scale(0.85)
                    rotate(-5deg) rotateY(65deg);
                }
                100% {
                  transform: translate(calc(var(--x) - 30px), -50%) scale(0.5);
                  z-index: -1;
                }
              }
            `}</style>
          </div>
        ) : (
          // Desktop Hover Cards
          <div className="flex md:flex-row items-end justify-center gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
            {videos.map((video, index) => {
              const isActive =
                hovered === video.id || (hovered === null && index === 1);
              return (
                <motion.div
                  key={video.id}
                  onHoverStart={() => setHovered(video.id)}
                  onHoverEnd={() => setHovered(null)}
                  onClick={() => setActiveVideo(video)}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    zIndex: isActive ? 20 : 10,
                    width: isActive ? 540 : 400,
                    height: isActive ? 459 : 300,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative flex items-center justify-center cursor-pointer shadow-lg snap-start shrink-0 rounded-lg overflow-hidden bg-gray-300 w-full h-full"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-white/20">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Popup */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md w-full h-screen flex items-center justify-center z-[9999] overflow-hidden"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-5 right-5 bg-white/20 hover:bg-white/40 p-2 rounded-full z-[10000]"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              <video
                src={activeVideo.url}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default VideoShowcase;
