import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddFriendForm extends React.Component {
  state ={
    friends: {
      id: "",
      name: '',
      age: "",
      email: ''
    }
  }

  handleChange = e => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value
      }
    })
  }

  addNewFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friends)
    this.setState({
      id: "",
      name: '',
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewFriend}>
          <FormGroup>
            <Label for="name"> Name </Label>
            <Input 
              type="text"
              name="name"
              placeholder="Name:"
              value={this.state.friends.name}
              onChange={this.handleChange} 
            />
          </FormGroup>
          <FormGroup>
            <Label for="age"> Age </Label>
            <Input 
              type="number"
              name="age"
              placeholder="Age:"
              value={this.state.friends.age}
              onChange={this.handleChange}   
            />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Email </Label>
            <Input 
              type="email"
              name="email"
              placeholder="Email:"
              value={this.state.friends.email}
              onChange={this.handleChange}   
            />
          </FormGroup>
          <Button color="info" type="submit">
            {this.props.addingFriends ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) 
                : ('Add Friend')}
          </Button>  
          </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.friendsReducer.error,
  addingFriends: state.friendsReducer.addingFriends
});

export default connect(
  mapStateToProps, 
  { addFriend }
  )(AddFriendForm);
