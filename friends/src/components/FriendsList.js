import React from 'react';

const FriendsList = props => {
  return(
    <div>
      <h4>{props.friend.name}</h4>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  );
}

export default FriendsList;