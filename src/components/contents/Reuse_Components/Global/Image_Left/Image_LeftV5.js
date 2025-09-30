import React, { useEffect, useState } from "react";
import "./Image_LeftV5.css";

const Image_LeftV5 = () => {
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU",
            },
            body: JSON.stringify({
              query: `
                {
                  platformAdobeCommerces(id: "231JBLMJLXr5L3FUHFNGEI") {
                    imageLeftContent {
                      title
                      description
                      url
                    }
                  }
                }
              `,
            }),
          }
        );

        const { data } = await response.json();
        setContentData(data?.platformAdobeCommerces?.imageLeftContent);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchContent();
  }, []);

  const renderWithLineBreaks = (text) => {
    if (!text) return null;

    // Split by "-" and add <br/><br/> in between
    return text.split("_").map((segment, segIndex, arr) => {
      const parts = [];
      const regex = /"([^"]+)"/g;
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(segment)) !== null) {
        if (match.index > lastIndex) {
          parts.push(segment.slice(lastIndex, match.index));
        }

        parts.push(
          <span
            key={`bold-${segIndex}-${match.index}`}
            className="image-left_ay__bold-text"
          >
            {match[1]}
          </span>
        );

        lastIndex = regex.lastIndex;
      }

      parts.push(segment.slice(lastIndex));

      return (
        <React.Fragment key={segIndex}>
          {parts}
          {segIndex < arr.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <section className="image-left_ay">
      <div className="image-left_ay__container">
        <div className="image-left_ay__content">
          <img
            src={contentData?.url || "https://via.placeholder.com/320x400"}
            alt="Adobe Commerce Banner"
            className="image-left_ay__img"
          />
          <div className="image-left_ay__text-box">
            <h2>{renderWithLineBreaks(contentData?.title)}</h2>
            <p>{renderWithLineBreaks(contentData?.description)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Image_LeftV5;
