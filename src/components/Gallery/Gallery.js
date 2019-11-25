import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import * as actions from '../../store/actions/index'
import GalleryItem from './GalleryItem/GalleryItem'
import classes from './Gallery.css'
import Spinner from '../UI/Spinner/Spinner'

class Gallery extends Component {
  componentDidMount() {
    this.props.onFetchPictures('m')
  }

  render() {
    let gallery = <Spinner />
    if (!this.props.loading) {
      gallery = this.props.photos.map(photo => (
        <div key={photo.id}>
          <NavLink to={photo.url.replace('_m.jpg', '_b.jpg')} target="_blank">
            <GalleryItem src={photo.url} alt={photo.title} />
          </NavLink>
        </div>
      ))
    }

    return (
      <div className={classes.Gallery}>
        {gallery}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos,
    loading: state.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPictures: size => dispatch(actions.fetchPictures(size)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)