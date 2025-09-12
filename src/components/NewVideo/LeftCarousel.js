"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Transform Your Business Communication with Salesforce",
    cta: "View Portfolio",
    image:
      "https://images.ctfassets.net/pj0maraabon4/57xOIriVD6RHoemWz7Qt5l/38b0a79681b163306d34aaa4366f9a1a/Transform_Your_Business_Communication_with_Salesforce.png",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/23duxSWEGotEK7VfBz31mq/ed0abd80bdcb2b1f1d15797d80b85704/6.mp4",
  },
  {
    id: 2,
    title: "Unlock Salesforce Flow Builder: Your Key to Effortless Automation!",
    cta: "Explore Work",
    image:
      "https://images.ctfassets.net/pj0maraabon4/U6g7TwkJH7UI8k0dwoO1C/dc7687fe056ef8f07af423eb274bb0b9/Unlock_Salesforce_Flow_Builder-_Your_Key_to_Effortless_Automation_.png",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/7yllG6jYwZ5xYzBJjUsm2C/44db079246aa391311dae20dd4a121ec/8.mp4",
  },
  {
    id: 3,
    title: "Transform Your Media Booking Process with DLUX",
    cta: "See Details",
    image:
      "https://images.ctfassets.net/pj0maraabon4/20nzbTepnkkIoYLIdiAw2T/20c680751d0c163c38530666a36779d5/Transform_Your_Media_Booking_Process_with_DLUX.png",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/7y7UI5QVmN5gxwqyQdsibz/3342fea640792cd45dbce90187a8352a/12.mp4",
  },
  {
    id: 4,
    title: "Unlock Seamless Security with Our Authentication Governance Superbadge!",
    cta: "See Details",
    image:
      "https://images.ctfassets.net/pj0maraabon4/g1TWso5qhkM031pfTbtNK/1ecdd71b56804e705124d3212cf059b8/Unlock_Seamless_Security_with_Our_Authentication_Governance_Superbadge_.png",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/40YQgD24kgLKekkNE4qtFb/dc4d0753268f4cff6069206d5b911ba7/14.mp4",
  },
];

export default function LeftCarousel() {
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const len = SLIDES.length;
  const nextIndex = (index + 1) % len;

  const goNext = () => {
    setIndex((i) => (i + 1) % len);
  };

  const activeCard = {
    initial: { opacity: 0, scale: 0.9, x: 60 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 1.05, x: -60 },
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  };

  const nextCard = {
    initial: { opacity: 0, scale: 0.8, x: -220 },
    animate: { opacity: 0.7, scale: 0.9, x: -120 },
    exit: { opacity: 0, scale: 0.85, x: -220 },
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  };

  return (
    <section className="bg-black text-white mt-[70px] mb-[70px] lg:pb-[70px] relative overflow-hidden">
      
      <div className="mx-auto w-full px-6 py-16">
        <div className="flex items-center gap-12 md:grid-cols-2">
          {/* LEFT COLUMN (Content) */}
           <div className="w-[50%] px-[50px]">
             <h2 className="text-[52px] font-semibold "><span class="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">Adobe Commerce</span>  </h2>
            <p>Watch & Learn with Adobe Commerce – From Magento to Commerce, explore expert tutorials, proven stats, and success stories. Unlock E-Commerce growth and improved ROI with real strategies that work</p>
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10"
          >
            <h6 className="text-[24px] font-semibold leading-tight ">
              {SLIDES[index].title}
            </h6>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 px-6 py-2.5 font-semibold text-black hover:bg-yellow-300"
              >
                {SLIDES[index].cta}
              </motion.button>
            </div>
          </motion.div>
          </div>

          {/* RIGHT COLUMN (Cards) */}
          <motion.div
            className="relative w-[50%] flex h-[28rem] items-center justify-start"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
          >
            <div className="relative h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {/* Active Card */}
                <motion.div
                  key={`active-${SLIDES[index].id}`}
                  variants={activeCard}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={activeCard.transition}
                  className="relative z-20 h-[550px] w-[520px] rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                  onClick={() => setVideoOpen(true)}
                >
                  <motion.img
                    src={SLIDES[index].image}
                    alt={SLIDES[index].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button with Wave Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="absolute inset-0 rounded-full border-4 border-white opacity-70 animate-ping"
                          style={{
                            animationDuration: `${3 + i}s`,
                          }}
                        ></span>
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                          ▶
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Next Preview Card */}
                <motion.div
                  key={`next-${SLIDES[nextIndex].id}`}
                  variants={nextCard}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={nextCard.transition}
                  className="absolute z-10 h-[415px] w-[372px] rounded-3xl shadow-xl overflow-hidden -right-[95%]"
                >
                  <motion.img
                    src={SLIDES[nextIndex].image}
                    alt={SLIDES[nextIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              <button
                onClick={goNext}
                className="absolute z-[9999] left-[97%] top-1/2 -translate-y-1/2 rounded-full bg-white p-6 text-black shadow-lg hover:scale-105 transition"
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[80%] h-[80%] bg-black rounded-2xl overflow-hidden"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 text-black"
                onClick={() => setVideoOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Video */}
              <video
                src={SLIDES[index].videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
