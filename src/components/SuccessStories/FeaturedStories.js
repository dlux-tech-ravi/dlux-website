"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import { Search } from "lucide-react";

// ======================
// 🔹 Contentful Config
// ======================
const SPACE_ID = "pj0maraabon4";
const ENVIRONMENT = "production";
const ACCESS_TOKEN = "6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`,
  { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
);

// ======================
// 🔹 GraphQL Query (with tags)
// ======================
const GET_CASE_STUDIES = gql`
  query GetCaseStudies {
    caseStudyCollection {
      items {
        title
        slug
        client
        industry
        location
        summary
        shortDescription
        challengesBottlenecks
        turningPoint
        conclusion
        tags
        banner {
          url
          title
          description
        }
      }
    }
  }
`;

const slugify = (text) =>
  text?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function FeaturedStories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [caseStudies, setCaseStudies] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  // ======================
  // 🔹 Fetch Contentful Data
  // ======================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.request(GET_CASE_STUDIES);
        const items = data.caseStudyCollection.items || [];
        setCaseStudies(items);

        // 🔹 Collect all unique tags (flatten if multiple tags per item)
        const uniqueTags = [
          "All",
          ...new Set(
            items.flatMap((i) =>
              Array.isArray(i.tags)
                ? i.tags.filter(Boolean)
                : i.tags
                  ? [i.tags]
                  : []
            )
          ),
        ];

        setTags(uniqueTags);
      } catch (err) {
        console.error("Error fetching case studies:", err);
      }
    };
    fetchData();
  }, []);

  // ======================
  // 🔹 Filter & Search
  // ======================
  const filteredStories = caseStudies.filter((story) => {
    const matchesTag =
      selectedTag === "All" ||
      (Array.isArray(story.tags)
        ? story.tags.includes(selectedTag)
        : story.tags === selectedTag);

    const matchesSearch =
      story.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTag && matchesSearch;
  });

  // ======================
  // 🔹 Render
  // ======================
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-opensans">
          Featured Success Stories
        </h2>
        <p className="text-gray-400 max-w-5xl mx-auto">
          Discover our case studies powered by Dlux — exploring success stories across industries.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-[440px]">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-[10px] pl-10 box-border border border-[#ccc] rounded-[12px] text-left h-[42px] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-5 py-2 rounded-full border text-sm transition ${selectedTag === tag
              ? "bg-white text-black border-white"
              : "border-gray-600 text-gray-300 hover:border-white"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-3 gap-8 mr-0 flex-col md:flex-row">
        {filteredStories.length > 0 ? (
          filteredStories.map((story, idx) => (
            <div
              key={idx}
              onClick={() =>
                navigate(`/success-stories/${story.slug || slugify(story.title)}`)
              }
              className="bg-[#121212] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <img
                src={story.banner?.url || "/images/default-placeholder.jpg"}
                alt={story.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5 space-y-2">
                {/* {story.tags && (
                  <p className="text-gray-400 text-sm">
                    {Array.isArray(story.tags)
                      ? story.tags.join(", ")
                      : story.tags}
                  </p>
                )} */}
                <h3 className="text-lg font-semibold font-opensans">{story.title}</h3>
                <p className="text-gray-400 text-sm">
                  {story.shortDescription || story.summary || "Read more..."}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No articles found.
          </p>
        )}
      </div>
    </section>
  );
}
