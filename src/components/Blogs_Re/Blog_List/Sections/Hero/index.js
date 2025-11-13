"use client";
import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { FaArrowRight } from "react-icons/fa6";
import "./style.css";

const endpoint =
  "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production";
const accessToken = "6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU";

const Hero = () => {
  const [heroBanners, setHeroBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Corrected GraphQL query name and structure
  const query = gql`
    query {
      blogPageCollection {
        items {
          heroBannerCollection {
            items {
              url
            }
          }
        }
      }
    }
  `;

  useEffect(() => {
    const client = new GraphQLClient(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const fetchHeroBanners = async () => {
      try {
        const data = await client.request(query);
        // ✅ Corrected object path according to query
        const heroUrls =
          data.blogPageCollection.items[0]?.heroBannerCollection?.items.map(
            (item) => item.url
          ) || [];
        setHeroBanners(heroUrls);
      } catch (error) {
        console.error("Error fetching hero URLs:", error);
      }
    };

    fetchHeroBanners();
  }, []);

  useEffect(() => {
    if (!heroBanners.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroBanners.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroBanners]);

  if (!heroBanners.length) return null;

  const heroUrl = heroBanners[currentIndex];

  return (
    <section
      className="blog-hero"
      style={{ backgroundImage: `url(${heroUrl})` }}
    >
      <div className="blog-hero__overlay">
        <div className="blog-hero__content">
          <h1 className="blog-hero__title">
            Insights. Innovation. <br /> Enterprise Excellence
          </h1>
          <a href="https://www.dluxtech.com/success-stories" className="blog-hero__link">
            <button className="blog-hero__button">
              Start Exploring{" "}
              <span className="blog-hero__button-icon">
                <FaArrowRight />
              </span>
            </button>
          </a>

        </div>

        <div className="blog-hero__slider">
          <span className="blog-hero__slider-number">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="blog-hero__slider-bar">
            <div
              className="blog-hero__slider-progress"
              style={{
                width: `${((currentIndex + 1) / heroBanners.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="blog-hero__slider-number">
            {String(heroBanners.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
