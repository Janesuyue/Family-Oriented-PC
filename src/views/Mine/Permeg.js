import React, { Component } from "react";

import { Divider, Modal, Button, Input } from "antd";
import axios from "axios";
const onChange = e => {
  console.log(e);
};
export default class Permeg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ""
    };
  }
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <h2>个人信息</h2>
        <Divider />
        <div className="top">
          <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/tx.png" />
          <p>修改头像</p>
        </div>
        <div className="top1">
          <div className="xgai">
            <h2>基础资料</h2>
            <div className="xgai2">
              <Button type="primary" onClick={this.showModal}>
                修改
              </Button>
              <Modal
                title="编写个人资料"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>
                  <Input placeholder="昵称" allowClear onChange={onChange} />
                </p>
                <p>
                  <Input placeholder="生日" allowClear onChange={onChange} />
                </p>
                <p>
                  <Input placeholder="性别" allowClear onChange={onChange} />
                </p>
              </Modal>
            </div>
          </div>
          <Divider />
          <p>昵称：{this.state.list.nickName}</p>
          <Divider />
          <p>手机号码：{this.state.list.avatar}</p>
          <Divider />
          <p>性别：女</p>
          <Divider />
          <h2>高级设置</h2>
          <Divider />
          <p>账号地区：中国</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    var _this = this;
    var token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "get",
      url: "http://api.cat-shop.penkuoer.com/api/v1/users/info",
      params: {},
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => {
      console.log(res.data);
      _this.setState({
        list: res.data
      });
    });
  }
}
