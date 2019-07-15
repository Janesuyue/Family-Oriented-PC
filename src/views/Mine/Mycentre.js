import React, { Component } from "react";
import { Avatar, Divider, Row, Col, Icon } from "antd";

export default class Mycenter extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="hpto">
            <Avatar size={64} icon="user" />
          </div>
          <div className="meg">
            <h2>猫的星期一</h2>
            <p>修改个人信息>></p>
          </div>
          <Divider />
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Icon
                type="account-book"
                style={{ fontSize: "100px", color: "#08c" }}
              />
              <p>待支付的订单：0</p>
              <p>查看待支付订单></p>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Icon type="gift" style={{ fontSize: "100px", color: "#08c" }} />
              <p>待支付的订单：0</p>
              <p>查看待支付订单></p>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Icon
                type="message"
                style={{ fontSize: "100px", color: "#08c" }}
              />
              <p>待支付的订单：0</p>
              <p>查看待支付订单></p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
