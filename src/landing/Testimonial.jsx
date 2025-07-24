import { useState, useEffect } from "react";
import testimonial1 from "../assets/images/testimonial5.jpg";
import testimonial2 from "../assets/images/testimonial2.jpg";
import testimonial3 from "../assets/images/testimonial3.jpg";
import testimonial4 from "../assets/images/testimonial4.jpg";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: "Gifty Kpabitey",
      role: "Parent & School Volunteer",
      image: testimonial1,
      testimonial:
        "The health screening program caught my daughter's vision problems early. Now she can see the blackboard clearly and her grades have improved dramatically. This service is transforming children's lives!",
    },
    {
      id: 2,
      name: "Yacouba Otoo",
      role: "Pediatrician",
      image: testimonial2,
      testimonial:
        "As a teacher, I've seen firsthand how regular health checks combined with quality education leads to healthier, more successful children. This NGO's holistic approach is exactly what our community needed.",
    },
    {
      id: 3,
      name: "Josephine Ohene Okanta",
      role: "Elementary School Principal",
      image: testimonial3,
      testimonial:
        "Since partnering with this organization, our students' attendance has increased by 40%. Healthy children learn better, and their education programs complement our curriculum perfectly.",
    },
    {
      id: 4,
      name: "Pascal Agbeko",
      role: "Community Leader",
      image: testimonial4,
      testimonial:
        "The mobile health clinics and after-school tutoring have been game-changers for our rural community. Children who never had access to these services are now thriving academically and physically.",
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
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Impact Stories
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                margin: "0 auto 15px",
                objectFit: "cover",
                border: "3px solid #fcecae",
              }}
            />
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "10px", fontStyle: "italic" }}>
              {testimonial.testimonial}
            </p>
            <p style={{ fontSize: "18px", color: "#333", fontWeight: "bold" }}>
              {testimonial.name}
            </p>
            <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;