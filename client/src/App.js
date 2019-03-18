import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import { LoginContainer, Alert, Redirect, Header } from "react-bootstrap"
import Navbar from "./components"
import Home from "./components/pages/Home";
import Logout from "./components/pages/Logout";
import Appointments from "./components/pages/Appointments";
import Book from "./components/pages/Book";
import Login from "./components/pages/Login";
import Gallery from "./components/pages/Gallery";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlertOpen: false,
    };
    this.toggleAlert = this.toggleAlert.bind(this);
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/(login)"  />
          <Route component={LoginContainer} />

        </div>


        <div className="container">
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route exact path="/Gallery" component={Gallery} />

        </div>

        <Header toggleAlert={this.toggleAlert} />
        <div className="container">
          <Navbar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/Appointments" component={Appointments} />
          <Route exact path="/Book" component={Book} />
          <Route exact path="/Gallery" component={Gallery} />
          {this.state.isAlertOpen ? <Alert /> : null}

        </div>
</Router >
    );
  }
}

export default App;