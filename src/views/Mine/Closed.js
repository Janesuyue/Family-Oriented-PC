import React, { Component } from "react";
import { Menu, Icon, Input, Button, Pagination } from "antd";
export default class Closed extends Component {
  render() {
    return (
      <div>
        <div className="fahuo_3">
          <h2>已关闭</h2>
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
              <Button
                style={{
                  width: "120px",
                  marginBottom: "10px"
                }}
              >
                交易失败
              </Button>
              <Button style={{ width: "120px" }}>订单详情</Button>
            </div>
          </div>
          <Pagination
            simple
            defaultCurrent={2}
            total={50}
            style={{ marginLeft: "300px" }}
          />
        </div>
      </div>
    );
  }
}
