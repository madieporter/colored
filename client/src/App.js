import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Logout";
import Signup from "./auth/Signup";
import Login from "./auth/Login"
import Canvas from "./Canvas";

import './design/App.css';
import coloredLogo from "./images/coloredLogo.png";

class App extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={coloredLogo} alt=""/>
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/colored" component={Canvas} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
        </Switch>
      </div>
    )
  }
}

export default App;
