
import { useInView } from "react-intersection-observer";
import image1 from "../assets/images/impact1.jpg";
import image2 from "../assets/images/impact2.jpg";
import image3 from "../assets/images/impact3.jpg";
import image4 from "../assets/images/impact4.jpg";

import image9 from "../assets/images/don1.jpg";
import image10 from "../assets/images/don2.jpg";
import image11 from "../assets/images/3.jpg";
import image12 from "../assets/images/don4.jpg";
import image13 from "../assets/images/don5.jpg";
import image14 from "../assets/images/6.jpg";
import image15 from "../assets/images/don7.jpg";
import image16 from "../assets/images/impact8.jpg";

const ImpactGallery = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Using local images from assets
  const images = [
    { src: image1, caption: "Students in our literacy program" },
    { src: image2, caption: "Children reading exercise" },
    { src: image3, caption: "Mobile education unit in action" },
    { src: image4, caption: "School Literacy Program" },
    { src: image9, caption: "Orphanage Donation" },
    { src: image10, caption: "Breast Cancer Screening Project" },
    { src: image11, caption: "Farmer Engagement and Education" },
    { src: image12, caption: "Community health workshop" },
    { src: image13, caption: "Community Engagement" },
    { src: image14, caption: " School Feeding Project" },
    { src: image15, caption: "Orphanage Donation" },
    { src: image16, caption: "Students in our literacy program" },
  ];

  return (
    <div style={{
      padding: "60px 20px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    }}>
      {/* Heading Section */}
      <div
        ref={headingRef}
        style={{
          opacity: headingInView ? 1 : 0,
          transform: headingInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#2c3e50",
          marginBottom: "20px",
        }}>
          Our Impact Gallery
        </h2>
      </div>

      {/* Paragraph Section */}
      <div
        ref={paragraphRef}
        style={{
          opacity: paragraphInView ? 1 : 0,
          transform: paragraphInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
          maxWidth: "800px",
          margin: "0 auto 40px",
        }}
      >
        <p style={{
          fontSize: "1.2rem",
          color: "#555",
          lineHeight: "1.6",
        }}>
          Witness the transformation through our education and health initiatives. Each image captures real stories of hope and progress in underserved communities.
        </p>
      </div>

      {/* Gallery Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
        transition: "opacity 1s ease, transform 1s ease",
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              aspectRatio: "4/3",
              ":hover": {
                transform: "scale(1.03)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <img
              src={image.src}
              alt={`Impact ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              padding: "12px",
              textAlign: "center",
              fontSize: "0.9rem",
            }}>
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactGallery;