import React from "react";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";

const AdminDashboard = () => {
  return (
    <div
      className="dashboard-container"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/2908684/pexels-photo-2908684.jpeg')", // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "hidden", // Prevent scrolling on the page
        position: "relative",
      }}
    >
      <div
  className="sidebar"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "14rem",
    backgroundColor: "transparent",
    height: "100vh", // Sidebar should also take full viewport height
    transition: "width 0.3s",
  }}
>
  <Sidebar />
</div>
      <div
        className="navbar"
        style={{
          position: "absolute",
          top: 0,
          left: "14rem",
          width: "calc(100% - 14rem)",
          backgroundColor: "transparent",
          height: "4rem", // Navbar height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
      </div>
      <div
        className="main-content"
        style={{
          position: "absolute",
          top: "4rem",
          left: "14rem",
          width: "calc(100% - 14rem)",
          height: "calc(100vh - 4rem)",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="welcome-message"
          style={{
            padding: "40px 20px",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background for readability
            borderRadius: "8px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
            Welcome Admin!
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
            Control your site from here. Manage users, projects and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;