import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import your project images (replace with actual imports)
import project1Img1 from '../assets/images/d1.jpg';
import project1Img2 from '../assets/images/d2.jpg';
import project1Img3 from '../assets/images/d3.jpg';
import project1Img4 from '../assets/images/d4.jpg';
import project1Img5 from '../assets/images/d5.jpg';
import project1Img6 from '../assets/images/d6.jpg';
import project1Img7 from '../assets/images/d7.jpg';
import project1Img8 from '../assets/images/d8.jpg';
import project1Img9 from '../assets/images/d9.jpg';
import project1Img10 from '../assets/images/d10.jpg';
import project2Img1 from '../assets/images/m1.jpg';
import project2Img10 from '../assets/images/m10.jpg';
import project2Img2 from '../assets/images/m2.jpg';
import project2Img3 from '../assets/images/m3.jpg';
import project2Img4 from '../assets/images/m4.jpg';
import project2Img5 from '../assets/images/m5.jpg';
import project2Img6 from '../assets/images/m6.jpg';
import project2Img7 from '../assets/images/m7.jpg';
import project2Img8 from '../assets/images/m8.jpg';
import project2Img9 from '../assets/images/m9.jpg';
import project3Img1 from '../assets/images/a1.jpg';
import project3Img2 from '../assets/images/a2.jpg';
import project3Img3 from '../assets/images/a3.jpg';
import project3Img4 from '../assets/images/a4.jpg';
import project3Img5 from '../assets/images/a5.jpg';
import project3Img6 from '../assets/images/a6.jpg';
import project3Img7 from '../assets/images/a7.jpg';
import project3Img8 from '../assets/images/a8.jpg';
import project3Img9 from '../assets/images/a9.jpg';
import project3Img10 from '../assets/images/a10.jpg';
import project4Img1 from '../assets/images/b1.jpg';
import project4Img10 from '../assets/images/b10.jpg';
import project4Img2 from '../assets/images/b2.jpg';
import project4Img3 from '../assets/images/b3.jpg';
import project4Img4 from '../assets/images/b4.jpg';
import project4Img5 from '../assets/images/b5.jpg';
import project4Img6 from '../assets/images/b6.jpg';
import project4Img7 from '../assets/images/b7.jpg';
import project4Img8 from '../assets/images/b8.jpg';
import project4Img9 from '../assets/images/b9.jpg';
import project5Img1 from '../assets/images/c1.jpg';
import project5Img2 from '../assets/images/c2.jpg';
import project5Img3 from '../assets/images/c3.jpg';
import project5Img4 from '../assets/images/c4.jpg';
import project5Img5 from '../assets/images/c5.jpg';
import project5Img6 from '../assets/images/c6.jpg';
import project5Img7 from '../assets/images/c7.jpg';
import project5Img8 from '../assets/images/c8.jpg';
import project6Img1 from '../assets/images/f1.jpg';
import project6Img2 from '../assets/images/f2.jpg';
import project6Img3 from '../assets/images/f3.jpg';
import project6Img4 from '../assets/images/f4.jpg';
import project6Img5 from '../assets/images/f5.jpg';
import project6Img6 from '../assets/images/f6.jpg';
import project6Img7 from '../assets/images/f7.jpg';
import project6Img8 from '../assets/images/f8.jpg';
import project6Img9 from '../assets/images/f9.jpg';
import project6Img10 from '../assets/images/f10.jpg';
// ... import all other images similarly


