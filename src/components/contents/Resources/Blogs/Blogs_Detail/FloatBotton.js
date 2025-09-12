import React, { useState, useEffect } from "react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Trigger slide-in animation on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <div
        className={`
          fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg cursor-pointer 
          transform transition-transform duration-300 ease-out
          ${animate ? "translate-x-0" : "translate-x-40"}
          hover:scale-110
        `}
        onClick={() => setIsOpen(!isOpen)}
        style={{ transform: animate ? "rotate(5deg)" : "rotate(0deg)" }}
      >
        <span className="relative z-10">💬 Contact Us</span>

        {/* Wave Overlay */}
        <span className="absolute inset-0 rounded-full bg-blue-600 opacity-60 animate-wave z-0"></span>
      </div>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-72 bg-white border border-gray-300 rounded-xl p-5 shadow-lg z-50 animate-fadeIn">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="3"
            placeholder="Your Message"
            className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Send
          </button>
        </div>
      )}

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease forwards;
          }

          @keyframes wave {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.2); opacity: 0.3; }
            100% { transform: scale(1); opacity: 0.6; }
          }
          .animate-wave {
            animation: wave 3s infinite ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default FloatingContact;
