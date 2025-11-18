"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each blog card
    },
  },
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  // Fetch latest 3 blogs from Contentful
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `
          query ($preview: Boolean) {
            resourcesBlogsCollection(
              preview: $preview
              order: detailPublishDate_DESC
              limit: 3
            ) {
              items {
                detailUrlName
                detailTitle
                detailImageCollection {
                  items {
                    url
                  }
                }
                detailPublishDate
                listingTileDescription
              }
            }
          }
        `;

        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              query,
              variables: { preview: false },
            }),
          }
        );

        const { data } = await response.json();

        if (data?.resourcesBlogsCollection?.items) {
          setBlogs(data.resourcesBlogsCollection.items);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      className="bg-black bg-[url('https://images.ctfassets.net/pj0maraabon4/460BvYglILJP3CQpLh0QLh/7b2648fa189b605a87ca11c8ab66b93c/blog-background-banner.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply
             mx-auto px-6 md:px-12 lg:px-20 py-[80px]  w-full h-full text-white"
    >
      {/* CTA Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-between items-center mb-10"
      >
        <h2 className="text-3xl font-bold text-center">BLOG</h2>
        <a href="/blogs" target="__blank" className="text-white">
          View All Blogs
        </a>
      </motion.div>

      {/* Blog Cards with Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row gap-8 lg:pl-[50px] pt-12"
      >
        {blogs.map((post, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative overflow-hidden rounded-lg shadow-lg flex-1 group pb-6 cursor-pointer"
          >
            {/* Blog Image */}
            {post.detailImageCollection?.items[0]?.url && (
              <motion.img
                src={post.detailImageCollection.items[0].url}
                alt={post.detailTitle}
                className="w-full h-full lg:h-[220px] object-fill"
              />
            )}

            {/* Blog Content */}
            <div className="pt-7">
              <p className="text-sm text-white mb-2">
                {new Date(post.detailPublishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <h3 className="text-lg lg:text-2xl font-semibold mb-2 text-white">
                <a
                  href={`/blog/${post.detailUrlName}`}
                  className="hover:underline transition"
                >
                  {post.detailTitle}
                </a>
              </h3>

              {/* Description
              <p className="line-clamp-4 text-gray-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                {post.listingTileDescription}
              </p> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogSection;
