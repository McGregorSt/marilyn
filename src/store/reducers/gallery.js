import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
  photos: [],
  loading: false,
  error: false,
}

const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PICTURES_START:
      return updateObject(state, { loading: true })
    case actionTypes.FETCH_PICTURES_SUCCESS:
      return updateObject(state, {
        loading: false,
        photos: action.photos,
      })
    case actionTypes.FETCH_PICTURES_FAIL:
      return updateObject(state, { error: true })
    default:
      return state
  }
}

export default picturesReducer