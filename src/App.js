import React, { Component } from "react";

import "./App.scss";
import Home from "./views/Home";
import Login from "./views/Login/Login";
import Footer from "./views/Footer/Footer";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Home />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
