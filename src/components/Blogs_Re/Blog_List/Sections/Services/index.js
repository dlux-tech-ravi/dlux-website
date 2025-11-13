import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

const LeftRightCards = () => {
  const [cardsData, setCardsData] = useState([]);

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
          title: item.title || `Card ${index + 1}`,
          description: item.description || "No description available.",
          url: item.url || "https://via.placeholder.com/100",
        }));

        setCardsData(mappedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      className="lrc-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left Side */}
      <motion.div
        className="lrc-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Dlux Blogs</h2>
        <p>
          Your Go–to Hub for Martech expert perspectives, tips, and deep dives
          into the world of enterprise marketing technology and digital
          operations. Stay ahead with insights on Adobe Workfront, Fusion,
          Commerce, DAM, Salesforce, and AI-driven Martech stacks.
        </p>
      </motion.div>

      {/* Right Side Cards */}
      <motion.div
        className="lrc-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cardsData.length > 0 ? (
          cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="lrc-card-wrapper"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="lrc-card">
                <div className="lrc-card-inner">
                  <div className="lrc-card-front">
                    <img src={card.url} alt={card.title} className="lrc-card-logo" />
                    <h3>{card.title}</h3>
                  </div>
                  <div className="lrc-card-back">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>Loading cards...</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default LeftRightCards;
