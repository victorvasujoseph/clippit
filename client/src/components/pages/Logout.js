import React from "react";
import { Row, Col, Button } from 'react-bootstrap';


function Logout() {
  return (
    <div>
      <container-fluid>
        <Row>
          <Col sm={8}>
            <h1>Are you sure you want to log out?</h1>
            <Button variant="warning" type="submit" href="/">Logout </Button>
          </Col>
        </Row>
      </container-fluid>
    </div>

  );
}

export default Logout;
