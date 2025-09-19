import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const cards = [
  {
    id: 1,
    image:
      "https://images.ctfassets.net/pj0maraabon4/ZjN1O5ofZ2pQZpEFvouFG/bea0016679a641f543da8ff80077b8f7/adobe-commerce-aep.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/6QfiQGZgTOFWE31eoXKRqr/a569dfea202f1500285af3ca764027a8/ceo-videos-01.mp4",
  },
  {
    id: 2,
    image:
      "https://images.ctfassets.net/pj0maraabon4/g6VhGB0ALUorN4PwOv3Uv/1ad7132516c95d5d86237d0a4692a6e7/Next_Gen_Martech.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/QdhwdYJDBzkBC8fryGpXE/5fcb83975c964529d5848b8fa3458bb9/ceo-videos-02.mp4",
  },
  {
    id: 3,
    image:
      "https://images.ctfassets.net/pj0maraabon4/2UFmJrUnXw4LIPamQSrbzh/b29acffcd3a78ec04f6e9283961e20ff/AEP-Integration.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/GSLfChdktR6W6JnIWQnj2/9e5fd1db0c46842798223e629d1efe69/ceo-videos-03.mp4",
  },
  {
    id: 4,
    image:
      "https://images.ctfassets.net/pj0maraabon4/19EOD4H2jJzaITuJ1VCYjP/6f194ef1906f179fdff257785255c5a6/Product_Recommentation.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/5QnaqhEn58fUI8EzHHFGpO/618b0ebbac3f815457bd92137bbba6e7/ceo-videos-04.mp4",
  },
  {
    id: 5,
    image:
      "https://images.ctfassets.net/pj0maraabon4/3N9yqUkjutnAizDLHKX5GW/327f7618bcc6bef20443bfa20bff4604/Live_Search.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/1e3hQ6aGDV5CCh6a43UJm4/98404f19aa0f77f4e67d4cb6d15cffa3/ceo-videos-05.mp4",
  },
  {
    id: 6,
    image:
      "https://images.ctfassets.net/pj0maraabon4/6xE3Qtgu00MlBoohi279ax/e45f0a93a8f458aadee38da94a50ec4a/Analytics.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/7CG3xXvh4HMW2qADioFT4l/89f27424925df9f32eb297619f55adbb/ceo-videos-06.mp4",
  },
  {
    id: 7,
    image:
      "https://images.ctfassets.net/pj0maraabon4/48S6CgQXOU0XPQKFFjB4Hb/fe1bbce7a895d641b5fbc08458b6c9a9/workflow_automation.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/5eD3iSAq4i0Wlk8AtF2LYg/43297cc8d4930564d6e952fe737e525f/ceo-videos-07.mp4",
  },
    {
    id: 8,
    image:
      "https://images.ctfassets.net/pj0maraabon4/6LEf7JKCfZkPCQIZL0C57v/8363311095c5d99df6cc1e7adefcc2c1/Real_Time.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/6beKvkSg8y2YKh3v7QxNiZ/08de91f870f351a1e3e3b887fd7b3bfc/ceo-videos-08.mp4",
  },
   {
    id: 9,
    image:
      "https://images.ctfassets.net/pj0maraabon4/6Tlk4dVpuajwuQetwYCBuN/b7bba4afe4def6ed99753db2768f05df/aprimo-video-vault.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/58mIe4HBKxekJNWIm1axbT/1d7c4b68e451d0fc6811e77a1f0ef2ed/ceo-videos-09.mp4",
  },
   {
    id: 10,
    image:
      "https://images.ctfassets.net/pj0maraabon4/1NwLkskgywCtvQoomF551t/089e2b46a8e1e08a9c9122ce78b366ed/organisation-face-video-vault.jpg",
    video: "https://videos.ctfassets.net/pj0maraabon4/7CpjQ4H9VtSXkBrbsCyiM3/36410ab59792d0dd11f8a1850be14348/ceo-videos-10.mp4",
  },
  {
      id: 11,
      image: "https://images.ctfassets.net/pj0maraabon4/6RCHk3KBIIVETOGx8urKTn/341a127cb5c5b0e5e225d7c93e4a354a/workflow-bug-image.jpg",
      video: "https://videos.ctfassets.net/pj0maraabon4/73ehLYtPyY5CZYtJIXV8L8/c061ada632e2d32fadda720a4d533850/workfront-new-01.mp4",
    },
    {
      id: 12,     
      image: "https://images.ctfassets.net/pj0maraabon4/6RCHk3KBIIVETOGx8urKTn/341a127cb5c5b0e5e225d7c93e4a354a/workflow-bug-image.jpg",
      video: "https://videos.ctfassets.net/pj0maraabon4/1P9Ib5uHf4JbHMsnPPOPRp/01f65ebf34094e1cdaca95e037ccdde8/workfront-new-02.mp4",
    },
];


