import { apiClient } from "./config";

// Fetch user profile details
export const getProfile = async (token) => {
  try {
    const response = await apiClient.get('/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

// Delete user from the system
export const deleteUser = async () => {
  try {
    const response = await apiClient.delete("/delete"); // Send DELETE request to delete the user
    return response.data; // Return the success message
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Pass the error for further handling
  }
};

// Update user profile details
export const updateUser = async (payload) => {
  try {
    const response = await apiClient.patch("/update", payload);
    return response.data; // Return updated user details
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Pass the error for further handling
  }
};

// Update user email
export const updateEmail = async (payload) => {
  try {
    const response = await apiClient.patch("/update/email", payload);
    return response.data; // Return updated email details
  } catch (error) {
    console.error("Error updating email:", error);
    throw error; // Pass the error for further handling
  }
};

// Change user password
export const changePassword = async (payload) => {
  try {
    const response = await apiClient.patch("/update/password", payload);
    return response.data; // Return response after password update
  } catch (error) {
    console.error("Error changing password:", error);
    throw error; // Pass the error for further handling
  }
};

export const getAllUsers = async () => {
  try {
    const response = await apiClient.get(`/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Add Bearer token for authorization
      },
    });
    return response.data; // Return the list of all registered users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Pass the error for further handling
  }
};

export const apiGenerateOTP = async (payload) => {
  try {
    const response = await apiClient.post("/generateOTP", payload);
    return response.data;
  } catch (error) {
    console.error("OTP generation failed:", error);
    throw error; // Pass the error for further handling
  }
};

export const apiVerifyOTP = async (payload) => {
  try {
    const response = await apiClient.post("/verifyOTP", payload);
    return response.data;
  } catch (error) {
    console.error("OTP verification failed:", error);
    throw error; // Pass the error for further handling
  }
};