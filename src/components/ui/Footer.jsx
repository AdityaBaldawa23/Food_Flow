import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Social Icons */}
        <div className="footer-section brand">
          <h2>FoodFlow</h2>
          <div className="social-icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Our Mission</h3>
          <ul>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Volunteer</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
