import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar2 from "../landing/Navbar2"; // Adjust the path if necessary
import Footer from "../landing/Footer"; // Adjust the path if necessary

const About = () => {
  // Use the useInView hook for animations
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* Navbar */}
      <Navbar2 />

      {/* Heading Section */}
      <div
        ref={headingRef}
        style={{
          opacity: headingInView ? 1 : 0,
          transform: headingInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
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
          About Us
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#34495e",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          We are a non-profit organization dedicated to making a positive impact
          in the world. Our mission is to empower communities, protect the
          environment, and create opportunities for those in need.
        </p>
      </div>

      {/* Content Section */}
      <div
        ref={contentRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          marginTop: "60px",
          opacity: contentInView ? 1 : 0,
          transform: contentInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Image */}
          <div
            ref={imageRef}
            style={{
              flex: 1,
              opacity: imageInView ? 1 : 0,
              transform: imageInView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            <img
              src="https://images.pexels.com/photos/8061642/pexels-photo-8061642.jpeg"
              alt="Our Team"
              style={{
                width: "100%",
                borderRadius: "50px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Text Content */}
          <div
            style={{
              flex: 1,
              textAlign: "left",
              opacity: contentInView ? 1 : 0,
              transform: contentInView ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "20px",
                marginTop: "-20px"
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#34495e",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              We believe in the power of collective action to drive meaningful
              change. Through our programs and initiatives, we aim to create a
              sustainable future for all.
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "20px",
              }}
            >
              Our Vision
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#34495e",
                lineHeight: "1.6",
              }}
            >
              A world where every individual has access to education, healthcare,
              and opportunities to thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
