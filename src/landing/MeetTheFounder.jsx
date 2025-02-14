import React from "react"; 
import { useInView } from "react-intersection-observer";
import founderImage from "../assets/images/founder.jpg"; // Replace with your actual image path
import useMediaQuery from '@mui/material/useMediaQuery'; // Import Material UI's useMediaQuery hook

const MeetTheFounder = () => {
  // Check if the screen size is mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Use the useInView hook to detect when the section is in view
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 20px",
        backgroundColor: "#fcecae",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Switch to column on mobile
          alignItems: "center",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {/* Founder Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateX(0)" : "translateX(50px)",
          }}
        >
          <img
            src={founderImage} // Use the imported image here
            alt="Founder"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          />
        </div>

        {/* Founder Description */}
        <div
          style={{
            flex: 1,
            textAlign: "left",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease, transform 0.5s ease",
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateX(0)" : "translateX(-50px)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#2c3e50",
              marginBottom: "20px",
            }}
          >
            Meet Our Founder
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#34495e",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            Our founder, with a rich history in entrepreneurship and leadership,
            is the driving force behind our mission. Their commitment to
            delivering high-quality products and fostering a positive impact on
            the community has shaped the company into what it is today.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#34495e",
              lineHeight: "1.6",
            }}
          >
            With a passion for innovation and sustainability, they lead the way
            in ensuring our company’s values remain at the forefront of
            everything we do. Their dedication to excellence is evident in the
            success we've achieved and the relationships we've built along the
            way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
