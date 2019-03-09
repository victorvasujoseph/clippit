import React from "react";
import { Form, Button,} from 'react-bootstrap';


function Start() {
  return (
    <div className="container">
    <br></br>
      <h1>Welcome to Clippit</h1>

      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="success" type="submit" href="/home">
    Login
  </Button>
</Form>

    </div>
  );
}

export default Start;
