import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Top from "../../components/Top/Top";
import { Divider, Button, Icon } from "antd";
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
          <Button>
            <Icon type="plus" />
            <a href="/mine/address">添加地址</a>
          </Button>
          <Divider />
          <div className="fanhui">
            <h2>订单内容</h2>
            <a href="wall">返回购物车</a>
            <Divider />
            <ul className="oli">
              <li>
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/order01.jpg" />
                <div className="oli1">
                  <p>创意现代简约干花花瓶摆件</p>
                  <p>颜色分类：烟灰色玻璃瓶</p>
                  <p>数量：1</p>
                </div>
                <span>￥69.9</span>
              </li>
              <li>
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/order01.jpg" />
                <div className="oli1">
                  <p>创意现代简约干花花瓶摆件</p>
                  <p>颜色分类：烟灰色玻璃瓶</p>
                  <p>数量：1</p>
                </div>
                <span>￥69.9</span>
              </li>
            </ul>
            <div className="tips">
              <p>
                <span className="fl">商品金额：</span>
                <span className="fr">￥120</span>
              </p>
              <p>
                <span className="fl">优惠金额：</span>
                <span className="fr">0.00</span>
              </p>
              <p>
                <span className="fl">运费：</span>
                <span className="fr">免运费</span>
              </p>
            </div>
            <Divider />
            <div className="heji">
              <span className="heji1">合计：</span>
              <span className="heji2">￥120</span>
            </div>
            <Button
              style={{
                width: "220px",
                height: "40px",
                marginBottom: "10px",
                marginTop: "30px",
                background: "#A10000",
                color: "#fff"
              }}
            >
              立即支付
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
