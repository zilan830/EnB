import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import baoxiu from "web_modules/images/baoxiu.png";

const smartItems = [
  ["502422", "电源线50英尺", "Smart450E/510E"],
  ["843610", "防溅板", "Smart450B/450E"],
  ["843611", "防溅板", "Smart510B/510E"],
  ["880750", "后橡胶条", "Smart450B/450E/510E/510B"],
  ["880751", "中间橡胶条", "Smart450B/450E/510E/510B"],
  ["880753", "前橡胶条", "Smart450B/450E/510E/510B"],
  ["67720030", "中间橡胶条", "Smart450B/450E/510E/510B"],
  ["880742", "前橡胶条", "Smart450B/450E/510E/510B"],
  ["67720010", "后橡胶条", "Smart450B/450E/510E/510B"],
  ["67050110", "万向轮", "Smart450B/450E/510E/510B"],
  ["885042", "手柄护套", "Smart450B/450E/510E/510B"]
];

const cleverItems = [
  ["210201", "Splash guard", "510B&510BT"],
  ["210541", "Splash guard", "660BT"],
  ["210551", "Splash guard", "660BT"],
  ["210551", "Splash guard", "510B&510BT&660BT"],
  ["250101", "Bumper wheel", "510B&510BT&660BT"],
  ["220061", "Drain hose", "510B&510BT&660BT"],
  ["220081", "Suction hose", "510B&510BT&660BT"],
  ["210461", "Bumper wheel", "510B&510BT&660BT"],
  ["210461", "Front rubber", "510B&510BT"],
  ["250221", "Rear rubber", "510B&510BT"],
  ["250301", "Rear rubber", "660BT"],
  ["250291", "Rear rubber", "660BT"],
  ["210761", "wheel", "510B&510BT&660BT"],
  ["220131", "escape pipe", "510B&510BT&660BT"],
  ["220121", "Suction hose", "510B&510BT&660BT"]
];

const dragoonItems = [
  ["250631", "防溅板", "D100B"],
  ["211271", "缓冲轮", "D100B"],
  ["450451", "刹车蹄", "D100B"],
  ["211711", "防尘盖", "D100B"],
  ["211361", "缓冲轮", "D100B"],
  ["220461", "排污管", "D100B"],
  ["220471", "吸污管", "D100B"],
  ["220291", "吸污管", "D100B"],
  ["550121", "万向轮", "D100B"],
  ["250621", "前挂条", "D100B"],
  ["250611", "后刮条", "D100B"]
];

const hussarItems = [
  ["", "防溅板", "Hussar660B"],
  ["", "防溅板", "Hussar660B"],
  ["", "防溅板", "Hussar760B"],
  ["", "防溅板", "Hussar760B"],
  ["", "防溅板", "Hussar860B"],
  ["", "防溅板", "Hussar860B"],
  ["", "缓冲轮", "Hussar660B/760B/860B"],
  ["", "排污管", "Hussar660B/760B/860B"],
  ["", "吸污管", "Hussar660B/760B/860B"],
  ["", "吸污管", "Hussar660B/760B/860B"],
  ["", "惰轮", "Hussar660B/760B/860B"],
  ["", "前刮条", "Hussar660B/760B/860B"],
  ["", "后刮条", "Hussar660B/760B/860B"],
  ["", "后刮条（可选）", "Hussar660B/760B/860B"]
];

const pxspxItems = [
  ["", "手柄套", " "],
  ["", "电源线50英尺-美标", " "],
  ["", "17寸缓冲器", " "],
  ["", "5寸轮子", " "],
  ["", "缓冲器", " "],
  ["", "5寸轮子", " "],
  ["", "4寸轮子", " "],
  ["", "针盘", " "],
  ["", "百洁垫卡扣", " "],
  ["", "手柄套", " "],
  ["", "手柄套", " "],
  ["", "手把套", " "],
  ["", "17寸缓冲器", " "]
];

const rangerItems = [
  ["210921", "防溅板", ""],
  ["250101", "排污管", ""],
  ["220141", "排污管", ""],
  ["220341", "吸污管", ""],
  ["220291", "吸污管", ""],
  ["210421", "惰轮", ""],
  ["250341", "前刮条", ""],
  ["250351", "后刮条", ""],
  ["250361", "后刮条", ""]
];

const tornadoItems = [
  ["", "滚刷", " "],
  ["", "挡板", " "],
  ["", "挡板", " "],
  ["", "挡板", " "],
  ["", "挡板", " "],
  ["", "边刷", " "],
  ["", "密封条", " "],
  ["", "密封条", " "],
  ["", "密封条", " "],
  ["", "密封条", " "],
  ["", "缓冲轮", " "],
  ["", "手把套", " "],
  ["", "密封条", " "]
];

export default class Warranty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: smartItems,
      type: ""
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getItem(type);
    this.setState({
      type
    });
  }

  componentWillReceiveProps(Props) {
    if (Props.type !== this.props.type) {
      const { type } = Props;
      this.getItem(type);
      this.setState({
        type
      });
    }
  }

  getItem = type => {
    switch (type) {
      case "WarrantySmart":
        this.setState({
          items: smartItems
        });
        break;
      case "WarrantyClever":
        this.setState({
          items: cleverItems
        });
        break;
      case "WarrantyRanger":
        this.setState({
          items: rangerItems
        });
        break;
      case "WarrantyHussar":
        this.setState({
          items: hussarItems
        });
        break;
      case "WarrantyDragoon":
        this.setState({
          items: dragoonItems
        });
        break;
      case "WarrantyTornado":
        this.setState({
          items: tornadoItems
        });
        break;
      case "WarrantyPX&SPX":
        this.setState({
          items: pxspxItems
        });
        break;
    }
  };

  render() {
    const { items, type } = this.state;
    const tds = items.map((tr, index) => (
      <tr className="textColorGrey">
        {tr.map(td => (
          <td key={`${td}${index}`} className="textColorGrey">
            {td}
          </td>
        ))}
      </tr>
    ));
    let text = "洗地机";
    if (type === "WarrantyDragoon") {
      text = "扫地机";
    } else if (type === "WarrantyTornado") {
      text = "擦地机";
    }
    return (
      <div className="productServerContainer">
        <div className="productServerBanner">
          <img src={baoxiu} />
        </div>
        <div className="textContent">
          <p className="title">
            {this.props.type.slice(8)} Series Warranty Introductions：
          </p>
          <Row className="warranty">
            <Col span={12} className="warrantyItem">
              <p className="mb20 textWeight">
                {`The Bennett Cleaning Machine Co., Ltd Polisher has been manufactured, tested and inspected in accordance with specific engineering requirements and is WARRANTED to be free from defects in workmanship and materials as follow`}
              </p>
              <p>
                One (1) year parts and labor – AC motor and gear unit, except
                motor switches, capacitors and flex couplings which have a one
                (1) year warranty.
              </p>
              <p>One (1) year parts and labor – castings.</p>
              <p>
                One (1) year parts and labor – all other components unless
                excluded below.
              </p>
              <p className="mb50 ">
                This warranty extends to the original user/purchaser and only
                when used, operated and maintained in accordance with Bennett
                Cleaning Machine Co., Ltd. Operating and maintenance
                instructions.
              </p>
              <p className="mb20">
                Nor does it apply to damage or failure caused by improper use,
                abuse or neglect. Warranty credit or replacement of return parts
                including motors, etc., is subject to incoming inspection of
                those items.
              </p>
              <p>
                This warranty limits Bennett Cleaning Machine Co., Ltd Liability
                to the repair of the product and/or warranted parts replacement
                and does not include incidental or consequential damages arising
                from the use of a Bennett Machine whether defective or not.
              </p>
              <p className="mb20">
                This warranty is in lieu of all other expressed or implied
                warranties and is extended to the original user/purchaser.
              </p>
            </Col>
            <Col span={12} className="warrantyItem">
              <p className="textWeight">
                This warranty does not apply to the following wear parts and
                accessories of the machine including:
              </p>
              <table
                className="warrantyTable"
                style={
                  this.props.type.slice(8) === "Ranger"
                    ? { marginBottom: "55px" }
                    : {}
                }
              >
                <tr>
                  <th>Part Number</th>
                  <th>Part Name</th>
                  <th>Comments</th>
                </tr>
                {tds}
              </table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
