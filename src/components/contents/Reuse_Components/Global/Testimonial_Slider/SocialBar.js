import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="https://www.linkedin.com/company/dlux-tech-corp/" className="linkedin" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://www.youtube.com/@DLUXTECH" className="youtube" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://www.facebook.com/DLUXTech/" className="facebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.instagram.com/dlux_tech/" className="instagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://x.com/Dlux_Tech" className="twitter" style={{background: "black"}} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    </div>
  );
};

export default SocialBar;
