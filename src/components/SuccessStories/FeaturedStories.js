// Ultra-smooth modern grid design with hover-to-reveal content
"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import { Search } from "lucide-react";

const SPACE_ID = "pj0maraabon4";
const ENVIRONMENT = "production";
const ACCESS_TOKEN = "6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`,
  { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
);

const GET_CASE_STUDIES = gql`
  query GetCaseStudies {
    caseStudyCollection {
      items {
        title
        slug
        shortDescription
        tags
        banner {
          url
          title
          description
        }
        clientLogo {
          url
          title
          description
        }
      }
    }
  }
`;

export default function FeaturedStories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [caseStudies, setCaseStudies] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      const data = await client.request(GET_CASE_STUDIES);
      const items = data.caseStudyCollection.items ?? [];
      setCaseStudies(items);

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
    };

    fetchContent();
  }, []);

  const filteredStories = caseStudies.filter((story) => {
    const tagMatch =
      selectedTag === "All" ||
      (Array.isArray(story.tags)
        ? story.tags.includes(selectedTag)
        : story.tags === selectedTag);

    const text = searchTerm.toLowerCase();
    const searchMatch =
      story.title?.toLowerCase().includes(text) ||
      story.shortDescription?.toLowerCase().includes(text);

    return tagMatch && searchMatch;
  });

  return (
    <section className="bg-black text-white max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-opensans">
          Featured Success Stories
        </h2>
        <p className="text-gray-400 max-w-4xl mx-auto">
          Discover our case studies powered by DLUX — real results from real
          clients.
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-[440px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-[10px] pl-12 border border-gray-700 rounded-[14px] bg-white text-black placeholder-gray-600 focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex md:flex-row flex-wrap gap-3 mb-10">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              selectedTag === tag
                ? "bg-white text-black border-white"
                : "border-gray-600 text-gray-300 hover:border-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden mr-0">
        {filteredStories.length > 0 ? (
          filteredStories.map((story, i) => (
            <div
              key={i}
              onClick={() => navigate(`/success-stories/${story.slug}`)}
              className="relative group cursor-pointer h-[300px] md:h-[340px] overflow-hidden"
            >
              {/* Banner (ALWAYS visible) */}
              <img
                src={
                  story.banner?.url ||
                  "https://images.ctfassets.net/pj0maraabon4/kRdzRFhh9Kz6lwIsSiAvr/a13e608fa15e23b8ba5914afec551413/oil-paint.jpg"
                }
                alt={story.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[900ms] ease-out"
              />

              {/* Hover overlay (never hides banner) */}
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Reveal content */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-3 group-hover:translate-y-0 justify-items-center">
                {story.clientLogo?.url && (
                  <img
                    src={story.clientLogo.url}
                    alt={story.clientLogo.title || "Client logo"}
                    className="w-[70%] h-full object-contain mb-3 drop-shadow-lg"
                  />
                )}

                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {story.shortDescription}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3 py-20 text-lg">
            No articles found.
          </p>
        )}
      </div>
    </section>
  );
}
