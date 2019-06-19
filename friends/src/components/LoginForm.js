import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="username"> Username </Label>
            <Input 
              type="username"
              name="username"
              id="username"
              placeholder="Username" 
            />
          </FormGroup>
          <FormGroup>
            <Label for="password"> Password </Label>
            <Input 
              type="password"
              name="password"
              id="password"
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

