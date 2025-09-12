"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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

export default function WorkflowAutomation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const openModal = (url) => setSelectedVideo(url);
  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";
  }, [selectedVideo]);

  // Escape key closes modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && selectedVideo) closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedVideo]);

  return (
    <div className="bg-black text-white px-8 py-12">
      {/* Top row */}
      <div className="flex justify-between items-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold capitalize">
            <span className="bg-[linear-gradient(to_right,#FE780C,#FE3908)] bg-clip-text text-transparent ">
              Workflow Automation
            </span>
          </h3>
          <p className="mt-3 text-gray-300 max-w-3xl">
            Step into our Workfront video library and explore actionable insights, agile project management tips, resource planning strategies, and workflow automation guidance.
          </p>
        </motion.div>

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
                ? "bg-[linear-gradient(to_right,#FE780C,#FE3908)] text-black"
                : "border border-[#FE780C] text-[#FE780C]"
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentIndex < cards.length - 1
                ? "bg-[linear-gradient(to_right,#FE780C,#FE3908)] text-black"
                : "border border-[#FE780C] text-[#FE780C]"
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
          style={{ transform: `translateX(-${currentIndex * 280}px)` }}
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

      {/* Glassy Video Popup */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative rounded-xl shadow-xl p-4 
                bg-white/10 backdrop-blur-md 
                border border-white/20 flex flex-col items-center w-full h-full justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-black bg-white/10 backdrop-blur-md 
                border border-black/20 rounded-full p-2"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              {/* Video */}
              <video
                ref={videoRef}
                src={selectedVideo}
                controls
                autoPlay
                className="w-[800px] h-[450px] object-contain rounded-lg bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
