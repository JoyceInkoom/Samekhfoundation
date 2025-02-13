import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Staggered animation for nav items
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 100); // Stagger the animation
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: "transparent", // Always black background
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ textDecoration: "none", color: "white" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 18, fontWeight: 500 }}>Samekh</span>
              <span style={{ fontSize: 14, fontWeight: 400 }}>Foundation</span>
            </div>
            <img src={logo} alt="NGO Logo" style={{ marginLeft: 10 }} />
          </div>
        </Link>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/volunteer" className="nav-links" onClick={toggleMobileMenu}>
              Join Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-links nav-donate" onClick={toggleMobileMenu}>
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;