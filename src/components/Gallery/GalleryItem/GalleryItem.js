import React from 'react'

import classes from './GalleryItem.css'

const GalleryItem = ({ src, alt, clicked }) => {
  return (
    <div className={classes.GalleryItem}>
      <img src={src} alt={alt} onClick={clicked} />
    </div>
  )
}

export default GalleryItem
