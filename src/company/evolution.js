import React from "react";
import { Row, Col } from "antd";

export default class Evolution extends React.Component {
  render() {
    return (
      <div>
        <div className="backContent sp">
          <p className="title">The History Of Product</p>
        </div>
        <div className="imgContainerBorder">
          <div className="evolution01" />
          {/*<img src={evolution} />*/}
        </div>
      </div>
    );
  }
}
