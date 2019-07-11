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

  render() {
    return (
      <div>
        <div class="clearfix" id="top">
          <h1 class="fl">
            <a href="index.html">
              <img src="../../image/timg.jpg" />
            </a>
          </h1>
          <div class="fr clearfix" id="top1">
            <p class="fl">
              <a href="#" id="login">
                登录
              </a>
              <a href="#" id="reg">
                注册
              </a>
            </p>
            <form action="#" method="get" class="fl">
              <input type="text" placeholder="热门搜索：干花花瓶" />
              <input type="button" />
            </form>
            <div class="btn fl clearfix">
              <a href="mygxin.html">
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/grzx.png" />
              </a>
              <a href="#" class="er1">
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/ewm.png" />
              </a>
              <a href="cart.html">
                <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/gwc.png" />
              </a>
              {/* <p>
                <a href="#">
                  <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/smewm.png" />
                </a>
              </p> */}
            </div>
          </div>
        </div>
        <Tabs defaultActiveKey="1" onChange={callback} className="first">
          <TabPane tab="首页" key="1" />
          <TabPane tab="所有商品" key="2">
            <div class="sList">
              <div class="wrapper  clearfix">
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
            <div class="sList2">
              <div class="clearfix">
                <a href="proList.html">干花花艺</a>
                <a href="vase_proList.html">花瓶花器</a>
              </div>
            </div>
          </TabPane>
          <TabPane tab="布艺软饰" key="4">
            <div class="sList2">
              <div class="clearfix">
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
