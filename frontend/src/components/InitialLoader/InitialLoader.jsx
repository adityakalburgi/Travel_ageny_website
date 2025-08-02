import React, { useState, useEffect } from 'react'
import './InitialLoader.css'

const InitialLoader = ({ onLoadingComplete }) => {
   const [progress, setProgress] = useState(0)
   const [currentText, setCurrentText] = useState('Preparing your journey...')

   const loadingTexts = [
      'Preparing your journey...',
      'Discovering amazing destinations...',
      'Loading travel experiences...',
      'Almost ready to explore...'
   ]

   useEffect(() => {
      let progressInterval
      let textInterval

      // Progress animation
      progressInterval = setInterval(() => {
         setProgress(prev => {
            if (prev >= 100) {
               clearInterval(progressInterval)
               setTimeout(() => onLoadingComplete(), 300)
               return 100
            }
            return prev + 2
         })
      }, 30)

      // Text rotation
      textInterval = setInterval(() => {
         setCurrentText(prev => {
            const currentIndex = loadingTexts.indexOf(prev)
            const nextIndex = (currentIndex + 1) % loadingTexts.length
            return loadingTexts[nextIndex]
         })
      }, 800)

      return () => {
         clearInterval(progressInterval)
         clearInterval(textInterval)
      }
   }, [onLoadingComplete])

   return (
      <div className="initial-loader">
         <div className="initial-loader__content">
            {/* Travel Icon */}
            <div className="initial-loader__icon">
               <i className="ri-plane-line"></i>
            </div>
            
            {/* Brand Name */}
            <h1 className="initial-loader__title">Travel Agency</h1>
            
            {/* Loading Text */}
            <p className="initial-loader__text">{currentText}</p>
            
            {/* Progress Bar */}
            <div className="initial-loader__progress">
               <div className="initial-loader__progress-bar">
                  <div 
                     className="initial-loader__progress-fill"
                     style={{ width: `${progress}%` }}
                  ></div>
               </div>
               <span className="initial-loader__percentage">{progress}%</span>
            </div>
            
            {/* Floating Elements */}
            <div className="initial-loader__floating-elements">
               <div className="floating-element floating-element--1">
                  <i className="ri-map-pin-line"></i>
               </div>
               <div className="floating-element floating-element--2">
                  <i className="ri-camera-line"></i>
               </div>
               <div className="floating-element floating-element--3">
                  <i className="ri-compass-line"></i>
               </div>
               <div className="floating-element floating-element--4">
                  <i className="ri-suitcase-line"></i>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InitialLoader
