import React, { Component } from "react";

import "./App.scss";
import Home from "./views/Home";
import Shouye from "./views/Shouye/shouye";
import Footer from "./views/Footer/Footer";
import Detail from "./views/Detail/Detail";
import Top from "./components/Top/Top";
import Picture from "./views/Picture/Picture";
import "./App.scss";
import Login1 from "./views/Login/login";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Item from "./views/Item";
import Wall from "./views/Wall/Wall";
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
            {/* <Home /> */}
            {/* <Login /> */}

            {/* <Picture /> */}
            {/* <Footer /> */}
            {/* <Redirect to="/shouye" /> */}

            <Route path="/detail" component={Detail} />
            <Route path="/shouye" component={Home} />
            <Route path="/shouye" component={Shouye} />

            <Route path="/wall" component={Top} />
            <Route path="/wall" component={Footer} />
            <Route path="/app/item" component={Item} />

            <Route path="/wall" component={Wall} />

            <Route path="/shouye" component={Footer} />

            {/* <Detail /> */}
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
