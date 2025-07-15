
import { useInView } from "react-intersection-observer";
import SheilaImage from "../assets/images/sheila.jpg";

const HowWeOperate = () => {
  // Hero Section
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Introduction Section
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Image and Text Section
  const [imageTextRef, imageTextInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Key Principles Section
  const [principlesRef, principlesInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Call to Action Section
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div
        ref={heroRef}
        style={{
          ...styles.heroSection,
          opacity: heroInView ? 1 : 0,
          transform: heroInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h1 style={styles.heroTitle}>How We Operate</h1>
        <p style={styles.heroSubtitle}>
          Our approach is rooted in community-driven solutions, ensuring
          sustainable and impactful change for girls and their communities.
        </p>
      </div>

      {/* Introduction Section */}
      <div
        ref={introRef}
        style={{
          ...styles.section,
          opacity: introInView ? 1 : 0,
          transform: introInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h2 style={styles.sectionsTitle}>Our Model of Change</h2>
        <p style={styles.sectionText}>
          We work hand-in-hand with local communities, governments, and partners
          to create a supportive ecosystem that empowers girls to thrive. Our
          model focuses on education, mentorship, and sustainable development.
        </p>
      </div>

      {/* Image and Text Section */}
      <div
        ref={imageTextRef}
        style={{
          ...styles.imageTextSection,
          opacity: imageTextInView ? 1 : 0,
          transform: imageTextInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <img
         src={SheilaImage}
          alt="Mrs. Sheila Hanson"
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
      <div
        ref={principlesRef}
        style={{
          ...styles.section,
          opacity: principlesInView ? 1 : 0,
          transform: principlesInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h2 style={styles.sectionTitle}>Our Key Principles</h2>
        <div style={styles.principlesGrid}>
          <div
            style={{
              ...styles.principleCard,
              opacity: principlesInView ? 1 : 0,
              transform: principlesInView ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
            }}
          >
            <h3 style={styles.principleTitle}>Empowerment</h3>
            <p style={styles.principleText}>
              We empower girls through education, mentorship, and leadership
              training, enabling them to break the cycle of poverty.
            </p>
          </div>
          <div
            style={{
              ...styles.principleCard,
              opacity: principlesInView ? 1 : 0,
              transform: principlesInView ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
            }}
          >
            <h3 style={styles.principleTitle}>Sustainability</h3>
            <p style={styles.principleText}>
              Our programs are designed to create long-term, sustainable change
              by addressing the root causes of inequality.
            </p>
          </div>
          <div
            style={{
              ...styles.principleCard,
              opacity: principlesInView ? 1 : 0,
              transform: principlesInView ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
            }}
          >
            <h3 style={styles.principleTitle}>Collaboration</h3>
            <p style={styles.principleText}>
              We collaborate with local governments, schools, and communities to
              ensure our programs are effective and scalable.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div
        ref={ctaRef}
        style={{
          ...styles.ctaSection,
          opacity: ctaInView ? 1 : 0,
          transform: ctaInView ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h2 style={styles.ctaTitle}>Join Us in Making a Difference</h2>
        <p style={styles.ctaText}>
          Together, we can create a world where every girl has the opportunity to
          learn, lead, and thrive. Get involved today!
        </p>
        <button style={styles.ctaButton}>Get Involved</button>
      </div> */}
    </div>
  );
};

// Inline Styles (same as before)
const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    lineHeight: "1.6",
    marginTop: "60px",
  },
  heroSection: {
    // backgroundImage:
    //   'url("https://images.pexels.com/photos/13594176/pexels-photo-13594176.jpeg")',
    backgroundColor: "#fcecae",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px 20px",
    textAlign: "center",
    color: "black",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "400",
    marginBottom: "20px",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    maxWidth: "800px",
    margin: "0 auto",
    fontWeight: "200",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
  },
  section: {
    padding: "10px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#2c3e50",
    marginTop: "-20px"
  },
  sectionsTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#2c3e50",
    
  },
  sectionText: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#555",
  },
  imageTextSection: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  imageTextImage: {
    width: "500px",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
  },
  imageTextContent: {
    flex: 1,
    minWidth: "300px",
    textAlign: "left",
  },
  imageTextTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  imageTextText: {
    fontSize: "1.1rem",
    color: "#555",
  },
  principlesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "10px",
  },
  principleCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  principleTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#2c3e50",
    marginTop: "-20px"
  },
  principleText: {
    fontSize: "1rem",
    color: "#555",
  },
  ctaSection: {
    backgroundColor: "#4CAF50",
    padding: "100px 20px",
    textAlign: "center",
    color: "#fff",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
  },
  ctaText: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto 30px",
    fontWeight: "300",
  },
  ctaButton: {
    backgroundColor: "#fff",
    color: "#4CAF50",
    padding: "15px 30px",
    border: "none",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

export default HowWeOperate;