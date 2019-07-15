import React, { Component } from "react";

import $ from "jquery";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ""
    };
  }
  render() {
    return (
      <div>
        <div>
          <h2>详情</h2>
          <h3>{this.state.detail.name}</h3>
          <p>{this.state.detail.descriptions}</p>
          <img src={this.state.detail.coverImg} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.props.location.query);
    var _this = this;
    $.ajax({
      type: "get",
      url: "http://api.cat-shop.penkuoer.com/api/v1/products/:id",
      // url: "http://jx.xuzhixiang.top/ap/api/detail.php",
      // data: { id: _this.location.query.id },
      dataType: "json",
      success: function(data) {
        console.log(data.products);
        _this.setState({ detail: data.products });
      }
    });
  }
  componentWillReceiveProps(a) {
    var _this = this;
    $.ajax({
      type: "get",
      url: "http://api.cat-shop.penkuoer.com/api/v1/products/:id",
      // url: "http://jx.xuzhixiang.top/ap/api/detail.php",

      // data: { id: a.location.query.id }
      data: { uid: 1017 },
      dataType: "json",
      success: function(data) {
        console.log(data.products);
        _this.setState({ detail: data.products });
      }
    });
  }
}
