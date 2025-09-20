import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Are DLUX webinars free to attend? ",
    answer:
      "Yes — all our webinars are free. Simply register to save your spot, and you’ll receive a confirmation email with details.",
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
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative bg-white flex items-center justify-center px-4 py-20 bg-[url('https://images.ctfassets.net/pj0maraabon4/7mmx8EST5ppZKP3Us3aRUg/c03b3dff24b652e8c8d18c362d6a83c2/faq_background_image.png')] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.ctfassets.net/pj0maraabon4/7mmx8EST5ppZKP3Us3aRUg/960a91dc5c56ac7f0cd144cc950fd65d/faq_left-image.png'), url('https://images.ctfassets.net/pj0maraabon4/7fNdf2uGO4hRKIfTEWSOxJ/aaa27d75ea02cd3a31005bc8f269f8cc/faq_right_image.png')`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top left, bottom right",
        backgroundSize: "400px, 400px",
      }}
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-purple-800">
          Get Answers to Your Eventify Questions with Our FAQs
        </h2>

        <div className="space-y-6 pt-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <div className="w-8 h-8 flex items-center justify-center border rounded-full border-gray-400">
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
