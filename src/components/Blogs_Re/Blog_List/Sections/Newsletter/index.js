import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./style.css";
import { Link } from "react-router-dom";

const Newsletter = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <motion.section
            ref={sectionRef}
            className="protip-newsletter"
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="protip-newsletter__container">
                <motion.div
                    className="protip-newsletter__content"
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                   
                    <h2 className="protip-newsletter__title">
                        Bookmark this page and check back weekly
                    </h2>
                    <p className="protip-newsletter__text">
                        We’re always dropping new insights to help you
                        and your team work smarter, faster, and with confidence.
                    </p>
                    <div className="protip-newsletter__actions">
                                  <a href="https://www.linkedin.com/newsletters/martech-basket-6948514756882247680" className="blog-hero__link">

                        <motion.button
                            className="protip-newsletter__stay-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Stay Updated
                        </motion.button>
                        </a>
                        {/* <Link to="https://www.linkedin.com/newsletters/martech-basket-6948514756882247680">
                            <motion.button
                                className="protip-newsletter__button"
                                data-id="subscribe"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe To Our Newsletter
                            </motion.button>
                        </Link> */}
                    </div>
                    <div className="protip-newsletter__progress">
                        <span className="protip-newsletter__dot"></span>
                        <span className="protip-newsletter__dot protip-newsletter__dot--active"></span>
                        <span className="protip-newsletter__dot"></span>
                    </div>
                </motion.div>

                <motion.div
                    className="protip-newsletter__image"
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <img src="/end-banner/woman-pointing.png" alt="Smiling Woman" />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Newsletter;
