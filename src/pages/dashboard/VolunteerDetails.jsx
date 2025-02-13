import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVolunteerById, deleteVolunteer, updateVolunteer } from "../../services/volunteer";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerDetails = () => {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedVolunteer, setUpdatedVolunteer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const data = await getVolunteerById(id);
        setVolunteer(data.details);
        setUpdatedVolunteer(data.details);
      } catch (error) {
        toast.error("Error fetching volunteer details!");
      }
    };
    fetchVolunteer();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this volunteer?");
    
    if (confirmDelete) {
      try {
        await deleteVolunteer(id);
        toast.success("Volunteer deleted successfully!");
        setTimeout(() => {
          navigate("/allvolunteers");
        }, 2000); // Delay navigation by 2 seconds
      } catch (error) {
        toast.error("Error deleting volunteer!");
      }
    }
  };
  
  

  const handleUpdate = async () => {
    try {
      // Include only allowed fields
      const updateData = {
        firstName: updatedVolunteer.firstName,
        lastName: updatedVolunteer.lastName,
        email: updatedVolunteer.email,
        phone: updatedVolunteer.phone,
        skills: updatedVolunteer.skills,
      };
  
      await updateVolunteer(id, updateData);
      setShowModal(false);
      setVolunteer(updateData);
      toast.success("Volunteer updated successfully!");
    } catch (error) {
      toast.error("Error updating volunteer!");
    }
  };
  
  
  

  const handleBackClick = () => {
    navigate("/allvolunteers");
  };

  if (!volunteer) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-container">
    <Sidebar />
    <Navbar />
    <div className="details-container" style={{backgroundImage: "url('https://images.pexels.com/photos/2908684/pexels-photo-2908684.jpeg')", // Background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",}}>
      <div className="details-card">
        <h2>
          {volunteer.firstName} {volunteer.lastName}
        </h2>
        <p>Skills:{volunteer.skills}</p>
        <div>
          <p>Email: {volunteer.email}</p>
          <p>Phone: {volunteer.phone}</p>
          <p>Joined: {new Date(volunteer.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="button-group">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-warning"
          >
            Update Volunteer
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Volunteer
          </button>
        </div>
      </div>
    </div>
    <a href="/allvolunteers" className="back-button">
      Back to Volunteers
    </a>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <button onClick={() => setShowModal(false)} className="modal-close">
              ×
            </button>
            <h2>Update Volunteer</h2>
            <input
              type="text"
              value={updatedVolunteer.firstName}
              onChange={(e) => setUpdatedVolunteer({ ...updatedVolunteer, firstName: e.target.value })}
              placeholder="First Name"
            />
            <input
              type="text"
              value={updatedVolunteer.lastName}
              onChange={(e) => setUpdatedVolunteer({ ...updatedVolunteer, lastName: e.target.value })}
              placeholder="Last Name"
            />
            <input
              type="email"
              value={updatedVolunteer.email}
              onChange={(e) => setUpdatedVolunteer({ ...updatedVolunteer, email: e.target.value })}
              placeholder="Email"
            />
            <input
              type="text"
              value={updatedVolunteer.phone}
              onChange={(e) => setUpdatedVolunteer({ ...updatedVolunteer, phone: e.target.value })}
              placeholder="Phone"
            />
            <input
              type="text"
              value={updatedVolunteer.skills}
              onChange={(e) => setUpdatedVolunteer({ ...updatedVolunteer, skills: e.target.value })}
              placeholder="Skills"
            />
            <button onClick={handleUpdate} className="btn btn-success">
              Update
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default VolunteerDetails;
