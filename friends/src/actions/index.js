import axios from 'axios';

//loginPage Action Creators:
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}
 
//FriendsPage Action Creators:
const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
  .get('http://localhost:5000/api/friends')
  .then(res => {
    console.log(res)
    dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response })
  })
}