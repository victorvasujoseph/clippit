import React, { Component } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { getFromStorage} from './utils/storage';


class NavTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            token:"",
            customerID:""
        };
    }

    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            console.log(obj);
            if (obj && obj.token) {
                console.log(obj);
                const { token, customerID } = obj;
                //verify token
                fetch("/api/auth/account/verify?token=" + token)
                    .then(res => res.json())
                    .then(json => {
                        if (json.success) {
                            this.setState({
                              token,
                              isLoggedIn: true,
                              customerID
                            });
                        } else {
                            this.setState({
                              isLoggedIn: false
                            });
                        }
                    });
            } else {
                this.setState({
                  isLoggedIn: false
                });
            }
        }
    }

    render() {
        return (
          <div>
            <Navbar bg="light" expand="lg" fixed="top">
              <Navbar.Brand href="/Home">
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
                  <Nav.Link href="/Gallery">Gallery</Nav.Link>
                  {this.state.isLoggedIn && (
                    <Nav.Link href="/book">Book Appointment</Nav.Link>
                  )}
                  {this.state.isLoggedIn ? (
                    <Nav.Link href="/logout">Logout</Nav.Link>
                  ) : (
                    <Nav.Link href="/Login">Login</Nav.Link>
                  )}

                </Nav>

                {this.state.isLoggedIn && (
                  <Nav.Link>
                    {this.state.customerID}
                  </Nav.Link>
                )}

                {this.state.isLoggedIn && (
                  <Button
                    inline
                    variant="outline-primary"
                    href="/Appointments"
                  >
                    Upcoming Appointments
                  </Button>
                )}
              </Navbar.Collapse>
            </Navbar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        );
    }
}

export default NavTabs;