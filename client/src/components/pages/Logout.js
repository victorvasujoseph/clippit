import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  setInStorage
} from '../utils/storage';

function Logout() {
  return (
    <div className="container">
      <br />
      <h1>Are you sure you want to log out?</h1>

      <ButtonGroup className="mr-2" aria-label="First group">
        <Button
          variant="outline-danger"
          type="submit"
          onClick={() => {
            setInStorage("the_main_app", {
              token: "",
              customerID: ""
            });
          }}
          href="/"
        >
          Yes
        </Button>
      </ButtonGroup>

      <ButtonGroup className="mr-2" aria-label="Second group">
        <Button variant="outline-success" type="submit" href="/Home">
          No
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Logout;