const ProjectsShowcase = () => {
  // Animation hooks
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [containerRef, containerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Project data
  const projects = [
    {
      id: 1,
      title: "Dodowa Rising Star Orphange Initiative",
      description: "Celebrating 25 years with Dodowa Rising Star Orphanage.",
      images: [project1Img1, project1Img2, project1Img3, project1Img4, project1Img5, project1Img6, project1Img7, project1Img8, project1Img9, project1Img10 /* add 8 more */]
    },
    {
      id: 2,
      title: "Medical Outreach Program",
      description: "Medical Outreach at Obregyimah, Adoagyiri Municipality.",
      images: [project2Img1, project2Img2, project2Img3, project2Img4, project2Img5, project2Img6, project2Img7, project2Img8, project2Img9, project2Img10 /* add 8 more */]
    },
    {
      id: 3,
      title: "Agricare Workshops",
      description: "Farmer engagement and education on the use of organic fertilizers.",
      images: [project3Img1, project3Img2, project3Img3, project3Img4, project3Img5, project3Img6, project3Img7, project3Img8, project3Img9, project3Img10 /* add 8 more */]
    },
    {
      id: 4,
      title: "Child Literacy Project",
      description: "Read and writing with 200 children.",
      images: [project4Img1, project4Img2, project4Img3, project4Img4, project4Img5, project4Img6, project4Img7, project4Img8, project4Img9, project4Img10 /* add 8 more */]
    },
    {
      id: 5,
      title: "Breast Cancer Sensitization and Screening",
      description: "Breast cancer screening for 250 women.",
      images: [project5Img1, project5Img2, project5Img3, project5Img4, project5Img5, project5Img6, project5Img7, project5Img8/* add 8 more */]
    },
    {
      id: 6,
      title: "Celebrating Widows and Orphans",
      description: "Celebrating widows project, Orphanage donations and birthday celebrations, feeding project.",
      images: [project6Img1, project6Img2, project6Img3, project6Img4, project6Img5, project6Img6, project6Img7, project6Img8, project6Img9, project6Img10 /* add 8 more */]
    }
  ];

  return (
    <div style={styles.container} ref={containerRef}>
      {/* Title Section */}
      <div
        ref={titleRef}
        style={{
          ...styles.titleSection,
          opacity: titleInView ? 1 : 0,
          transform: titleInView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      >
        <h1 style={styles.title}>Our Impactful Projects</h1>
        <p style={styles.subtitle}>See how we're transforming communities through sustainable initiatives</p>
      </div>

      {/* Projects Grid */}
      <div style={{
        ...styles.projectsGrid,
        opacity: containerInView ? 1 : 0,
        transition: 'opacity 0.8s ease 0.3s'
      }}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            isVisible={containerInView}
          />
        ))}
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, isVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Auto-rotate images when hovered
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % project.images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      ref={ref}
      style={{
        ...styles.projectCard,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div style={styles.carouselContainer}>
        <div style={styles.carouselTrack}>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            style={styles.carouselImage}
          />
        </div>
        
        {/* Navigation Arrows */}
        <button 
          style={styles.carouselArrowLeft} 
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          aria-label="Previous image"
        >
          <FiChevronLeft size={24} />
        </button>
        <button 
          style={styles.carouselArrowRight} 
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          aria-label="Next image"
        >
          <FiChevronRight size={24} />
        </button>
        
        {/* Dots Indicator */}
        <div style={styles.dotsContainer}>
          {project.images.map((_, idx) => (
            <button
              key={idx}
              style={{
                ...styles.dot,
                backgroundColor: currentImageIndex === idx ? '#4a6fa5' : '#ddd'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div style={styles.projectInfo}>
        <h3 style={styles.projectTitle}>{project.title}</h3>
        <p style={styles.projectDescription}>{project.description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Open Sans', sans-serif",
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#fcecae',
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '60px',
    padding: '0 20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '15px',
    background: 'linear-gradient(90deg, #4a6fa5, #6b8cce)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '40px',
    padding: '0 20px',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
    },
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
    height: '250px',
    overflow: 'hidden',
  },
  carouselTrack: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease',
  },
  carouselArrowLeft: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#4a6fa5',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transform: 'translateY(-50%) scale(1.1)',
    },
  },
  carouselArrowRight: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#4a6fa5',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transform: 'translateY(-50%) scale(1.1)',
    },
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  projectInfo: {
    padding: '25px',
  },
  projectTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '12px',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '0',
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '2rem',
    },
    subtitle: {
      fontSize: '1rem',
    },
    projectsGrid: {
      gridTemplateColumns: '1fr',
      gap: '30px',
    },
    carouselContainer: {
      height: '220px',
    },
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '30px 15px',
    },
    titleSection: {
      marginBottom: '40px',
    },
    projectCard: {
      ':hover': {
        transform: 'none',
      },
    },
  },
};

export default ProjectsShowcase;