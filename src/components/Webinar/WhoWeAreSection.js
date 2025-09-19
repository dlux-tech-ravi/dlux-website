import React from "react";
import { Globe, Puzzle, SlidersHorizontal, Megaphone } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <Globe className="w-10 h-10" />,
    title: "Global Network",
  },
  {
    id: 2,
    icon: <Puzzle className="w-10 h-10" />,
    title: "Advanced Tools",
  },
  {
    id: 3,
    icon: <SlidersHorizontal className="w-10 h-10" />,
    title: "Customizable Pages",
  },
  {
    id: 4,
    icon: <Megaphone className="w-10 h-10" />,
    title: "Powerful Marketing",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="relative w-full h-[100vh] bg-gradient-to-br from-[#0f1a33] to-[#101c3d] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div
            className="absolute top-[20%] left-[45%] w-80 h-80 rounded-full 
          bg-gradient-to-r from-[#BB7CE4] to-[#02162F] 
          blur-[100px] opacity-80 z-1"
          />
      {/* Left Column */}
      <div className="relative md:w-3/5 space-y-6 z-[100]">
        <h2 className="text-5xl font-bold">WHO WE ARE</h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          Eventify is a comprehensive platform for organizing and promoting
          events, conferences, and other industry-related gatherings. Our team
          of experienced professionals is dedicated to providing unparalleled
          event management solutions that help you streamline your event
          planning process and maximize your ROI. We believe that events are
          powerful tools for driving growth, innovation, and success, and we're
          committed to helping you make the most of every opportunity.
        </p>
        <button className="bg-gradient-to-r from-[#122644] to-[#D3A0E6] px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition">
          CONTACT
        </button>
      </div>

      {/* Right Column */}
      <div className="md:w-2/5 flex flex-col gap-6 ">
        <h3 className="text-2xl font-semibold mb-4">
          Benefits of Choosing Eventify
        </h3>
        <div className="flex">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col w-[175px] h-[222px] items-center justify-center border border-white-600  p-6 text-center cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-[#122644] hover:to-[#D3A0E6]    hover:border-transparent" 
            >
              <div className="mb-3">{benefit.icon}</div>
              <h4 className="text-sm font-medium">{benefit.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
