import React from 'react'
import './Loading.css'

const Loading = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
   const sizeClasses = {
      small: 'loading-spinner--small',
      medium: 'loading-spinner--medium',
      large: 'loading-spinner--large'
   }

   const LoadingContent = () => (
      <div className={`loading-container ${fullScreen ? 'loading-container--fullscreen' : ''}`}>
         <div className={`loading-spinner ${sizeClasses[size]}`}>
            <div className="loading-spinner__inner">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
         {text && <p className="loading-text">{text}</p>}
      </div>
   )

   return <LoadingContent />
}

export default Loading
