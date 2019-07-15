import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Top from "../../components/Top/Top";
import { Divider, Button } from "antd";
import jiesuan from "./Jiesuan.scss";
export default class Jiesuan extends Component {
  render() {
    return (
      <div>
        <div className="sure">
          <Divider>订单确认</Divider>
          <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/cartTop02.png" />
          <Divider />
        </div>
        <div className="message">
          <Button>添加地址</Button>
        </div>
      </div>
    );
  }
}
