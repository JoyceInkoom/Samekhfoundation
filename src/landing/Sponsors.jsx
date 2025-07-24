
import sponsor1Logo from "../assets/images/kidult.jpg"; // Import your sponsor logos

import partner1Logo from "../assets/images/spo.jpg"; // Import your partner logos


const SponsorsPartners = () => {
  // Data for sponsors and partners (only two each)
  const sponsors = [
    {
      name: "Kidult Ventures",
      logo: sponsor1Logo,
      
    }
    
  ];

  const partners = [
    {
      name: "Mrs. Evelyn Adomako Amponsah",
      logo: partner1Logo,
      
    }
   
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Sponsors and Partners</h2>

      {/* Sponsors Section */}
      <div style={styles.section}>
        <h3 style={styles.subtitle}>Sponsors</h3>
        <div style={styles.grid}>
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={`sponsor-${index}`} data={sponsor} />
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div style={styles.section}>
        <h3 style={styles.subtitle}>Partners</h3>
        <div style={styles.grid}>
          {partners.map((partner, index) => (
            <SponsorCard key={`partner-${index}`} data={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable card component
const SponsorCard = ({ data }) => (
  <a
    href={data.website}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.card}
  >
    <img
      src={data.logo}
      alt={data.name}
      style={styles.logo}
    />
    <p style={styles.name}>{data.name}</p>
  </a>
);

// Styles
const styles = {
  container: {
    padding: "60px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "50px",
  },
  subtitle: {
    fontSize: "24px",
    color: "#3498db",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "60px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    textDecoration: "none",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
    padding: "25px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    }
  },
  logo: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    marginBottom: "20px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "0",
  }
};

export default SponsorsPartners;