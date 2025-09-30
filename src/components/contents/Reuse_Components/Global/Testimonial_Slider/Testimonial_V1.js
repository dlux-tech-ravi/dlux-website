import React, { useState, useEffect, useRef } from "react";
import "./Testimonial_V1.css";

const Testimonial_V1 = ({ onOpenModal }) => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [playKey, setPlayKey] = useState(Date.now());
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  // Fetch from Contentful
  useEffect(() => {
    const fetchSlides = async () => {
      const query = `
        query {
          commerceVideosCollection {
            items {
              sys { id }
              title
              description
              video
              image {
                url
              }
            }
          }
        }
      `;

      try {
        const res = await fetch(
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

        const { data } = await res.json();
        // inside fetchSlides
        if (data?.commerceVideosCollection?.items) {
          // get last 3 data instead of first 3
          const items = data.commerceVideosCollection.items;
          const mappedSlides = items
            .slice(-3) // ✅ last 3
            .map((item) => ({
              id: item.sys.id,
              title: item.title,
              description: item.description,
              video: item.video,
              image: item.image?.url,
            }));
          setSlides(mappedSlides);
        }

      } catch (err) {
        console.error("Error fetching slides:", err);
      }
    };

    fetchSlides();
  }, []);

  // Auto slider logic
  const startSlider = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (slides.length > 0) startSlider();
    return () => stopSlider();
  }, [slides]);

  useEffect(() => {
    if (isHovering || playingIndex !== null) stopSlider();
    else startSlider();
  }, [isHovering, playingIndex]);

  const handlePlay = (index) => {
    setCurrent(index);
    setPlayingIndex(index);
    setPlayKey(Date.now());
  };

  const handleClose = () => setPlayingIndex(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) {
    return <p>Loading videos...</p>;
  }

  return (
    <section className="testimonial_ay">
      {/* Left Section */}
      <div className="testimonial_ay__left">
        <h1 className="testimonial_ay__heading">
          Turn Browsers into Buyers <br /> — Intelligently
        </h1>
        <p className="testimonial_ay__text">
          DLUX turns Adobe Commerce into your personalization and performance
          engine. We combine strategy, implementation, and AI-driven insights to
          create data-powered shopping journeys that connect with customers at
          every touchpoint.
        </p>
        <div className="testimonial_ay__button-group">
          <button
            className="testimonial_ay__btn testimonial_ay__btn--primary"
            onClick={onOpenModal}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Middle Slider */}
      <div className="testimonial_ay__slider">
        {slides.map((slide, index) => {
          let position =
            index === current
              ? "testimonial_ay__slide--active"
              : index === (current - 1 + slides.length) % slides.length
                ? "testimonial_ay__slide--prev"
                : index === (current + 1) % slides.length
                  ? "testimonial_ay__slide--next"
                  : "testimonial_ay__slide--next";

          return (
            <div
              key={slide.id}
              className={`testimonial_ay__slide ${position} ${index === current ? "is-current" : ""
                }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="testimonial_ay__card">
                <div className="testimonial_ay__thumbnail-wrapper">
                  {playingIndex === index ? (
                    <iframe
                      key={`${slide.video}-${playKey}`}
                      className="testimonial_ay__video"
                      src={`${slide.video}${slide.video.includes("?") ? "&" : "?"
                        }autoplay=1`}
                      title={slide.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="testimonial_ay__thumbnail"
                      />
                      <button
                        className="testimonial_ay__play-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlay(index);
                        }}
                      >
                        ▶
                      </button>
                    </>
                  )}
                </div>

                {playingIndex === index && (
                  <button
                    className="testimonial_ay__video-close"
                    onClick={handleClose}
                  >
                    ✖
                  </button>
                )}

                <p className="testimonial_ay__title">{slide.title}</p>
                <p className="testimonial_ay__category">{slide.description}</p>
              </div>
            </div>
          );
        })}

        {/* Mobile Arrows */}
        <button className="testimonial_ay__arrow left" onClick={prevSlide}>
          ◀
        </button>
        <button className="testimonial_ay__arrow right" onClick={nextSlide}>
          ▶
        </button>
      </div>

      {/* Right Section (Pager) */}
      <div className="testimonial_ay__pager">
        <span className="testimonial_ay__pager-number">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="testimonial_ay__pager-total">
          /{String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default Testimonial_V1;
