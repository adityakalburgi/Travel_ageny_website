import React from 'react'
import { useNavigate } from 'react-router-dom'
import './service-card.css'

const ServiceCard = ({ item }) => {
   const { imgUrl, title, desc } = item
   const navigate = useNavigate()

   const handleClick = () => {
      if (title === 'Calculate Weather') {
         navigate('/weather')
      }
      // Add more service redirects here as needed
   }

   return (
      <div 
         className={`service__item ${title === 'Calculate Weather' ? 'clickable' : ''}`}
         onClick={handleClick}
      >
         <div className="service__img">
            <img src={imgUrl} alt="" />
         </div>
         <h6>{title}</h6>
         <p>{desc}</p>
         {title === 'Calculate Weather' && (
            <div className="service__overlay">
               <span>Click to check weather</span>
            </div>
         )}
      </div>
   )
}

export default ServiceCard