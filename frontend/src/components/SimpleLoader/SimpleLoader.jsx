import React, { useState, useEffect } from 'react'
import './SimpleLoader.css'

const SimpleLoader = ({ onLoadingComplete }) => {
   const [dots, setDots] = useState('')

   useEffect(() => {
      const timer = setTimeout(() => {
         onLoadingComplete()
      }, 2000) // 2 seconds loading

      // Animated dots
      const dotsInterval = setInterval(() => {
         setDots(prev => {
            if (prev === '...') return ''
            return prev + '.'
         })
      }, 500)

      return () => {
         clearTimeout(timer)
         clearInterval(dotsInterval)
      }
   }, [onLoadingComplete])

   return (
      <div className="simple-loader">
         <div className="simple-loader__content">
            <div className="simple-loader__spinner">
               <div className="simple-loader__spinner-inner"></div>
            </div>
            <h2 className="simple-loader__title">Travel Agency</h2>
            <p className="simple-loader__text">Loading{dots}</p>
         </div>
      </div>
   )
}

export default SimpleLoader
