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
        const storyData = await client.request(GET_CASE_STUDY_BY_SLUG, {
          slug,
        });
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

  return (
    <section className="bg-black text-white min-h-screen">
      {/* ======================== */}
      {/* 🔥 HERO SECTION: text inside image (no absolute) */}
      {/* ======================== */}
      <div
        className="w-full h-[320px] md:h-[460px] bg-cover bg-center flex items-end border-b border-gray-800"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85)), url('${story.banner?.url || "/images/default-placeholder.jpg"
            }')`,
        }}
      >
        <div className="px-6 md:px-10 pb-10 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-opensans">
            {story.banner?.title || story.title}
          </h1>

          {story.banner?.description && (
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl font">
              {story.banner.description}
            </p>
          )}

          {story.industry && (
            <p className="text-gray-300 mt-4 text-base">{story.industry}</p>
          )}
        </div>
      </div>

      {/* ======================== */}
      {/* 🔥 WHITE CONTENT CARD    */}
      {/* ======================== */}
      <div className="bg-white text-black max-w-full  mx-[90px] mt-10 rounded-2xl shadow-lg p-6 md:p-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mr-0">
          {/* LEFT CONTENT */}
          <div>
            {story.summary && (
              <>
                <h2 className="text-[28px] font-bold text-black mb-3 font-opensans">
                  Executive Summary
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.summary}
                </p>
              </>
            )}

            {story.challengesBottlenecks && (
              <>
                <h2 className="text-[28px] font-bold text-black mb-3 font-opensans">
                  Challenges & Bottlenecks
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.challengesBottlenecks}
                </p>
              </>
            )}

            {story.turningPoint && (
              <>
                <h2 className="text-[28px] font-bold text-black mb-3 font-opensans">
                  Turning Point
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.turningPoint}
                </p>
              </>
            )}

            {story.conclusion && (
              <>
                <h2 className="text-[28px] font-bold text-black mb-3 font-opensans">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.conclusion}
                </p>
              </>
            )}
          </div>

          {/* RIGHT COMPANY CARD */}
          <div className="bg-[#D9D9D9] rounded-xl overflow-hidden">
            {/* TOP DETAILS SECTION */}
            <div className="p-5">
              <h3 className="text-black font-semibold text-lg mb-4">Company</h3>

              <div className="space-y-4">
                {/* CLIENT */}
                <div>
                  <p className="text-gray-600 font-medium">Client</p>
                  <p className="text-black font-semibold">
                    {story.client || "Unknown Client"}
                  </p>
                </div>

                {/* INDUSTRY */}
                <div>
                  <p className="text-gray-600 font-medium">Industry</p>
                  <p className="text-black font-semibold">
                    {story.industry || "Not Available"}
                  </p>
                </div>

                {/* LOCATION */}
                <div>
                  <p className="text-gray-600 font-medium">Location</p>
                  <p className="text-black font-semibold">
                    {story.location || "Not Available"}
                  </p>
                </div>
              </div>
            </div>
            {/* IMAGE + CTA OVERLAY SECTION */}
            <div className="relative w-full h-60 rounded-b-xl overflow-hidden">
              {/* Background Image */}
              <img
                src="https://images.ctfassets.net/pj0maraabon4/6y8wFX0wjfCjpDEnYeVKxF/97fb5d243fdff20a639e6518e19c7035/6a0a6f6f0a80f5c092694b6b99d1d1c7c170574d.jpg"
                alt={story.title}
                className="w-full h-full object-cover"
              />

              {/* Dark overlay (optional for readability) */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* CTA Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                <p className="text-lg font-semibold leading-tight">
                  Watched Our Videos ? <br /> Talk to Our Experts
                </p>

                <button
                  onClick={() => alert("Get Started")}
                  className="mt-4 border border-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Highlight Box */}
        <div className="bg-[linear-gradient(90deg,#FF3901_0%,#F07800_100%)] h-[268px] flex flex-col items-center justify-center text-white p-8 mx-20 rounded-xl text-center my-10">
          <p className="mb-4 text-lg font-bold w-[50%]">
            {story.banner?.description ||
              "Explore how innovation transformed this client’s success story."}
          </p>
          <button
            onClick={() => alert("Downloading...")}
            className="bg-black text-white px-6 py-2 rounded-[60px] h-[59px] w-[241px] font-semibold hover:bg-gray-800 transition"
          >
            Download
          </button>
        </div>
        {/* RELATED STORIES */}
        <div className="mt-16">
          <h2 className="text-[40px] font-bold mb-16">Featured Case Studies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedStories.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(`/success-stories/${item.slug}`)}
                className="cursor-pointer rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition
                 flex flex-col h-full"
              >
                {/* FIXED IMAGE HEIGHT */}
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={
                      item.banner?.url ||
                      "https://images.ctfassets.net/pj0maraabon4/6y8wFX0wjfCjpDEnYeVKxF/97fb5d243fdff20a639e6518e19c7035/6a0a6f6f0a80f5c092694b6b99d1d1c7c170574d.jpg"
                    }
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT ALWAYS STRETCHES EVENLY */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm flex-grow line-clamp-3">
                    {item.shortDescription || "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}
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
