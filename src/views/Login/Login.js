import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import login from "./login.scss";
import Register from "../Register/register";

import { Form, Icon, Input, Button, Checkbox } from "antd";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="bsg">
        <img src="http://www.xiujukoo.com/upimg/allimg/180203/0647410.jpg" />
        <div className="rgs">
          <h3>苏悦之家登录</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请输入用户名" }]
              })(
                <Input
                  className="ipt"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码" }]
              })(
                <Input
                  className="ipt"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
              <p className="nor">
                <b>还没账号?</b>
                <Link to="/register">立即注册</Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
  // tap() {
  //   this.props.history.push("/register");
  // }
}
const Login1 = Form.create({ name: "normal_login" })(Login);
export default Login1;
