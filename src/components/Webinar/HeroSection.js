"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')", // replace with your background image
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#1b2130]/80 to-transparent"></div>

      {/* Decorative Images */}
      <img
        src="/images/decor-top-left.png" // replace with your PNG
        alt="decor top left"
        className="absolute top-0 left-0 w-40 md:w-56 opacity-80 pointer-events-none"
      />
      <img
        src="/images/decor-bottom-right.png" // replace with your PNG
        alt="decor bottom right"
        className="absolute bottom-0 right-0 w-48 md:w-64 opacity-80 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-center text-white">
          <p className="uppercase tracking-widest text-sm mb-2">
            9 June 2023 · Limited Seat
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Get Inside in The Philosopher’s Mind
          </h2>
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            Buy Tickets
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center text-white lg:pl-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            The Ultimate Platform for Planning and Promoting Successful Events
          </h1>
          <p className="text-gray-300 mb-8">
            Eventify is a leading event and conference website that brings
            together industry experts, thought leaders, and enthusiasts from
            around the world to share knowledge, network, and make lasting
            connections.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-white hover:underline"
          >
            See more about us ↓
          </a>
        </div>
      </div>

      {/* Social icons bottom right */}
      <div className="absolute bottom-6 left-6 flex gap-4 text-white">
        <a href="#" className="hover:text-gray-400">f</a>
        <a href="#" className="hover:text-gray-400">t</a>
        <a href="#" className="hover:text-gray-400">in</a>
        <a href="#" className="hover:text-gray-400">ig</a>
      </div>
    </section>
  );
}
