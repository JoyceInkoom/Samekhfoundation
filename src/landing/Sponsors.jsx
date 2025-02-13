import React from "react";

const SponsorsPartners = () => {
  // Data for sponsors and partners
  const sponsors = [
    {
      name: "Company A",
      logo: "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg",
      website: "https://example.com",
    },
    {
      name: "Company B",
      logo: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg",
      website: "https://example.com",
    },
    {
      name: "Company C",
      logo: "https://images.pexels.com/photos/1769735/pexels-photo-1769735.jpeg",
      website: "https://example.com",
    },
    {
      name: "Company D",
      logo: "https://images.pexels.com/photos/3581855/pexels-photo-3581855.jpeg",
      website: "https://example.com",
    },
    {
      name: "Company E",
      logo: "https://images.pexels.com/photos/4389667/pexels-photo-4389667.jpeg",
      website: "https://example.com",
    },
    
  ];

  return (
    <div
      style={{
        padding: "50px 10px",
        backgroundColor: "#fff",
        textAlign: "center",
        marginTop: "-20px"
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
        Our Sponsors and Partners
      </h2>

      {/* Sponsors and Partners Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.8)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.8)";
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorsPartners;