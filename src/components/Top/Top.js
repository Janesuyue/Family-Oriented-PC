import React, { Component } from "react";
import { Carousel } from "antd";
import "./Top.scss";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
export default class Top extends Component {
  constructor(props) {
    super(props);
  }
  gouwu() {
    window.location.href = "/wall";
  }
  person() {
    window.location.href = "/person";
  }
  render() {
    return (
      <div>
        <div className="clearfix" id="top">
          <div className="outLogo">
            <h1 className="fl logo">苏悦之家</h1>
            {/* <a href="index.html">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2184684442,405861880&fm=27&gp=0.jpg" />
            </a> */}
          </div>

          <div className="fr clearfix" id="top1">
            <p className="fl denglu">
              <a href="#" id="login">
                登录
              </a>
              <a href="#" id="reg">
                注册
              </a>
            </p>
            <div className="outSearch">
              <div className="search">搜索</div>
              <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ss.png" />
            </div>

            <div className="btn fl clearfix">
              <a href="#" onClick={this.person.bind(this)}>
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/grzx.png" />
              </a>
              <a href="#" class="er1">
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ewm.png" />
              </a>
              <a href="#" onClick={this.gouwu.bind(this)}>
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/gwc.png" />
              </a>
            </div>
          </div>
        </div>
        <Tabs defaultActiveKey="1" onChange={callback} className="first">
          <TabPane tab="首页" key="1" />
          <TabPane tab="所有商品" key="2">
            <div className="sList">
              <div className="wrapper  clearfix paint">
                <a href="paint.html">
                  <dl>
                    <dt>
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/nav1.jpg" />
                    </dt>
                    <dd>浓情欧式</dd>
                  </dl>
                </a>
                <a href="paint.html">
                  <dl>
                    <dt>
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/nav2.jpg" />
                    </dt>
                    <dd>浪漫美式</dd>
                  </dl>
                </a>
                <a href="paint.html">
                  <dl>
                    <dt>
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/nav3.jpg" />
                    </dt>
                    <dd>雅致中式</dd>
                  </dl>
                </a>
                <a href="paint.html">
                  <dl>
                    <dt>
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/nav6.jpg" />
                    </dt>
                    <dd>简约现代</dd>
                  </dl>
                </a>
                <a href="paint.html">
                  <dl>
                    <dt>
                      <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/nav7.jpg" />
                    </dt>
                    <dd>创意装饰</dd>
                  </dl>
                </a>
              </div>
            </div>
          </TabPane>
          <TabPane tab="装饰摆件" key="3">
            <div className="sList2">
              <div className="clearfix1">
                <a href="proList.html">干花花艺</a>
                <a href="vase_proList.html">花瓶花器</a>
              </div>
            </div>
          </TabPane>
          <TabPane tab="布艺软饰" key="4">
            <div className="sList2">
              <div className="clearfix1">
                <a href="zbproList.html">桌布罩件</a>
                <a href="bzproList.html">抱枕靠垫</a>
              </div>
            </div>
          </TabPane>
          <TabPane tab="墙饰壁挂" key="5" />
          <TabPane tab="蜡意香熏" key="6">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="创意家居" key="7">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        ,
      </div>
    );
  }
}
