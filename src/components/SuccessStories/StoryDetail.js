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
// - Added caseStudyPdf asset field
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
        caseStudyPdf {
          url
          fileName
        }
      }
    }
  }
`;

const GET_RELATED_CASE_STUDIES = gql`
  query GetRelatedCaseStudies {
    caseStudyCollection(limit: 6) {
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

// ======================
// 🔹 Helper: basic client-side email & phone checks
// ======================
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const isValidPhone = (phone) =>
  /^[0-9+\-\s()]{6,20}$/.test(phone.trim());

// ======================
// 🔹 Main Component
// ======================
export default function StoryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState(null);
  const [relatedStories, setRelatedStories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // UX / submit state
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ======================
  // 🔹 Fetch Data
  // ======================
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const storyData = await client.request(GET_CASE_STUDY_BY_SLUG, {
          slug,
        });
        const storyItem = storyData.caseStudyCollection.items[0];
        if (mounted) setStory(storyItem);

        const relatedData = await client.request(GET_RELATED_CASE_STUDIES);
        const relatedItems = relatedData.caseStudyCollection.items.filter(
          (item) => item.slug !== slug
        );
        if (mounted) setRelatedStories(relatedItems.slice(0, 3));
      } catch (err) {
        console.error("Error fetching story details:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, [slug]);

  // ======================
  // 🔹 Handle Download flow
  // - open popup
  // - on submit: validate -> optionally send lead -> open PDF in new tab
  // ======================
  const handleDownloadClick = () => {
    setErrorMsg("");
    setFormData({ name: "", email: "", phone: "" });
    setShowPopup(true);
  };
  const handleZohoSubmit = (e) => {
  // Allow Zoho form to submit normally
  setTimeout(() => {
    const pdfUrl = story?.caseStudyPdf?.url;
    if (pdfUrl) {
      // Open PDF in new tab
      const newTab = window.open(pdfUrl, "_blank");

      // Auto-download trigger
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = story?.caseStudyPdf?.fileName || "case-study.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, 500); 
};


  const handleFormChange = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      setErrorMsg("Please enter a valid email.");
      return;
    }
    if (!formData.phone.trim() || !isValidPhone(formData.phone)) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    setSubmitting(true);

    try {
      // OPTIONAL: send lead to your backend (uncomment and set endpoint)
      // await fetch("/api/leads", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone,
      //     slug: story?.slug,
      //     source: "case-study-download",
      //   }),
      // });

      // You can also store locally if you want
      // localStorage.setItem("lastLead", JSON.stringify({...formData, slug: story?.slug}));

      // Open PDF in new tab if available
      const pdfUrl = story?.caseStudyPdf?.url;
      if (pdfUrl) {
        // Close popup first for better UX
        setShowPopup(false);
        // open new tab
        window.open(pdfUrl, "_blank", "noopener,noreferrer");
      } else {
        setErrorMsg("PDF not available for this case study.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg("Something went wrong. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

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
        <div className="px-6 md:px-10 pb-10 max-w-full mx-auto md:mx-[90px]">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-opensans">
            {story.banner.description}
          </h1>
        </div>
      </div>

      {/* ======================== */}
      {/* 🔥 WHITE CONTENT CARD    */}
      {/* ======================== */}
      <div className="bg-white text-black max-w-full md:mx-[90px] mt-10 m-3 rounded-2xl shadow-lg p-6 md:p-10 relative z-20">
        <div className="md:grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mr-0 flex flex-col items-center">
          {/* LEFT CONTENT */}
          <div>
            {story.summary && (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-7 rounded-sm bg-gradient-to-b from-orange-500 to-red-600"></div>

                  <h2 className="text-[28px] font-bold text-black font-opensans">
                    Executive Summary
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.summary}
                </p>
              </>
            )}

            {story.challengesBottlenecks && (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-7 rounded-sm bg-gradient-to-b from-orange-500 to-red-600"></div>

                  <h2 className="text-[28px] font-bold text-black font-opensans">
                    Challenges & Bottlenecks
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.challengesBottlenecks}
                </p>
              </>
            )}

            {story.turningPoint && (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-7 rounded-sm bg-gradient-to-b from-orange-500 to-red-600"></div>

                  <h2 className="text-[28px] font-bold text-black font-opensans">
                    Turning Point
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.turningPoint}
                </p>
              </>
            )}

            {story.conclusion && (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-7 rounded-sm bg-gradient-to-b from-orange-500 to-red-600"></div>

                  <h2 className="text-[28px] font-bold text-black font-opensans">
                    Conclusion
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.conclusion}
                </p>
              </>
            )}
          </div>

          {/* RIGHT COMPANY CARD */}
          <div className="bg-[#D9D9D9] rounded-xl overflow-hidden w-[346px] md:relative md:top-[-60px]">
            {/* TOP DETAILS SECTION */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-7 rounded-sm bg-gradient-to-b from-orange-500 to-red-600"></div>

                <h2 className="text-[18px] font-bold text-black font-opensans">
                  Company
                </h2>
              </div>

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
        <div className="bg-[linear-gradient(90deg,#FF3901_0%,#F07800_100%)] h-[268px] flex flex-col items-center justify-center text-white p-8 md:mx-20 rounded-xl text-center md:my-10 mt-3" >
          <p className="mb-4 text-lg font-bold w-full md:w-[50%]">
            {story.banner?.description ||
              "Explore how innovation transformed this client’s success story."}
          </p>
          <button
            onClick={handleDownloadClick}
            className="bg-black text-white px-6 py-2 rounded-[60px] h-[59px] w-[241px] font-semibold hover:bg-gray-800 transition"
          >
            Download
          </button>
        </div>

        {/* RELATED STORIES */}
        <div className="mt-16">
          <h2 className="text-[40px] font-bold mb-16">Featured Case Studies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mr-0">
            {relatedStories.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(`/success-stories/${item.slug}`)}
                className="cursor-pointer rounded-xl overflow-hidden bg-gray-50 hover:shadow-lg transition
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
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                </div>

                {/* CONTENT ALWAYS STRETCHES EVENLY */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm flex-grow line-clamp-3">
                    {item.shortDescription ||
                      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* 🔥 POPUP: premium glass blur form */}
      {/* ====================== */}
     {showPopup && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center">

    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={() => !submitting && setShowPopup(false)}
    ></div>

    {/* Premium Glass Card */}
    <div className="relative z-50 w-[92%] max-w-md p-7 rounded-3xl 
      bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45)] text-white">

      {/* Close Button */}
      <button
        onClick={() => !submitting && setShowPopup(false)}
        className="absolute right-4 top-4 text-white/90 text-xl hover:text-white"
      >
        ✕
      </button>

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold tracking-wide">
          Access the Case Study
        </h3>
        <p className="text-sm text-gray-200 mt-2">
          Fill this quick form to get the PDF.
        </p>
      </div>

      {/* Zoho Form */}
     <form
  action="https://forms.zohopublic.in/dluxtech/form/CaseStudy/formperma/0LVpLbO3hslRPlQhT44Z9tQvahSsqj3xJwwmeLn_4Sg/htmlRecords/submit"
  name="form"
  id="form"
  method="POST"
  acceptCharset="UTF-8"
  encType="multipart/form-data"
  className="space-y-5"
  onSubmit={(e) => handleZohoSubmit(e)}
>

        {/* Hidden Zoho Fields */}
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        {/* First Name */}
        <div>
          <label className="text-xs text-gray-200">First Name</label>
          <input
            type="text"
            name="Name_First"
            maxLength="255"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/15 
              focus:bg-white/20 placeholder-gray-300 backdrop-blur-sm 
              focus:outline-none"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-xs text-gray-200">Last Name</label>
          <input
            type="text"
            name="Name_Last"
            maxLength="255"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/15 
              focus:bg-white/20 placeholder-gray-300 backdrop-blur-sm 
              focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-xs text-gray-200">Email</label>
          <input
            type="email"
            name="Email"
            maxLength="255"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/15 
              focus:bg-white/20 placeholder-gray-300 backdrop-blur-sm 
              focus:outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs text-gray-200">Phone</label>
          <input
            type="text"
            name="PhoneNumber_countrycode"
            maxLength="20"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/15 
              focus:bg-white/20 placeholder-gray-300 backdrop-blur-sm 
              focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-3 py-3 rounded-xl bg-gradient-to-br 
            from-orange-500 via-red-500 to-red-700 
            font-semibold tracking-wide shadow-md shadow-black/30"
        >
          Submit & Download
        </button>

        <p className="text-xs text-gray-300 mt-2 text-center">
          By submitting, you agree to be contacted regarding this case study.
        </p>
      </form>
    </div>
  </div>
)}
    </section>
  );
}
