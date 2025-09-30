import React, { useEffect, useState } from "react";
import "./feature.css";

const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeatures = async () => {
    try {
      const query = `
        query {
          platformAdobeCommerces(id:"231JBLMJLXr5L3FUHFNGEI") {
            adobeCommerceFeatutreCollection {
              items {
                title
                description
                url
              }
            }
          }
        }
      `;

      const response = await fetch(
        "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU`,
          },
          body: JSON.stringify({ query }),
        }
      );

      const { data } = await response.json();
      const items =
        data?.platformAdobeCommerces?.adobeCommerceFeatutreCollection?.items ||
        [];
      setFeatures(items);
    } catch (error) {
      console.error("Error fetching features:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <section className="feature_ay">
        <div className="feature_ay__container">
          <h2 className="feature_ay__title">Adobe Commerce Features</h2>
          <p>Loading features...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="feature_ay">
      <div className="feature_ay__container">
        <h2 className="feature_ay__title">Adobe Commerce Features</h2>

        <div className="feature_ay__grid">
          {features.map((feature, index) => (
            <div className="feature_ay__col" key={index}>
              <div className="feature_ay__card">
                <div className="feature_ay__card-front">
                  <div className="feature_ay__icon">
                    {feature.url && (
                      <img src={feature.url} alt={feature.title} />
                    )}
                  </div>
                  <h3 className="feature_ay__col-title">{feature.title}</h3>
                </div>
                <div className="feature_ay__card-back">
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
