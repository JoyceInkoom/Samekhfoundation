import React from "react";
import {
  FaSearch,
  FaSmile,
  FaHandsHelping,
  FaAddressBook,
} from "react-icons/fa";

const Navbar = () => (
  <header className="admin-navbar">
    <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>
      Samekh Foundation
    </div>
    <div className="admin-navbar-links">
      <div
        className="admin-navbar-link"
        onClick={() => (window.location.href = "/allvolunteers")}
      >
        <FaHandsHelping className="admin-navbar-icon" />
        <span>All Volunteers</span>
      </div>

      <div
        className="admin-navbar-link"
        onClick={() => window.location.assign("/allcontacts")}
      >
        <FaAddressBook className="admin-navbar-icon" />
        <span>All Contacts</span>
      </div>
      <div
        className="admin-navbar-link"
        onClick={() => (window.location.href = "/allusers")}
      >
        <FaSmile className="admin-navbar-icon" />
        <span>All Admins</span>
      </div>
    </div>
  </header>
);

export default Navbar;
