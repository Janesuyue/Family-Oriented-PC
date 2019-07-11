import React, { Component } from "react";
import { Carousel } from "antd";
import "./Footer.scss";
import { Form, Icon, Input, Button, Checkbox, Tooltip } from "antd";
import { Row, Col } from "antd";
export default class Middle extends Component {
  render() {
    return (
      <div>
        <div class="footer">
          <div class="top">
            <div class="wrapper">
              <div class="clearfix">
                <a href="#2" class="fl">
                  <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/foot1.png" />
                </a>
                <span class="fl">7天无理由退货</span>
              </div>
              <div class="clearfix">
                <a href="#2" class="fl">
                  <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/foot2.png" />
                </a>
                <span class="fl">15天免费换货</span>
              </div>
              <div class="clearfix">
                <a href="#2" class="fl">
                  <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/foot3.png" />
                </a>
                <span class="fl">满599包邮</span>
              </div>
              <div class="clearfix">
                <a href="#2" class="fl">
                  <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/foot4.png" />
                </a>
                <span class="fl">手机特色服务</span>
              </div>
            </div>
          </div>
          <p class="dibu">
            苏悦之家&copy;2013-2019公司版权所有 京ICP备080100-44备0000111000号
            <br />
            违法和不良信息举报电话：400-800-8200，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
          </p>
        </div>
      </div>
    );
  }
}
