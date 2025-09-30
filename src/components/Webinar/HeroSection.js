import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {  FiChevronsDown } from "react-icons/fi";


export default function HeroSection() {
  return (
    <section
      className="relative h-full md:h-screen w-full bg-cover bg-center pt-[150px] md:pt-4"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/pj0maraabon4/2hm6Mm2p7tipTtFvqVqkqW/fbcce68016b22f673e0a382745d7bc68/webinar-bg-banner.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]  to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Empty Column */}
        <div className="flex-1 hidden md:block"></div>

        {/* Right Column Content */}
        <div className="flex-1 text-center md:text-left text-white max-w-xl content-center ">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
           MarTech Secrets, Straight from the Frontlines 
          </h1>
          <p className="text-base md:text-[16px] mb-6">
            Join DLUX experts, certified consultants, and industry leaders as they unpack real-world use cases, seamless integrations, and future-ready strategies across Martech, AI, and enterprise innovation.  
          </p>
          <a
  href="#about"
  className="inline-flex items-center text-[16px] font-medium text-white no-underline hover:underline transition"
>
  Missed it live? Catch the insights anytime
  <FiChevronsDown className="ml-2 w-4 h-4" />
</a>
        </div>
      </div>

      {/* Left Side Bottom Card */}

      <div className="inline-block relative md:absolute mt-6 md:bottom-8  md:left-16 lg:w-[30%] justify-items-center">
      <img src="/webinar-assets/webinar-hero-section-02.png"  className="relative lg:absolute w-[95%] lg:left-[3%] lg:bottom-[100%]"/>
      <div className="bg-[#0a1631]/60 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white w-[60%] justify-items-center text-center">
        <p className="text-xs uppercase tracking-widest mb-1">
          9 June 2023 <span className="mx-2">|</span> Limited Seat
        </p>
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          LIVE. ON-DEMAND  
        </h3>
        <button className="px-4 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-[#0a1631] transition">
          START DIGGING DEEPER 
        </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="relative md:absolute md:bottom-8  md:right-16 flex gap-4 text-white text-lg justify-center mt-8">
        <a href="https://www.facebook.com/DLUXTech/"><FaFacebookF className="hover:text-[#ff3901] transition" /></a>
        <a href="https://x.com/Dlux_Tech"><FaTwitter className="hover:text-[#ff3901] transition" /></a>
        <a href="https://www.linkedin.com/company/dlux-tech-corp"><FaLinkedinIn className="hover:text-[#ff3901] transition" /></a>
        <a href="https://www.instagram.com/dlux_tech/"><FaInstagram className="hover:text-[#ff3901] transition" /></a>
      </div>
    </section>
  );
}
