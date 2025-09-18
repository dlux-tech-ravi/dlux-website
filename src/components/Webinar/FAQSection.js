import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I register for an event on Eventify?",
    answer:
      "Registering for an event on Eventify is easy! Simply visit the event page and click the 'Register Now' button. You'll be taken to a registration form where you can enter your details and purchase your ticket.",
  },
  {
    question: "How can I become a speaker at an Eventify event?",
    answer:
      "To become a speaker, visit our 'Become a Speaker' page and submit your application. Our team will review your details and get back to you.",
  },
  {
    question: "Can I cancel or transfer my event registration?",
    answer:
      "Yes, registrations can be canceled or transferred. Please check our cancellation policy on the event page for more details.",
  },
  {
    question: "How can I become a sponsor of an Eventify event?",
    answer:
      "If you're interested in sponsorship, visit our 'Sponsor' section and fill out the form. Our partnerships team will reach out to you.",
  },
  {
    question: "How can I get in touch with Eventify customer support?",
    answer:
      "You can reach out to our customer support via the 'Contact Us' page or email us directly at support@eventify.com.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative min-h-screen bg-white flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: `url('/bg-top-left.png'), url('/bg-bottom-right.png')`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top left, bottom right",
        backgroundSize: "300px, 300px",
      }}
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-800">
          Get Answers to Your Eventify Questions with Our FAQs
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
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
                    className="text-gray-600 mt-3 text-sm md:text-base"
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
