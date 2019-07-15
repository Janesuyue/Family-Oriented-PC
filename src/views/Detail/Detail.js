import React, { Component } from "react";

import $ from "jquery";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./Detail.scss";
import { Tabs } from "antd";
import { Comment, Tooltip, List } from "antd";
import moment from "moment";
import { InputNumber } from "antd";
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
function onChange(value) {
  console.log("changed", value);
}

const data = [
  {
    actions: [<span>Reply to</span>],
    author: "小桃子",
    avatar:
      "http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/per02.jpg",
    content: (
      <p>
        花瓶超级棒，我看图以为是光面的，收货发现是磨砂，但感觉也超有质感，很喜欢。磨砂上面还有点纹路，不过觉得挺自然的，不影响美观。包装也很好，绝对不会磕碎碰坏，好评！
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, "days")
          .format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>
          {moment()
            .subtract(1, "days")
            .fromNow()}
        </span>
      </Tooltip>
    )
  },
  {
    actions: [<span>Reply to</span>],
    author: "小丸子",
    avatar:
      "http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/per01.jpg",
    content: (
      <p>
        不好意思评价晚了，产品很好，价格比玻璃品便宜，没有我担心的杂色，发货快，包装好，全5分
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, "days")
          .format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>
          {moment()
            .subtract(2, "days")
            .fromNow()}
        </span>
      </Tooltip>
    )
  }
];

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ""
    };
  }
  render() {
    return (
      <div className="outDetail">
        {/* <div>
          <h3>{this.state.detail.name}</h3>
          <p>{this.state.detail.descriptions}</p>
          <img src={this.state.detail.coverImg} />
        </div> */}
        <h3>【苏悦之家】{this.state.detail.name}</h3>

        <hr />
        <div className="biaoti">
          <div className="tupian">
            <img src={this.state.detail.coverImg} />
            {/* <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/proDet.jpg" /> */}
            <div className="l_pic">
              <img src={this.state.detail.coverImg} />
              <img src={this.state.detail.coverImg} />
              <img src={this.state.detail.coverImg} />
              <img src={this.state.detail.coverImg} />
            </div>
          </div>
          <div className="right">
            <h1>【苏悦之家】{this.state.detail.name}</h1>
            <p>
              【破损补寄】【适合放室内、卧室、书房、餐桌、办公室、客厅、电视柜等地方】【无理由退换货】【包邮】【白色现代简约花瓶】
            </p>
            <p className="price">￥{this.state.detail.price}</p>
            <hr />
            <h6>颜色分类</h6>
            <div className="smallpic">
              <img src={this.state.detail.coverImg} />
              <img src={this.state.detail.coverImg} />
              <img src={this.state.detail.coverImg} />
              <img src={this.state.detail.coverImg} />
            </div>

            <h6>
              数量&nbsp;&nbsp;&nbsp;<span>库存2608件</span>
            </h6>
            <div className="outNum">
              {/* <div className="num">-</div>
              <div className="num1">1</div>
              <div className="num">+</div> */}
              <InputNumber
                className="ipt"
                min={1}
                max={1000}
                defaultValue={1}
                onChange={onChange}
              />
            </div>
            <hr />
            <div className="outBuy">
              <div className="buy" onClick={this.buy.bind(this)}>
                立即购买
              </div>
              <div className="cart" onClick={this.add.bind(this)}>
                加入购物车
              </div>
            </div>
          </div>
        </div>
        <div className="xiangqing">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="商品详情" key="1">
              <img src={this.state.detail.coverImg} />
            </TabPane>
            <TabPane tab="所有评价" key="2">
              <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <li>
                    <Comment
                      actions={item.actions}
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                    />
                  </li>
                )}
              />
              ,
            </TabPane>
          </Tabs>
          ,
        </div>
        <div className="r_tuijian">
          <h3>为你推荐</h3>
          <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/temp/see01.jpg" />
          <p>【苏悦之家】复古文艺风玻璃花瓶</p>
          <p>￥59.00</p>
        </div>
      </div>
    );
  }
  buy() {
    console.log(1);
  }
  add() {
    // console.log(this.props.location.query.id);
    console.log(this.props);
    console.log(localStorage.getItem("token"));
    var token = localStorage.getItem("token");
    let arr = this.props.location.pathname.split("/");
    console.log(arr);
    let pid = arr[2];

    axios({
      method: "post",
      url: "http://api.cat-shop.penkuoer.com//api/v1/shop_carts",
      data: { product: pid },
      headers: { Accept: "application/json", Authorization: "Bearer " + token }
    }).then(res => {
      console.log(res);
      if (res.code.data == "success") {
        window.location.href = "/cart";
      }
    });
  }
  componentDidMount() {
    console.log(this.props);

    let arr = this.props.location.pathname.split("/");
    console.log(arr);
    let pid = arr[2];
    var _this = this;
    // ajax("http://api/v1/products", {}, function(data) {
    //   console.log(data.data);
    //   _this.setState({ list: data.data });
    // });
    // var id = _this.props.location.query.id;
    $.ajax({
      type: "get",
      url: `http://api.cat-shop.penkuoer.com/api/v1/products/${pid}`,
      data: { id: pid },
      dataType: "json",
      success: function(data) {
        console.log(data);
        _this.setState({ detail: data });
      }
    });
  }
}
