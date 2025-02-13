import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa"; // For close icon
import { useNavigate } from "react-router-dom"; // For navigation
import { passwordReset } from "../services/auth.js"; // Import passwordReset function

const ResetPassword = () => {
  const [email, setEmail] = useState(""); // State for email
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [loading, setLoading] = useState(false); // To show loading state
  const navigate = useNavigate(); // For navigating to the dashboard

  // Handle password reset submission
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state when submitting
    try {
      const response = await passwordReset({ email, newPassword });
      if (response.status === "success") {
        toast.success("Password reset successfully!");
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to dashboard after success
        }, 2000);
      } else {
        toast.error("Password reset failed. Please try again.");
      }
    } catch (error) {
      toast.error("Password reset failed. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        {/* Close (X) Icon */}
        <button className="close-button" onClick={() => navigate("/")}>
          <FaTimes size={24} />
        </button>

        <h1 className="signin-title">Reset Password</h1>
        <p className="signin-subtitle">Enter your new password below:</p>

        {/* Reset Password Form */}
        <form className="form-fields" onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            className="form-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="form-button"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="signin-text">
          Remembered your password? <a href="/signin">Sign In</a>
        </p>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
