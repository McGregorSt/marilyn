import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import * as actions from '../../store/actions/gallery'
import GalleryItem from './GalleryItem/GalleryItem'
 
class Gallery extends Component {

  componentDidMount() {
    this.props.onFetchPictures()
  }

  render () {
    let gallery = this.props.photos.map(photo => (
      <div key={photo.id}>
        <NavLink to={photo.url} target='_blank' >
          <GalleryItem src={photo.url} alt={photo.title} />
        </NavLink>
      </div>
    ))

    return (
      <div>
        {gallery}
      </div>
    )
  }

  
}
 
const mapStateToProps = state => {
  return {
    photos: state.photos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPictures: () => dispatch(actions.fetchPictures())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)