import React from "react";

const HowWeOperate = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>How We Operate</h1>
        <p style={styles.heroSubtitle}>
          Our approach is rooted in community-driven solutions, ensuring
          sustainable and impactful change for girls and their communities.
        </p>
      </div>

      {/* Introduction Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Model of Change</h2>
        <p style={styles.sectionText}>
          We work hand-in-hand with local communities, governments, and partners
          to create a supportive ecosystem that empowers girls to thrive. Our
          model focuses on education, mentorship, and sustainable development.
        </p>
      </div>

      {/* Image and Text Section */}
      <div style={styles.imageTextSection}>
        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
          alt="Girls in School"
          style={styles.imageTextImage}
        />
        <div style={styles.imageTextContent}>
          <h2 style={styles.imageTextTitle}>Community-Led Solutions</h2>
          <p style={styles.imageTextText}>
            We believe in the power of local communities to drive change. Our
            programs are designed and implemented with the active participation
            of community members, ensuring they are culturally relevant and
            sustainable.
          </p>
        </div>
      </div>

      {/* Key Principles Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Key Principles</h2>
        <div style={styles.principlesGrid}>
          <div style={styles.principleCard}>
            <h3 style={styles.principleTitle}>Empowerment</h3>
            <p style={styles.principleText}>
              We empower girls through education, mentorship, and leadership
              training, enabling them to break the cycle of poverty.
            </p>
          </div>
          <div style={styles.principleCard}>
            <h3 style={styles.principleTitle}>Sustainability</h3>
            <p style={styles.principleText}>
              Our programs are designed to create long-term, sustainable change
              by addressing the root causes of inequality.
            </p>
          </div>
          <div style={styles.principleCard}>
            <h3 style={styles.principleTitle}>Collaboration</h3>
            <p style={styles.principleText}>
              We collaborate with local governments, schools, and communities to
              ensure our programs are effective and scalable.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Join Us in Making a Difference</h2>
        <p style={styles.ctaText}>
          Together, we can create a world where every girl has the opportunity to learn, lead, and
          thrive. Get involved today!
        </p>
        <button style={styles.ctaButton}>Get Involved</button>
      </div> */}
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
    marginTop: "60px",
  },
  heroSection: {
    backgroundImage:
      'url("https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 20px",
    textAlign: "center",
    color: "#fff",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  section: {
    padding: "20px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    marginTop: "-10px",
  },
  sectionText: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  imageTextSection: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px",
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  imageTextImage: {
    width: "500px",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  imageTextContent: {
    flex: 1,
    minWidth: "300px",
    textAlign: "left",
  },
  imageTextTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  imageTextText: {
    fontSize: "1.1rem",
    color: "#555",
  },
  principlesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "10px",
  },
  principleCard: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  principleTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  principleText: {
    fontSize: "1rem",
    color: "#555",
  },
  ctaSection: {
    backgroundColor: "#4CAF50",
    padding: "80px 20px",
    textAlign: "center",
    color: "#fff",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  ctaText: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto 30px",
  },
  ctaButton: {
    backgroundColor: "#fff",
    color: "#4CAF50",
    padding: "15px 30px",
    border: "none",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

export default HowWeOperate;
