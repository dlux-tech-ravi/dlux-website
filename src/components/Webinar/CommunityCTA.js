import React from "react";

const CommunityCTA = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-[130px] bg-[#ff3901]">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <img
          src="https://images.ctfassets.net/pj0maraabon4/296XnXzXCaUOJFkVDQY0eS/3fbba29e3134d07ecc8aeeb048f12968/community-bg-shape.png"
          alt="background pattern"
          className="w-full h-full object-cover"
        />
       
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-6xl">
         Join our AI & Martech Innovation Center community
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
         The Place where Experts and Enthusiasts connect to shape the future of Technology and Marketing!
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          JOIN NOW
        </button>
      </div>

      {/* Abstract Wave Shape Overlay */}
      
    </section>
  );
};

export default CommunityCTA;
