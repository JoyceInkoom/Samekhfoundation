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
    <div className="volunteer-container">
      {/* Sidebar */}
      <div className="volunteer-sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="volunteer-main-content">
        <Navbar />
        <h1 className="volunteer-header">All Volunteers</h1>
        
        <div className="volunteer-cards">
          {volunteers.length > 0 ? (
            volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className="volunteer-card"
                onClick={() => handleVolunteerClick(volunteer.id)}
              >
                <h3 className="volunteer-name">
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
