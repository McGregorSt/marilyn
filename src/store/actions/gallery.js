import * as actionTypes from './actionTypes'


export const fetchPicturesStart = () => {
  return {
    type: actionTypes.FETCH_PICTURES_START
  }
}
export const fetchPicturesSuccess = (pictures) => {
  return {
    type: actionTypes.FETCH_PICTURES_SUCCESS,
    pictures: pictures
  }
}
export const fetchPicturesFail = (error) => {
  return {
    type: actionTypes.FETCH_PICTURES_FAIL,
    error: error
  }
}

export const fetchPictures = async (apiKey) => {
  return dispatch => {
    dispatch(fetchPicturesStart)
    
  }

}