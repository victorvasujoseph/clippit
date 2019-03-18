import React, { Component } from "react";
import 'whatwg-fetch';
import { Form, Button, Image, Modal, ButtonGroup, } from 'react-bootstrap';

// import axios from "axios";

import {
    getFromStorage,
    setInStorage,
} from '../utils/storage';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: ''
        };

        this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }   

    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            console.log(obj);
            const { token } = obj;
            //verify token
            fetch("/api/auth/account/verify?token=" + token)
              .then(res => res.json())
              .then(json => {
                if (json.success) {
                  this.setState({
                    token,
                    isLoading: false
                  });
                } else {
                  this.setState({
                    isLoading: false
                  });
                }
              });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    onTextboxChangeSignInEmail(event) {
        this.setState({
            signInEmail: event.target.value,
        });
    }

    onTextboxChangeSignInPassword(event) {
        this.setState({
            signInPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpFirstName(event) {
        this.setState({
            signUpFirstName: event.target.value,
        });
    }

    onTextboxChangeSignUpLastName(event) {
        this.setState({
            signUpLastName: event.target.value,
        });
    }

    onSignUp() {
        // grab state
        const {
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword
        } = this.state;

        this.setState({
            isloading: true,
        })
        // Post request to backend
        fetch("/api/auth/account/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: signUpFirstName,
            lastName: signUpLastName,
            email: signUpEmail,
            password: signUpPassword
          })
        })
          .then(res => res.json())
          .then(json => {
            if (json.success) {
              this.setState({
                signUpError: json.message,
                isLoading: false,
                signUpEmail: "",
                signUpPassword: "",
                signUpFirstName: "",
                signUpLastName: ""
              });
            } else {
              this.setState({
                signUpError: json.message,
                isLoading: false
              });
            }
          });
    }

    onSignIn() {
        // grab state
        const {
            signInEmail,
            signInPassword,
        } = this.state;

        this.setState({
            isloading: true,
        })

        console.log(this.state);

        // Post request to backend
        fetch('/api/auth/account/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword,
            }),
        }).then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.success) {
                    setInStorage("the_main_app", {
                      token: json.token,
                      customerID: json.userID
                    });
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signInPassword: '',
                        signInEmail: '',
                        token: json.token,
                        customerID: json.customerID
                    });                                                                                                        
                } else {
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                    });
                }
            });
    }

    logout() {
        this.setState({
            isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            //verify token
            fetch('/api/auth/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpEmail,
            signUpPassword,
            signUpError,
            signUpFirstName,
            signUpLastName,
        } = this.state;
        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }
        if (!token) {
            return (
                <div className="container">
                <Image src="https://3.bp.blogspot.com/-cZmcCEh4p1g/XIXiykcuCTI/AAAAAAAAAHY/TWLoJ2f2Umw7Tm6JgAh20XgFkVzl0EKnwCLcBGAs/s1600/Login%2BBanner.jpg" fluid />
                <br></br>
                    <div>
                        {
                            (signInError) ? (
                                <p>{signInError}</p>
                            ) : (null)
                        }
                        <Form>

                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={signInEmail}
                                onChange={this.onTextboxChangeSignInEmail}
                            />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={signInPassword}
                                onChange={this.onTextboxChangeSignInPassword}
                            />
                            </Form.Group>

                            <ButtonGroup>
                                <Button variant="outline-primary" type="submit" onClick={this.onSignIn} >Login</Button>
                            </ButtonGroup>

                            <br></br>
                            <br></br>

                            <ButtonGroup>
                                <Button variant="outline-dark" onClick={this.handleShow}>Don't have an account?</Button>
                            </ButtonGroup>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Create an Account</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <div>
                                        {
                                            (signUpError) ? (
                                                <p>{signUpError}</p>
                                            ) : (null)
                                        }
                                        
                                        <Form>
                                            <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="First Name" 
                                                value={signUpFirstName}
                                                onChange={this.onTextboxChangeSignUpFirstName}
                                            />
                                            
                                            </Form.Group>
                                            <Form.Group controlId="formBasicLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Last Name" 
                                                value={signUpLastName}
                                                onChange={this.onTextboxChangeSignUpLastName}
                                            />

                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Email" 
                                                value={signUpEmail}
                                                onChange={this.onTextboxChangeSignUpEmail}
                                            />

                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Password" 
                                                value={signUpPassword}
                                                onChange={this.onTextboxChangeSignUpPassword}
                                            />
                                            </Form.Group>

                                            <Button variant="outline-dark" type="submit" onClick={this.onSignUp}>Sign Up</Button>
                                        </Form>
                                    </div>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                    </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                    Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <p>Signed in</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Login;
