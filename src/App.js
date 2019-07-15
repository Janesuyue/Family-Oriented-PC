import React, { Component } from "react";

import "./App.scss";
import Home from "./views/Home";
import Shouye from "./views/Shouye/shouye";
import Footer from "./views/Footer/Footer";
import Detail from "./views/Detail/Detail";
import Top from "./components/Top/Top";
import Picture from "./views/Picture/Picture";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Item from "./views/Item";
import Wall from "./views/Wall/Wall";
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

            <Route path="/shouye" component={Home} />
            <Route path="/detail" component={Detail} />

            <Route path="/shouye" component={Shouye} />
            <Route path="/app/item" component={Item} />

            <Route path="/wall" component={Top} />
            <Route path="/wall" component={Wall} />
            <Route path="/wall" component={Footer} />

            <Route path="/shouye" component={Footer} />
            {/* <Redirect to="/shouye" /> */}
            {/* <Detail /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
