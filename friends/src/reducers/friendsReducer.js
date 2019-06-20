//import friends actions here


const initialState = {
  friends: [],
  error: '',
  fetchingFriends: false
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    // case FETCH_FRIENDS_START:
    //   return {
    //     ...state,
    //     error: '',
    //     fetchingFriends: true
    //   }
    default:
      return state;
  }
  
}