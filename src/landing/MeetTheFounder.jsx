
import { useInView } from "react-intersection-observer";
import useMediaQuery from '@mui/material/useMediaQuery';
import founder1Image from "../assets/images/founder1.jpg";
import founder2Image from "../assets/images/founder2.jpg";

const MeetTheFounders = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const founders = [
    {
      id: 1,
      name: "Mrs. Sheila Hanson",
      role: "Co-Founder & CEO",
      image: founder1Image,
      description: "Visionary leader with 15+ years in social entrepreneurship. Expertise in strategic planning and community development.",
      funFact: "Climate Smart Activist!"
    },
    {
      id: 2,
      name: "Pastor Hanson",
      role: "Co-Founder & CTO",
      image: founder2Image,
      description: "Visionary leader with 15+ years in social entrepreneurship. Expertise in strategic planning and community development.",
      funFact: "Loves to read and write."
    }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: isMobile ? "50px 15px" : "70px 20px",
        backgroundColor: "#fcecae",
        textAlign: "center",
      }}
    >
      <h2 style={{
        fontSize: isMobile ? "28px" : "36px",
        fontWeight: "600",
        color: "#2c3e50",
        marginBottom: "15px",
      }}>
        Meet Our Founders
      </h2>
      <p style={{
        fontSize: isMobile ? "14px" : "16px",
        color: "#7f8c8d",
        maxWidth: "600px",
        margin: "0 auto 40px",
        lineHeight: "1.5"
      }}>
        The passionate individuals behind our organization
      </p>

      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "50px" : "60px"
      }}>
        {founders.map((founder, index) => (
          <div
            key={founder.id}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : (index % 2 === 0 ? "row" : "row-reverse"),
              alignItems: "center",
              gap: isMobile ? "25px" : "40px",
            }}
          >
            {/* Founder Image */}
            <div
              style={{
                flex: 1,
                transition: "all 0.5s ease",
                opacity: sectionInView ? 1 : 0,
                transform: sectionInView 
                  ? "translateX(0)" 
                  : (index % 2 === 0 ? "translateX(30px)" : "translateX(-30px)"),
                maxWidth: isMobile ? "250px" : "300px"
              }}
            >
              <div style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                aspectRatio: "1/1"
              }}>
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Founder Description */}
            <div
              style={{
                flex: 1,
                textAlign: isMobile ? "center" : (index % 2 === 0 ? "left" : "right"),
                padding: isMobile ? "20px" : "25px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
                transition: "all 0.5s ease",
                opacity: sectionInView ? 1 : 0,
                transform: sectionInView 
                  ? "translateX(0)" 
                  : (index % 2 === 0 ? "translateX(-30px)" : "translateX(30px)"),
                maxWidth: isMobile ? "100%" : "450px"
              }}
            >
              <h3 style={{
                fontSize: isMobile ? "20px" : "24px",
                fontWeight: "600",
                color: "#2c3e50",
                marginBottom: "5px"
              }}>
                {founder.name}
              </h3>
              <p style={{
                fontSize: "14px",
                color: "#f39c12",
                fontWeight: "500",
                marginBottom: "15px"
              }}>
                {founder.role}
              </p>
              
              <p style={{
                fontSize: isMobile ? "14px" : "15px",
                color: "#34495e",
                lineHeight: "1.6",
                marginBottom: "15px"
              }}>
                {founder.description}
              </p>
              
              <div style={{
                backgroundColor: "#fcecae",
                padding: "10px 15px",
                borderRadius: "6px",
                display: "inline-block"
              }}>
                <p style={{
                  fontSize: "13px",
                  color: "#2c3e50",
                  margin: "0",
                  fontStyle: "italic"
                }}>
                  <span style={{ fontWeight: "600" }}>Fun fact:</span> {founder.funFact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheFounders;