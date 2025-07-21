import { useState } from "react";
import "../App.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // Send email to your address using EmailJS or similar service
      await sendSubscriptionEmail(email);
      
      setEmail("");
      setMessage("Thank you for subscribing! You'll hear from us soon.");
    } catch (error) {
      console.error("Subscription failed:", error);
      setMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Function to send email (using EmailJS as example)
  const sendSubscriptionEmail = async (subscriberEmail) => {
    // Using EmailJS service (you need to set this up first)
    const emailJsConfig = {
      serviceId: 'service_3aocyij',
      templateId: 'template_bhbpgck',
      userId: 'lBANhscWYReyVEgOa',
      templateParams: {
        to_email: 'info.samekhfoundation@gmail.com', // Your email
        from_email: subscriberEmail,
        message: `New newsletter subscription from: ${subscriberEmail}`
      }
    };

    // Alternative: Using a simple fetch to a backend endpoint
    // return fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: subscriberEmail })
    // });

    // For demo purposes, we'll simulate a successful send
    return new Promise((resolve) => {
      console.log(`Email sent to you about subscription from: ${subscriberEmail}`);
      setTimeout(resolve, 1500);
    });
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
          <p>Email: info.samekhfoundation@gmail.com</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/donate">Donate</a></li>
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
            <button 
              type="submit" 
              className="newsletter-button"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {message && (
            <p className={`newsletter-message ${message.includes('Thank you') ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
          <div className="social-icons">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaLinkedin /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
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