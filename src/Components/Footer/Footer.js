import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">© {new Date().getFullYear()} Andrew Lin</p>
        <div className="footer-links">
          <a href="mailto:andrewlin368682@gmail.com">Email</a>
          <span>·</span>
          <a href="tel:+19723517026">Phone</a>
          <span>·</span>
          <a 
            href="https://www.linkedin.com/in/andrewl31" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
