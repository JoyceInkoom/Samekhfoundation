import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import background from "../assets/images/contact.jpg";
import { postContact } from "../services/contact";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isMobile, setIsMobile] = useState(false);

  // Check screen width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      await postContact(formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message, please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 20px",
        position: "relative",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Heading */}
      <h1
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "-20px",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Contact Us
      </h1>

      {/* Contact Container */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Responsive layout
          justifyContent: "space-between",
          gap: "20px",
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Section: Contact Form */}
        <div
          style={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "50px",
            padding: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 style={{ marginBottom: "45px", color: "#fff", fontSize: "1.5rem" }}>
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={{
                width: "90%",
                marginBottom: "25px",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
              }}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              style={{
                width: "90%",
                marginBottom: "25px",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
              }}
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              style={{
                width: "90%",
                marginBottom: "25px",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
              }}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              style={{
                width: "90%",
                marginBottom: "25px",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
              }}
              required
            ></textarea>
            <button
              type="submit"
              style={{
                width: "90%",
                marginTop: "20px",
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Address and Map (Hidden on Mobile) */}
        {!isMobile && (
          <div
            style={{
              flex: 1,
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "50px",
              padding: "20px",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Address Box */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <FaMapMarkerAlt style={{ color: "#fff", fontSize: "1.5rem" }} />
                <div>
                  <h3 style={{ marginBottom: "5px", color: "#fff", fontSize: "1.2rem" }}>
                    Our Address
                  </h3>
                  <p style={{ color: "#fff", fontSize: "1rem" }}>123 NGO Lane, Community 5, Ghana</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <FaPhoneAlt style={{ color: "#fff", fontSize: "1.5rem" }} />
                <div>
                  <h3 style={{ marginBottom: "5px", color: "#fff", fontSize: "1.2rem" }}>
                    Call Us
                  </h3>
                  <p style={{ color: "#fff", fontSize: "1rem" }}>+233 24 123 4567</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <FaEnvelope style={{ color: "#fff", fontSize: "1.5rem" }} />
                <div>
                  <h3 style={{ marginBottom: "5px", color: "#fff", fontSize: "1.2rem" }}>
                    Email
                  </h3>
                  <p style={{ color: "#fff", fontSize: "1rem" }}>info@yourngo.org</p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509517!2d-122.41941608468164!3d37.77492977975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7f4aafed%3A0x16b9d1bbff76e45a!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sgh!4v1675944451667!5m2!1sen!2sgh"
                width="100%"
                height="200"
                style={{
                  border: "0",
                  borderRadius: "10px",
                }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;