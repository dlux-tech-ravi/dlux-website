import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HomeFooter from "../HomeFooter/HomeFooter";
import Testimonial_V1 from "../contents/Reuse_Components/Global/Testimonial_Slider/Testimonial_V1";
import Image_LeftV5 from "../contents/Reuse_Components/Global/Image_Left/Image_LeftV5";
import Adobe_Service_Cards from "../contents/Reuse_Components/Global/Service_Details/Adobe_Service_Cards";
import Testimonial_V3 from "../contents/Reuse_Components/Global/Testimonial_Slider/Testimonial_V3";
import CoeVideos from "../contents/Reuse_Components/Global/CoE_Videos/CoeVideos";
import Testimonial_V2 from "../contents/Reuse_Components/Global/Testimonial_Slider/Testimonial_V2";
import Feature from "../contents/Reuse_Components/Global/Adobe_Feature/feature";

import "./Adobecommerces.css";
import GetInTouch from "../contents/Reuse_Components/Global/Testimonial_Slider/GetInTouch";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adobecommerces = () => {
  const [banner, setBanner] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Set fixed gradient background
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (!mainContent) return;

    mainContent.style.backgroundImage = `
      linear-gradient(
        271deg,
        rgb(106, 0, 255) 0%,
        rgb(44, 0, 62) 75%,
        rgb(0, 0, 0) 100%
      )
    `;
  }, []);

  // Fetch Contentful data
  useEffect(() => {
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
    const query = `
      {
        fusionData1: platformWorkfrontFusion(id: "7jHaQI4LMrYzWiGfgMpGz3") {
          bannersection { title description url }
        }
      }`;

    const fetchData = async () => {
      const r = await fetch(
        "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query }),
        }
      );

      if (!r.ok) {
        const body = await r.text();
        console.error("Fetch error:", r.status, body);
        throw new Error(`Failed to fetch data: ${r.status}`);
      }

      const res = await r.json();
      setBanner(res.data?.fusionData1?.bannersection || null);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Testimonial_V1 onOpenModal={() => setOpenModal(true)} />

        <CoeVideos />
        <Image_LeftV5 />
        <Feature />
        <Adobe_Service_Cards />
        <Testimonial_V2 />
        <Testimonial_V3 />
      </div>

      <GetInTouch open={openModal} onClose={() => setOpenModal(false)} />

      <HomeFooter />

      {/* ✅ Toast container app-level */}
      <ToastContainer toastClassName={() =>
        "custom-toast"
      } position="top-right" autoClose={3000} />
    </div>
  );
};

export default Adobecommerces;
