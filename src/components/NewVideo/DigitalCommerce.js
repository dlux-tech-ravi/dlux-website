"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, X } from "lucide-react";

const SLIDES = [
    {
    id: 1,
     title: "Mastering Multilingual Site Management with Adobe Experience Manager MSM",
    cta: "View Portfolio",
    image:
      "https://images.ctfassets.net/pj0maraabon4/6xE3Qtgu00MlBoohi279ax/e45f0a93a8f458aadee38da94a50ec4a/Analytics.jpg",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/7CG3xXvh4HMW2qADioFT4l/89f27424925df9f32eb297619f55adbb/ceo-videos-06.mp4",
  },

  {
    id: 2,
    title: "Say Goodbye to Content Chaos with AEM Edge Delivery!",
    cta: "Explore Work",
    image:
      "https://images.ctfassets.net/pj0maraabon4/19EOD4H2jJzaITuJ1VCYjP/6f194ef1906f179fdff257785255c5a6/Product_Recommentation.jpg",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/AWliC8HUMiEcAMXPjHff1/e1b5edaf8455fe292f375ea876c9de81/Product_recommendation.mp4",
  },
  {
    id: 3,
     title: "Master Content Management with AEM: Your Safety Net in the Digital High-Wire Act!",
    cta: "See Details",
    image:
      "https://images.ctfassets.net/pj0maraabon4/3N9yqUkjutnAizDLHKX5GW/327f7618bcc6bef20443bfa20bff4604/Live_Search.jpg",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/2lXuiAoYJNBOSEu7R1dn5U/3e5b6014da74ed479eff0fdc3e39cf92/Final_Out.mp4",
  },
  
  {
    id: 4,
    title: "Unlock the Power of Seamless Content Creation with AEM",
    cta: "See Details",
    image:
      "https://images.ctfassets.net/pj0maraabon4/ZjN1O5ofZ2pQZpEFvouFG/bea0016679a641f543da8ff80077b8f7/adobe-commerce-aep.jpg",
    videoUrl: "https://videos.ctfassets.net/pj0maraabon4/6rnaOM4Jsr6ZjCwLQPi8JG/2f04a0d33eb61faa376296a3cbbd22e8/Adobe_Recommentation_-_27-06-25_1__1___1_.mp4",
  },
];

export default function DigitalCommerce() {
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const len = SLIDES.length;
  const nextIndex = (index + 1) % len;

  const goNext = () => setIndex((i) => (i + 1) % len);

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

  // Disable scroll when video is open
  useEffect(() => {
    document.body.style.overflow = videoOpen ? "hidden" : "auto";
  }, [videoOpen]);

  return (
    <section className=" text-white mt-[70px] mb-[70px] lg:pb-[70px] relative overflow-hidden">
      <div className="mx-auto w-full px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* LEFT COLUMN (Content) */}
        <div className="w-full lg:w-1/2 px-[50px]">
        <motion.div
           
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10"
          >
          <h2 className="text-4xl font-bold">
            <span className="bg-[#BB7CE4] bg-clip-text text-transparent">
             Digital Commerce
            </span>
          </h2>
          <p className="mt-3 text-gray-300 text-lg">
            Watch & Learn with Adobe Commerce – From Magento to Commerce, explore
            expert tutorials, proven stats, and success stories. Unlock E-Commerce
            growth and improved ROI with real strategies that work.
          </p>
</motion.div>
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10"
          >
            <h4 className="text-3xl font-semibold leading-tight">{SLIDES[index].title}</h4>

            <div className="mt-8">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="mt-6 px-4 py-3 relative rounded-full font-medium flex items-center gap-2 overflow-hidden text-[#1B0A31]"
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

                <span className="relative z-10 text-[#1B0A31]">{SLIDES[index].cta}</span>
                <div className="relative w-5 h-5 overflow-hidden">
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
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (Cards) */}
        <motion.div className="relative w-full lg:w-1/2 flex h-[28rem] items-center justify-start">
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

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="absolute inset-0 rounded-full border-4 border-white opacity-70 animate-ping"
                        style={{ animationDuration: `${3 + i}s` }}
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

      {/* VIDEO POPUP MODAL */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex items-center justify-center"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 hover:bg-white/20 transition"
                onClick={() => setVideoOpen(false)}
              >
                <X size={24} />
              </button>

              <video
                src={SLIDES[index].videoUrl}
                controls
                autoPlay
                className="w-[800px] h-[450px] object-contain rounded-lg bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
