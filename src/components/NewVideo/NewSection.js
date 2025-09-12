import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const cards = [
  {
    id: 1,
    image:
      "https://images.ctfassets.net/pj0maraabon4/3iuPcGx4zASpWsWetnbdGy/14bcaa319e336ae6d759bd866742703f/02_8.png",
    video: "https://videos.ctfassets.net/pj0maraabon4/6rnaOM4Jsr6ZjCwLQPi8JG/2f04a0d33eb61faa376296a3cbbd22e8/Adobe_Recommentation_-_27-06-25_1__1___1_.mp4",
  },
  {
    id: 2,
    image:
      "https://images.ctfassets.net/pj0maraabon4/6iGUvJeUECXOfyxDNbSWws/24ea6fae9339c2404b4495a9ba890cbb/AI_Product_Recommentation_.png",
    video: "https://videos.ctfassets.net/pj0maraabon4/AWliC8HUMiEcAMXPjHff1/e1b5edaf8455fe292f375ea876c9de81/Product_recommendation.mp4",
  },
  {
    id: 3,
    image:
      "https://images.ctfassets.net/pj0maraabon4/58OdVzsbP4CohhPdA2emLJ/09921e73acd15be4665564608106814b/Personalized_Discounts__Happier_Customers_â___Powered_by_AEP___Adobe_Commerce_1.png",
    video: "https://videos.ctfassets.net/pj0maraabon4/2lXuiAoYJNBOSEu7R1dn5U/3e5b6014da74ed479eff0fdc3e39cf92/Final_Out.mp4",
  },
];

export default function NewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [activeVideo, setActiveVideo] = useState(null);

  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cards[(activeIndex + i) % cards.length]);
    }
    return visible;
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center pl-[80px] pr-[120px]">
      <style>
        {`
          @keyframes slow-ping {
            0% { transform: scale(1); opacity: 0.8; }
            80% { transform: scale(2.2); opacity: 0; }
            100% { transform: scale(2.2); opacity: 0; }
          }
          .animate-slow-ping {
            animation: slow-ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>

      <div className="flex items-start justify-between w-full">
        {/* Left column - Big Card */}
        <div className="flex items-end overflow-hidden w-full relative">
          <AnimatePresence mode="wait" custom={direction}>
            {getVisibleCards().map(
              (card, i) =>
                i === 0 && (
                  <motion.div
                    key={card.id}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative rounded-2xl flex-shrink-0 w-[629px] h-[558px] bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${card.image})` }}
                    onClick={() => setActiveVideo(card.video)}
                  >
                    {/* Play Button with Slow Ripple Animation */}
                    <div className="absolute bottom-6 right-6">
                      <div className="relative flex items-center justify-center">
                        {/* Ripple layers */}
                        <span className="absolute w-14 h-14 rounded-full bg-white/30 animate-slow-ping"></span>
                        <span
                          className="absolute w-14 h-14 rounded-full bg-white/20 animate-slow-ping"
                          style={{ animationDelay: "0.6s" }}
                        ></span>
                        <span
                          className="absolute w-14 h-14 rounded-full bg-white/10 animate-slow-ping"
                          style={{ animationDelay: "1.2s" }}
                        ></span>

                        {/* Icon button */}
                        <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Play className="text-black w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Right Side Content + Small Cards */}
        <div className="flex flex-col gap-6 ml-6 w-full">
          <h2 className="text-[46px] font-semibold">Aprimo DAM </h2>
          <p>Deep driving you to the polished version of – AI Agents & Automation , Aprimo AI Suite , Video asset Management , Ecosystem Integrations , DAM trends , Recognized Leadership.</p>
          
          <div className="flex justify-between items-center">
            <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black px-6 py-2 rounded-full font-medium">
              Creative Showcase
            </button>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black flex items-center justify-center"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Small Cards */}
          <div className="flex gap-4 mt-6 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {getVisibleCards()
                .slice(1)
                .map((card) => (
                  <motion.div
                    key={card.id}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction === "next" ? 100 : -100,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ x: direction === "next" ? -100 : 100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="rounded-2xl flex-shrink-0 w-[305px] h-[298px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                    onClick={() => setActiveVideo(card.video)}
                  ></motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full mt-8">
        <div className="w-full h-1 bg-gray-700 rounded">
          <div
            className="h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 rounded"
            style={{
              width: `${((activeIndex + 1) / cards.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Video Popup */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-[800px] max-w-full">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="rounded-lg w-full"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
