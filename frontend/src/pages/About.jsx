import React, { useEffect, useState } from 'react';
import NewsLetter from '../shared/Newsletter'
import { Container,Row} from 'reactstrap'


const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <Container fluid className="p-0">
      
      
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: `'Poppins', 'Segoe UI', sans-serif`,
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      ></div>

      {/* Content box */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '3rem 2rem',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 0.8s ease, transform 0.6s ease',
          color: '#f9fafb',
          textAlign: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)';
        }}
      >
        <h1
          style={{
            fontSize: '2.7rem',
            marginBottom: '1.5rem',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.5px',
          }}
        >
          About Our Travel Agency
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            marginBottom: '1.2rem',
            lineHeight: '1.7',
            color: '#e0f2f1',
          }}
        >
          Welcome to our travel site! We specialize in dream vacations, curated tours,
          and unforgettable experiences. Whether you're planning a solo trip or a family
          getaway, we've got you covered.
        </p>

        <p
          style={{
            fontSize: '1.15rem',
            marginBottom: '2rem',
            lineHeight: '1.7',
            color: '#e0f2f1',
          }}
        >
          Our mission is to make travel hassle-free, fun, and personalized. With trusted
          partners and verified listings, you're just a click away from your next adventure.
        </p>

       
        
      </div>
      
      
     
      
    </div>
     <NewsLetter/>
     </Container>
     
    
   
  );
};

export default About;
