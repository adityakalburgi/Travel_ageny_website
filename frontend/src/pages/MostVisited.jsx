// MostVisited.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardWithCarousel from '../components/CardWithCarousel/CardWithCarousel.jsx';

// Import images from assets
import parisImg from '../assets/images/barcelona.jpeg';
import tokyoImg from '../assets/images/tokyo.jpeg';
import baliImg from '../assets/images/bali.jpeg';
import dubaiImg from '../assets/images/dubai.jpeg';
import barcelonaImg from '../assets/images/paris.jpg';
import nycImg from '../assets/images/NY.jpeg';
import londonImg from '../assets/images/London.jpeg';
import romeImg from '../assets/images/rome.jpeg';
import sydneyImg from '../assets/images/sydney.jpeg';


const MostVisited = () => {
  const [mostVisitedData, setMostVisitedData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data with real descriptions and local images where available
  const sampleData = [
    {
      id: 1,
      title: "Paris, France",
      description: "The City of Light with iconic Eiffel Tower. Airport: Charles de Gaulle (CDG). Daily budget: ₹6,000-₹40,000+. Visit nearby: Palace of Versailles, Giverny, Disneyland Paris.",
      images: [parisImg, parisImg, parisImg],
      visitCount: 1500
    },
    {
      id: 2,
      title: "Tokyo, Japan", 
      description: "Modern metropolis blending traditional culture with technology. Airports: Narita/Haneda. Daily budget: ₹7,000-₹50,000+. Nearby: Hakone, Kamakura, Nikko.",
      images: [tokyoImg,tokyoImg,tokyoImg],
      visitCount: 1200
    },
    {
      id: 3,
      title: "Bali, Indonesia",
      description: "Tropical paradise with beautiful beaches. Airport: Ngurah Rai (DPS). Daily budget: ₹2,500-₹20,000+. Explore: Nusa Islands, Gili Islands, Mount Batur.",
      images: [baliImg, baliImg, baliImg],
      visitCount: 1100
    },
    {
      id: 4,
      title: "Dubai, UAE",
      description: "Luxury destination with modern architecture. Airport: Dubai International (DXB). Daily budget: ₹5,000-₹45,000+. Visit: Abu Dhabi, Desert Safari, Hatta.",
      images: [dubaiImg, dubaiImg, dubaiImg], // Using your local Dubai image
      visitCount: 1000
    },
    {
      id: 5,
      title: "Barcelona, Spain",
      description: "Vibrant city with Gaudí architecture. Airport: Barcelona-El Prat (BCN). Daily budget: ₹5,500-₹35,000+. Day trips: Montserrat, Girona, Sitges.",
     images: [barcelonaImg, barcelonaImg, barcelonaImg],
      visitCount: 950
    },
    {
      id: 6,
      title: "New York City, USA",
      description: "The city that never sleeps. Airports: JFK/Newark/LaGuardia. Daily budget: ₹8,000-₹60,000+. Nearby: Brooklyn, Hudson Valley, Washington D.C.",
      images: [nycImg, nycImg, nycImg],
      visitCount: 900
    },
    {
      id: 7,
      title: "London, UK",
      description: "Historic city with royal palaces. Airport: Heathrow (LHR). Daily budget: ₹7,000-₹45,000+. Day trips: Windsor Castle, Bath & Stonehenge, Oxford.",
      images: [londonImg, londonImg, londonImg],
      visitCount: 850
    },
    {
      id: 8,
      title: "Rome, Italy",
      description: "Eternal city with ancient history. Airport: Fiumicino (FCO). Daily budget: ₹6,000-₹40,000+. Must see: Pompeii & Herculaneum, Tivoli, Ostia Antica.",
      images: [romeImg , romeImg , romeImg],
      visitCount: 800
    },
    {
      id: 9,
      title: "Sydney, Australia",
      description: "Harbor city with Opera House and beaches. Airport: Sydney Airport (SYD). Daily budget: ₹7,000-₹50,000+. Explore: Blue Mountains, Hunter Valley.",
      images: [sydneyImg, sydneyImg,sydneyImg],
      visitCount: 750
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostVisitedData(sampleData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className='most-visited-section' style={{ minHeight: '70vh', paddingTop: '100px' }}>
        <Container>
          <div className="text-center">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className="mt-3 text-muted">Loading Most Visited Places...</h4>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className='most-visited-section' style={{ minHeight: '70vh', paddingTop: '100px', paddingBottom: '50px' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-primary mb-3">Most Visited Places</h2>
          <p className="lead text-muted">Discover the world's most popular travel destinations</p>
        </div>
        
        <Row className="justify-content-center">
          {mostVisitedData.map((place, index) => (
            <Col lg="4" md="6" sm="12" className="mb-4 d-flex justify-content-center" key={place.id}>
              <CardWithCarousel 
                title={place.title}
                description={place.description}
                images={place.images}
                visitCount={place.visitCount}
                carouselId={`carousel-${place.id}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MostVisited;