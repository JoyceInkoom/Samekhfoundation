import React, { useState, useEffect, useRef } from "react";

const CharitySection = () => {
  const charityData = [
    {
      icon: "❤️", // Replace with an actual icon or image
      title: "What Charity Means",
      description:
        "Charity is the act of giving hope, love, and support to those in need. It’s about creating a world where everyone has the opportunity to thrive, regardless of their circumstances.",
    },
    {
      icon: "🤝", // Replace with an actual icon or image
      title: "Why We Do What We Do",
      description:
        "We believe in the power of compassion and collective action. Our mission is to empower communities, alleviate suffering, and create sustainable change for a brighter future.",
    },
  ];

  const solutionsData = [
    {
      icon: "🌍", // Replace with an actual icon or image
      title: "Our Vision",
      description:
        "To build a world where no one is left behind. We strive to create opportunities for growth, education, and well-being for all.",
    },
    {
      icon: "💡", // Replace with an actual icon or image
      title: "The Solution",
      description:
        "We provide innovative solutions to address the root causes of poverty and inequality. From education programs to sustainable development projects, we are committed to making a lasting impact.",
    },
    {
      icon: "👨‍🌾", // Replace with an actual icon or image
      title: "Empowering Communities",
      description:
        "We work directly with communities to understand their needs and provide tailored support. By empowering individuals, we help them build a better future for themselves and their families.",
    },
    {
      icon: "🌱", // Replace with an actual icon or image
      title: "Sustainable Change",
      description:
        "Our programs are designed to create long-term, sustainable change. We focus on education, healthcare, and economic empowerment to break the cycle of poverty.",
    },
  ];

  // State to track visibility of each section
  const [isVisible, setIsVisible] = useState({
    charity: false,
    solutions: false,
  });

  // Refs for the sections
  const charityRef = useRef(null);
  const solutionsRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (charityRef.current) observer.observe(charityRef.current);
    if (solutionsRef.current) observer.observe(solutionsRef.current);

    return () => {
      if (charityRef.current) observer.unobserve(charityRef.current);
      if (solutionsRef.current) observer.unobserve(solutionsRef.current);
    };
  }, []);

  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      {/* What Charity Means Section */}
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#2c3e50",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        About Charity
      </h2>
      <div
        ref={charityRef}
        data-section="charity"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto 60px",
          opacity: isVisible.charity ? 1 : 0,
          transform: isVisible.charity ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {charityData.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s ease-in-out",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#2c3e50",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#34495e",
                lineHeight: "1.6",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* The Solution Section */}
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#2c3e50",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        Here is What We Offer
      </h2>
      <div
        ref={solutionsRef}
        data-section="solutions"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          opacity: isVisible.solutions ? 1 : 0,
          transform: isVisible.solutions ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {solutionsData.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.9)",
              transition: "transform 0.3s ease-in-out",
              backgroundColor: "#f9f9f9",
              marginBottom: "40px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#2c3e50",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#34495e",
                lineHeight: "1.6",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharitySection;