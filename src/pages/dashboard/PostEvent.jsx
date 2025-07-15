import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { addEvent } from '../../services/events';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../layouts/Sidebar';
import Navbar from '../../layouts/Navbar';

import '../../App.css'; // Import global styles

const PostEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    organizer: '',
    image: null,
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setEventData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEvent(eventData);
      toast.success('Event added successfully!');
      setEventData({
        title: '',
        description: '',
        date: '',
        location: '',
        organizer: '',
        image: null,
      });
      
      navigate('/allevents'); 
    } catch (error) {
      toast.error('Failed to add event. Try again.');
    }
  };

  return (
    <div className="post-event-container">
      {/* Sidebar */}
      <div className="post-event-sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="post-event-main">
        <div className='post-event-navbar'><Navbar /></div>
        <div className="post-event-form-container">
          <form onSubmit={handleSubmit} className="post-event-form">
            <h2 className="post-event-title">Post an Upcoming Event</h2>

            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={eventData.title}
              onChange={handleChange}
              required
              className="post-event-input"
            />

            <textarea
              name="description"
              placeholder="Event Description"
              value={eventData.description}
              onChange={handleChange}
              required
              className="post-event-input post-event-textarea"
            />

<input
  type="datetime-local"
  name="date"
  value={eventData.date}
  onChange={handleChange}
  required
  className="post-event-input"
/>


            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={eventData.location}
              onChange={handleChange}
              required
              className="post-event-input"
            />

            <input
              type="text"
              name="organizer"
              placeholder="Organizer Name"
              value={eventData.organizer}
              onChange={handleChange}
              required
              className="post-event-input"
            />

            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              required
              className="post-event-input post-event-file"
            />

            <button type="submit" className="post-event-button">Post Event</button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default PostEvent;
