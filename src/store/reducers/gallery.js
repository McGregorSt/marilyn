import * as actionTypes from '../actions/actionTypes'
import updateObject from '../utility'

const initialState = {
  pictures: [],
  loading: false,
  error: true,
}

const picturesReducer = (state = initialState, action) => {
  switch (actionTypes) {
    case actionTypes.FETCH_PICTURES_START:
      return updateObject(state, { loading: true })
    case actionTypes.FETCH_PICTURES_SUCCESS:
      return updateObject(state, {
        loading: false,
        pictures: action.pictures,
      })
    case actionTypes.FETCH_PICTURES_FAIL:
      return updateObject(state, { error: true })
    default:
      return state
  }
}
