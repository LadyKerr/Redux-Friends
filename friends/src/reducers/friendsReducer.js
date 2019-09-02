import {  
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADDING_A_FRIEND_START,
  ADDING_A_FRIEND_SUCCESS,
  ADDING_A_FRIEND_FAILURE
} from '../actions';


const initialState = {
  friends: [],
  error: '',
  fetchingFriends: false,
  addingFriends: false,
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
    case ADDING_A_FRIEND_START:
      return {
        ...state,
        error: '',
        addingFriends: true
      }
    case ADDING_A_FRIEND_SUCCESS:
      return {
        ...state,
        error: '',
        addingFriends: false,
        friends: action.payload
      }
    case ADDING_A_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingFriends: false
      }
    default:
      return state;
  }
}