import request from '../helpers/request'

export const ADD_POST = "ADD_POST"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"

export const addPost = (title, body ) => {
  let newPost = {
    title: title,
    body: body
  }
  return dispatch => {
    request(`/blog_posts`, `post`, newPost)
    .then(newpost => dispatch({
      type: ADD_POST,
      payload: newPost
    }))
  }
}

export const fetchPosts = () => {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(posts => dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      }))
      .catch(err => dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      }))
  }
}
