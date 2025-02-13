import { apiClient } from "./config";

export const postContact = async (contactData) => {
  try {
    const headers = {};

    // Check if user is signed in
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      headers["Authorization"] = `Bearer ${authToken}`; // Add Bearer token if signed in
    }

    const response = await apiClient.post("/contact", contactData, { headers });
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error submitting contact:", error);
    throw error; // Pass the error for further handling
  }
};

export const getAllContact = async () => {
  try {
    const response = await apiClient.get(`/contact`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Add Bearer token for authorization
      },
    });
    return response.data; // Return the list of all contact submissions
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    throw error; // Pass the error for further handling
  }
};

export const deleteAllContact = async () => {
  try {
    const response = await apiClient.delete(`/contact`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Add Bearer token for authorization
      },
    });
    return response.data; // Return the response from the API after deleting all contacts
  } catch (error) {
    console.error("Error deleting all contacts:", error);
    throw error; // Pass the error for further handling
  }
};

export const deleteOneContact = async (contactId) => {
  try {
    const response = await apiClient.delete(`/contact/${contactId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Add Bearer token for authorization
      },
    });
    return response.data; // Return response data after deletion
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error; // Pass the error for further handling
  }
};
