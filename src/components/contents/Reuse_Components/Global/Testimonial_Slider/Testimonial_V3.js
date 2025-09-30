import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial_V3.css";

const endpoint =
  "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production";
const accessToken = "6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU";

const query = `
  {
    platformAdobeCommerces(id: "231JBLMJLXr5L3FUHFNGEI") {
      dluxClientsSayCollection {
        items {
          title
          description
          url
        }
      }
    }
  }
`;

const Testimonial_V3 = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await request(
          endpoint,
          query,
          {},
          { Authorization: `Bearer ${accessToken}` }
        );
        const items =
          data.platformAdobeCommerces.dluxClientsSayCollection.items;
        setTestimonials(items);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className="testimonials-v3">
      <h2 className="testimonials-v3__title">What Our Clients Say</h2>

      {/* Desktop & Tablet Grid */}
      <div className="testimonials-v3__list">
        {testimonials.map((item, index) => (
          <div
            className="testimonial-v3"
            key={index}
            onMouseMove={handleMouseMove}
          >
            <div className="testimonial-v3__avatar">
              {item.url && <img src={item.url} alt="Client" />}
            </div>
            <div className="testimonial-v3__content">
              <p className="testimonial-v3__name">{item.title}</p>
              <p className="testimonial-v3__quote">{item.description}</p>
              <div className="testimonial-v3__stars">
                {[...Array(5)].map((_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swiper Slider */}
      <div className="testimonials-v3__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="testimonial-v3"
                onMouseMove={handleMouseMove}
              >
                <div className="testimonial-v3__avatar">
                  {item.url && <img src={item.url} alt="Client" />}
                </div>
                <div className="testimonial-v3__content">
                  <p className="testimonial-v3__name">{item.title}</p>
                  <p className="testimonial-v3__quote">{item.description}</p>
                  <div className="testimonial-v3__stars">
                    {[...Array(5)].map((_, i) => (
                      <i className="fa-solid fa-star" key={i}></i>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial_V3;
