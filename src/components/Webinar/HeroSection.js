import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiChevronDown, FiChevronsDown } from "react-icons/fi";


export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]  to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Empty Column */}
        <div className="flex-1 hidden md:block"></div>

        {/* Right Column Content */}
        <div className="flex-1 text-center md:text-left text-white max-w-xl">
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
      <div className="absolute bottom-8 left-6 md:left-16 bg-[#0a1631]/60 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white max-w-xs">
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

      {/* Social Media Links */}
      <div className="absolute bottom-8 right-6 md:right-16 flex gap-4 text-white text-lg">
        <a href="#"><FaFacebookF className="hover:text-blue-500 transition" /></a>
        <a href="#"><FaTwitter className="hover:text-sky-400 transition" /></a>
        <a href="#"><FaLinkedinIn className="hover:text-blue-700 transition" /></a>
        <a href="#"><FaInstagram className="hover:text-pink-500 transition" /></a>
      </div>
    </section>
  );
}
