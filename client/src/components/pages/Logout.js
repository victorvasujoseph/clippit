import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';


function Logout() {
  return (
    <div className="container">
    <br></br>
            <h1>Are you sure you want to log out?</h1>

            <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="outline-danger" type="submit" href="/">Yes</Button>
            </ButtonGroup>

            <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="outline-success" type="submit" href="/home">No</Button>
            </ButtonGroup>

    </div>

  );
}

export default Logout;
