import React, { Component } from "react";
import Nopayment from "./Nopayment";
import Noshouhuo from "./Noshouhuo";
import Closed from "./Closed";

export default class Allorder extends Component {
  render() {
    return (
      <div>
        <Nopayment />
        <Noshouhuo />
        <Closed />
      </div>
    );
  }
}
