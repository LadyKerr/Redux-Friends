import { axiosWithAuth } from '../utils/axiosWithAuth';

//loginPage Action Creators:
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS })
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}
 
//FriendsPage Action Creators:
export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
  .get('/friends')
  .then(res => {
    console.log(res)
    dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response })
  })
}

//AddFriendForm Action Creators
export const ADDING_A_FRIEND_START = 'ADDING_A_FRIEND_START';
export const ADDING_A_FRIEND_SUCCESS = 'ADDING_A_FRIEND_SUCCESS';
export const ADDING_A_FRIEND_FAILURE = 'ADDING_A_FRIEND_FAILURE';

export const addFriend = (newfriend) => dispatch => {
  dispatch({ type: ADDING_A_FRIEND_START });
  axiosWithAuth()
    .post('/friends', newfriend)
    .then(res => {
      dispatch({ type: ADDING_A_FRIEND_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: ADDING_A_FRIEND_FAILURE, payload: err.response })
    })
}