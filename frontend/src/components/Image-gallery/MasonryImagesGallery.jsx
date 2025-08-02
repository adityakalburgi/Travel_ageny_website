import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryImage'
import LazyImage from '../LazyImage/LazyImage'

const MasonryImagesGallery = () => {
   return (
      <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:1, 992:4}}>
         <Masonry gutter='1rem'>
            {
               galleryImages.map((item, index) => (
                  <LazyImage
                     key={index}
                     src={item} 
                     alt={`Gallery image ${index + 1}`}
                     className="gallery-image"
                     style={{'width':'100%', 'display':'block', 'borderRadius':'10px'}}
                  />
               ))
            }
         </Masonry>
      </ResponsiveMasonry>
   )
}

export default MasonryImagesGallery