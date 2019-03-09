import React from "react";
import { Navbar, Nav, Button} from 'react-bootstrap';

function NavTabs(){
  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">CLIPPIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
        <Button inline variant="outline-success" href="/Appointments">Upcoming Appointments</Button>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default NavTabs;