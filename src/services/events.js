import { apiClient } from "./config";

export const addEvent = async (eventData) => {
  try {
    const formData = new FormData();
    formData.append('title', eventData.title);
    formData.append('description', eventData.description);
    formData.append('date', eventData.date);
    formData.append('location', eventData.location);
    formData.append('organizer', eventData.organizer);
    if (eventData.image) {
      formData.append('image', eventData.image);
    }

    const response = await apiClient.post('/event', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${eventData.token}`, // Ensure token is passed
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding event:', error);
    throw error;
  }
};

const getEvents = async () => {
  try {
    const response = await apiClient.get('/events', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error.response);
    throw error;
  }
};

export default getEvents;



export const getOneEvent = async (eventId) => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found');

    const response = await apiClient.get(`/event/${eventId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching event:', error.response?.data || error.message);
    throw error;
  }
};

export const updateEvent = async (eventId, formData) => {
  try {
    const response = await apiClient.patch(`event/update/${eventId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};


export const deleteEvent = async (eventId) => {
  try {
    const response = await apiClient.delete(`event/delete/${eventId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};