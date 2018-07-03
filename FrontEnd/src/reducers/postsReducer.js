import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  ADD_POST
} from '../actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return [...action.payload]
    case FETCH_POSTS_FAILED:
      return action.payload
    case ADD_POST:
      return [...state, action.payload]
    default:
      return state
  }
}
