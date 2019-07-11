import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Tooltip } from "antd";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./Login.scss";
import { Row, Col } from "antd";
export default class Login extends Component {
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
          <div class="news">
            <div class="wrapper">
              <div class="flower clearfix tran">
                <a href="proDetail.html" class="clearfix">
                  <dl>
                    <dt>
                      <span class="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo1.jpg" />
                      <span class="abr" />
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
                      <span class="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo2.jpg" />
                      <span class="abr" />
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
                      <span class="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo3.jpg" />
                      <span class="abr" />
                    </dt>
                    <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                    <dd>
                      <span>¥ 79.00</span>
                    </dd>
                  </dl>
                </a>
              </div>
              <div class="flower clearfix tran">
                <a href="proDetail.html">
                  <dl>
                    <dt>
                      <span class="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo4.jpg" />
                      <span class="abr" />
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
                      <span class="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo5.jpg" />
                      <span class="abr" />
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
                      <span class="abl" />
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/flo6.jpg" />
                      <span class="abr" />
                    </dt>
                    <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                    <dd>
                      <span>¥ 79.00</span>
                    </dd>
                  </dl>
                </a>
              </div>
            </div>
            <a href="#" class="ad">
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ib1.jpg" />
            </a>
            <div class="people">
              <div class="wrapper">
                <h2>
                  <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ih3.jpg" />
                </h2>
                <div class="pList clearfix tran">
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s7.jpg" />
                        <span class="abr" />
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
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s10.jpg" />
                        <span class="abr" />
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
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s8.jpg" />
                        <span class="abr" />
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
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s9.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】金属树枝壁饰铜鸟装饰品</dd>
                      <dd>
                        <span>￥928.00</span>
                      </dd>
                    </dl>
                  </a>
                </div>
                <div class="pList clearfix tran">
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s6.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】金属壁饰创意背景墙面挂件创意</dd>
                      <dd>
                        <span>￥228.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s8.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】小城动物木板画壁挂北欧</dd>
                      <dd>
                        <span>￥199.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s12.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】欧式复古挂钟创意餐厅钟表家居挂件</dd>
                      <dd>
                        <span>￥666.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s1.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】客厅地中海欧式现代相片墙创意</dd>
                      <dd>
                        <span>￥59.80</span>
                      </dd>
                    </dl>
                  </a>
                </div>
                <div class="pList clearfix tran">
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s5.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】铁艺荷叶壁挂软装背景墙上装饰品</dd>
                      <dd>
                        <span>￥800.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s3.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】欧式照片墙 创意组合结婚礼物</dd>
                      <dd>
                        <span>￥189.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s2.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】欧式钟表相框墙挂墙创意组合</dd>
                      <dd>
                        <span>￥148.00</span>
                      </dd>
                    </dl>
                  </a>
                  <a href="proDetail.html">
                    <dl>
                      <dt>
                        <span class="abl" />
                        <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/s11.jpg" />
                        <span class="abr" />
                      </dt>
                      <dd>【最家】小城动物木板画壁挂北欧</dd>
                      <dd>
                        <span>￥188.00</span>
                      </dd>
                    </dl>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
