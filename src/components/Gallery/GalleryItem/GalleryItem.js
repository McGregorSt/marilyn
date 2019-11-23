import React from 'react'
 
const GalleryItem = ({ src, alt, clicked }) => {
  return (
    <div >
      <img src={src} alt={alt} onClick={clicked}/>
    </div>
  )
}
  
 
export default GalleryItem