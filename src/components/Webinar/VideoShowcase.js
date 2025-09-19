import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Video One",
    date: "4 April 2025",
    time: "12:45",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/YE7VzlLtp-4/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Get Inside in The Philosopher’s Mind",
    date: "4 April 2025",
    time: "12:45",
    url: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Video Three",
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

  // 🔥 Detect screen size (mobile/tablet < 1024px)
  useEffect(() => {
    const checkScreen = () => setIsMobileOrTablet(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🔥 Disable scroll when popup is open
 useEffect(() => {
  if (activeVideo) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden"; // also lock <html>
  } else {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }
}, [activeVideo]);
  return (
    <section
      className="w-full h-[100vh] px-16 py-16 text-white bg-[#122644] bg-center"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/pj0maraabon4/191BOERTELcczZ9QlKGvAi/a473b5e73cc2b491b035ffbb227f1065/video-section-bg-img.png')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="pl-10">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-12">
          SEE <span className="text-purple-400">THE BEST MOMENTS</span><br/> FROM OUR
          EVENT
        </h2>
        </div>
        {/* Videos Grid / Carousel */}
        <div
          className={`
            flex md:flex-row items-end 
            ${isMobileOrTablet ? "justify-end" : "justify-center"}
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory scrollbar-hide
          `}
        >
          {videos.map((video, index) => {
            // Desktop keeps hover/active, mobile/tablet disables it
            const isActive =
              !isMobileOrTablet &&
              (hovered === video.id || (hovered === null && index === 1)); // desktop: 2nd active

            return (
              <motion.div
                key={video.id}
                onHoverStart={() => !isMobileOrTablet && setHovered(video.id)}
                onHoverEnd={() => !isMobileOrTablet && setHovered(null)}
                onClick={() => setActiveVideo(video)} // 🔥 open video popup
                animate={
                  !isMobileOrTablet
                    ? {
                        scale: isActive ? 1.05 : 1,
                        zIndex: isActive ? 20 : 10,
                        width: isActive ? 600 : 410,
                        height: isActive ? 459 : 300,
                      }
                    : {}
                }
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`
                  relative flex items-center justify-center cursor-pointer shadow-lg
                  snap-start shrink-0 rounded-lg overflow-hidden bg-gray-300
                  ${isMobileOrTablet ? "w-[85%] sm:w-[45%] h-[250px] sm:h-[300px]" : ""}
                `}
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-white/20">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title + Date (always visible on mobile/tablet, only for active on desktop) */}
                {(isMobileOrTablet || isActive) && (
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-black/50 p-2 rounded">
                    <p className="text-sm font-medium">{video.title}</p>
                    <span className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded">
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
            className="fixed inset-0 bg-black/70 backdrop-blur-md w-full h-screen flex items-center justify-center z-50 overflow-hidden"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 p-2 rounded-full"
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
    </section>
  );
};

export default VideoShowcase;
