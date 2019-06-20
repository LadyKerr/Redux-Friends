import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getFriends } from '../actions';
import FriendsList from './FriendsList';

class Friends extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        
        {this.props.fetchingFriends && ( 
            <Loader type="Puff" color="#204963" height="60" width="60" />
        )}

        {this.props.friends && (this.props.friends.map(friend => {
          <FriendsList friend={friend} key={friend.id} />
        }))}

        {this.props.error && <p>{this.props.error}</p>}

      </div>
    );
  }
}


const mapStateToProps = state => ({
  friends: state.fetchingFriends.friends,
  error: state.friendsReducer.error,
  fetchingFriends: state.friendsReducer.fetchingFriends
});

export default withRouter(
  connect(
  mapStateToProps, 
  { getFriends }
  )(Friends)
);