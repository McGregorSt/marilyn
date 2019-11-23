import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/gallery'
import GalleryItem from './GalleryItem/GalleryItem'
 
class Gallery extends Component {

  componentDidMount() {
    this.props.onFetchPictures()
    console.log('there', this.props.photos)
  }

  render () {
    let gallery = this.props.photos.map(photo => (
        <GalleryItem src={photo} alt='alt' clicked='bar' />
    ))

    return (
      <div>
        {gallery}
        G
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