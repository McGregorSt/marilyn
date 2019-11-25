import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  photos: [],
  loading: false,
  error: false,
}

const fetchPicturesStart = state => {
  return updateObject(state, { loading: true })
}

const fetchPicturesSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    photos: action.photos,
  })
}

const fetchPicturesFail = state => {
  return updateObject(state, { error: true })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PICTURES_START:
      return fetchPicturesStart(state, action)
    case actionTypes.FETCH_PICTURES_SUCCESS:
      return fetchPicturesSuccess(state, action)
    case actionTypes.FETCH_PICTURES_FAIL:
      return fetchPicturesFail(state)
    default:
      return state
  }
}

export default reducer
