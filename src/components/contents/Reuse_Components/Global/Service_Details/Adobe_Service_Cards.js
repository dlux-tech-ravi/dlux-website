import React, { useEffect, useState } from "react";
import "./Adobe_Service_Cards.css";

const Adobe_Service_Cards = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAdobeServices = async () => {
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
                    adobeServiceCollection {
                      items {
                        title
                        description
                        url
                      }
                    }
                  }
                }
              `,
            }),
          }
        );

        const data = await response.json();
        setServices(
          data?.data?.platformAdobeCommerces?.adobeServiceCollection?.items || []
        );
      } catch (error) {
        console.error("Error fetching Adobe services:", error);
      }
    };

    fetchAdobeServices();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".adobe-service-card_ay");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (y / rect.height) * -10; // Tilt up/down
        const rotateY = (x / rect.width) * 10; // Tilt left/right

        card.style.setProperty("--rotateX", `${rotateX}deg`);
        card.style.setProperty("--rotateY", `${rotateY}deg`);

        const face = card.querySelector(".adobe-card-face_ay");
        const glowX = e.clientX - rect.left;
        const glowY = e.clientY - rect.top;
        face.style.setProperty("--x", `${glowX}px`);
        face.style.setProperty("--y", `${glowY}px`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rotateX", `0deg`);
        card.style.setProperty("--rotateY", `0deg`);
      });
    });
  }, [services]);

  return (
    <section className="adobe-services-section_ay">
      <h2 className="adobe-services-heading_ay">Our Adobe Commerce Services
      </h2>
      <div className="adobe-services-grid_ay">
        {services.map((service, index) => (
          <div
            key={index}
            className={`adobe-service-card_ay card-${(index % 3) + 1}`}
          >
            <div className="adobe-card-face_ay">
              <div className="adobe-card-icon_ay">
                <img src={service.url} alt={service.title} />
                <h3>{service.title}</h3>
              </div>
              <div className="adobe-card-content_ay">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Adobe_Service_Cards;
