"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Chillin’ with Lux: How Martech is Changing the Game",
    date: "4 April 2025",
    time: "12:45",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/YE7VzlLtp-4/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Building a Scalable Content Supply Chain for Growing Businesses",
    date: "4 April 2025",
    time: "12:45",
    url: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Hack the Stack: Smarter Martech for Content Ops That Work",
    date: "4 April 2025",
    time: "12:45",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
  },
];

const VideoShowcase = () => {
  const [hovered, setHovered] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobileOrTablet(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Disable scroll when popup is open
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
    <section
      className="w-full px-4 md:px-16 py-16 text-white bg-black"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/pj0maraabon4/191BOERTELcczZ9QlKGvAi/a473b5e73cc2b491b035ffbb227f1065/video-section-bg-img.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Watch Past{" "}
          <span className="bg-gradient-to-r from-[#ff3901] to-[#F07800] bg-clip-text text-transparent ml-2">
            Webinars
          </span>
          <br /> On-Demand
        </h2>

        {/* Videos Grid / Carousel */}
        <div
          className={`flex ${
            isMobileOrTablet ? "flex-col items-center gap-6" : "md:flex-row items-end justify-center gap-6"
          } overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide`}
        >
          {videos.map((video, index) => {
            const isActive = !isMobileOrTablet && (hovered === video.id || (hovered === null && index === 1));

            return (
              <motion.div
                key={video.id}
                onHoverStart={() => !isMobileOrTablet && setHovered(video.id)}
                onHoverEnd={() => !isMobileOrTablet && setHovered(null)}
                onClick={() => setActiveVideo(video)}
                animate={
                  !isMobileOrTablet
                    ? {
                        scale: isActive ? 1.05 : 1,
                        zIndex: isActive ? 20 : 10,
                        width: isActive ? 540 : 400,
                        height: isActive ? 459 : 300,
                      }
                    : {}
                }
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`relative flex items-center justify-center cursor-pointer shadow-lg snap-start shrink-0 rounded-lg overflow-hidden bg-gray-300
                  ${isMobileOrTablet ? "w-full sm:w-[90%] h-[220px] sm:h-[300px]" : ""}`}
              >
                {/* Thumbnail */}
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />

                {/* Overlay Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-white/20">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title + Date */}
                {(isMobileOrTablet || isActive) && (
                  <div className="absolute bottom-3 left-3 right-3 flex flex-col md:flex-row justify-between items-center bg-black/60 p-2 rounded">
                    <p className="text-sm font-medium">{video.title}</p>
                    <span className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mt-2 md:mt-0">
                      {video.date} {video.time}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
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
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-5 right-5 bg-white/20 hover:bg-white/40 p-2 rounded-full z-[10000]"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              <video src={activeVideo.url} controls autoPlay className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcase;
