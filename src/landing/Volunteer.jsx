import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Import Navbar and Footer components
import Navbar2 from '../landing/Navbar2';  // Adjust the path as necessary
import Footer from '../landing/Footer';  // Adjust the path as necessary

const Volunteer = () => {
  return (
    <>
      {/* Import Navbar */}
      <Navbar2 />

      {/* Full-Width Heading */}
      <div className="full-width-heading">
        <h1>Volunteer With Us</h1>
      </div>

      {/* Volunteer Sign-Up Section */}
      <section className="volunteer-signup-section">
        {/* Decorative Shapes */}
        <div className="circle-shape top-left"></div>
        <div className="circle-shape bottom-right"></div>
        <div className="circle-shape top-right"></div>

        <h2 className="heading">Become a Volunteer</h2>
        <p className="description">
          Join our team of volunteers to make a real impact. Sign up today and
          help us change lives!
        </p>

        <Link to="/signupasvolunteer" className="signup-button">
          Sign Up Now
          <FaArrowRight className="icon" />
        </Link>
        
      </section>

      {/* Import Footer */}
      <Footer />
    </>
  );
};

export default Volunteer;
