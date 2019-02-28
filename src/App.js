import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import bookOnline from "./components/pages/bookOnline";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/book" component={bookOnline} />
      </div>
    </Router>
  );
}

export default App;
