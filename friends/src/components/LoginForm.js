import React from 'react';
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

  login = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="username"> Username </Label>
            <Input 
              type="text"
              name="username"
              placeholder="Username" 
            />
          </FormGroup>
          <FormGroup>
            <Label for="password"> Password </Label>
            <Input 
              type="password"
              name="password"
              placeholder="Password" 
            />
          </FormGroup>
          <Button color="warning"> Login </Button>  
        </Form>
      </div>
    );
  }
}

export default LoginForm;

