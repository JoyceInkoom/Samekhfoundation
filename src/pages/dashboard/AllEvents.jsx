import React, { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";
import getEvents from "../../services/events";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        const eventsData = response.deatils || [];
        eventsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const getCountdown = (date) => {
    const eventDate = new Date(date);
    const currentTime = new Date();
    const difference = eventDate.getTime() - currentTime.getTime();

    if (difference < 0) {
      return "Event has passed";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px", overflowY: "auto", backgroundImage: "url('https://images.pexels.com/photos/35773/peony-flower-white-summer.jpg')", // Background image URL
        backgroundSize: "cover",
        backgroundPosition: "center", }}>
          <h1 style={{ marginBottom: "20px", marginTop: "60px", color: "white" }}>
            All Projects
          </h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              {events &&
                events.map((event) => (
                  <Link
                    key={event.id}
                    to={`/events/${event.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      style={{
                        backgroundColor: "#fcecae",
                        borderRadius: "10px",
                        border: "1px solid #ddd",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        transition: "all 0.2s ease-in-out",
                        ":hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                          borderColor: "#ccc",
                        },
                      }}
                    >
                      <img
                        src={
                          `https://savefiles.org/${event.image[0]}?shareable_link=574` ||
                          "default-profile-image.jpg"
                        }
                        alt={event.title}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ padding: "20px" }}>
                        <h2
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginBottom: "10px",
                          }}
                        >
                          {event.title}
                        </h2>
                        <p>
                          <strong>Organizer:</strong> {event.organizer}
                        </p>
                        <p>
                          <strong>Date and Time:</strong>{" "}
                          {new Date(event.date).toLocaleString()}
                        </p>
                        <p>
                          <strong>Countdown:</strong> {getCountdown(event.date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
