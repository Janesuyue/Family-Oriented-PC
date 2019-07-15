import React, { Component } from "react";
import axios from "axios";
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
        var token = localStorage.getItem("token");
        console.log(token);

        axios({
          method: "post",
          url: "http://api.cat-shop.penkuoer.com/api/v1/auth/login",
          data: {
            userName: values.username,
            password: values.password
          },
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token
          }
        }).then(res => {
          console.log(res);
          if (res.data.code == "success") {
            alert("登陆成功");
<<<<<<< HEAD

=======
>>>>>>> d123d66a2d3553059bab825a94e4a63bf78cce93
            this.props.history.push("./shouye");
          } else if (res.data.message == "用户密码错误！") {
            alert("密码错误");
          } else if (res.data.message == "user not found") {
            alert("用户名不存在");
          }
        });
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
