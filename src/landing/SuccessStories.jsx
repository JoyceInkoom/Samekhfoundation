import React, { useRef } from "react";
import CountUp from "react-countup";
import { Carousel } from "react-responsive-carousel";
import { useInView } from "react-intersection-observer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SuccessStories = () => {
  // Use the useInView hook to detect when the counters are in view
  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // Use the useInView hook to detect when the carousel is in view
  const { ref: carouselRef, inView: carouselInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // Data for success stories
  const stories = [
    {
      image:
        "https://images.pexels.com/photos/19986545/pexels-photo-19986545/free-photo-of-schoolgirl-writing-on-paper.jpeg",
      title: "Education for All",
      description:
        "We helped build schools in rural areas, providing education to over 1,000 children.",
    },
    {
      image:
        "https://images.pexels.com/photos/13613219/pexels-photo-13613219.jpeg",
      title: "Clean Water Initiative",
      description:
        "Our clean water projects have provided safe drinking water to 5,000 families.",
    },
    {
      image:
        "https://images.pexels.com/photos/11756810/pexels-photo-11756810.jpeg",
      title: "Healthcare Access",
      description:
        "We set up mobile clinics that have treated over 10,000 patients in underserved areas.",
    },
  ];

  // Data for impact counters
  const impactData = [
    { number: 10000, label: "Lives Impacted" },
    { number: 50, label: "Projects Completed" },
    { number: 5000, label: "Volunteers Engaged" },
    { number: 1000000, label: "Funds Raised ($)" },
  ];

  return (
    <div
      style={{
        padding: "5px 20px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#2c3e50",
          marginBottom: "40px",
        }}
      >
        Success Stories and Impact
      </h2>

      {/* Impact Counters */}
      <div
        ref={counterRef}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          marginBottom: "60px",
          opacity: counterInView ? 1 : 0,
          transform: counterInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {impactData.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              backgroundColor: "#fcecae",
              width: "200px",
            }}
          >
            {/* Only animate the counter when in view */}
            {counterInView && (
              <CountUp
                start={0}
                end={item.number}
                duration={3}
                delay={0}
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "black",
                }}
              />
            )}
            <p
              style={{ fontSize: "18px", color: "#34495e", marginTop: "10px" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Success Stories Carousel */}
      <div
        ref={carouselRef}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          opacity: carouselInView ? 1 : 0,
          transform: carouselInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#fcecae",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={story.image}
                alt={story.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                  margin: "20px 0 10px",
                }}
              >
                {story.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#34495e",
                  lineHeight: "1.6",
                }}
              >
                {story.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SuccessStories;