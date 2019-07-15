import React, { Component } from "react";
// import ajax from "../../plugins/ajax";
import $ from "jquery";
import axios from "axios";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Picture.scss";
import { Row, Col } from "antd";
import Detail from "../Detail/Detail";
export default class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Row type="flex" justify="space-around">
            {this.state.list.map((item, i) => {
              return (
                <div key={i}>
                  <Col span={4} className="photo3">
                    <span onClick={this.tap.bind(this, item._id)}>
                      <img src={item.coverImg} />
                      <p>{item.descriptions}</p>
                      <p>￥{item.price}</p>
                      {/* </Link> */}
                    </span>
                  </Col>
                </div>
              );
            })}
          </Row>
        </div>
      </Router>
    );
  }
  tap(id) {
    // this.props.history.push("/app/item");
    // window.location.href = "/detail/" + id;
    window.location.href = `/detail/${id}`;
  }
  componentDidMount() {
    var _this = this;
    $.ajax({
      method: "get",
      url: "http://api.cat-shop.penkuoer.com/api/v1/products",

      //   data: { page: 2, per: 3 },
      dataType: "json",
      success: function(data) {
        console.log(data.products);
        // console.log(data.products[0]._id);
        // console.log(data.products.price);

        console.log(data);
        _this.setState({ list: data.products });
      }
    });
  }
}
