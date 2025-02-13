import { apiClient } from "./config";

export const apiUserSignup = async (payload) => {
  try {
    const response = await apiClient.post("/register", payload);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error; // Pass the error for further handling
  }
};

export const apiUserLogin = async (payload) => {
  try {
    const response = await apiClient.post("/login", payload);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Pass the error for further handling
  }
};

export const passwordReset = async (payload) => {
    try {
      const response = await apiClient.post("/passwordReset", payload);
      return response.data;
    } catch (error) {
      console.error("Password reset failed:", error);
      throw error; // Pass the error for further handling
    }
  };

  export const generateOTP = async (payload) => {
    try {
      const response = await apiClient.post("/generateOTP", payload);
      return response.data;
    } catch (error) {
      console.error("OTP generation failed:", error);
      throw error; // Pass the error for further handling
    }
  };

  export const verifyOTP = async (payload) => {
    try {
      const response = await apiClient.post("/verifyOTP", payload);
      return response.data;
    } catch (error) {
      console.error("OTP verification failed:", error);
      throw error; // Pass the error for further handling
    }
  };
  