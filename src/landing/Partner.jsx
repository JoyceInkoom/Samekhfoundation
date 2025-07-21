
import { useInView } from 'react-intersection-observer';
import communityHelping from '../assets/images/partner1.jpg';
import girlsInSchool from '../assets/images/partner2.jpg';
import teacherStudents from '../assets/images/partner3.jpg';
import studentsLearning from '../assets/images/partner4.jpg';
import heroBackground from '../assets/images/partner0.jpg';

const BecomeAPartner = () => {
  // Animation hooks
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div
        ref={heroRef}
        style={{
          ...styles.heroSection,
          backgroundImage: `url(${heroBackground})`,
          opacity: heroInView ? 1 : 0,
          transform: heroInView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <h1 style={styles.heroTitle}>Become a Partner/Sponsor</h1>
        <p style={styles.heroSubtitle}>
          Join us in igniting change and transforming lives through charity.
        </p>
      </div>

      {/* Introduction Section */}
      <div
        ref={introRef}
        style={{
          ...styles.section,
          opacity: introInView ? 1 : 0,
          transform: introInView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <h2 style={styles.sectionTitle}>Why Partner/Sponsor Us?</h2>
        <p style={styles.sectionText}>
          Together, we can create a world where every child has access to quality education, food,
          proper healthcare, and the opportunity to thrive. Your partnership will help us empower
          people, support communities, and drive sustainable change.
        </p>
      </div>

      {/* Image Gallery */}
      <div
        ref={galleryRef}
        style={{
          ...styles.gallery,
          opacity: galleryInView ? 1 : 0,
          transform: galleryInView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <img
          src={communityHelping}
          alt="Community Helping Hands"
          style={styles.galleryImage}
        />
        <img
          src={girlsInSchool}
          alt="Girls in School"
          style={styles.galleryImage}
        />
        <img
          src={teacherStudents}
          alt="Teacher and Students"
          style={styles.galleryImage}
        />
        <img
          src={studentsLearning}
          alt="Students Learning"
          style={styles.galleryImage}
        />
      </div>

      {/* Partnership Benefits Section */}
      <div
        ref={benefitsRef}
        style={{
          ...styles.section,
          opacity: benefitsInView ? 1 : 0,
          transform: benefitsInView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <h2 style={styles.sectionTitle}>Benefits of Partnership</h2>
        <div style={styles.benefitsGrid}>
          <div
            style={{
              ...styles.benefitCard,
              opacity: benefitsInView ? 1 : 0,
              transform: benefitsInView ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
            }}
          >
            <h3 style={styles.benefitTitle}>Impactful Change</h3>
            <p style={styles.benefitText}>
              Your support will directly impact the lives of girls and their communities, creating a
              ripple effect of positive change.
            </p>
          </div>
          <div
            style={{
              ...styles.benefitCard,
              opacity: benefitsInView ? 1 : 0,
              transform: benefitsInView ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
            }}
          >
            <h3 style={styles.benefitTitle}>Global Reach</h3>
            <p style={styles.benefitText}>
              Join a global network of partners working together to advance education and gender
              equality.
            </p>
          </div>
          <div
            style={{
              ...styles.benefitCard,
              opacity: benefitsInView ? 1 : 0,
              transform: benefitsInView ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 1s ease 0.6s, transform 1s ease 0.6s',
            }}
          >
            <h3 style={styles.benefitTitle}>Recognition</h3>
            <p style={styles.benefitText}>
              Gain visibility and recognition as a leader in social impact and corporate
              responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  heroSection: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
    }
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    position: 'relative',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
  },
  section: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  sectionText: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#555',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
  },
  galleryImage: {
    width: '100%',
    maxWidth: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.03)',
    }
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  benefitCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
    }
  },
  benefitTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#2c3e50',
  },
  benefitText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default BecomeAPartner;