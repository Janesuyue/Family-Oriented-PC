import React, { Component } from "react";
import mine from "./mine.scss";
import Mycenter from "./Mycentre";
import Mycart from "./Mycart";
import Myorder from "./Myorder";
import Appraise from "./Appraise ";
import CollectionCreateForm from "./Address ";
import Permeg from "./Permeg";
import Passwd from "./Passwd";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Mine extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>个人中心</Breadcrumb.Item>
              </Breadcrumb>

              <Layout style={{ padding: "24px 0", background: "#fff" }}>
                <Sider width={200} style={{ background: "#fff" }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                  >
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="user" />
                          我的交易
                        </span>
                      }
                    >
                      <Menu.Item key="1">
                        <a href="/wall">我的购物车</a>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <NavLink to="/mine/myorder">我的订单</NavLink>
                      </Menu.Item>
                      <Menu.Item key="3">
                        <NavLink to="/mine/appraise">评价晒单</NavLink>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="smile" />
                          个人中心
                        </span>
                      }
                    >
                      <Menu.Item key="5">
                        <NavLink to="/mine/mycenter">我的中心</NavLink>
                      </Menu.Item>

                      <Menu.Item key="6">
                        <NavLink to="/mine/address"> 地址管理</NavLink>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub3"
                      title={
                        <span>
                          <Icon type="lock" />
                          账户管理
                        </span>
                      }
                    >
                      <Menu.Item key="9">
                        <NavLink to="/mine/permeg">个人信息</NavLink>
                      </Menu.Item>
                      <Menu.Item key="10">
                        <NavLink to="/mine/passwd">修改密码</NavLink>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>

                <Content style={{ padding: "0 24px", minHeight: 280 }}>
                  <Content>
                    <Route path="/mine/mycenter" component={Mycenter} />
                    <Route path="/mine/mycart" component={Mycart} />
                    <Route path="/mine/myorder" component={Myorder} />
                    <Route path="/mine/appraise" component={Appraise} />
                    <Route
                      path="/mine/address"
                      component={CollectionCreateForm}
                    />
                    <Route path="/mine/permeg" component={Permeg} />
                    <Route path="/mine/passwd" component={Passwd} />
                    <Redirect to="/mine/mycenter" />
                  </Content>
                </Content>
              </Layout>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}
