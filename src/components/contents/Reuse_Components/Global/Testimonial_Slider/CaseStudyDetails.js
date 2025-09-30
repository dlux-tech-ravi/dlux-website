import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import HomeFooter from "../../../../HomeFooter/HomeFooter";
import SocialBar from "./SocialBar";
import { request, gql } from "graphql-request";
import "./CaseStudyDetails.css";

const CONTENTFUL_ENDPOINT =
  "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production";
const CONTENTFUL_TOKEN = "6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU";

const GET_CASE_STUDY_BY_SLUG = gql`
  query GetCaseStudy($slug: String!) {
    caseStudyCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        client
        industry
        location
        stakes
        summary
        challengesBottlenecks
        turningPoint
        conclusion
        banner {
          url
          description
        }
        caseStudyPdf {
          url
        }
      }
    }
  }
`;

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      try {
        const headers = { Authorization: `Bearer ${CONTENTFUL_TOKEN}` };
        const data = await request(
          CONTENTFUL_ENDPOINT,
          GET_CASE_STUDY_BY_SLUG,
          { slug },
          headers
        );

        if (data?.caseStudyCollection?.items?.length > 0) {
          let item = data.caseStudyCollection.items[0];
          if (item.industry && !Array.isArray(item.industry)) {
            item.industry = [item.industry];
          }
          setCaseStudy(item);
        } else {
          setCaseStudy(null);
        }
      } catch (err) {
        console.error("Error fetching case study:", err);
        setCaseStudy(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  // ✅ Handle Zoho form success via iframe
  const handleIframeLoad = () => {
    if (caseStudy?.caseStudyPdf?.url) {
      setModalOpen(false); // close modal
      window.open(caseStudy.caseStudyPdf.url, "_blank"); // open in new tab
    }
  };

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>
    );

  if (!caseStudy)
    return (
      <>
        <Navbar />
        <div className="case_bbc container notfound">
          <h2>Case study not found</h2>
          <p>
            Try going back to{" "}
            <Link to="/case-studies" className="bbc-link">
              Case Studies
            </Link>
            .
          </p>
        </div>
        <HomeFooter />
      </>
    );

  const heroImage = caseStudy.banner?.url;

  return (
    <>
      <Navbar />
      <SocialBar />
      <div className="case_bbc">
        {/* Banner */}
        <header className="bbc-hero">
          <div className="bbc-hero__overlay" />
          <img className="bbc-hero__img" src={heroImage} alt={caseStudy.title} />
          <div className="bbc-hero__content">
            <nav className="bbc-breadcrumb">
              <Link to="/" className="bbc-link">
                Home
              </Link>
              <span>›</span>
              <Link to="/case-studies" className="bbc-link">
                Case Studies
              </Link>
              <span>›</span>
              <span className="bbc-crumb-current">{caseStudy.client}</span>
            </nav>
            <h1 className="bbc-title">{caseStudy.banner.description}</h1>
            <p className="bbc-standfirst">
              {caseStudy.client}
              {caseStudy.location ? ` · ${caseStudy.location}` : ""}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="bbc-grid bbc-container">
          <article className="bbc-article">
            {caseStudy.summary && (
              <section className="bbc-section">
                <h2 className="bbc-h2">Executive Summary</h2>
                <p className="bbc-body">{caseStudy.summary}</p>
              </section>
            )}

            {caseStudy.challengesBottlenecks && (
              <section className="bbc-section">
                <h2 className="bbc-h2">Challenges & Bottlenecks</h2>
                <ol className="bbc-checklist">
                  {caseStudy.challengesBottlenecks
                    .split("\n")
                    .filter((point) => point.trim() !== "")
                    .map((point, index) => (
                      <li key={index} className="bbc-point">
                        {point}
                      </li>
                    ))}
                </ol>
              </section>
            )}

            {caseStudy.stakes && (
              <section className="bbc-section bbc-stakes">
                <h3 className="bbc-h3">The Stakes</h3>
                <p className="bbc-body">{caseStudy.stakes}</p>
              </section>
            )}

            {caseStudy.turningPoint && (
              <section className="bbc-section bbc-highlight">
                <h3 className="bbc-h3">Turning Point</h3>
                <p className="bbc-body">{caseStudy.turningPoint}</p>
              </section>
            )}

            {caseStudy.conclusion && (
              <section className="bbc-quote">
                <blockquote>“{caseStudy.conclusion}”</blockquote>
              </section>
            )}

            {caseStudy.caseStudyPdf?.url && (
              <section className="bbc-cta">
                <p
                  style={{
                    marginBottom: "12px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#444",
                  }}
                >
                  Click below to download the full case study and discover the
                  complete story.
                </p>
                <button onClick={() => setModalOpen(true)} className="bbc-btn">
                  Download
                </button>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="bbc-aside">
            <div className="bbc-card">
              <h3 className="bbc-card-title">Company</h3>
              <div className="bbc-meta">
                <div>
                  <span className="bbc-meta-label">Client</span>
                  <span className="bbc-meta-value">{caseStudy.client}</span>
                </div>
                {caseStudy.industry?.length > 0 && (
                  <div>
                    <span className="bbc-meta-label">Industry</span>
                    <span className="bbc-meta-value">
                      {caseStudy.industry.join(", ")}
                    </span>
                  </div>
                )}
                {caseStudy.location && (
                  <div>
                    <span className="bbc-meta-label">Location</span>
                    <span className="bbc-meta-value">{caseStudy.location}</span>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </main>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="cs-modal-overlay">
          <div className="cs-modal-content">
            <button
              className="cs-modal-close"
              onClick={() => setModalOpen(false)}
            >
              ✖
            </button>
            <h2 className="cs-modal-title">Download Case Study</h2>

            <form
              ref={formRef}
              action="https://forms.zohopublic.in/dluxtech/form/CaseStudyForm/formperma/SaL2PqwK2QyFSj0kAdK9AvXF-rZXH8RkuxCMAq5rEys/htmlRecords/submit"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              className="cs-modal-form"
              target="hidden_iframe"
            >
              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
                onLoad={handleIframeLoad}
              ></iframe>

              {/* Hidden Zoho tracking fields */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              {/* ✅ Zoho field names must match */}
              <label className="cs-modal-label">
                First Name:
                <input
                  type="text"
                  name="Name_First"
                  maxLength="255"
                  placeholder="Enter first name"
                  className="cs-modal-input"
                  required
                />
              </label>

              <label className="cs-modal-label">
                Last Name:
                <input
                  type="text"
                  name="Name_Last"
                  maxLength="255"
                  placeholder="Enter last name"
                  className="cs-modal-input"
                  required
                />
              </label>

              <label className="cs-modal-label">
                Email:
                <input
                  type="email"
                  name="Email"
                  maxLength="255"
                  placeholder="Enter email"
                  className="cs-modal-input"
                  required
                />
              </label>

              <label className="cs-modal-label">
                Phone Number:
                <input
                  type="text"
                  name="PhoneNumber_countrycode"
                  maxLength="20"
                  placeholder="Enter phone number"
                  className="cs-modal-input"
                  required
                />
              </label>

              <div className="cs-modal-actions">
                <button type="submit" className="cs-modal-btn">
                  Submit & Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <HomeFooter />
    </>
  );
};

export default CaseStudyDetails;
