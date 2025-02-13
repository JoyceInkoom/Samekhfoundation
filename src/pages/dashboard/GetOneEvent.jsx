import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";
import { getOneEvent, updateEvent, deleteEvent } from "../../services/events";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

// Custom styles for the modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px", // Reduced padding for a smaller modal
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.9)", // Slightly lighter shadow for a more subtle effect
    width: "400px", // Smaller width for the modal
    maxWidth: "90%",
    height: "70%", // Adjust the height automatically based on content
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Keep the same overlay effect
  },
};

Modal.setAppElement("#root");

const GetOneEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getOneEvent(eventId);

        if (response.details && response.details.date) {
          const eventDate = response.details.date;

          // Check if eventDate exists and includes 'T'
          if (eventDate && eventDate.includes("T")) {
            setEvent(response.details);
            setTitle(response.details.title);
            setDescription(response.details.description);
            setDate(eventDate.split("T")[0]); // Extract date
            setTime(eventDate.split("T")[1]?.slice(0, 5)); // Extract time safely
            setLocation(response.details.location);
            setOrganizer(response.details.organizer);
            setImages(response.details.image);
            setImagePreviews(
              response.details.image.map(
                (img) => `https://savefiles.org/${img}?shareable_link=574`
              )
            );
          } else {
            toast.error("Event date is in an incorrect format");
          }
        } else {
          toast.error("Event details or date not available");
        }
      } catch (error) {
        toast.error("Error fetching event");
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("date", `${date}T${time}`);
      formData.append("location", location);
      formData.append("organizer", organizer);
      for (let i = 0; i < images.length; i++) {
        formData.append("image", images[i]);
      }
      const response = await updateEvent(eventId, formData);
      toast.success("Event updated successfully");
      window.location.reload();
      setModalIsOpen(false);
    } catch (error) {
      toast.error("Error updating event");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteEvent(eventId);
      toast.success("Event deleted successfully");
      window.location.href = "/allevents";
    } catch (error) {
      toast.error("Error deleting event");
    }
  };

  const handleConfirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      handleDelete();
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images, ...files];
    setImages(newImages);

    const newImagePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newImagePreviews]);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Navbar />
      <div style={{ flex: 1, padding: "60px", overflowY: "auto" }}>
        <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
          Event Details
        </h1>
        {event && (
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {event.title}
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
                marginBottom: "10px",
              }}
            >
              {event.description}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
                marginBottom: "10px",
              }}
            >
              Date: {event.date ? event.date.split("T")[0] : "N/A"}
            </p>
            <p
              style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}
            >
              Time: {event.date ? event.date.split("T")[1]?.slice(0, 5) : "N/A"}
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
                marginBottom: "10px",
              }}
            >
              Location: {event.location}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
                marginBottom: "10px",
              }}
            >
              Organizer: {event.organizer}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              {imagePreviews.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Event Image"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <button
                style={{
                  backgroundColor: "black",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
                onClick={() => setModalIsOpen(true)}
              >
                Update Event
              </button>
              <button
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
                onClick={handleConfirmDelete}
              >
                Delete Event
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Update Event Modal"
      >
        <h2 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "15px" }}>
          Update Event
        </h2>
        <form
          onSubmit={handleUpdate}
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <label style={{ fontSize: "0.9rem", color: "#555" }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
            }}
          />
          <label style={{ fontSize: "0.9rem", color: "#555" }}>
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
              minHeight: "10px",
            }}
          />
          <label style={{ fontSize: "0.9rem", color: "#555" }}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
            }}
          />
          <label style={{ fontSize: "0.9rem", color: "#555" }}>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
            }}
          />
          <label style={{ fontSize: "0.9rem", color: "#555" }}>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
            }}
          />
          <label style={{ fontSize: "0.9rem", color: "#555" }}>
            Organizer:
          </label>
          <input
            type="text"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
            }}
          />
          <label style={{ fontSize: "0.9rem", color: "#555" }}>Images:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {imagePreviews.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Preview"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "black",
              color: "#fff",
              padding: "8px 18px",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "0.9rem",
              marginTop: "15px",
            }}
          >
            Update Event
          </button>
        </form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default GetOneEvent;
