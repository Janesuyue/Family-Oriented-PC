import React, { Component } from "react";
import "./App.scss";
import Login1 from "./views/Login/login";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Register1 from "../src/views/Register/register";
import Mine from "./views/Mine/mine";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <Redirect to="/login" /> */}
            <Route path="/login" component={Login1} />
            <Route path="/register" component={Register1} />
            <Route path="/mine" component={Mine} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
