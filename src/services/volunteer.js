import { apiClient } from "./config";

export const signUpAsVolunteer = async (payload) => {
    try {
      const response = await apiClient.post("/volunteer", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      
      if (response.status >= 200 && response.status < 300 && response.data.status === "success") {

        // Return the volunteer details from the response
        return response.data.details;
      } else {
        throw new Error("Error signing up volunteer");
      }
    } catch (error) {
      console.error("Error signing up volunteer:", error);
      throw error; // Pass the error for further handling
    }
  };
  
  export const getAllVolunteers = async () => {
    try {
      const response = await apiClient.get("/volunteer", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Adding the Bearer token
        },
      });
      return response.data; // Return the list of volunteers
    } catch (error) {
      console.error("Error fetching volunteers:", error);
      throw error; // Pass the error for further handling
    }
  };

  export const getVolunteerById = async (id) => {
    try {
      const response = await apiClient.get(`/volunteer/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Adding the Bearer token
        },
      });
      return response.data; // Return the volunteer details
    } catch (error) {
      console.error("Error fetching volunteer details:", error);
      throw error; // Pass the error for further handling
    }
  };

  export const deleteVolunteer = async (id) => {
    try {
      const response = await apiClient.delete(`/volunteer/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Adding the Bearer token
        },
      });
      return response.data; // Return the response after deletion
    } catch (error) {
      console.error("Error deleting volunteer:", error);
      throw error; // Pass the error for further handling
    }
  };

  export const updateVolunteer = async (id, updatedData) => {
    try {
      const response = await apiClient.patch(`/volunteer/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Add Bearer token for authorization
        },
      });
      return response.data; // Return the updated volunteer details
    } catch (error) {
      console.error("Error updating volunteer:", error);
      throw error; // Pass the error for further handling
    }
  };