import * as actionTypes from './actionTypes'

export const fetchPicturesStart = () => {
  return {
    type: actionTypes.FETCH_PICTURES_START,
  }
}
export const fetchPicturesSuccess = photos => {
  return {
    type: actionTypes.FETCH_PICTURES_SUCCESS,
    photos: photos,
  }
}
export const fetchPicturesFail = error => {
  return {
    type: actionTypes.FETCH_PICTURES_FAIL,
    error: error,
  }
}

const date = new Date()
const dateFrom = `${date.toISOString().slice(0, 10)}`
const mariUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9798037bfcb726dc341c0a6c6660e3a6&tags=marilyn+monroe&max_upload_date=${dateFrom}&sort=date-posted-desc&format=json&nojsoncallback=1`

export const fetchPictures = size => {
  return async dispatch => {
    try {
      dispatch(fetchPicturesStart())
      let photos = []
      await fetch(mariUrl)
        .then(resp => resp.json())
        .then(data => (photos = data.photos.photo.slice(0, 9)))
      let photosUrl = []
      photos.map(photo => {
        let farmUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
        photosUrl.push({
          url: farmUrl,
          id: photo.id,
          title: photo.title,
        })
        return photosUrl
      })
      dispatch(fetchPicturesSuccess(photosUrl))
    } catch (err) {
      return dispatch(fetchPicturesFail(err))
    }
  }
}
