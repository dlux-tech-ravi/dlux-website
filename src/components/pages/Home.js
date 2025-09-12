import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import HomePage from "../contents/HomePage";
import { Helmet } from "react-helmet";
import Modal from "../WebinarModal/Modal";

export default function Home() {
  const query = `
  {
    dluxHomePage(id:"17NjhWmez306JClqbA67VG"){
      dluxHomeVideo{
        url
      }
      dluxHeading
      dluxPara
    }
  }
  `;

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query }),
          }
        );
        const { data, errors } = await response.json();
        if (errors) console.error(errors);
        setPage({ dluxHomePage: [data.dluxHomePage] });
        setLoading(false);

        // Auto open modal after content loads
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPageData();
  }, []);

  if (loading) return <div className="blog-loading-spinner"></div>;
  if (!page) return <div>No content available.</div>;

  return (
    <>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

      <div className="home-wrapper">
        <Helmet>
          <title>
            Digital Advisory Services | Adobe Consulting Services | DLUX
          </title>
          <meta
            name="description"
            content="Experience the future of marketing with DLUX - your bridge to innovation and personalized Martech solutions."
          />
        </Helmet>

        <Navbar />

        <div className="main-content-home">
          <div className="home-img-section">
            <video className="home-background" autoPlay loop muted>
              <source
                src={page.dluxHomePage[0].dluxHomeVideo.url}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="home">
              <h1 className="home-h1">{page.dluxHomePage[0].dluxHeading}</h1>
              <p>{page.dluxHomePage[0].dluxPara}</p>
              <br />
              <Link to="/contact-us">
                <button className="home-btn">Contact Us</button>
              </Link>
            </div>
          </div>

          <div className="Home-homepage">
            <HomePage />
          </div>
        </div>
      </div>
    </>
  );
}
