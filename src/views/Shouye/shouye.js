import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Tooltip } from "antd";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./shouye.scss";
import { Row, Col } from "antd";
import Picture from "../Picture/Picture";

export default class Shouye extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Row type="flex" justify="center" className="photo">
            <NavLink to="/vase">
              <Col span={4} className="photo1">
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/i1.jpg" />
              </Col>
            </NavLink>
            <NavLink to="/flower">
              <Col span={4} className="photo1">
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/i2.jpg" />
              </Col>
            </NavLink>
            <NavLink to="/simple">
              <Col span={4} className="photo1">
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/i3.jpg" />
              </Col>
            </NavLink>
          </Row>
          <Row type="flex" justify="center">
            <Col span={4} className="xinshui">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ih1.jpg" />
            </Col>
          </Row>
          <Row type="flex" justify="space-around" className="caihong">
            <Col span={4} className="firstPhoto">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/n1.jpg" />
            </Col>
            <Col span={4} className="twoPhoto">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/n2.jpg" />
            </Col>
            <Col span={4} className="twoPhoto">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/n3.jpg" />
            </Col>
          </Row>
          <Row type="flex" justify="space-around" className="design">
            <Col span={4} className="twoPhoto">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/n4.jpg" />
            </Col>
            <Col span={4} className="twoPhoto">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/n5.jpg" />
            </Col>
            <Col span={4} className="firstPhoto">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/n6.jpg" />
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span={4} className="huayi">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ih2.jpg" />
            </Col>
          </Row>
          <div className="news">
            <div className="wrapper">
              <div className="flower clearfix tran">
                <a href="proDetail.html" className="clearfix">
                  <dl>
                    <dt>
                      <span className="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo1.jpg" />
                      <span className="abr" />
                    </dt>
                    <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                    <dd>
                      <span>¥ 79.00</span>
                    </dd>
                  </dl>
                </a>
                <a href="proDetail.html">
                  <dl>
                    <dt>
                      <span className="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo2.jpg" />
                      <span className="abr" />
                    </dt>
                    <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                    <dd>
                      <span>¥ 79.00</span>
                    </dd>
                  </dl>
                </a>
                <a href="proDetail.html">
                  <dl>
                    <dt>
                      <span className="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo3.jpg" />
                      <span className="abr" />
                    </dt>
                    <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                    <dd>
                      <span>¥ 79.00</span>
                    </dd>
                  </dl>
                </a>
              </div>
            </div>
            <a href="#" className="ad">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ib1.jpg" />
            </a>
            <div className="people">
              <div className="wrapper">
                <h2>
                  <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ih3.jpg" />
                </h2>
                <div className="pList clearfix tran">
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span className="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s7.jpg" />
                        <span className="abr" />
                      </dt>
                      <dd>【最家】不锈钢壁饰墙饰软装</dd>
                      <dd>
                        <span>￥688.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span className="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s10.jpg" />
                        <span className="abr" />
                      </dt>
                      <dd>【最家】小城动物木板画壁挂北欧</dd>
                      <dd>
                        <span>￥188.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span className="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s8.jpg" />
                        <span className="abr" />
                      </dt>
                      <dd>【最家】玄关假山水壁饰背景墙饰挂件创意</dd>
                      <dd>
                        <span>￥599.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span className="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s9.jpg" />
                        <span className="abr" />
                      </dt>
                      <dd>【最家】金属树枝壁饰铜鸟装饰品</dd>
                      <dd>
                        <span>￥928.00</span>
                      </dd>
                    </dl>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Picture />
        </div>
      </Router>
    );
  }
}
