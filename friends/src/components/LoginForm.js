import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  loginChange = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => this.props.history.push('/friends'))
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.loginChange}>
          <FormGroup>
            <Label for="username"> Username </Label>
            <Input 
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange} 
            />
          </FormGroup>
          <FormGroup>
            <Label for="password"> Password </Label>
            <Input 
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}   
            />
          </FormGroup>
          <Button color="warning" type="submit">
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) 
                : ('Log in')}
          </Button>  
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.loginReducer.error,
  loggingIn: state.loginReducer.loggingIn
});

export default connect(
  mapStateToProps, 
  { login }
  )(LoginForm);

