import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      image:
        "https://images.pexels.com/photos/7970114/pexels-photo-7970114.jpeg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    },
    {
      id: 2,
      name: "Jane Doe",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    },
    {
      id: 3,
      name: "Bob Smith",
      image:
        "https://images.pexels.com/photos/1068209/pexels-photo-1068209.jpeg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    },
    {
      id: 4,
      name: "Bob Smith",
      image:
        "https://images.pexels.com/photos/1068209/pexels-photo-1068209.jpeg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    },
  ]);

  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTestimonials(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="testimonials-container"
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#fcecae",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        opacity: showTestimonials ? 1 : 0,
        transform: showTestimonials ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        What Our Clients Say
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // Make grid responsive
          gap: "20px",
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                margin: "0 auto",
              }}
            />
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              {testimonial.testimonial}
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
