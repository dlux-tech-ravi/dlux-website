"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const images = [
  { src: "https://images.ctfassets.net/pj0maraabon4/3iuPcGx4zASpWsWetnbdGy/14bcaa319e336ae6d759bd866742703f/02_8.png", video: "https://videos.ctfassets.net/pj0maraabon4/4nzwh8CJomPfZjdBUAbpSE/bf2142c36ccdd8956d23502a683b892b/3.mp4" },
  { src: "https://images.ctfassets.net/pj0maraabon4/U6g7TwkJH7UI8k0dwoO1C/dc7687fe056ef8f07af423eb274bb0b9/Unlock_Salesforce_Flow_Builder-_Your_Key_to_Effortless_Automation_.png", video: "https://videos.ctfassets.net/pj0maraabon4/4SadDV6KH3l3HxHtwQmOVt/cda0e499b9f75693c98c66e73a23b6ad/Product_recommendation.mp4" },
  { src: "https://images.ctfassets.net/pj0maraabon4/7EfPXl9ZZaHz8NjhtQOi8r/5314dd928d7d5e153796d344e7c7509e/Mastering_Multilingual_Site_Management_with_Adobe_Experience_Manager_MSM.png", video: "https://videos.ctfassets.net/pj0maraabon4/4nEhKbDWPRXIvLQ7FissuL/03ed545b776ec943473a2106b40c2597/1.mp4" },
  { src: "https://images.ctfassets.net/pj0maraabon4/g1TWso5qhkM031pfTbtNK/1ecdd71b56804e705124d3212cf059b8/Unlock_Seamless_Security_with_Our_Authentication_Governance_Superbadge_.png", video: "https://videos.ctfassets.net/pj0maraabon4/3sqvkwblysuyTcUU6vyXT2/d777d4a9b8db5600a7a8ce61184dae47/Product_recommendation-002__1___1___1_.mp4" },
  { src: "https://images.ctfassets.net/pj0maraabon4/20nzbTepnkkIoYLIdiAw2T/20c680751d0c163c38530666a36779d5/Transform_Your_Media_Booking_Process_with_DLUX.png", video: "https://videos.ctfassets.net/pj0maraabon4/T8FgmjIH1PT1siGKC1XZN/1e4e2a36bc0fb11856103848ccd6dc26/6.mp4" },
  { src: "https://images.ctfassets.net/pj0maraabon4/7EfPXl9ZZaHz8NjhtQOi8r/5314dd928d7d5e153796d344e7c7509e/Mastering_Multilingual_Site_Management_with_Adobe_Experience_Manager_MSM.png", video: "https://videos.ctfassets.net/pj0maraabon4/1vSlJBQN0oVuXUPWwmIkJF/c98da52d45b2cf48529b630d09051207/1731567568212.mp4" },
  { src: "https://images.ctfassets.net/pj0maraabon4/3iuPcGx4zASpWsWetnbdGy/14bcaa319e336ae6d759bd866742703f/02_8.png", video: "https://videos.ctfassets.net/pj0maraabon4/3s7qEh1RR1qDugGY9YES4X/5f15e65d34e504e773b440c3d54193bb/1754481100684.mp4" },
];

// Rotate images in order
const rotateArray = (arr) => {
  const copy = [...arr];
  const first = copy.shift();
  copy.push(first);
  return copy;
};

const HeroBanner = () => {
  const [currentImages, setCurrentImages] = useState(images);
  const [cycle, setCycle] = useState(0);
  const [popupVideo, setPopupVideo] = useState(null);

  useEffect(() => {
    if (popupVideo) return; // ⛔ stop shuffling if popup open

    const interval = setInterval(() => {
      setCurrentImages((prev) => rotateArray(prev));
      setCycle((c) => c + 1);
    }, 5000); // ⏳ slower shuffle
    return () => clearInterval(interval);
  }, [popupVideo]);

  // Disable scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = popupVideo ? "hidden" : "auto";
  }, [popupVideo]);

  const imgVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      scale: 0.9,
    }),
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "left" ? 50 : -50,
      scale: 0.9,
    }),
  };

  const transition = { duration: 1.5, ease: "easeInOut" }; // 🐢 slower animation

  const ImageBox = ({ item, direction, idx }) => (
    <motion.img
      key={`${item.src}-${cycle}-${idx}`}
      src={item.src}
      alt=""
      className="w-full h-full object-cover rounded-lg cursor-pointer"
      onClick={() => setPopupVideo(item.video)}
      custom={direction}
      variants={imgVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={transition}
    />
  );

  return (
    <>
    
    <section className="relative w-full bg-[linear-gradient(271deg,rgb(106,0,255)_0%,rgb(44,0,62)_75%,rgb(0,0,0)_100%)] text-white overflow-hidden pb-16 lg:pt-[120px]">
      <div className="relative z-10 flex flex-col items-center justify-center py-16 ">
        <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight">
          DLUX CoE Video Vault
        </h1>
        <p className="max-w-xl text-center mt-6 mb-6">
          Watch real solutions unfold - with video walkthroughs across Adobe
          Workfront, Fusion, DAM, Salesforce, and more.
        </p>

        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black rounded-full font-medium flex items-center gap-2 hover:bg-yellow-500 transition">
          View Portfolio <ArrowRight size={18} />
        </button>
      </div>
      

      <div className="flex justify-center items-center gap-4 ">
        {/* Left single */}
        <div
          className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden shadow"
          style={{ width: "305px", height: "230px" }}
        >
          <ImageBox item={currentImages[0]} direction="left" idx={0} />
        </div>

        {/* Left stack */}
        <div className="flex flex-col gap-4">
          <div
            className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden shadow"
            style={{ width: "305px", height: "230px" }}
          >
            <ImageBox item={currentImages[1]} direction="left" idx={1} />
          </div>
          <div
            className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden shadow"
            style={{ width: "305px", height: "160px" }}
          >
            <ImageBox item={currentImages[2]} direction="left" idx={2} />
          </div>
        </div>

        {/* Center big */}
        <div
          className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden shadow-2xl"
          style={{ width: "415px", height: "460px" }}
        >
          <ImageBox item={currentImages[3]} direction="left" idx={3} />
        </div>

        {/* Right stack */}
        <div className="flex flex-col gap-4">
          <div
            className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden shadow"
            style={{ width: "305px", height: "160px" }}
          >
            <ImageBox item={currentImages[4]} direction="right" idx={4} />
          </div>
          <div
            className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden shadow"
            style={{ width: "305px", height: "230px" }}
          >
            <ImageBox item={currentImages[5]} direction="right" idx={5} />
          </div>
        </div>

        {/* Right single */}
        <div
          className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden shadow"
          style={{ width: "305px", height: "230px" }}
        >
          <ImageBox item={currentImages[6]} direction="right" idx={6} />
        </div>
      </div>

      {/* Video Popup */}
      <AnimatePresence>
        {popupVideo && (
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
             border border-black/20  rounded-full p-2 "
                onClick={() => setPopupVideo(null)}
              >
                <X size={24} />
              </button>

              {/* Video Frame */}
              <iframe
                width="800"
                height="450"
                src={popupVideo}
                title="Video Player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </section>
    </>
  );
};

export default HeroBanner;
