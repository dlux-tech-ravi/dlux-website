import React, { useState, useEffect } from "react";
import "./Blogs_Detail.css";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Navbar from "../../../../Navbar";
import { Helmet } from "react-helmet";
import HomeFooter from "../../../../HomeFooter/HomeFooter";
import FloatingContact from "./FloatBotton";

const Blogs_Detail = () => {
  const { detailUrlName } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [videoLoading, setVideoLoading] = useState(true);

  // ✅ New state for popup
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedVideo]);

  // Blog query
  const blogQuery = `
    query ($preview: Boolean) {
      resourcesBlogsCollection(preview: $preview) {
        items {
          detailUrlName
          detailTitle
          detailTagChooseYourFilterTags
          metaTitle
          metaDescription
          detailImageCollection {
            items {
              url
            }
          }
          detailDescription {
            json
          }
        }
      }
    }
  `;

  // Video query (with thumbnails)
  const videoQuery = `
    query ($preview: Boolean) {
      resourcesMediaLibraryCollection(preview: $preview) {
        items {
          workfrontMediaCollection(limit: 10) {
            items {
              url
              title
              description
            }
          }
          workfrontThumbnailCollection(limit: 10) {
            items {
              url
            }
          }
          aemMediaCollection(limit: 10) {
            items {
              url
              title
              description
            }
          }
          aemThumbnailCollection(limit: 10) {
            items {
              url
            }
          }
          salesforceMediaCollection(limit: 10) {
            items {
              url
              title
              description
            }
          }
          salesforceThumbnailCollection(limit: 10) {
            items {
              url
            }
          }
          adobeCommerceMediaCollection(limit: 10) {
            items {
              url
              title
              description
            }
          }
          adobeCommerceThumbnailCollection(limit: 10) {
            items {
              url
            }
          }
        }
      }
    }
  `;

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  // Fetch blog
  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              query: blogQuery,
              variables: { preview: false },
            }),
          }
        );
        const { data, errors } = await response.json();

        if (errors) {
          console.error(errors);
          return;
        }

        const blogItem = data.resourcesBlogsCollection.items.find(
          (item) => item.detailUrlName === detailUrlName
        );
        setBlog(blogItem || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [detailUrlName, accessToken]);

  // Fetch videos once blog is loaded
  useEffect(() => {
    if (loading) return;
    if (!blog) {
      setVideoLoading(false);
      return;
    }

    const normalizeTag = (raw) => {
      if (!raw) return "";
      if (Array.isArray(raw)) return raw.join(" ").toLowerCase();
      return String(raw).toLowerCase();
    };

    let active = true;

    (async () => {
      try {
        const tagString = normalizeTag(blog.detailTagChooseYourFilterTags).trim();

        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              query: videoQuery,
              variables: { preview: false },
            }),
          }
        );

        const { data, errors } = await response.json();
        if (errors) {
          console.error("media query errors:", errors);
          if (active) {
            setVideos([]);
            setVideoLoading(false);
          }
          return;
        }

        const mediaCollections = data.resourcesMediaLibraryCollection?.items?.[0] || {};

        const MAP = {
          workfront: "workfrontMediaCollection",
          aem: "aemMediaCollection",
          salesforce: "salesforceMediaCollection",
          adobecommerce: "adobeCommerceMediaCollection",
        };

        const THUMB_MAP = {
          workfront: "workfrontThumbnailCollection",
          aem: "aemThumbnailCollection",
          salesforce: "salesforceThumbnailCollection",
          adobecommerce: "adobeCommerceThumbnailCollection",
        };

        let detected = null;
        if (tagString.includes("workfront")) detected = "workfront";
        else if (tagString.includes("aem")) detected = "aem";
        else if (tagString.includes("salesforce")) detected = "salesforce";
        else if (tagString.includes("adobe")) detected = "adobecommerce";

        let selected = [];
        if (detected) {
          const collectionField = MAP[detected];
          const thumbField = THUMB_MAP[detected];
          const mediaItems = mediaCollections[collectionField]?.items || [];
          const thumbItems = mediaCollections[thumbField]?.items || [];

          selected = mediaItems.map((vid, i) => ({
            ...vid,
            thumbnail: thumbItems[i]?.url || null,
          }));
        }

        if (active) {
          setVideos((selected || []).slice(0, 3));
          setVideoLoading(false);
        }
      } catch (err) {
        console.error("Error fetching/filtering videos:", err);
        if (active) {
          setVideos([]);
          setVideoLoading(false);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [blog, loading, accessToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return <div>No content available.</div>;
  }

  // Rich text render options
  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 style={{ fontSize: "36px", fontWeight: "bold", margin: "1.5rem 0", color: "#111" }}>
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 style={{ fontSize: "1.75rem", margin: "1.25rem 0 0.75rem", color: "#222" }}>
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 style={{ fontSize: "1.5rem", margin: "1rem 0 0.5rem", color: "#333" }}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => <h4 style={{ fontSize: "24px", fontWeight: 500, margin: "1rem 0 0.5rem" }}>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 style={{ fontSize: "18px", fontWeight: 500, margin: "1rem 0 0.5rem", color: "#ff0000ff" }}>{children}</h5>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ fontSize: "18px", lineHeight: "27px", color: "#070707ff" }}>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <ul style={{ margin: "1rem 0 1rem 1.5rem", listStyle: "disc" }}>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol style={{ margin: "1rem 0 1rem 1.5rem", listStyle: "decimal" }}>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li style={{ margin: "0.5rem 0" }}>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote style={{ borderLeft: "4px solid #0077cc", paddingLeft: "1rem", margin: "1.5rem 0", fontStyle: "italic", color: "#555" }}>{children}</blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const url = node.data?.target?.fields?.file?.url;
        return url ? <img src={url} alt={blog.detailTitle || "Blog image"} style={{ maxWidth: "100%", height: "auto", margin: "1rem 0", borderRadius: "10px" }} /> : null;
      },
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank" rel="noopener noreferrer" style={{ color: "#0077cc" }}>{children}</a>,
    },
  };

  // ✅ Handle closing animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedVideo(null);
      setIsClosing(false);
    }, 300); // match transition duration
  };

  return (
    <>
    <div className="bg-white mt-[100px]">
      <div className="blog-detail-wrapper">
        <div className="blog-detail-page-nav">
          <Navbar />
          <Helmet>
            <title>{blog.metaTitle || blog.detailTitle} | DLUX</title>
            <meta
              name="description"
              content={
                blog.metaDescription ||
                blog.detailDescription?.json?.content?.[0]?.content?.[0]?.value?.slice(0, 150) + "..."
              }
            />
          </Helmet>
        </div>

        <div className="blog-detail-header mb-4">
          {blog.detailImageCollection && blog.detailImageCollection.items.length > 0 && (
            <img
              src={blog.detailImageCollection.items[0].url}
              alt={blog.detailTitle}
              className="rounded-xl"
            />
          )}
          <h1 className="text-black mt-4 font-bold text-[36px] text-left">{blog.detailTitle}</h1>
          
        </div>

        <div className="blog-detail-content">
          {blog.detailDescription?.json && (
            <div>{documentToReactComponents(blog.detailDescription.json, renderOptions)}</div>
          )}
        </div>

        {/* ✅ Video Section */}
        {!videoLoading && videos.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-4 text-black">Related Videos</h2>
            <div className="flex gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg w-[33.33%] border border-[#e3e2e2] mt-10 cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <video src={video.url} className="w-full h-64 object-cover" />
                  )}
                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-lg text-black leading-[26px] mb-4">{video.title}</h3>
                    {video.description && (
                      <p className="text-sm text-[#938c8c]">{video.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Video Popup Modal with Animation */}
        {selectedVideo && (
          <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[999999] transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className={`relative bg-white rounded-lg shadow-lg max-w-4xl w-full p-4 transform transition-transform duration-300 ${
                isClosing ? "scale-90 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-black text-2xl font-bold"
              >
                ✕
              </button>
              <video
                src={selectedVideo.url}
                controls
                autoPlay
                className="w-full h-[500px] rounded-lg"
              />
              <h3 className="font-bold text-xl mt-4 text-black leading-[26px]" >{selectedVideo.title}</h3>
              {selectedVideo.description && (
                <p className="text-gray-600 mt-2">{selectedVideo.description}</p>
              )}
            </div>
          </div>
        )}
      </div>
     
      
    </div>
    <HomeFooter />
    </>
  );
};

export default Blogs_Detail;
