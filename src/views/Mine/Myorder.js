import React, { Component } from "react";
import { Menu, Icon, Input, Button } from "antd";
import Nopayment from "./Nopayment";
import Noshouhuo from "./Noshouhuo";
import Closed from "./Closed";
import Allorder from "./Allorder";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Link
} from "react-router-dom";
const { SubMenu } = Menu;
const { Search } = Input;
export default class Mycart extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Router>
        <div>
          <h2>我的订单</h2>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <NavLink to="/mine/myorder/allorder">
                <Icon type="mail" />
                全部有效订单
              </NavLink>
            </Menu.Item>
            <Menu.Item key="app">
              <NavLink to="/mine/myorder/nopayment">
                <Icon type="appstore" />
                待支付
              </NavLink>
            </Menu.Item>

            <Menu.Item key="alipay">
              <NavLink to="/mine/myorder/noshouhuo">
                <Icon type="appstore" />
                待收货
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/mine/myorder/closed">
                <Icon type="appstore" />
                已关闭
              </NavLink>
            </Menu.Item>
          </Menu>
          {/* <div>
          <div className="fahuo">
            <h2>已发货</h2>
            <p>
              2016年12月1日 18:53 | 杨小黄 | 订单号:5160513358520018 | 在线支付
              <span>
                订单金额：<i>99.00</i> 元
              </span>
            </p>
            <div className="fahuo2">
              <div className="nihao">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=124790014,813898461&fm=27&gp=0.jpg" />
                <span>
                  <b>家用创意菜盘子圆盘 釉下彩复古</b>
                  <b>¥99.00×1</b>
                </span>
              </div>
              <div className="btn">
                <Button style={{ width: "120px", marginBottom: "10px" }}>
                  待评价
                </Button>
                <Button style={{ width: "120px" }}>待评价</Button>
              </div>
            </div>
          </div> */}

          {/* <div className="fahuo">
            <h2>已发货</h2>
            <p>
              2016年12月1日 18:53 | 杨小黄 | 订单号:5160513358520018 | 在线支付
              <span>
                订单金额：<i>99.00</i> 元
              </span>
            </p>
            <div className="fahuo2">
              <div className="nihao">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=124790014,813898461&fm=27&gp=0.jpg" />
                <span>
                  <b>家用创意菜盘子圆盘 釉下彩复古</b>
                  <b>¥99.00×1</b>
                </span>
              </div>
              <div className="btn">
                <Button style={{ width: "120px", marginBottom: "10px" }}>
                  待评价
                </Button>
                <Button style={{ width: "120px" }}>待评价</Button>
              </div>
            </div>
          </div> 
        </div>*/}
          <div>
            <Route path="/mine/myorder/nopayment" component={Nopayment} />
            <Route path="/mine/myorder/noshouhuo" component={Noshouhuo} />
            <Route path="/mine/myorder/closed" component={Closed} />
            <Route path="/mine/myorder/allorder" component={Allorder} />
            <Redirect to="/mine/myorder/allorder" />
          </div>
        </div>
      </Router>
    );
  }
}
