import React, { useState, useEffect } from "react";
import "../App.css";

// Importing images
import heroImage1 from "../assets/images/hero4.jpg";
import heroImage2 from "../assets/images/hero3.jpg";
import heroImage3 from "../assets/images/hero6.jpg";

const slides = [
  {
    image: heroImage1,
    heading: "Transforming Lives with Sustainable Solutions",
    subheading: "Join us in making a difference, one step at a time.",
    button: "Learn More",
  },
  {
    image: heroImage2,
    heading: "Empowering Communities through Innovation",
    subheading: "Together, we can create a better future.",
    button: "Get Involved",
  },
  {
    image: heroImage3,
    heading: "Donate to Empower Communities",
    subheading: "Your Resources can create a better future.",
    button: "Donate Now",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger animation

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setAnimationKey((prevKey) => prevKey + 1); // Trigger re-animation
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Navigate to the next/previous slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setAnimationKey((prevKey) => prevKey + 1); // Trigger re-animation
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setAnimationKey((prevKey) => prevKey + 1); // Trigger re-animation
  };

  return (
    <div className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentIndex ? "active" : "inactive"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div
            className="hero-content"
            key={animationKey} // Reset animation on slide change
          >
            <h1>{slide.heading}</h1>
            <p>{slide.subheading}</p>
            <button>{slide.button}</button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="hero-arrow left-arrow" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="hero-arrow right-arrow" onClick={handleNext}>
        &#8250;
      </button>

      {/* Dots/Indicators */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
