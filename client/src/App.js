import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Logout from "./components/pages/Logout";
import Appointments from "./components/pages/Appointments";
import Start from "./components/pages/Start";
import Book from "./components/pages/Book";
import LoginTemp from "./components/pages/LoginTemp";
import Gallery from "./components/pages/Gallery";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* <Route exact path="/ttt" component={Start} /> */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/Appointments" component={Appointments} />
        <Route exact path="/Book" component={Book} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/" component={LoginTemp} />

      </div>
    </Router>
  );
}

export default App;