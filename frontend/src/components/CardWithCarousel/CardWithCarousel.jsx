import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardWithCarousel = ({ 
  title = "Card title", 
  description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
  images = [
    "https://via.placeholder.com/286x180?text=Slide+1",
    "https://via.placeholder.com/286x180?text=Slide+2",
    "https://via.placeholder.com/286x180?text=Slide+3"
  ],
  visitCount,
  budgetRange,
  airport,
  carouselId = "defaultCarousel"
}) => {
  return (
    <div className="card h-100" style={{ width: '100%', maxWidth: '20rem', margin: '0 auto', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
      <div 
        id={carouselId} 
        className="carousel slide" 
        data-bs-ride="carousel"
        style={{ borderRadius: '0.375rem 0.375rem 0 0', overflow: 'hidden' }}
      >
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button 
              key={index}
              type="button" 
              data-bs-target={`#${carouselId}`} 
              data-bs-slide-to={index} 
              className={index === 0 ? "active" : ""} 
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img 
                src={image} 
                className="d-block w-100" 
                alt={`${title} - View ${index + 1}`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '5px', padding: '5px 10px' }}>
                <h6 className="mb-0">{title}</h6>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary fw-bold mb-2">{title}</h5>
        <p className="card-text flex-grow-1 text-muted" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
          {description}
        </p>
        
        {airport && (
          <div className="mb-2">
            <small className="text-info fw-semibold">
              <i className="ri-plane-line me-1"></i>
              Airport: {airport}
            </small>
          </div>
        )}
        
        {budgetRange && (
          <div className="mb-3">
            <small className="text-warning fw-semibold">
              <i className="ri-wallet-line me-1"></i>
              Daily Budget: {budgetRange}
            </small>
          </div>
        )}
        
        <div className="d-flex justify-content-between align-items-center mt-auto">
          {visitCount && (
            <small className="text-success fw-semibold">
              <i className="ri-eye-line me-1"></i>
              {visitCount.toLocaleString()} visits
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWithCarousel;