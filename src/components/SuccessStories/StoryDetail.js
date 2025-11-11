"use client";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";

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
// 🔹 GraphQL Queries
// ======================
const GET_CASE_STUDY_BY_SLUG = gql`
  query GetCaseStudyBySlug($slug: String!) {
    caseStudyCollection(where: { slug: $slug }, limit: 1) {
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
        banner {
          url
          title
          description
        }
      }
    }
  }
`;

const GET_RELATED_CASE_STUDIES = gql`
  query GetRelatedCaseStudies {
    caseStudyCollection(limit: 3) {
      items {
        title
        slug
        shortDescription
        banner {
          url
          title
        }
      }
    }
  }
`;

export default function StoryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState(null);
  const [relatedStories, setRelatedStories] = useState([]);
  const [loading, setLoading] = useState(true);

  // ======================
  // 🔹 Fetch Data
  // ======================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyData = await client.request(GET_CASE_STUDY_BY_SLUG, { slug });
        const storyItem = storyData.caseStudyCollection.items[0];
        setStory(storyItem);

        const relatedData = await client.request(GET_RELATED_CASE_STUDIES);
        const relatedItems = relatedData.caseStudyCollection.items.filter(
          (item) => item.slug !== slug
        );
        setRelatedStories(relatedItems.slice(0, 3));
      } catch (err) {
        console.error("Error fetching story details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        <p>Loading...</p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        <p>Story not found.</p>
      </div>
    );
  }

  // ======================
  // 🔹 Render
  // ======================
  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <img
          src={story.banner?.url || "/images/default-placeholder.jpg"}
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {story.title}
          </h1>
          <p className="text-gray-300">{story.industry}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white text-black max-w-6xl mx-auto -mt-20 rounded-2xl shadow-lg p-6 md:p-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          {/* Left Column */}
          <div>
            {story.summary && (
              <>
                <h2 className="text-xl font-bold text-orange-600 mb-3">
                  Executive Summary
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.summary}
                </p>
              </>
            )}

            {story.challengesBottlenecks && (
              <>
                <h2 className="text-xl font-bold text-orange-600 mb-3">
                  Challenges & Bottlenecks
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.challengesBottlenecks}
                </p>
              </>
            )}

            {story.turningPoint && (
              <>
                <h2 className="text-xl font-bold text-orange-600 mb-3">
                  Turning Point
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.turningPoint}
                </p>
              </>
            )}

            {story.conclusion && (
              <>
                <h2 className="text-xl font-bold text-orange-600 mb-3">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.conclusion}
                </p>
              </>
            )}

            {/* Highlight Box */}
            <div className="bg-orange-500 text-white p-8 rounded-xl text-center my-10">
              <p className="mb-4 text-lg font-medium">
                {story.banner?.description ||
                  "Explore how innovation transformed this client’s success story."}
              </p>
              <button
                onClick={() => alert("Downloading...")}
                className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Download
              </button>
            </div>
          </div>

          {/* Right Column - Company Info */}
          <div className="bg-gray-100 rounded-xl p-5 h-fit">
            <h3 className="text-gray-700 font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <div>
                <p className="text-lg font-bold">
                  {story.client || "Unknown Client"}
                </p>
                <p className="text-sm text-gray-500">
                  {story.industry || "Industry Info Unavailable"}
                </p>
                <p className="text-sm text-gray-500">
                  {story.location || ""}
                </p>
              </div>
              {story.banner?.url && (
                <img
                  src={story.banner.url}
                  alt={story.title}
                  className="rounded-lg mt-3 w-full object-cover"
                />
              )}
              <div className="bg-black text-white rounded-lg text-center p-4 mt-5">
                <p className="text-sm mb-2">
                  Empowering innovation with Dlux.
                </p>
                <button
                  onClick={() => alert("Opening video...")}
                  className="text-orange-400 font-medium hover:underline"
                >
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Stories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Featured Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedStories.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(`/success-stories/${item.slug}`)}
                className="cursor-pointer rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition"
              >
                <img
                  src={item.banner?.url || "/images/default-placeholder.jpg"}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.shortDescription || "Read more..."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
