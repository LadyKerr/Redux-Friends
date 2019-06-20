//import actions here


const initialState = {
  friends: [],
  error: '',
  loggingIn: false,
  fetchingFriends: false
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    //return cases here with actions
    default:
      return state;
  }
  
}