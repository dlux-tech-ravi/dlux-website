"use client";

import React, { useState } from "react";

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      date: "March 1, 2025",
      author: "Paul Anderson",
      title: "10 TIPS FOR SUCCESSFUL EVENT PLANNING",
      description:
        "Successful event planning requires careful consideration of various factors, such as venue selection, budgeting, and marketing strategies.",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      date: "February 15, 2025",
      author: "Mary Vital",
      title: "Why Events Matter: The Power of Face-to-Face Interaction",
      description:
        "Discover the importance of in-person connections and how they impact business relationships and networking opportunities.",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      date: "January 31, 2025",
      author: "Anthony Huges",
      title: "The Future of Event Technology: What to Expect in 2023",
      description:
        "Explore the latest technological advancements that are shaping the future of events and conferences.",
      image: "https://picsum.photos/600/400?random=3",
    },
  ];

  return (
    <section className="bg-[#122644] mx-auto px-6 md:px-12 lg:px-20 py-20 w-full h-full lg:h-[100vh] ">
     
       {/* CTA Button */}
      <div className="flex justify-between items-center mb-10">
         <h2 className="text-3xl font-bold text-center ">BLOG</h2>
        <a href="" className=" text-white">
          View All Blogs
        </a>
      </div>
      {/* Single row layout on desktop */}
      <div className="flex flex-col md:flex-row gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="relative overflow-hidden  transition-all duration-500 ease-in-out transform hover:scale-105 flex-1"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[280px] object-cover"
            />

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex gap-3">
              <p className="text-sm text-[#FFFFFF] mb-2">{post.date}</p>
              <p className="text-sm text-[#D3A0E6] mb-4">by {post.author}</p>
              </div>
              <h3 className="text-xl font-semibold mb-4">{post.title}</h3>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  hoveredCard === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default BlogSection;
