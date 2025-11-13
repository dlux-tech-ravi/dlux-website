import React, { useState, useEffect, useRef } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./style.css";
import { FaArrowRight, FaPlay, FaAngleRight } from "react-icons/fa6";

const endpoint =
  "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production";
const accessToken = "6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU";

const blogsQuery = gql`
  query ($preview: Boolean) {
    resourcesBlogsCollection(preview: $preview) {
      items {
        tagFilter
        detailUrlName
        detailTitle
        detailImageCollection {
          items {
            url
          }
        }
        detailTagChooseYourFilterTags
        detailPublishDate
        listingTileDescription
      }
    }
  }
`;

const videosQuery = gql`
  query {
    coEVideosCollection {
      items {
        title
        description
        videoSrc {
          url
        }
        trending
        videoBanner {
          url
        }
      }
    }
  }
`;

const BlogsList = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Popular");
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Refs
  const sectionRef = useRef(null);
  const blogsGridRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const graphQLClient = new GraphQLClient(endpoint, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const blogData = await graphQLClient.request(blogsQuery, { preview: false });
        const fetchedBlogs =
          blogData?.resourcesBlogsCollection?.items.map((item) => ({
            title: item.detailTitle,
            description: item.listingTileDescription,
            url: item.detailImageCollection?.items[0]?.url || "",
            publishedAt: item.detailPublishDate,
            tag: item.tagFilter,
            filterTags: item.detailTagChooseYourFilterTags || [],
            link: item.detailUrlName,
          })) || [];
        setBlogs(fetchedBlogs);

        let allTags = [...new Set(fetchedBlogs.flatMap((b) => b.filterTags || []))];
        allTags.sort((a, b) => (a === "Popular" ? -1 : b === "Popular" ? 1 : 0));
        setFilters(allTags);
        setActiveFilter("Popular");

        const videoData = await graphQLClient.request(videosQuery);
        const trendingVideos =
          videoData?.coEVideosCollection?.items.filter((v) => v.trending) || [];
        setVideos(trendingVideos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Scroll lock effect for blog grid (mouse wheel + touch)
  useEffect(() => {
    const grid = blogsGridRef.current;
    if (!grid) return;

    let startY = 0;
    let scrollStart = 0;

    const handleWheel = (e) => {
      const scrollTop = grid.scrollTop;
      const scrollHeight = grid.scrollHeight;
      const clientHeight = grid.clientHeight;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      const isScrollingDown = e.deltaY > 0;

      if ((atTop && !isScrollingDown) || (atBottom && isScrollingDown)) {
        return; // allow page scroll
      } else {
        e.preventDefault();
        grid.scrollTop += e.deltaY;
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      scrollStart = grid.scrollTop;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      const scrollTop = grid.scrollTop;
      const scrollHeight = grid.scrollHeight;
      const clientHeight = grid.clientHeight;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      const isScrollingDown = deltaY > 0;

      if ((atTop && !isScrollingDown) || (atBottom && isScrollingDown)) {
        return; // allow page scroll
      } else {
        e.preventDefault();
        grid.scrollTop += deltaY;
        startY = currentY;
      }
    };

    grid.addEventListener("wheel", handleWheel, { passive: false });
    grid.addEventListener("touchstart", handleTouchStart, { passive: false });
    grid.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      grid.removeEventListener("wheel", handleWheel);
      grid.removeEventListener("touchstart", handleTouchStart);
      grid.removeEventListener("touchmove", handleTouchMove);
    };
  }, [blogs]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.filterTags?.includes(activeFilter)
  );

  const visibleFilters = showAllFilters ? filters : filters.slice(0, 4);
  const featuredVideo = videos[0];
  const otherVideos = videos.slice(1);

  return (
    <motion.section
      ref={sectionRef}
      className="blogs"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="blogs__container">
        {/* Left Content */}
        <motion.div
          className={`blogs__left ${!showAllFilters ? "with-sidebar" : "full-width"}`}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="blogs__header">
            <h4 className="blogs__subtitle">BLOG</h4>
            <h2 className="blogs__title">Maybe You Also Like</h2>
            <p className="blogs__desc">
              Explore the latest insights, stories, and use-cases from our resources.
            </p>
          </div>

          {/* Filters */}
          <motion.div
            className="blogs__filters"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {visibleFilters.map((filter, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`blogs__filter ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </motion.button>
            ))}
            {filters.length > 4 && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="blogs__filter blogs__filter--seemore"
                onClick={() => setShowAllFilters(!showAllFilters)}
              >
                {showAllFilters ? "Hide Filters" : "See More"}
              </motion.button>
            )}
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            ref={blogsGridRef}
            className={`blogs__grid ${showAllFilters ? "grid--four" : "grid--two"}`}
            layout
            style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
          >
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div key={index} className="blogs__card">
                  <img src={blog.url} alt={blog.title} className="blogs__image" />
                  <div className="blogs__meta">
                    <span>
                      {blog.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString()
                        : "N/A"}
                    </span>
                    <span>
                      {blog.filterTags?.join(", ") || blog.tag || "Use Case/Action"}
                    </span>
                  </div>
                  <h3 className="blogs__card-title">{blog.title}</h3>
                  <p className="blogs__card-desc">{blog.description}</p>
                  <button
                    className="blogs__readmore"
                    onClick={() => window.open(`/blog/${blog.link}`, "_blank")}
                  >
                    Read More <FaAngleRight className="Blogs__readmore_svg" />
                  </button>
                </div>
              ))
            ) : (
              <p>No blogs found for "{activeFilter}"</p>
            )}
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        {!showAllFilters && (
          <motion.aside
            className="blogs__sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="blogs__sidebar-title">Also Check-Out Our CoE Videos</h3>

            {/* <div className="btn-blog">
              <motion.button whileHover={{ scale: 1.05 }} className="blogs__sidebar-btn">
                View Our Trending Videos
              </motion.button>
            </div> */}

            {/* Featured Video */}
            <motion.div
              className="blogs__video-featured video-wrapper"
              onClick={() => setSelectedVideo(featuredVideo)}
              whileHover={{ scale: 1.03 }}
            >
              {featuredVideo && (
                <>
                  <img
                    src={featuredVideo.videoBanner?.url}
                    alt={featuredVideo.title}
                    className="video-img"
                  />
                  <div className="play-btn">
                    <FaPlay />
                  </div>
                </>
              )}
            </motion.div>

            {/* Other Videos */}
            <div className="blogs__video-list">
              {otherVideos.length > 0 ? (
                otherVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    className="blogs__video-item"
                    onClick={() => setSelectedVideo(video)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="blogs__video-thumb video-wrapper">
                      {video.videoBanner?.url && (
                        <>
                          <img
                            src={video.videoBanner.url}
                            alt={video.title}
                            className="video-img"
                          />
                          <div className="play-btn">
                            <FaPlay />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="blogs__video-text">
                      <p className="blogs__video-title">{video.title}</p>
                      <span className="blogs__video-meta">
                        {video.description?.length > 50
                          ? video.description.substring(0, 50) + "..."
                          : video.description}
                      </span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p>No trending videos</p>
              )}
            </div>

            <div className="btn-blog">
              <a
                href="https://www.dluxtech.com/video-library"
                target="_blank"
                rel="noopener noreferrer"
                className="blogs__sidebar-btn blogs__more"
              >
                View More Vlog
                <span className="blogs__more-icon">
                  <FaArrowRight />
                </span>
              </a>
            </div>

          </motion.aside>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 999 }}
          >
            <div
              className="video-modal__overlay"
              onClick={() => setSelectedVideo(null)}
            />

            <motion.div
              className="video-modal__content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                className="video-modal__close"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>

              <video
                src={selectedVideo.videoSrc?.url}
                autoPlay
                controls
                playsInline
                className="video-player"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default BlogsList;
