import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer_wave"></div> {/* optional wave for aesthetic */}

    <div className="footer_container">
      <div className="footer_left">
        <h1>SHUKLA_BITES</h1>
        <p>
          The taste you can't forget. Visit us or reserve a table and enjoy an unforgettable food experience.
        </p>
        <div className="social_icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer_center">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#heroSection">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#reservation">Reservation</a></li>
        </ul>
      </div>

      <div className="footer_right">
        <h2>Contact</h2>
        <p>Ada Colony Naini, Prayagraj, Uttar Pradesh</p>
        <p>Email: info@shuklabites.com</p>
        <p>Phone: +91 12345 67890</p>
      </div>
    </div>

    <div className="footer_bottom">
      <p>© 2025 SHUKLA_BITES. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