export default function CEDVideo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [activeVideo, setActiveVideo] = useState(null);
  const [hovered, setHovered] = useState(false);

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

  // Disable scroll when video popup is open
  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "auto";
  }, [activeVideo]);

  return (
    <section className="w-full m-auto text-white lg:min-h-screen flex flex-col lg:justify-center items-center py-2 px-4 lg:pl-[80px] lg:pr-[120px]">
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
 <div>
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between w-full">
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
                    className="relative rounded-2xl flex-shrink-0 w-[100%] h-[400px] lg:w-[629px] lg:h-[558px] bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${card.image})` }}
                    onClick={() => setActiveVideo(card.video)}
                  >
                    {/* Play Button with Slow Ripple Animation */}
                    <div className="absolute bottom-3 left-4 lg:bottom-6 lg:right-6">
                      <div className="relative flex items-center justify-end">
                        <span className="absolute w-14 h-14 rounded-full bg-white/30 animate-slow-ping"></span>
                        <span
                          className="absolute w-14 h-14 rounded-full bg-white/20 animate-slow-ping"
                          style={{ animationDelay: "0.6s" }}
                        ></span>
                        <span
                          className="absolute w-14 h-14 rounded-full bg-white/10 animate-slow-ping"
                          style={{ animationDelay: "1.2s" }}
                        ></span>

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
        <div className="relative flex flex-col gap-1 lg:ml-6 w-full mb-10 lg:mb-0">
           <motion.div
                 
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, ease: "easeIn" }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
          <h2 className="text-3xl lg:text-5xl font-semibold">CoE Videos</h2>
          <p className="mt-3 text-gray-300 text-lg">
           Experience the next – Level of our CoE videos: Bold ideas, Breakthrough innovation, and the vision 
          </p>
          <p className="font-bold text-white"> “That Sets Us Apart To Where We Are ;  In The Today’s Landscape”</p>
         </motion.div>
          <div className="flex justify-between items-center mt-6">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-4 relative rounded-full font-medium flex items-center gap-2 overflow-hidden text-[#1B0A31]"
              style={{
                background: "#BB7CE4",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-full backdrop-blur-md bg-white/10 border border-white/40"
                />
              )}

              <span className="relative z-10 text-[#1B0A31]">Let's Connect</span>

              <div className="relative w-5 h-5 overflow-hidden ">
                <AnimatePresence initial={false} mode="wait">
                  {hovered ? (
                    <motion.div
                      key="arrow-hover"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arrow-normal"
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#BB7CE4] text-[#1B0A31] flex items-center justify-center"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#BB7CE4] text-[#1B0A31] flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Small Cards */}
          <div className="hidden lg:flex  gap-4  mt-6 overflow-hidden ">
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
                    className="rounded-2xl flex-shrink-0 w-[315px] h-[298px] bg-cover bg-center cursor-pointer"
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
            className="h-1 bg-[#BB7CE4] rounded"
            style={{
              width: `${((activeIndex + 1) / cards.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative rounded-xl shadow-xl p-4 
                         bg-white/10 backdrop-blur-md 
                         border border-white/20 flex flex-col items-center w-full  h-full justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                className="absolute top-4 right-4 text-black bg-white/10 backdrop-blur-md border border-black/20 rounded-full p-2 hover:bg-white/20 transition"
                onClick={() => setActiveVideo(null)}
              >
                <X size={24} />
              </button>

              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-[800px] h-[450px] object-contain rounded-lg bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}
