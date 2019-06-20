import {  
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE
} from '../actions';


const initialState = {
  friends: [],
  error: '',
  fetchingFriends: false
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        error: '',
        fetchingFriends: true
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingFriends: false,
        friends: action.payload
      }
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingFriends: false
      }
    default:
      return state;
  }
  
}