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

//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOURAPIKEY&format=json&nojsoncallback=1&text=cats&extras=url_o
// const mariMari = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=monroe'
const mariUrl =
  'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9798037bfcb726dc341c0a6c6660e3a6&tags=marilyn+monroe&min_upload_date=2019-10-22&max_upload_date=2019-11-22&sort=date-posted-desc&format=json&nojsoncallback=1'
  
  export const fetchPictures = (size) => {
    return async dispatch => {
      try {
        dispatch(fetchPicturesStart())
        let photos = []
        await fetch(mariUrl)
          .then(resp => resp.json())
          .then(data => photos = data.photos.photo.slice(0, 9))
        console.log('here', photos)
        let photosUrl = []
        photos.map(photo => {
          let farmUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
          photosUrl.push({
            url: farmUrl,
            id: photo.id,
            title: photo.title
          })
          return console.log(photosUrl)
        })
        console.log(photosUrl)
        dispatch(fetchPicturesSuccess(photosUrl))
      } catch (err) {
          return dispatch(fetchPicturesFail(err))
      }
      }
    }

// export const fetchPictures = async () => {
//   try {
//     const response = await fetch(mariUrl)
//     const data = await response.json()
//     return dispatch => {
//       dispatch(fetchPicturesStart)
//       let photosUrl = []
//       data.then(data => (photosUrl = data.photos.photo.slice(0, 9)))
//       photosUrl.map(photo => {
//         let farmUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`
//         photosUrl.push(farmUrl)
//       })
//       dispatch(fetchPicturesSuccess(photosUrl))
//     }
//   } catch (err) {
//     return dispatch => dispatch(fetchPicturesFail(err))
//   }
// }
