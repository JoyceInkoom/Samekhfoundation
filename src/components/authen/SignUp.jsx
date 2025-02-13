import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { apiUserSignup } from "../../services/auth.js";
import { FaGoogle, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react"; // For Google sign-up

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginWithRedirect, user, getAccessTokenSilently } = useAuth0(); // Auth0 Google signup integration

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    try {
      const response = await apiUserSignup(formData);
      toast.success("Signup successful! Redirecting to dashboard...");
      
      // Save token from API response to localStorage
      localStorage.setItem("authToken", response.accessToken);
  
      // Add a slight delay to show the toast before navigating
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // 2 seconds
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("User already exists. Please sign in instead.");
      } else {
        toast.error(
          error.response?.data?.message || "Signup failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      // Initiate Google signup via Auth0
      await loginWithRedirect({
        connection: "google-oauth2",
      });
    } catch (error) {
      toast.error("Google signup failed. Please try again.");
    }
  };

  const handleClose = () => {
    navigate("/");  // Navigate to homepage when X is clicked
  };

  // Check if the user is already authenticated via Auth0
  const handleAuth0Success = async () => {
    if (user) {
      try {
        // Get the token from Auth0 for Google login
        const token = await getAccessTokenSilently();
        // Save the token to localStorage
        localStorage.setItem("authToken", token);
        
        toast.success("Google signup successful! Redirecting to dashboard...");
        navigate("/dashboard");
      } catch (error) {
        toast.error("Failed to fetch Google token. Please try again.");
      }
    }
  };

  // Ensure the token is saved after the Auth0 login is successful
  React.useEffect(() => {
    handleAuth0Success();
  }, [user]);

  return (
    <div className="signup-container">
      <div className="signup-form">
        {/* Close (X) Icon */}
        <button className="close-button" onClick={handleClose}>
          <FaTimes size={24} />
        </button>

        <h1 className="signup-title">Sign Up</h1>
        <p className="signup-subtitle">
          Sign up as Admin to manage your website effectively.
        </p>

        <form className="form-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            className="form-input"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="form-input"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="form-button"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="or-text">OR</p>

        <button
          className="google-button"
          onClick={handleGoogleSignUp}
        >
          <FaGoogle size={20} className="google-icon" />
          Sign Up with Google
        </button>

        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
