import React, { useState, useEffect } from 'react'
import './LazyImage.css'

const LazyImage = ({ 
   src, 
   alt, 
   className = '', 
   placeholder = null,
   style = {},
   onLoad = () => {},
   onError = () => {},
   ...props 
}) => {
   const [imageSrc, setImageSrc] = useState(placeholder || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+')
   const [imageRef, setImageRef] = useState()
   const [isLoaded, setIsLoaded] = useState(false)
   const [isInView, setIsInView] = useState(false)
   const [hasError, setHasError] = useState(false)

   useEffect(() => {
      let observer
      
      if (imageRef && !isInView) {
         observer = new IntersectionObserver(
            entries => {
               entries.forEach(entry => {
                  if (entry.isIntersecting) {
                     setIsInView(true)
                     setImageSrc(src)
                     observer.unobserve(imageRef)
                  }
               })
            },
            {
               threshold: 0.1,
               rootMargin: '50px'
            }
         )
         observer.observe(imageRef)
      }
      
      return () => {
         if (observer && observer.unobserve && imageRef) {
            observer.unobserve(imageRef)
         }
      }
   }, [imageRef, isInView, src])

   const handleLoad = (e) => {
      setIsLoaded(true)
      onLoad(e)
   }

   const handleError = (e) => {
      setHasError(true)
      onError(e)
   }

   return (
      <div className={`lazy-image-wrapper ${className}`} style={style}>
         <img
            ref={setImageRef}
            src={imageSrc}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'lazy-image--loaded' : ''} ${hasError ? 'lazy-image--error' : ''}`}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
         />
         {!isLoaded && isInView && !hasError && (
            <div className="lazy-image__loading">
               <div className="lazy-image__spinner"></div>
            </div>
         )}
      </div>
   )
}

export default LazyImage
