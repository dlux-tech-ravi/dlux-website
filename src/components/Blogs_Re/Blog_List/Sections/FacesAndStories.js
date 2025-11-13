"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FacesAndStories() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);

  // 🔹 Fetch data from Contentful
  useEffect(() => {
    const fetchCards = async () => {
      const query = `
        {
          blogPageCollection {
            items {
              dluxBlogCollection {
                items {
                  title
                  description
                  url
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU",
            },
            body: JSON.stringify({ query }),
          }
        );

        const data = await response.json();
        const items =
          data.data.blogPageCollection.items[0]?.dluxBlogCollection.items || [];

        const mappedCards = items.map((item, index) => ({
          id: index + 1,
          title: item.title || `Card ${index + 1}`,
          desc: item.description || "No description available.",
          image: item.url || "https://via.placeholder.com/800x600?text=No+Image",
        }));

        setCards(mappedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  // 🔹 Loop animation when data is loaded
  useEffect(() => {
    if (cards.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards]);

  if (cards.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-white">
        Loading stories...
      </div>
    );
  }

  // 🔹 Show current + next 3 cards
  const getVisible = () => {
    const list = [];
    for (let i = 0; i < 4; i++) {
      list.push(cards[(index + i) % cards.length]);
    }
    return list;
  };

  const visible = getVisible();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* LEFT ACTIVE CARD */}
      <motion.div
        key={visible[0].id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src={visible[0].image}
          alt={visible[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
          <h2 className="text-2xl font-semibold">{visible[0].title}</h2>
          <p className="text-white">{visible[0].desc}</p>
        </div>
      </motion.div>

      {/* RIGHT SIDE SLIDING QUEUE */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl text-white font-bold mb-2">Dlux Blogs</h2>
        <p className="text-white mb-3">
          Your Go–to Hub for Martech expert perspectives, tips, and deep dives
          into the world of enterprise marketing technology and digital
          operations. Stay ahead with insights on Adobe Workfront, Fusion,
          Commerce, DAM, Salesforce, and AI-driven Martech stacks.
        </p>

        <div className="relative overflow-hidden h-[160px] mt-5">
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-25%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex gap-4"
          >
            {visible.concat(visible[0]).map((card) => (
              <div
                key={card.id}
                className="min-w-[180px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-28 w-full object-cover"
                />
                <div className="p-3 bg-black">
                  <h4 className="font-semibold text-sm text-white">
                    {card.title}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
