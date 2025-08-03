import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../shared/CommonSection'
import '../styles/about.css'
import experienceImg from '../assets/images/experience.png'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/subtitle'
import NewsLetter from '../shared/Newsletter'

const About = () => {
   return (
      <>
         <CommonSection title={'About Us'} />
         
         {/* ========== ABOUT INTRO SECTION ========== */}
         <section className="about__intro">
            <Container>
               <Row>
                  <Col lg="6">
                     <div className="about__content">
                        <div className="hero__subtitle d-flex align-items-center">
                           <Subtitle subtitle={'Our Story'} />
                           <img src={worldImg} alt="world" />
                        </div>
                        <h2 className="about__title">
                           Creating Unforgettable Journeys <span className="highlight">Since 2004</span>
                        </h2>
                        <p className="about__description">
                           Welcome to our travel agency, where wanderlust meets exceptional service. 
                           For over two decades, we've been dedicated to turning your travel dreams 
                           into reality, one adventure at a time.
                        </p>
                        <p className="about__description">
                           Founded with a passion for exploration and a commitment to excellence, 
                           we believe that travel has the power to transform lives, broaden perspectives, 
                           and create memories that last a lifetime.
                        </p>
                     </div>
                  </Col>
                  <Col lg="6">
                     <div className="about__img">
                        <img src={experienceImg} alt="About us" className="about__image" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* ========== MISSION & VISION SECTION ========== */}
         <section className="mission__section">
            <Container>
               <Row>
                  <Col lg="12">
                     <div className="section__header text-center">
                        <Subtitle subtitle={'Our Purpose'} />
                        <h2 className="section__title">Mission & Vision</h2>
                     </div>
                  </Col>
               </Row>
               <Row className="mt-5">
                  <Col lg="6">
                     <div className="mission__card">
                        <div className="mission__icon">
                           <i className="ri-rocket-line"></i>
                        </div>
                        <h3>Our Mission</h3>
                        <p>
                           To provide exceptional travel experiences that exceed expectations, 
                           offering personalized service, carefully curated destinations, and 
                           seamless journeys that create lasting memories for every traveler.
                        </p>
                     </div>
                  </Col>
                  <Col lg="6">
                     <div className="mission__card">
                        <div className="mission__icon">
                           <i className="ri-eye-line"></i>
                        </div>
                        <h3>Our Vision</h3>
                        <p>
                           To be the world's most trusted travel partner, inspiring people to 
                           explore the beauty of our planet while promoting sustainable tourism 
                           that benefits local communities and preserves destinations for future generations.
                        </p>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* ========== VALUES SECTION ========== */}
         <section className="values__section">
            <Container>
               <Row>
                  <Col lg="12">
                     <div className="section__header text-center">
                        <Subtitle subtitle={'What Drives Us'} />
                        <h2 className="section__title">Our Core Values</h2>
                     </div>
                  </Col>
               </Row>
               <Row className="mt-5">
                  <Col lg="4" md="6">
                     <div className="value__card">
                        <div className="value__icon">
                           <i className="ri-shield-check-line"></i>
                        </div>
                        <h4>Trust & Reliability</h4>
                        <p>Your peace of mind is our priority. We ensure every detail is handled with care and professionalism.</p>
                     </div>
                  </Col>
                  <Col lg="4" md="6">
                     <div className="value__card">
                        <div className="value__icon">
                           <i className="ri-heart-line"></i>
                        </div>
                        <h4>Passion for Travel</h4>
                        <p>We're not just travel agents; we're fellow travelers who understand the joy of discovering new places.</p>
                     </div>
                  </Col>
                  <Col lg="4" md="6">
                     <div className="value__card">
                        <div className="value__icon">
                           <i className="ri-leaf-line"></i>
                        </div>
                        <h4>Sustainable Tourism</h4>
                        <p>We promote responsible travel that preserves environments and supports local communities.</p>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col lg="4" md="6">
                     <div className="value__card">
                        <div className="value__icon">
                           <i className="ri-customer-service-line"></i>
                        </div>
                        <h4>Exceptional Service</h4>
                        <p>From planning to return, we provide 24/7 support to ensure your journey is smooth and enjoyable.</p>
                     </div>
                  </Col>
                  <Col lg="4" md="6">
                     <div className="value__card">
                        <div className="value__icon">
                           <i className="ri-lightbulb-line"></i>
                        </div>
                        <h4>Innovation</h4>
                        <p>We continuously evolve our services and embrace new technologies to enhance your travel experience.</p>
                     </div>
                  </Col>
                  <Col lg="4" md="6">
                     <div className="value__card">
                        <div className="value__icon">
                           <i className="ri-group-line"></i>
                        </div>
                        <h4>Community</h4>
                        <p>We believe in building lasting relationships with our clients and supporting the communities we visit.</p>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* ========== EXPERIENCE STATS SECTION ========== */}
         <section className="stats__section">
            <Container>
               <Row>
                  <Col lg="6">
                     <div className="stats__content">
                        <Subtitle subtitle={'Our Journey'} />
                        <h2>Two Decades of Excellence in Travel</h2>
                        <p>
                           Since our founding in 2004, we've helped thousands of travelers create 
                           unforgettable memories across the globe. Our expertise and dedication 
                           have made us a trusted partner for adventurers worldwide.
                        </p>
                     </div>
                  </Col>
                  <Col lg="6">
                     <div className="stats__wrapper">
                        <div className="stats__grid">
                           <div className="stat__item">
                              <span className="stat__number">15k+</span>
                              <h6>Successful Trips</h6>
                           </div>
                           <div className="stat__item">
                              <span className="stat__number">10k+</span>
                              <h6>Happy Clients</h6>
                           </div>
                           <div className="stat__item">
                              <span className="stat__number">20</span>
                              <h6>Years Experience</h6>
                           </div>
                           <div className="stat__item">
                              <span className="stat__number">150+</span>
                              <h6>Destinations</h6>
                           </div>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* ========== TEAM SECTION ========== */}
         <section className="team__section">
            <Container>
               <Row>
                  <Col lg="12">
                     <div className="section__header text-center">
                        <Subtitle subtitle={'Meet Our Team'} />
                        <h2 className="section__title">Travel Experts at Your Service</h2>
                        <p className="section__description">
                           Our passionate team of travel specialists brings years of experience 
                           and insider knowledge to help you discover the world's most amazing destinations.
                        </p>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* ========== CTA SECTION ========== */}
         <section className="cta__section">
            <Container>
               <Row>
                  <Col lg="12">
                     <div className="cta__content text-center">
                        <h2>Ready to Start Your Next Adventure?</h2>
                        <p>
                           Let us help you create memories that will last a lifetime. 
                           Contact our travel experts today to begin planning your perfect journey.
                        </p>
                        <div className="cta__buttons">
                           <a href="/tours" className="btn primary__btn">
                              Explore Tours
                           </a>
                           <a href="/register" className="btn secondary__btn">
                              Join Our Community
                           </a>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         <NewsLetter />
      </>
   )
}

export default About
