import { useState, useEffect } from "react";
import {
  getProfile,
  updateUser,
  updateEmail,
  changePassword,
  apiGenerateOTP,
  apiVerifyOTP,
} from "../../services/profile";
import { toast, ToastContainer } from "react-toastify";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";
import backgroundImg from "../../assets/images/profile.jpg";

const ProfilePage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpGenerated, setIsOtpGenerated] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(localStorage.getItem("authToken"));
        if (response && response.details) {
          // Ensure the response contains the expected fields
          setUser({
            firstName: response.details.firstName || "",
            lastName: response.details.lastName || "",
            email: response.details.email || "",
          });
        } else {
          console.error("No profile data found");
          toast.error("No profile data found");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile");
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser({
        firstName: user.firstName,
        lastName: user.lastName,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await updateEmail({ email: user.email });
      toast.success("Email updated successfully");
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("Failed to update email");
    }
  };

  const handleGenerateOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await apiGenerateOTP({ email: emailForOtp });
      toast.success("OTP sent to your email successfully");
      setIsOtpGenerated(true);
    } catch (error) {
      console.error("Error generating OTP:", error);
      toast.error("Failed to generate OTP");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await apiVerifyOTP({ otp: otp, email: emailForOtp });
      toast.success("OTP verified successfully");
      setIsOtpVerified(true);
      setShowChangePasswordModal(true);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await changePassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
      });
      toast.success("Password changed successfully");
      setShowChangePasswordModal(false);
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Failed to change password");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(10px)",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              marginTop: "50px",
              maxWidth: "100%",
              maxHeight: "80vh", // Limit the height of the form container
              overflowY: "auto", // Make the form container scrollable
              margin: "50px auto", // Add this
            }}
            className="forms-container" // Add this
          >
            <h1 style={{ color: "white", textAlign: "center" }}>Update Profile</h1>
            <form onSubmit={handleUpdate}>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "95%",
                  marginBottom: "10px",
                }}
                className="forms-input" // Add this
              />
              <br />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "95%",
                  marginBottom: "10px",
                }}
              />
              <br />
              <div style={{ textAlign: "center"}}>
              <button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "50px",
                  border: "none",
                  width: "50%",
                  
                }}
              >
                Update Details
              </button>
              </div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "95%",
                  marginBottom: "10px",
                }}
              />
              <br />
            </form>
            <form onSubmit={handleUpdateEmail} style={{ marginTop: "10px" }}>
              <div style={{ textAlign: "center"}}><button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "50px",
                  border: "none",
                  width: "50%",
                }}
              >
                Update Email
              </button></div>
            </form>
            <form onSubmit={handleGenerateOtp} style={{ marginTop: "10px" }}>
              <label>To change password, generate OTP to verify its you. Please enter email to generate OTP:</label>
              <input
                type="email"
                value={emailForOtp}
                onChange={(e) => setEmailForOtp(e.target.value)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "95%",
                  marginBottom: "10px",
                }}
              />
              <br />
              <div style={{ textAlign: "center"}}><button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "50px",
                  border: "none",
                  width: "50%",
                }}
              >
                Generate OTP
              </button></div>
            </form>
            {isOtpGenerated && (
              <form onSubmit={handleVerifyOtp} style={{ marginTop: "10px" }}>
                <label>OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "95%",
                    marginBottom: "10px",
                  }}
                />
                <br />
                <div style={{ textAlign: "center"}}><button
                  type="submit"
                  style={{
                    backgroundColor: "black",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "50px",
                    border: "none",
                    width: "50%",
                  }}
                >
                  Verify OTP
                </button></div>
              </form>
            )}
            {showChangePasswordModal && (
              <form onSubmit={handleChangePassword} style={{ marginTop: "10px" }}>
                <label>Old Password:</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "95%",
                    marginBottom: "10px",
                  }}
                />
                <br />
                <label>New Password:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "95%",
                    marginBottom: "10px",
                  }}
                />
                <br />
                <div style={{ textAlign: "center"}}><button
                  type="submit"
                  style={{
                    backgroundColor: "black",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "50px",
                    border: "none",
                    width: "50%",
                  }}
                >
                  Change Password
                </button></div>
              </form>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;