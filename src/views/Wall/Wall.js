import React, { Component } from "react";
import "./Wall.scss";
import { Row, Col } from "antd";
import { Steps } from "antd";
import { Checkbox } from "antd";
import { InputNumber } from "antd";
import { Popconfirm } from "antd";

const { Step } = Steps;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default class Wall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="outWall">
        <div className="gouwu">
          <h3>购物车</h3>
          <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/cartTop01.png" />
          <a>继续购物>></a>
        </div>

        <div className="shangpin">
          <Row type="flex" justify="space-around" align="middle">
            <Col span={4}>商品</Col>
            <Col span={4}>单价</Col>
            <Col span={4}>数量</Col>
            <Col span={4}>小计</Col>
            <Col span={4}>操作</Col>
          </Row>
        </div>
        <div className="goods">
          <Row type="flex" justify="space-between">
            <Col span={4}>
              <div className="check">
                <Checkbox onChange={onChange} />
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/cart01.jpg" />
                <p>创意现代简约干花花瓶摆件</p>
                <p className="yanse">颜色分类:</p>
                <p className="yanse">白色瓷瓶+白色串枚</p>
              </div>
            </Col>
            <Col span={4}>￥20.00</Col>
            <Col span={4}>
              <InputNumber
                className="ipt"
                min={1}
                max={1000}
                defaultValue={1}
                onChange={onChange}
              />
            </Col>
            <Col span={4}>￥20.00</Col>
            <Col span={4}>
              <Popconfirm
                title="确定删除该商品"
                okText="确定"
                cancelText="取消"
              >
                <a href="#">删除</a>
              </Popconfirm>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
