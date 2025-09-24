import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Are DLUX webinars free to attend? ",
    answer:
      "Yes — all our webinars are free. Simply register to save your spot, and you’ll receive a confirmation email with details.",
  },
   {
    question: " How experienced are the speakers in real-world martech challenges? ",
    answer:
      "Our speakers aren’t just theorists—they’re enterprise practitioners who have rolled out martech ecosystems at scale for global businesses ",
  },
  {
    question: "What if I miss the live session?",
    answer:
      "No problem! Every webinar is recorded. Registered attendees receive the replay link, and you can also watch on-demand in our DLUX Webinar Library. ",
  },
  {
    question: "How do I register for upcoming webinars? ",
    answer:
      "Visit our registration link on the Webinar page, select the session you’d like to join, and submit your details. You’ll get an email with all the access info. ",
  },
  {
    question: "Who are the webinars designed for?",
    answer:
      "Our sessions are tailored for Martech leaders, Adobe platform users, operations teams, and IT professionals who want practical strategies, integrations, and innovation insights",
  },
  {
    question: " Can I ask questions during the webinar? ",
    answer:
      "Absolutely. Each session includes a live Q&A where our experts and Adobe-certified consultants answer your specific challenges. ",
  },
  {
    question: " What makes this session different from reading a whitepaper or blog? ",
    answer:
      "Unlike static content, this webinar delivers live, practical insights with tool-specific hacks and frameworks—plus the opportunity to ask your own questions.  ",
  },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [bgSize, setBgSize] = useState("400px, 400px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgSize("200px, 200px"); // mobile
      } else {
        setBgSize("400px, 400px"); // tablet & desktop
      }
    };

    handleResize(); // set on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative bg-white flex items-center justify-center px-4 py-20 bg-[url('https://images.ctfassets.net/pj0maraabon4/7mmx8EST5ppZKP3Us3aRUg/c03b3dff24b652e8c8d18c362d6a83c2/faq_background_image.png')] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.ctfassets.net/pj0maraabon4/7mmx8EST5ppZKP3Us3aRUg/960a91dc5c56ac7f0cd144cc950fd65d/faq_left-image.png'), url('https://images.ctfassets.net/pj0maraabon4/7fNdf2uGO4hRKIfTEWSOxJ/aaa27d75ea02cd3a31005bc8f269f8cc/faq_right_image.png')`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top left, bottom right",
        backgroundSize: bgSize,
      }}
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center lg:mb-20 bg-gradient-to-r from-[#ff3901] to-[#F07800] bg-clip-text text-transparent">
          Get Answers to Your Eventify Questions with Our FAQs
        </h2>

        <div className="space-y-6 pt-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center">
                <div className="w-full">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                </div>
                <div className="w-10 h-10 flex items-center justify-center border rounded-full border-gray-400">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-700" />
                    )}
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="text-gray-600 mt-3 text-sm md:text-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
