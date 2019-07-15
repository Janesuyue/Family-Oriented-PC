import React, { Component } from "react";
<<<<<<< HEAD

import "./App.scss";
import Home from "./views/Home";
import Shouye from "./views/Shouye/shouye";
import Footer from "./views/Footer/Footer";
import Detail from "./views/Detail/Detail";
import Top from "./components/Top/Top";
import Picture from "./views/Picture/Picture";
=======
import "./App.scss";
import Login1 from "./views/Login/login";
>>>>>>> 8db9e7fd645dbed610ec6f875b8203812bea677c
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
<<<<<<< HEAD
import Item from "./views/Item";
import Wall from "./views/Wall/Wall";
=======
import Register1 from "../src/views/Register/register";
import Mine from "./views/Mine/mine";

>>>>>>> 8db9e7fd645dbed610ec6f875b8203812bea677c
class App extends Component {
  constructor() {
    super();
  }
<<<<<<< HEAD

=======
>>>>>>> 8db9e7fd645dbed610ec6f875b8203812bea677c
  render() {
    return (
      <div>
        <Router>
          <div>
<<<<<<< HEAD
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
=======
            {/* <Redirect to="/login" /> */}
            <Route path="/login" component={Login1} />
            <Route path="/register" component={Register1} />
            <Route path="/mine" component={Mine} />
>>>>>>> 8db9e7fd645dbed610ec6f875b8203812bea677c
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
