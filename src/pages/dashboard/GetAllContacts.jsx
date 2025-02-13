import React, { useEffect, useState } from "react";
import { getAllContact, deleteAllContact, deleteOneContact } from "../../services/contact"; 
import Sidebar from "../../layouts/Sidebar"; 
import Navbar from "../../layouts/Navbar"; 
import { useNavigate } from "react-router-dom"; 
import { FaTrash, FaEnvelope } from 'react-icons/fa'; 
import { toast } from 'react-toastify'; 

const GetAllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getAllContact();
        setContacts(data.details);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  const handleDeleteAll = async () => {
    try {
      await deleteAllContact();
      setContacts([]);
    } catch (error) {
      console.error("Error deleting all contacts:", error);
    }
  };

  const handleDeleteOne = async (contactId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (confirmDelete) {
      try {
        await deleteOneContact(contactId);
        setContacts(contacts.filter(contact => contact.id !== contactId));
        toast.success("Contact deleted successfully!");
      } catch (error) {
        console.error("Error deleting contact:", error);
        toast.error("Failed to delete contact.");
      }
    }
  };

  const handleRowClick = (contactId) => {
    navigate(`/contact/${contactId}`);
  };

  const handleSendNewsletter = () => {
    const emails = contacts.map(contact => contact.email).join(',');
    window.location.href = `mailto:${emails}`;
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto", backgroundImage: "url('https://images.pexels.com/photos/669502/pexels-photo-669502.jpeg')", // Background image URL
        backgroundSize: "cover",
        backgroundPosition: "center", }}>
        <Navbar />
        <div style={{ padding: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px", marginTop: "80px", color: "white" }}>
              All Contact Submissions
            </h1>
            <div>
              <button
                onClick={handleDeleteAll}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginTop: "80px",
                  marginRight: "16px"
                }}
              >
                Delete All Contacts
              </button>
              <button
                onClick={handleSendNewsletter}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#fcecae",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginTop: "80px"
                }}
              >
                Send Newsletter
              </button>
            </div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#fcecae", color: "black" }}>
              <tr>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>Name</th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>Email</th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>Send Email</th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>Phone</th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>Message</th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                key={contact.id}
                style={{ backgroundColor: "whitesmoke",  }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "whitesmoke"}
              >
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>{contact.name}</td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>{contact.email}</td>
                <td style={{ padding: "8px", border: "1px solid #ccc", textAlign: "center" }}>
                  <a href={`mailto:${contact.email}`} style={{ textDecoration: "none", color: "black" }}>
                    <FaEnvelope size={20} />
                  </a>
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>{contact.phone}</td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>{contact.message}</td>
                <td style={{ padding: "8px", border: "1px solid #ccc", textAlign: "center" }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteOne(contact.id);
                    }}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    <FaTrash style={{ color: "red", fontSize: "20px" }} />
                  </button>
                </td>
              </tr>
              
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetAllContacts;