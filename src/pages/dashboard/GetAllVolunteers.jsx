import React, { useState, useEffect } from 'react';
import { getAllVolunteers } from '../../services/volunteer'; 
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar'; 
import Navbar from '../../layouts/Navbar'; 

const GetAllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const data = await getAllVolunteers();
        if (data && Array.isArray(data.details)) {
          setVolunteers(data.details);
        } else {
          console.error("Data is not in the expected format", data);
        }
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      }
    };
    fetchVolunteers();
  }, []);

  const handleVolunteerClick = (id) => {
    navigate(`/volunteer/${id}`);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "250px",
         
        
          color: "white",
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div 
        style={{ 
          flex: 1, 
          marginLeft: "250px", 
          padding: "20px", 
          overflowY: "auto",
          width: "calc(100% - 250px)",
          backgroundImage: "url('https://images.pexels.com/photos/2908684/pexels-photo-2908684.jpeg')", // Background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
      >
        <Navbar />
        <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", marginTop: "70px", }}>All Volunteers</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {volunteers.length > 0 ? (
            volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                style={{
                  padding: "15px",
                  backgroundColor: "#fcecae",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onClick={() => handleVolunteerClick(volunteer.id)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {volunteer.firstName} {volunteer.lastName}
                </h3>
                <p>{volunteer.skills}</p>
                <p>{volunteer.email}</p>
              </div>
            ))
          ) : (
            <p>No volunteers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAllVolunteers;
