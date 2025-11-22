import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>
            Aman<span>.dev</span>
          </h2>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/amankrsingh207"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-kumar-singh-055b53261/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="mailto:amankrsingh2079@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} <span>Aman.dev</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
