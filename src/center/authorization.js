import React from "react";
import { Row, Col } from "antd";
import pic01 from "web_modules/images/pic01.png";
import dataHoc from "web_modules/component/datas";

@dataHoc({ url: "/right_issuer/list" }, response => {
  return { data: response };
})
export default class Authorization extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data || [];
    const content = data.map((item, index) => {
      const list = [];
      if (item.hasOwnProperty("child")) {
        item.child.map((it, ind) => {
          list.push(
            <div key={`it-${ind}`}>
              <p className="areaItem">
                <span>
                  {ind + 1}、{it.company}
                </span>
                <span>{it.area}</span>
              </p>
              <p className="areaItem">
                <span>{it.address}</span>
                <span>{it.phone}</span>
              </p>
            </div>
          );
        });
      }
      return (
        <div key={`item-${index}`} className="authItem">
          <p className="area">{item.areaName}</p>
          {/*{list}*/}
          <p className="areaItem" />
        </div>
      );
    });
    return (
      <div className="whiteContent">
        <p className="title">Authorized Support Center</p>
        <div className="authCon">{content}</div>
      </div>
    );
  }
}
