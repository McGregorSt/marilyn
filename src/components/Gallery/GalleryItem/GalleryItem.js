import React from 'react'
 
const GalleryItem = ({ src, alt, clicked }) => {
  return (
    <div onClick={clicked}>
      <img src={src} alt={alt}  />
    </div>
  )
}
  
 
export default GalleryItem