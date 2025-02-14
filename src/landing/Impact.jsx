import React from "react";
import { useInView } from "react-intersection-observer";

const ImpactGallery = () => {
  // Use the useInView hook for animations
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

//   const { ref: galleryRef, inView: galleryInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

  // Sample image URLs (replace with your own images)
  const images = [
    "https://images.pexels.com/photos/20903274/pexels-photo-20903274/free-photo-of-family-against-rural-background.jpeg",
    "https://images.pexels.com/photos/11350470/pexels-photo-11350470.jpeg",
    "https://images.pexels.com/photos/3277188/pexels-photo-3277188.jpeg",
    "https://images.pexels.com/photos/11834966/pexels-photo-11834966.jpeg",
    "https://images.pexels.com/photos/27638661/pexels-photo-27638661/free-photo-of-a-group-of-children-and-adults-posing-for-a-photo.jpeg",
    "https://images.pexels.com/photos/28988234/pexels-photo-28988234/free-photo-of-young-vendor-balancing-goods-outdoors.jpeg",
    "https://images.pexels.com/photos/8280844/pexels-photo-8280844.jpeg",
    "https://images.pexels.com/photos/12714976/pexels-photo-12714976.jpeg",
    // "https://images.pexels.com/photos/3871782/pexels-photo-3871782.jpeg",
    // "https://images.pexels.com/photos/11633401/pexels-photo-11633401.jpeg",
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
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
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: "20px",
          }}
        >
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
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Explore the impact we've made through our projects and initiatives. Each image tells a story of hope, change, and transformation.
        </p>
      </div>

      {/* Gallery Section */}
      <div
        
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        //   opacity: galleryInView ? 1 : 0,
        //   transform: galleryInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
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
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <img
              src={image}
              alt={`Impact ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                padding: "10px",
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              Impact Story {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactGallery;