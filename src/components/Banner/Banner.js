import React, { Component } from "react";
import { Carousel } from "antd";
// import '../../common/sass/common.css'
import "./Banner.scss";

export default class Banner extends Component {
  render() {
    return (
      <div className="outPhoto">
        <Carousel autoplay>
          <div>
            <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/banner1.jpg" />
          </div>
          <div>
            <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/banner2.jpg" />
          </div>
          <div>
            <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/banner1.jpg" />
          </div>
          <div>
            <img src="http://www.17sucai.com/preview/1131734/2019-05-13/ZBestPC-master/img/banner2.jpg" />
          </div>
        </Carousel>
        ,
      </div>
    );
  }
  // ReactDOM.render(
  //     mountNode,
  //   );
}
