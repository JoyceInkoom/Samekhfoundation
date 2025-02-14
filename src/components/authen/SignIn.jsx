import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes, FaGoogle } from "react-icons/fa"; // Importing X and Google icons
import { useNavigate } from "react-router-dom"; // For navigation in v6
import { apiUserLogin, generateOTP, verifyOTP } from "../../services/auth.js"; // Import the OTP functions
import { useEffect } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(600); // 10 minutes countdown
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // To control modal visibility
  const navigate = useNavigate(); // For navigating to other pages

  // Handle email and password sign-in
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await apiUserLogin({ email, password }); // Fetch response
      console.log(response); // Debug response structure
  
      // Check directly within response.data
      if (response?.message === "User logged In") {
        toast.success("Sign-in successful!!");
        localStorage.setItem("authToken", response.accessToken); // Save token
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        toast.error("Invalid credentials or sign-in failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Invalid credentials or sign-in failed. Please try again.");
    }
  };
  
  

  // Handle forgot password (generate OTP)
  const handleForgotPassword = () => {
    setModalVisible(true); // Show modal when forgot password is clicked
  };

  const handleOtpRequest = async () => {
    try {
      const response = await generateOTP({ email });
      if (response.status === "success") {
        toast.success("OTP sent! Please check your email.");
        setOtpSent(true);
        setEmailDisabled(true); // Disable email input
        startCountdown(); // Start countdown
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    }
  };
  
  // Countdown Timer
  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setOtpSent(false); // Reset OTP state
          setCountdown(600); // Reset countdown for next OTP request
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  // Handle OTP expiration toast notification after countdown ends
  useEffect(() => {
    if (countdown === 0) {
      toast.error("OTP expired. Please request a new one.");
    }
  }, [countdown]);
  
  // Handle OTP verification
  const handleOtpVerification = async () => {
    try {
      const response = await verifyOTP({ email, otp });
      if (response.status === "success") {
        toast.success("OTP verified. You can now reset your password.");
        setModalVisible(false); // Close modal on successful OTP verification
        navigate("/reset-password"); // Redirect to reset password page
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("OTP verification failed. Please try again.");
    }
  };

  // Handle X icon click (close modal)
  const handleCloseModal = () => {
    setModalVisible(false); // Close modal
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        {/* Close (X) Icon */}
        <button className="close-button" onClick={() => navigate("/")}>
          <FaTimes size={24} />
        </button>

        <h1 className="signin-title">Sign In</h1>
        <p className="signin-subtitle">Welcome Admin! Please sign in to continue.</p>

        {/* Email & Password Sign-In */}
        <form className="form-fields" onSubmit={handleEmailSignIn}>
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={emailDisabled} // Disable email input after OTP request
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="form-button">
            Sign In
          </button>
        </form>

        {/* <p className="or-text">OR</p> */}

        {/* Google Sign-In Button */}
        {/* <button className="google-button">
          <FaGoogle className="google-icon" /> {/* Google icon */}
          {/* Sign In with Google */}
        {/* </button> */} 

        <p className="forgot-password-text">
          <a href="#" onClick={handleForgotPassword}>
            Forgot your password?
          </a>
        </p>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>

      {/* Forgot Password Modal */}
      {modalVisible && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-modal" onClick={handleCloseModal}>
        <FaTimes size={24} />
      </button>

      <h2>Reset Password</h2>
      <p>Please enter your email to receive OTP for reset</p>

      {/* Email Input and Button on Same Line */}
      <div className="input-button-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forminput"
        />
        <button
          onClick={handleOtpRequest}
          className="formbutton"
          disabled={otpSent} // Disable after OTP request
        >
          {otpSent ? "OTP Sent" : "Send OTP"}
        </button>
      </div>

      {otpSent && (
        <div className="otp-verification">
          {/* OTP Input and Button on Same Line */}
          <div className="input-button-container">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="forminput"
            />
            <button onClick={handleOtpVerification} className="formbutton">
              Verify OTP
            </button>
          </div>
          
          {/* Countdown Timer */}
          <div className="countdown">
            <p>{Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, "0")}</p>
          </div>
        </div>
      )}
    </div>
  </div>
)}


      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default SignIn;
