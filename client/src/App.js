import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Logout from "./components/pages/Logout";
import Appointments from "./components/pages/Appointments";
import Start from "./components/pages/Start";
import Book from "./components/pages/Book";
import LoginTemp from "./components/pages/LoginTemp";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Start} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/Appointments" component={Appointments} />
        <Route exact path="/Book" component={Book} />
        <Route exact path="/LoginTemp" component={LoginTemp} />

      </div>
    </Router>
  );
}

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
