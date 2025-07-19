import  { useState } from "react";
import "../App.css"; // Assuming you have the CSS styles in this file
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.jpg"; // Import the logo image
import { postContact } from "../services/contact"; // Import the postContact function
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Prepare the data to send
      const contactData = {
        name: "newsletter", // Fixed name for newsletter subscription
        phone: "request", // Fixed details for newsletter subscription
        message: "Subscribed to newsletter",
        email: email, // User's email
      };

      // Send the request
      const response = await postContact(contactData);
      console.log("Subscription successful:", response);

      // Clear the input and show success message
      setEmail("");
      setMessage("Thank you for subscribing to our newsletter!");
    } catch (error) {
      console.error("Subscription failed:", error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Contact Information */}
        <div className="footer-section">
          <img src={logo} alt="NGO Logo" className="footer-logo" />
          <p>Street address: B787 Carmine Street, Shai Osu Doku, Ghana</p>
          <p>GPS: G0-0080-2009</p>
          <p>Phone: +233 246 960 656</p>
          <p>Email: info@samekhfoundation.org</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/about">About Us</a>
            </li>
           
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
          {message && <p className="newsletter-message">{message}</p>}
          <div className="social-icons">
            <a href="#" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
  <p>
    &copy; 2025{" "}
    <Link to="/signup" className="footer-link">
      Samekh Foundation
    </Link>
    . All rights reserved.
  </p>
</div>

    </footer>
  );
};

export default Footer;