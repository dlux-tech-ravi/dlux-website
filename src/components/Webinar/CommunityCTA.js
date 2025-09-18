import React from "react";

const CommunityCTA = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <img
          src="https://www.transparenttextures.com/patterns/az-subtle.png"
          alt="background pattern"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          JOIN OUR COMMUNITY
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          The community of event organizers and enthusiasts and start planning
          your next successful event with Eventify!
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          JOIN NOW
        </button>
      </div>

      {/* Abstract Wave Shape Overlay */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
          />
          <defs>
            <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ffffff22" />
              <stop offset="100%" stopColor="#ffffff44" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default CommunityCTA;
