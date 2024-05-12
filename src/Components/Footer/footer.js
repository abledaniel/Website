import React from "react";
import "./footer.css";
import { Link } from "react-router-dom"



const Footer = () => {
  // creates the links for the button
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer_links">
          <div className="sb_footer_links_div">
            <Link type = "foot" to="/" >
              <p>HOME</p>
            </Link>
            <Link type = "foot" to="/contact">
              <p>CONTACT ME</p>
            </Link>
            <Link type = "foot" to="/about">
              <p>ABOUT ME</p>
            </Link>
            <Link type = "foot" to="/skills">
              <p>SKILLS</p>
            </Link>
          </div>
        </div>
        <div className="sb_footer_below">
          <div className="sb_footer_copyright">
            {/* creates the text at the bottom */}
            <p>
              @{new Date().getFullYear()} Abel Daniel. All Right Reserved.
            </p>
            <Link to="/privacy">
              Privacy Policy CLICK ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
