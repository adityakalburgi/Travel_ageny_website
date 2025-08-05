import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/home.css'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import { TypeAnimation } from 'react-type-animation';

import Subtitle from './../shared/subtitle'
import SearchForm from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter'
import LazyImage from '../components/LazyImage/LazyImage'

const Home = () => {
   const location = useLocation()
   const galleryRef = useRef(null)

   useEffect(() => {
      if (location.state?.scrollTo === 'gallery' && galleryRef.current) {
         galleryRef.current.scrollIntoView({ behavior: 'smooth' })
      }
   }, [location.state])

   return <>
      {/* ========== HERO SECTION ========== */}
      <section style={{position:'relative', overflow:'hidden'}}>
      <video className="bg-video" src={heroVideo} autoPlay loop muted playsInline/>
         <Container>

            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Know Before You Go'} />
                        <img src={worldImg} alt="" />
                     </div>
                     <TypeAnimation
                        sequence={[
                           'Traveling opens the door to creating memories',
                           1000,
                           "Travel far enough, you meet yourself.",
                           1000,
                           'Adventure awaits those willing to find it.',
                           1000,
                           'Life is short, and the world is wide.',
                           1000,


                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block',fontFamily:'sans-serif',color:"greenyellow" }}
                        repeat={Infinity}
                     />
                     
                  </div>
               </Col>

               <Col lg='2'>
                  <div className="hero__img-box">
                     <LazyImage 
                        src={heroImg} 
                        alt="Travel destination" 
                        className="hero-image"
                     />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} alt="" controls />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box mt-5">
                     <LazyImage 
                        src={heroImg02} 
                        alt="Travel adventure" 
                        className="hero-image"
                     />
                  </div>
               </Col>
      
               <SearchForm />
            </Row>
            
         </Container>
         
      </section>
      
      {/* ============================================================== */}

      {/* ==================== HERO SECTION START ====================== */}
      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">What we serve</h5>
                  <h2 className="services__title">We offer our best services</h2>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>

      
      {/* ========== FEATURED TOUR SECTION END =========== */}

      {/* ========== EXPERIENCE SECTION START ============ */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'} />
                     <h2>With our all experience <br /> we will serve you</h2>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span style={{backgroundColor:"greenyellow"}}>15k+</span>
                        <h6>Successful trip</h6>
                     </div>
                     <div className="counter__box">
                        <span style={{backgroundColor:"greenyellow"}}>10k+</span>
                        <h6>Regular clients</h6>
                     </div>
                     <div className="counter__box">
                        <span style={{backgroundColor:"greenyellow"}}>20</span>
                        <h6>Year experience</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <LazyImage 
                        src={experienceImg} 
                        alt="Travel experience" 
                        className="experience-image"
                     />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}

      {/* ========== GALLERY SECTION START ============== */}
      <section ref={galleryRef} style={{backgroundColor:"black"}}>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title" style={{color:"greenyellow"}}>Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Fans Love'} />
                  <h2 className="testimonial__title">What our fans say about us</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
   </>
}

export default Home
