import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const FriendsList = props => {
  return(
    <div className="friends-card">
      <Card body inverse color="info">
        <CardTitle>{props.friend.name}</CardTitle>
          <CardText>{props.friend.age}</CardText>
          <CardText>{props.friend.email}</CardText>
      </Card>
    </div>
  );
}

export default FriendsList;