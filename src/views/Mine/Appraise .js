import React, { Component } from "react";
import { Menu, Icon } from "antd";
import Daipj from "./Daipj";
import Yipj from "./Yipj";
import Guoqipj from "./Guoqipj";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Link
} from "react-router-dom";

const { SubMenu } = Menu;

export default class Appraise extends Component {
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
          <h2>商品评价</h2>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <NavLink to="/mine/appraise/daipj">待评价商品</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/mine/appraise/yipj">已评价商品</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/mine/appraise/guoqipj">评价失效商品</NavLink>
            </Menu.Item>
          </Menu>
          <div>
            <Route path="/mine/appraise/daipj" component={Daipj} />
            <Route path="/mine/appraise/yipj" component={Yipj} />
            <Route path="/mine/appraise/guoqipj" component={Guoqipj} />
            <Redirect to="/mine/appraise/daipj" />
          </div>
        </div>
      </Router>
    );
  }
}
