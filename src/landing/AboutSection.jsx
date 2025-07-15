import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../App.css";

// Importing images for the About Section
import image1 from "../assets/images/ab1.jpg";
import image2 from "../assets/images/ab2.jpg";
import image3 from "../assets/images/ab3.jpg";
import image4 from "../assets/images/ab4.jpg";

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  // Automatically rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Use the useInView hook to detect when the section is in view
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="about-section">
      {/* Background Objects */}
      <div className="background-circle circle-1"></div>
      {/* <div className="background-circle circle-4"></div> */}
      {/* <div className="background-circle circle-5"></div> */}
      <div className="background-circle circle-6"></div>

      {/* Heading */}
      <div
        ref={headingRef}
        className="about-heading"
        style={{
          opacity: headingInView ? 1 : 0,
          transform: headingInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <div className="heading-text">
          <h1>Our Inspiration</h1>
        </div>
        <div className="circle"></div>
      </div>

      {/* Image Rotation on the Right */}
      <div
        ref={imageRef}
        className="image-rotation"
        style={{
          opacity: imageInView ? 1 : 0,
          transform: imageInView ? "translateX(0)" : "translateX(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Arrow between Image and Description */}
      {/* <div className="arrow"></div> */}

      {/* About Description in a Box */}
      <div
        ref={descriptionRef}
        className="about-description"
        style={{
          opacity: descriptionInView ? 1 : 0,
          transform: descriptionInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <p>
        What inspires us to do what we do is the belief that every individual deserves the opportunity to thrive, regardless of their circumstances. We are driven by the hope of creating lasting, positive change in the lives of those who need it most. Witnessing the resilience and potential within communities, we are motivated by the power of collective action, compassion, and the knowledge that even small efforts can create a ripple effect of transformation. We are inspired by the idea that together, we can build a world where hope, opportunity, and empowerment are accessible to all.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
