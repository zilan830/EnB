import React from "react";
import { Row, Col } from "antd";
import com1 from "web_modules/images/com1.jpg";
import com2 from "web_modules/images/com2.jpg";
import com3 from "web_modules/images/com3.jpg";
import com4 from "web_modules/images/com4.jpg";
import evolution from "web_modules/images/evolution@4x.png";

export default class Com extends React.Component {
  render() {
    return (
      <div>
        <div className="backContent sp">
          <p className="title">Part of factory scenery</p>
        </div>
        <div className="imgContainerBorder">
          <Row>
            <Col span={12}>
              <div style={{ padding: "0 20px 0 50px" }}>
                <img src={com1} />
                <p className="comP p1" data-content="Assembly area" />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ padding: "0 50px 0 20px" }}>
                <img src={com2} />
                <p className="comP p2" data-content="Warehouse area" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div style={{ padding: "40px 20px 0 50px" }}>
                <img src={com3} />
                <p className="comP p3" data-content="Finished product area" />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ padding: "40px 50px 0 20px" }}>
                <img src={com4} />
                <p className="comP p4" data-content="Conference area" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
