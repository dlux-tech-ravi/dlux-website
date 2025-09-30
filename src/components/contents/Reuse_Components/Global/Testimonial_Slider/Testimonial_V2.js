import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import "./Testimonial_V2.css";

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
        client
        industry
        location
        summary
        shortDescription
        challengesBottlenecks
        turningPoint
        conclusion
        banner { url title description }
      }
    }
  }
`;

const Testimonial_V2 = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.request(GET_CASE_STUDIES);
        const items = data.caseStudyCollection.items || [];
        setCaseStudies(items);

        // unique industries for filter dropdown
        const uniqueCategories = ["All", ...new Set(items.map(i => i.industry).filter(Boolean))];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching case studies:", err);
      }
    };
    fetchData();
  }, []);

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter(cs => cs.industry === selectedCategory);

  return (
    <div className="case-study">
      <div className="cs-header">
        <h2 className="cs-title">Case Study Spotlights with Proven Stats</h2>
        <p className="cs-description">
          A global brand partnered with DLUX to launch Adobe Commerce across
          multiple regions, reducing bounce rate by 40% and boosting mobile
          conversions by 60% — all powered by Adobe Sensei and DLUX Fusion
          connectors.
        </p>
      </div>

      {/* Category Filter */}
      {/* <div className="cs-filter">
        <label>Filter by Industry: </label>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
        </select>
      </div> */}

      <div className="cs-top">
        <h3 className="cs-subheading">
          Smart Commerce at Scale <span className="cs-right">→</span>
        </h3>
      </div>

      <div className="cs-cards">
        {filteredCaseStudies.map((item, idx) => (
          <Link to={`/case-study/${item.slug}`} key={idx} className="cs-card-link">
            <div className="cs-card">
              <div
                className="cs-img"
                style={{
                  backgroundImage: `url(${item.banner?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px",
                }}
              />
              <div className="cs-body">
                <p className="cs-tag">{item.client}</p>
                <p className="cs-text">{item.shortDescription}</p>
                <span className="cs-arrow">↗</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Testimonial_V2;
