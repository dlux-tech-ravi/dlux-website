import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import "./style.css";

const Subscription = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={sectionRef}
      className="newsletter-section"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="newsletter-box">
        <div className="newsletter-overlay"></div>

        <motion.div
          className="newsletter-content"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="newsletter-heading">
            Join Our Martech Basket Newsletter
          </h2>
          <p className="newsletter-subtext">
            Get the latest insights on AI innovation, Martech trends, content
            supply chain ecosystem, and future-ready tech strategies—delivered
            fresh to your inbox.
          </p>

          {/* ====== ZOHO FORM INTEGRATION ====== */}
          <form
            action="https://forms.zohopublic.in/dluxtech/form/BlogSubscription/formperma/KOju3aE3jSa4yX16hLrEZtGhxVCRFmy6Ap7b-8eskCE/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            className="newsletter-form"
            target="_blank"
          >
            <input
              type="hidden"
              name="zf_referrer_name"
              value=""
            />
            <input
              type="hidden"
              name="zf_redirect_url"
              value=""
            />
            <input
              type="hidden"
              name="zc_gad"
              value=""
            />

            <input
              type="text"
              name="Email"
              maxLength="255"
              required
              placeholder="Enter Your Email"
              className="newsletter-input"
            />

            <motion.button
              type="submit"
              className="newsletter-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Subscribe</span>
              <span className="newsletter-btn-icon">
                <FaArrowRight />
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Subscription;
