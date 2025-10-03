import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Navbar from "../../../../Navbar";
import { Helmet } from "react-helmet";
import HomeFooter from "../../../../HomeFooter/HomeFooter";

const Blogs_Detail = () => {
  const { detailUrlName } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const query = `
    query ($preview: Boolean) {
      resourcesBlogsCollection(preview: $preview) {
        items {
          detailUrlName
          detailTitle
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

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

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
              query,
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
  }, [detailUrlName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No content available.</div>;
  }

  // ✅ Custom rich text rendering options
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-3xl md:text-4xl font-semibold font-opensans mt-8 mb-4">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl md:text-3xl font-semibold font-opensans mt-6 mb-3 text-[#ff3901]">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl md:text-2xl font-semibold font-opensans mt-5 mb-2">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4  className="bg-gradient-to-r from-[#ff3901] to-[#F07800] bg-clip-text text-transparent text-xl md:text-2xl font-bold font-opensans mt-4 mb-2">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5  className="bg-gradient-to-r from-[#ff3901] to-[#F07800] bg-clip-text text-transparent text-base md:text-lg font-semibold font-opensans mt-3 mb-1">
          {children}
        </h5>
      ),
       [BLOCKS.HEADING_5]: (node, children) => (
        <h6  className="bg-gradient-to-r from-[#ff3901] to-[#F07800] bg-clip-text text-transparent text-sm md:text-base font-semibold  tracking-wide text-gray-600 mt-3 mb-1 font-opensans">
          {children}
        </h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ margin: "1rem 0", lineHeight: "1.8", color: "#000000" }} className="text-[16px] font-opensans">
          {children}
        </p>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote
          style={{
            borderLeft: "4px solid #2563eb",
            paddingLeft: "1rem",
            fontStyle: "italic",
            color: "#4b5563",
            margin: "1.5rem 0",
            background: "#f3f4f6",
            borderRadius: "6px",
          }}
        >
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul style={{ margin: "1rem 0", paddingLeft: "1.5rem", listStyle: "disc" }}>
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol style={{ margin: "1rem 0", paddingLeft: "1.5rem", listStyle: "decimal" }}>
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li style={{ marginBottom: "0.5rem" }}>{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ff3901", textDecoration: "underline", fontWeight: "500" }}
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div>
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

      <div style={{ margin: "100px auto", }} className="bg-white px-6 md:px-[60px] lg:px-[130px] py-16">
        {blog.detailImageCollection?.items?.[0]?.url && (
          <img
            src={blog.detailImageCollection.items[0].url}
            alt={blog.detailTitle}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "2rem",
            }}
          />
        )}
        <h1 style={{ fontSize: "2.2rem", fontWeight: "700", marginBottom: "1.5rem" }} className="text-black">
          {blog.detailTitle}
        </h1>

        <div>{documentToReactComponents(blog.detailDescription.json, options)}</div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Blogs_Detail;
