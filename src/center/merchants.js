import React from "react";
import { Row, Col, Tabs, Icon } from "antd";
import authBanner from "web_modules/images/auth1.jpg";
import center1 from "web_modules/images/center02@4x.png";
const TabPane = Tabs.TabPane;

export default class Merchants extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="whiteContent">
          <p className="title">Join Us</p>
        </div>
        <div className="imgContainer">
          <img src={authBanner} />
        </div>
        <div className="productDetInt">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Agency policy" key="1">
              <div className="productDetIntCon">
                <p className="title border">Agency Policy Of BENNETT</p>
                <Row>
                  <Col span={12}>
                    <div className="productDetIntConImg">
                      <img src={center1} />
                    </div>
                  </Col>
                  <Col span={12}>
                    <p className="sent">
                      1、Marketing Resource: We provide customer data for agent
                      from time to time
                    </p>
                    <p className="sent">
                      2、After Sales Training: Agent could arrange customer
                      service staff to participate in the factory training
                    </p>
                    <p className="sent">
                      3、Advertising Services: The promotion is conducted using a
                      method of combining online service and offline service,
                      which is based on working in partnership with the key
                      industry partners
                    </p>
                    <p className="sent">
                      4、Product advantage: Product development, providing
                      high-quality and cost-effective product
                    </p>
                    <p className="sent">
                      5、Price policy: Uniform market price, safeguard the profit
                      margin of the agent
                    </p>
                    <p className="sent">
                      6、Sales incentive program: Set up sales rebate policy
                    </p>
                    <p className="sent">
                      7、Locality protection: Ensure area exclusive right
                    </p>
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="Join Conditions" key="2">
              <div className="productDetIntCon">
                <div style={{ width: "324px", margin: "0 auto" }}>
                  <p className="title" style={{ textAlign: "left" }}>
                    BENNETT Join Conditions
                  </p>
                  <p className="sent">
                    1、Who is legally registered with independent legal person
                    qualification of the enterprise or a natural person with
                    full civil capacity
                  </p>
                  <p className="sent">
                    2、Agree with the operation principle and business models of
                    BENNETT
                  </p>
                  <p className="sent">
                    3、Follow the market management and sale price policy
                  </p>
                  <p className="sent">
                    4、Have a necessary business area and a good and clear
                    organizational structure
                  </p>
                  <p className="sent">
                    5、Having brand management of same industry and sale
                    management experience take precedence
                  </p>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Joining Process" key="3">
              <div className="productDetIntCon">
                <p className="title">Joining Process Of us</p>
                <p className="progress">
                  <span className="text">Join-in Applying</span>
                </p>
                <p className="progress">
                  <span className="arrow" />
                </p>
                <p className="progress">
                  <span className="text">Join-in Negotiation</span>
                </p>
                <p className="progress">
                  <span className="arrow" />
                </p>
                <p className="progress">
                  <span className="text">Joining & Signing</span>
                </p>
                <p className="progress">
                  <span className="arrow" />
                </p>
                <p className="progress">
                  <span className="text">Formal Run</span>
                </p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
