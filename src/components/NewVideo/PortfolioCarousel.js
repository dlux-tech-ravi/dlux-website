import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Mark Motion",
    height: "h-[437px]",
    width: "w-[525px]",
    imageUrl: "https://placehold.co/525x437",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/5m4oFnM5liDyvqh2osFtYt/3f88bcd267cad3e23802e24979702bf4/1.mp4",
  },
  {
    id: 2,
    title: "Digital Grain",
    height: "h-[214px]",
    width: "w-[305px]",
    imageUrl: "https://placehold.co/305x214",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/4nzwh8CJomPfZjdBUAbpSE/bf2142c36ccdd8956d23502a683b892b/3.mp4",
  },
  {
    id: 3,
    title: "Mark Motion",
    height: "h-[380px]",
    width: "w-[305px]",
    imageUrl: "https://placehold.co/305x380",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/5dUQz34ZfbGnM8ugFVdY6F/c069f2a01bc8f2faa87c1b445e6ea6b2/5.mp4",
  },
  {
    id: 4,
    title: "Creative Flow",
    height: "h-[214px]",
    width: "w-[305px]",
    imageUrl: "https://placehold.co/305x214",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/2mHtueZF3dkBO2UNRvRBh/e0cfee7ca679f463d152509b7fd4d93d/9.mp4",
  },
  {
    id: 5,
    title: "Design Pulse",
    height: "h-[437px]",
    width: "w-[525px]",
    imageUrl: "https://placehold.co/525x437",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/xB1YovXm0yo8lBeKXTVVf/5d82e1ce219adbe37c6915cc8a5d036c/10.mp4",
  },
  {
    id: 6,
    title: "Next Vision",
    height: "h-[214px]",
    width: "w-[305px]",
    imageUrl: "https://placehold.co/305x214",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/6K0NkO4CD9whhOzp1UTDyd/f06f49e31ed5b0bf7a8f0889c2193c83/13.mp4",
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null); // holds URL while modal is open or closing
  const [isModalOpen, setIsModalOpen] = useState(false); // controls AnimatePresence visibility
  const videoRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const openModal = (url) => {
    setSelectedVideo(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // pause/reset video immediately so playback stops before exit animation
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (err) {
        // ignore if browser blocks seeking
      }
    }
    setIsModalOpen(false);
  };

  // remove selectedVideo only after exit animation finishes (AnimatePresence onExitComplete)
  const handleExitComplete = () => {
    setSelectedVideo(null);
  };

  // allow Escape key to close modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  // prevent body scroll when modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isModalOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [isModalOpen]);

  return (
    <div className="bg-black text-white px-8 py-12">
      {/* Top row */}
      <div className="flex justify-between items-center mb-10">
        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[20px] font-medium">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
             WORKFRONT / FUSION CONTENT 
            </span>
          </p>
          <h3 className="text-[24px] font-semibold max-w-3xl">
           Step into our Workfront video library and explore actionable insights, agile project management tips, resource planning strategies, and workflow automation guidance.
          </h3>
        </motion.div>

        {/* Arrows animation */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handlePrev}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentIndex > 0
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black"
                : "border border-purple-400 text-purple-400"
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentIndex < cards.length - 1
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black"
                : "border border-purple-400 text-purple-400"
            }`}
          >
            <ChevronRight />
          </button>
        </motion.div>
      </div>

      {/* Cards row */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 280}px)`,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className={`relative ${card.width} ${card.height} rounded-2xl flex-shrink-0 cursor-pointer overflow-hidden`}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(card.videoUrl)}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-lg">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Modal */}
      <AnimatePresence onExitComplete={handleExitComplete}>
        {isModalOpen && selectedVideo && (
          <motion.div
            key="modal-root"
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal} // clicking outside closes
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-black rounded-lg overflow-hidden w-[90%] max-w-3xl z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute top-3 right-3 text-white text-2xl font-bold z-20 bg-black bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeModal}
                aria-label="Close video"
              >
                ✕
              </button>

              <div className="w-full h-auto max-h-[80vh]">
                <video
                  ref={videoRef}
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
