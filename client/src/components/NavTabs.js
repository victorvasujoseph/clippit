import React from "react";
import { Navbar, Nav, Button} from 'react-bootstrap';

function NavTabs(){
  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">
          <img
            src="https://66.media.tumblr.com/b51c37ad5173ace63c87ddebff62f989/tumblr_po4cwwChs91y5a3hjo1_1280.png"
            width="150"
            height="45"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
        <Button inline variant="outline-primary" href="/Appointments">Upcoming Appointments</Button>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default NavTabs;