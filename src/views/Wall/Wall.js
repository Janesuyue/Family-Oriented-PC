import React, { Component } from "react";
import "./Wall.scss";
import { Row, Col } from "antd";
import { Steps } from "antd";
import { Checkbox } from "antd";
import { InputNumber } from "antd";
import { Popconfirm, Button } from "antd";
import axios from "axios";
const { Step } = Steps;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    };
  }

  render() {
    return (
      <div className="outWall">
        <div className="gouwu">
          <h3>购物车</h3>
          <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/cartTop01.png" />
          <a>继续购物>></a>
        </div>

        <div className="shangpin">
          <Row type="flex" justify="space-around" align="middle">
            <Col span={4}>商品</Col>
            <Col span={4}>单价</Col>
            <Col span={4}>数量</Col>
            <Col span={4}>小计</Col>
            <Col span={4}>操作</Col>
          </Row>
        </div>
        <div className="goods">
          {this.state.cartList.map((item1, i) => {
            return (
              <div key={i}>
                <Row type="flex" justify="space-between">
                  <Col span={4}>
                    <div className="check">
                      <Checkbox onChange={onChange} />
                      <img src={item1.product.coverImg} />

                      <p>{item1.product.name}</p>

                      <p className="yanse">{item1.product.descriptions}</p>
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="shuliang">
                      <p>{item1.product.price}</p>
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="outIpt">
                      <InputNumber
                        className="ipt"
                        min={1}
                        max={1000}
                        defaultValue={1}
                        onChange={onChange}
                      />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="shuliang">
                      <p>￥20.00</p>
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="shanchu">
                      <Popconfirm
                        title="确定删除该商品"
                        okText="确定"
                        cancelText="取消"
                      >
                        <a href="#" onClick={this.del.bind(this)}>
                          删除
                        </a>
                      </Popconfirm>
                    </div>
                  </Col>
                </Row>
                <hr />
              </div>
            );
          })}
        </div>
        <Button
          style={{
            width: "220px",
            height: "40px",
            marginBottom: "10px",
            marginTop: "30px",
            background: "#A10000",
            color: "#fff",
            marginLeft: "500px"
          }}
          href="/jiesuan"
        >
          立即支付
        </Button>
      </div>
    );
  }
  del() {
    var _this = this;
    let arr = this.props.location.pathname.split("/");
    console.log(arr);
    let pid = arr[2];
    var _this = this;
    console.log(localStorage.getItem("token"));
    var token = localStorage.getItem("token");
    axios({
      method: "get",
      url: `http://api.cat-shop.penkuoer.com//api/v1/shop_carts/${pid}`,
      data: { id: pid },
      headers: { Accept: "application/json", Authorization: "Bearer " + token }
    }).then(res => {
      console.log(res.data);

      _this.setState({ cartList: res.data });
    });
  }
  componentDidMount() {
    var _this = this;
    console.log(localStorage.getItem("token"));
    var token = localStorage.getItem("token");
    axios({
      method: "get",
      url: "http://api.cat-shop.penkuoer.com//api/v1/shop_carts",
      headers: { Accept: "application/json", Authorization: "Bearer " + token }
    }).then(res => {
      console.log(res.data);

      _this.setState({ cartList: res.data });
    });
  }
}
