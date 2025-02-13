import React, { useState } from "react";
import { toast } from "react-toastify";
import { signUpAsVolunteer } from "../services/volunteer";

const VolunteerSignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const volunteerDetails = await signUpAsVolunteer(formData);
      toast.success("Volunteer sign-up successful!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <div className="volunteer-form-container">
      <div className="form-header">
        <h1>Sign Up as a Volunteer</h1>
      </div>
  
      <button type="button" className="cancelbtn" onClick={handleCancel}>X</button>
      <form onSubmit={handleSubmit} className="volunteer-form">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
  
};

export default VolunteerSignUpForm;
