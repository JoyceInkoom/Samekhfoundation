import React from 'react';

const BecomeAPartner = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Become a Partner/Sponsor</h1>
        <p style={styles.heroSubtitle}>
          Join us in igniting change and transforming lives through charity.
        </p>
      </div>

      {/* Introduction Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Partner/Sponsor Us?</h2>
        <p style={styles.sectionText}>
          Together, we can create a world where every child has access to quality education, food, proper healthcare and the
          opportunity to thrive. Your partnership will help us empower people, support communities,
          and drive sustainable change.
        </p>
      </div>

      {/* Image Gallery */}
      <div style={styles.gallery}>
        <img
          src="https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg"
          alt="Community Helping Hands"
          style={styles.galleryImage}
        />
        <img
          src="https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg"
          alt="Girls in School"
          style={styles.galleryImage}
        />
        <img
          src="https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg"
          alt="Teacher and Students"
          style={styles.galleryImage}
        />
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="Students Learning"
          style={styles.galleryImage}
        />
      </div>

      {/* Partnership Benefits Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Benefits of Partnership</h2>
        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <h3 style={styles.benefitTitle}>Impactful Change</h3>
            <p style={styles.benefitText}>
              Your support will directly impact the lives of girls and their communities, creating a
              ripple effect of positive change.
            </p>
          </div>
          <div style={styles.benefitCard}>
            <h3 style={styles.benefitTitle}>Global Reach</h3>
            <p style={styles.benefitText}>
              Join a global network of partners working together to advance education and gender
              equality.
            </p>
          </div>
          <div style={styles.benefitCard}>
            <h3 style={styles.benefitTitle}>Recognition</h3>
            <p style={styles.benefitText}>
              Gain visibility and recognition as a leader in social impact and corporate
              responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Make a Difference?</h2>
        <p style={styles.ctaText}>
          Contact us today to learn more about partnership opportunities and how you can contribute
          to our mission.
        </p>
        {/* <button style={styles.ctaButton}>Get in Touch</button> */}
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  heroSection: {
    backgroundImage:
      'url("https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    textAlign: 'center',
    color: '#fff',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    padding: '20px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  galleryImage: {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
    marginBottom: "40px"
  },
  benefitCard: {
    backgroundColor: '#fcecae',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
    textAlign: 'left',
  },
  benefitTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  benefitText: {
    fontSize: '1rem',
    color: '#555',
  },
  ctaSection: {
    backgroundColor: 'black',
    padding: '60px 20px',
    textAlign: 'center',
    color: '#fff',
    height: "150px"
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  ctaText: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 30px',
  },
  ctaButton: {
    backgroundColor: '#fff',
    color: 'black',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
};

export default BecomeAPartner;