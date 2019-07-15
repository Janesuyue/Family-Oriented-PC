import React, { Component } from "react";
import { Row, Col, Button } from "antd";

export default class Guoqipj extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <div className="guoqipj">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/nav3.jpg" />
              <p>家用创意壁挂 釉下彩复古</p>
              <p>¥199.00</p>
              <p>16000人评价</p>
              <Button type="primary" disabled className="btn">
                暂不能评价
              </Button>
            </div>
          </Col>
          <Col span={4} />
          <Col span={4} />
          <Col span={4} />
        </Row>
      </div>
    );
  }
}
