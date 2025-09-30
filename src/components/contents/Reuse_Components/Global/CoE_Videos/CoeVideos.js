import React, { useRef, useState, useEffect } from "react";
import "./CoeVideos.css";

const CoeVideos = () => {
  const rowRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  // Convert YouTube short/normal links to embed links
  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtube.com/watch")) {
      const params = new URL(url);
      const videoId = params.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // LinkedIn or already embed link
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Fetch from Contentful
  useEffect(() => {
    const fetchVideos = async () => {
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
        if (data?.commerceVideosCollection?.items) {
          const mappedVideos = data.commerceVideosCollection.items.map((item) => ({
            poster: item.image?.url,
            description: item.title, // using title as description
            url: item.video,
          }));
          setVideos(mappedVideos);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="coe-videos_ay">
      <h1 className="coe-videos_ay__title">CoE Videos</h1>

      <div className="coe-videos_ay__carousel">
        {videos.length > 5 && (
          <button
            className="coe-videos_ay__scroll-btn coe-videos_ay__scroll-btn--left"
            onClick={() => scroll("left")}
          >
            ❮
          </button>
        )}

        <div className="coe-videos_ay__row" ref={rowRef}>
          {videos.map((video, index) => (
            <div key={index} className="coe-videos_ay__card">
              <div className="coe-videos_ay__inner-card">
                <span className="coe-videos_ay__rank">{index + 1}</span>

                {playingVideo === index ? (
                  <div className="coe-videos_ay__iframe-wrapper">
                    <iframe
                      src={`${getEmbedUrl(video.url)}?autoplay=1`}
                      title={video.description}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="coe-videos_ay__iframe"
                    ></iframe>
                    <button
                      className="coe-videos_ay__close-btn"
                      onClick={() => setPlayingVideo(null)}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div
                    className="coe-videos_ay__thumb"
                    onClick={() => setPlayingVideo(index)}
                  >
                    <img
                      src={video.poster}
                      alt={video.description}
                      className="coe-videos_ay__img"
                    />
                    <div className="coe-videos_ay__play-btn">▶</div>
                  </div>
                )}

                <p className="coe-videos_ay__desc">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {videos.length > 5 && (
          <button
            className="coe-videos_ay__scroll-btn coe-videos_ay__scroll-btn--right"
            onClick={() => scroll("right")}
          >
            ❯
          </button>
        )}
      </div>
    </section>
  );
};

export default CoeVideos;
