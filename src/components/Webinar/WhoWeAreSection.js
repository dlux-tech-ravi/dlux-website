import React from "react";
import { Globe, Puzzle, SlidersHorizontal, Megaphone } from "lucide-react";
const benefits = [
  {
    id: 1,
    icon: <Globe className="w-10 h-10" />,
    title: "Certified & Industry Expertise  ",
  },
  {
    id: 2,
    icon: <Puzzle className="w-10 h-10" />,
    title: "Center of Excellence Approach ",
  },
  {
    id: 3,
    icon: <SlidersHorizontal className="w-10 h-10" />,
    title: "End-to-End Solution  ",
  },
  {
    id: 4,
    icon: <Megaphone className="w-10 h-10" />,
    title: "Trusted by Global Enterprises",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="relative w-full  bg-[#122644] text-white pb-[80px] px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div
        className="absolute top-[20%] left-[45%] w-80 h-80 rounded-full 
          bg-gradient-to-r from-[#BB7CE4] to-[#02162F] 
          blur-[100px] opacity-80 z-1"
      />
      {/* Left Column */}
      <div className="relative md:w-2/5 py-20 space-y-6 z-[100]">
        <h2 className="text-5xl font-bold">WHY ATTEND DLUX WEBINAR  </h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          As a Top leading Martech business consulting firm in Sydney,
          Australia, DLUX brings together strategy and technology to help you
          master complex projects, scale your marketing and technology
          operations, and stay ahead in the fast-changing AI & Martech. 
        </p>
        <ul className="space-y-3 text-white text-base md:text-lg leading-relaxed ">          
            <li className="flex items-start gap-2">              
              <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
              <span className="text-white">Deep Dives – Learn the why and the how, not just the features</span>
            </li>
             <li className="flex items-start gap-2">              
              <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
              <span className="text-white">Case Studies – Real client success in action</span>
            </li>
             <li className="flex items-start gap-2">              
              <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
              <span className="text-white">Expert Insights – Tech certified pros & DLUX CoE leaders</span>
            </li>
             <li className="flex items-start gap-2">              
              <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
              <span className="text-white">Live Q&A – Ask, interact, get instant answers</span>
            </li>
            <li className="flex items-start gap-2">              
              <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></span>
              <span className="text-white">On-Demand – Replay anytime, anywhere</span>
            </li>
        
        </ul>
        <button className="bg-gradient-to-r from-[#122644] to-[#D3A0E6] px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition">
          CONTACT
        </button>
      </div>

      {/* Right Column */}
      <div className="md:w-2/5 gap-6 ">
        <h3 className="text-2xl font-semibold mb-4">
          BENEFITS OF CHOOSING US 
        </h3>
        <div className="flex">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col w-[240px] h-[222px] items-center justify-center border border-white-600  p-6 text-center cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-[#122644] hover:to-[#D3A0E6]    hover:border-transparent"
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
