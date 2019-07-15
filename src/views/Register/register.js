import React, { Component } from "react";

import register from "./register.scss";
import axios from "axios";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class Register extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        axios({
          method: "post",
          url: "http://api.cat-shop.penkuoer.com/api/v1/auth/reg",
          data: {
            nickName: values.nickname,
            userName: values.username,
            password: values.password,
            avatar: values.phone
          }
        }).then(res => {
          console.log(res);
          if (res.data.code == "error") {
            alert("用户名已存在");
          } else {
            alert("注册成功");

            localStorage.setItem("token", res.data.token);
            this.props.history.push("/login");
            console.log(res.data.token);
          }
        });
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback(); //验证成功，加参数表示验证失败，并指定提示的文本
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <div className="bsg1">
        <img src="http://www.xiujukoo.com/upimg/allimg/180203/0647410.jpg" />
        <div className="rgs1">
          <h3>苏悦之家注册</h3>
          <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="biaodan"
          >
            <Form.Item label="姓名">
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "请输入用户名"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码" hasFeedback>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "请输入你的密码"
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="确认密码" hasFeedback>
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "请与上面保持一致"
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item label={<span>昵称&nbsp;</span>}>
              {getFieldDecorator("nickname", {
                //验证
                rules: [
                  {
                    required: true,
                    message: "请输入昵称",
                    whitespace: true
                  },
                  {
                    min: 4,
                    message: "用户名至少4位"
                  },
                  {
                    max: 4,
                    message: "用户名最多只能6位"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="手机号码">
              {getFieldDecorator("phone", {
                rules: [{ required: true, message: "请输入手机号码" }]
              })(
                <Input
                  addonBefore={prefixSelector}
                  style={{ width: "230px" }}
                />
              )}
            </Form.Item>

            <Form.Item label="验证码">
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator("captcha", {
                    rules: [
                      {
                        required: true,
                        message: "请输入您的验证码!"
                      }
                    ]
                  })(<Input style={{ width: "130px" }} />)}
                </Col>
                <Col span={12}>
                  <Button style={{ width: "95px" }}>获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator("agreement", {
                valuePropName: "checked"
              })(
                <Checkbox>
                  我已经阅读该<a href="">协议</a>
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="btn">
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const Register1 = Form.create({ name: "register" })(Register);
export default Register1;
