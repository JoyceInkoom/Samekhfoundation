import React from "react";
import donationImage from "../assets/images/donate.jpg"; // Replace with your image path

const DonationSection = () => {
  // Function to handle button click (redirect to donate page)
  const handleDonateClick = () => {
    window.location.href = "/donate"; // Replace with your donate page URL
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)", // Gradient background
        borderRadius: "10px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.9)",
        margin: "80px auto",
        maxWidth: "800px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={donationImage}
        alt="Donation"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.2, // Semi-transparent background image
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: "20px",
            animation: "fadeInUp 1s ease-in-out", // Animated text
          }}
        >
          Make a Difference Today
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#34495e",
            marginBottom: "40px",
            lineHeight: "1.6",
            animation: "fadeInUp 1.5s ease-in-out", // Animated text
          }}
        >
          Your support can change lives. Join us in our mission to create a
          better world for everyone.
        </p>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "black",
            borderRadius: "5px",
            marginBottom: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "60%", // Example: 60% progress
              height: "100%",
              backgroundColor: "#fcecae",
              borderRadius: "5px",
              transition: "width 0.5s ease",
            }}
          ></div>
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonateClick}
          style={{
            padding: "15px 40px",
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "black",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 123, 255, 0.3)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            animation: "fadeInUp 2s ease-in-out", // Animated button
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#fcecae";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "black";
            e.target.style.transform = "scale(1)";
          }}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationSection;
