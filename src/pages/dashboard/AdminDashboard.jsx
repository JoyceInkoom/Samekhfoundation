import React from "react";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";

const AdminDashboard = () => {
  return (
    <div
      className="dashboard-container"
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden", // Prevent scrolling on the page
      }}
    >
      <div
        className="sidebar"
        style={{
          width: "250px",
          backgroundColor: "#2c3e50",
          height: "100vh", // Sidebar should also take full viewport height
        }}
      >
        <Sidebar />
      </div>
      <div
        className="main-content"
        style={{
          flex: 1,
          backgroundImage: "url('https://images.pexels.com/photos/2908684/pexels-photo-2908684.jpeg')", // Replace with your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Content should fill the full viewport height
          color: "#fff",
          textAlign: "center",
          overflow: "hidden", // No scrollbars in the main content area
        }}
      >
        <Navbar />
        <div
          className="welcome-message"
          style={{
            padding: "40px 20px",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background for readability
            borderRadius: "8px",
            marginLeft: "100px"
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
            Welcome Admin!
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
            Control your site from here. Manage users, post projects, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
