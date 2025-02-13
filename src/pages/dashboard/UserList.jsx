import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/profile";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData.details); // Accessing the 'details' key to get the list of users
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="users-list-container" 
    style={{
      
      backgroundImage: "url('https://images.pexels.com/photos/189378/pexels-photo-189378.jpeg')", // Background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      
    }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <Navbar />

        <div className="content-container">
          {loading ? (
            <p>Loading Admins...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <div>
              <h2 className="page-title">All Admins</h2>
              <ul className="user-list"
               style={{
                width: "100%",
                maxWidth: "800px",
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.3)", // Glass effect background
                borderRadius: "10px",
                backdropFilter: "blur(10px)", // Glass effect blur
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                color: "white",
              }}>
                {users.map((user) => (
                  <li key={user.id} className="user-item">
                    <p>
                      <strong>Name:</strong> {user.firstName} {user.lastName}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
