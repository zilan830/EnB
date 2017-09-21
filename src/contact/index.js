import React from "react";
import { Row, Col } from "antd";
import SmallNav from "web_modules/component/smallNav";
import contact01 from "web_modules/images/contact01.png";
import contact02 from "web_modules/images/contact02.png";
import contact03 from "web_modules/images/contact03.png";

const navColumn = [
  {
    key: 1,
    name: "Contacts",
    selected: true,
    span: 24
  }
];

const breadColumn = ["Contacts"];

const span = {
  nav: 6,
  bread: 18
};

export default class Contract extends React.Component {
  componentDidMount() {
    // 百度地图API功能
    var map = new BMap.Map("allmap"); // 创建Map实例
    const point = new BMap.Point(121.047111, 31.259444);
    map.centerAndZoom(point, 20); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("昆山"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
  }

  render() {
    return (
      <div className="contactContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          <p className="title mt15">Contacts</p>
          <Row className="whiteContent">
            <Col span={8}>
              <div className="contact01" />
            </Col>
            <Col span={8} className="pl30">
              <p className="font14 textColorGrey line20 mb12">
                Address: No.119 North Jiguang Road, Qiandeng Town, Kunshan City,
                Jiangsu Province, China.
              </p>
              <p className="font14 textColorGrey line20">
                Tel：86 0512 57473116
              </p>
              <div
                className="font14 textColorGrey line20"
                style={{ display: "flex" }}
              >
                <span style={{ display: "inline-block" }}>Web：</span>
                <div style={{ display: "inline-block" }}>
                  <p>http://www.bntfloorcare.com</p>
                  <p>http://bntfloorcare.1688.com</p>
                </div>
              </div>
              {/*<p className="font14 textColorGrey line20 pl80">*/}
              {/*http://bntfloorcare.1688.com*/}
              {/*</p>*/}
              <p className="font14 textColorGrey line20 mb12">
                E-mail：bnt@bntfloorcare.com
              </p>
              <p className="font14 textColorGrey line20">
                NanTong Factory：Nantong Bennett Cleaning Machine Co.，Ltd.
              </p>
              <p className="font14 textColorGrey line20">
                Address：North promoter zone，Nantong coastal zone
              </p>
            </Col>
            <Col span={7} offset={1}>
              <div className="smallLogoCon">
                <div className="smallLogo">{/*<img src={contact03} />*/}</div>
              </div>
              {/*<p className="logoTextCh">昆山市贝纳特机械设备有限公司</p>*/}
              <p className="logoTextEn">
                Kunshan Bennett Cleaning Machine Co.,Ltd.
              </p>
              <p className="logoTel">Tel: 86 0512 57473116</p>
              <div className="qrcode">
                <img src={contact02} />
              </div>
            </Col>
          </Row>
          <div
            id="allmap"
            style={{
              width: "100%",
              height: "700px",
              border: "50px solid #000",
              marginTop: "50px"
            }}
          />
        </div>
      </div>
    );
  }
}
