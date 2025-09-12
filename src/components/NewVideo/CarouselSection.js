"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Mastering Multilingual Site Management with Adobe Experience Manager MSM",
    cta: "View Portfolio",
    image:
      "https://images.ctfassets.net/pj0maraabon4/7EfPXl9ZZaHz8NjhtQOi8r/5314dd928d7d5e153796d344e7c7509e/Mastering_Multilingual_Site_Management_with_Adobe_Experience_Manager_MSM.png",
    videoUrl:
      "https://videos.ctfassets.net/pj0maraabon4/7jf1qEjn6aNNHJsCCGHDkI/3b044468574c6305bee30852860c589a/2.mp4",
  },
  {
    id: 2,
    title: "Say Goodbye to Content Chaos with AEM Edge Delivery!",
    cta: "Explore Work",
    image:
      "https://images.ctfassets.net/pj0maraabon4/38YY6qkHaUxL15zPsAVkCY/0a308c6a58de7d4e0750a61c0f1d6ddf/Say_Goodbye_to_Content_Chaos_with_AEM_Edge_Delivery.png",
    videoUrl:
      "https://videos.ctfassets.net/pj0maraabon4/1lbUJKgwWFFmyroHWJtlEj/0c6888136c8950b0a656ba6ed0d1f692/4.mp4",
  },
  {
    id: 3,
    title: "Master Content Management with AEM: Your Safety Net in the Digital High-Wire Act!",
    cta: "See Details",
    image:
      "https://images.ctfassets.net/pj0maraabon4/1Lig058lbO5iMFRoiXiqCL/486e788efff2fff9954f18c344933801/Master_Content_Management_with_AEM-_Your_Safety_Net_in_the_Digital_High-Wire_Act_.png",
    videoUrl:
      "https://videos.ctfassets.net/pj0maraabon4/3sqvkwblysuyTcUU6vyXT2/d777d4a9b8db5600a7a8ce61184dae47/Product_recommendation-002__1___1___1_.mp4",
  },
  {
    id: 4,
    title: "Unlock the Power of Seamless Content Creation with AEM",
    cta: "See Details",
    image:
      "https://images.ctfassets.net/pj0maraabon4/1suQj4cSZfdQwX2bTltDiz/220956746f044637a590b979fea68587/Unlock_the_Power_of_Seamless_Content_Creation_with_AEM.png",
    videoUrl:
      "https://videos.ctfassets.net/pj0maraabon4/1ekQavAh7Sw8xySwzNttlA/ab0d40f4bcb651e3f716f5d5fd7edd5a/15.mp4",
  },
];

export default function CarouselSection() {
  const [index, setIndex] = useState(0);
  const [openVideo, setOpenVideo] = useState(null);

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
    <section className="bg-black text-white mt-[70px] mb-[70px]">
      <div className="mx-auto w-full px-6 py-16">
        <div className="flex items-center gap-12 md:grid-cols-2">
          {/* LEFT COLUMN */}
          <motion.div
            className="relative w-[50%] flex h-[28rem] items-center justify-end"
            initial={{ opacity: 0, x: -60 }}
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
                  onClick={() => setOpenVideo(SLIDES[index].videoUrl)}
                >
                  <motion.img
                    src={SLIDES[index].image}
                    alt={SLIDES[index].title}
                    className="w-full h-full object-cover"
                  />
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
                  className="absolute z-10 h-[415px] w-[372px] rounded-3xl shadow-xl overflow-hidden -left-[50%]"
                >
                  <motion.img
                    src={SLIDES[nextIndex].image}
                    alt={SLIDES[nextIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={goNext}
                className="absolute z-[9999] right-[97%] top-1/2 -translate-y-1/2 rounded-full bg-white p-6 text-black shadow-lg hover:scale-105 transition"
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="w-[50%] px-[50px]">
             <h2 className="text-[52px] font-semibold "><span class="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">Salesforce</span>  </h2>
            <p>Your go-to hub for Salesforce trends, tools, and tutorials—featuring AI innovations, Data Cloud, automation, and low-code solutions.</p>
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, x: 60 }}
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
        </div>
      </div>

      {/* VIDEO POPUP MODAL */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="relative w-[90%] max-w-4xl bg-black rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 rounded-full bg-white text-black p-2 hover:bg-gray-200"
                onClick={() => setOpenVideo(null)}
              >
                <X size={24} />
              </button>

              <video
                src={openVideo}
                controls
                autoPlay
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
