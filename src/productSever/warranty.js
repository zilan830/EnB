import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import baoxiu from "web_modules/images/baoxiu.png";

const smartItems = [
  ["843610", "SOLASH GUARD", "Smart450B"],
  ["843611", "SOLASH GUARD", "Smart510B"],
  ["880750", "BELT", "Smart450B/510B"],
  ["880751", "SOLASH GUARD", "Smart450B/510B"],
  ["880753", "REAR RUBBER", "Smart450B/510B"],
  ["67720030", "CENTRAL RUBBER", "Smart450B/510B"],
  ["880742", "FRONT RUBBER", "Smart450B/510B"],
  ["67720010", "CENTRAL RUBBER", "Smart450B/510B"],
  ["67050110", "REAR RUBBER", "Smart450B/510B"],
  ["885042", "KNOB", "Smart450B/510B"]
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
  ["250251", "Front rubber", "510B&510BT"],
  ["250221", "Rear rubber", "510B&510BT"],
  ["250301", "Front rubber", "660BT"],
  ["250291", "Rear rubber", "660BT"],
  ["210761", "wheel", "510B&510BT&660BT"],
  ["220131", "escape pipe", "510B&510BT&660BT"],
  ["220121", "Suction hose", "510B&510BT&660BT"]
];

const dragoonItems = [
  ["250631", "Splash guard", "D100B"],
  ["211271", "Bumper wheel", "D100B"],
  ["450451", "Brake block", "D100B"],
  ["211711", "Dust cover", "D100B"],
  ["211361", "Bumper wheel", "D100B"],
  ["220461", "Drain hose", "D100B"],
  ["220471", "Suction hose", "D100B"],
  ["220291", "Suction hose", "D100B"],
  ["550121", "Caster", "D100B"],
  ["250621", "Front rubber", "D100B"],
  ["250611", "Rear rubber", "D100B"]
];

const hussarItems = [
  ["210991", "Splash guard", "H660B"],
  ["211001", "Splash guard", "H660B"],
  ["211011", "Splash guard", "H760B"],
  ["211021", "Splash guard", "H760B"],
  ["211031", "Splash guard", "H860B"],
  ["211041", "Splash guard", "H860B"],
  ["250101", "Bumper wheel", "H660B&760B&860B"],
  ["220231", "Drain hose", "H660B&760B&860B"],
  ["220341", "Suction hose", "H660B&760B&860B"],
  ["220291", "Suction hose", "H660B&760B&860B"],
  ["210421", "Idel wheel", "H660B&760B&860B"],
  ["250381", "Front rubber", "H660B&760B&860B"],
  ["250391", "Rear rubber", "H660B&760B&860B"],
  ["250401", "Rear rubber(optional)", "H660B&760B&860B"]
];

const pxspxItems = [
  ["210021", "Handle grip", ""],
  ["740011", "Power cord 50ft-us", ""],
  ["250011", "Bumper 17’’", ""],
  ["250021", "Bumper 20’’", ""],
  ["550011", "Wheel 5’’", ""],
  ["250081", "Bumper", ""],
  ["250051", "Wheel 5’’", ""],
  ["250091", "Wheel 4’’", ""],
  ["240011", "Pad driver ASM", ""],
  ["210151", "Pad driver ASM", ""],
  ["230011", "Handle grip", ""],
  ["250071", "Handle grip", ""],
  ["210111", "Lever grip", ""],
  ["250061", "Bumper 17’’", ""]
];

const rangerItems = [
  ["210921", "Splash guard", ""],
  ["250101", "Bumper wheel", ""],
  ["220141", "Drain hose", ""],
  ["220341", "Suction hose", ""],
  ["220291", "Suction hose", ""],
  ["210421", "Idel wheel", ""],
  ["250341", "Front rubber", ""],
  ["250351", "Rear rubber", ""],
  ["250361", "Rear rubber", "Optional"]
];

const tornadoItems = [
  ["242101", "Cylindrical brush", ""],
  ["250481", "Guarde", ""],
  ["250461", "Guarde", ""],
  ["250471", "Guarde", ""],
  ["250451", "Guarde", ""],
  ["211411", "Side brush", ""],
  ["230221", "Gasket", ""],
  ["230231", "Gasket", ""],
  ["230201", "Gasket", ""],
  ["230241", "Gasket", ""],
  ["211361", "Bumper wheel", ""],
  ["230071", "Handle grip", ""],
  ["230211", "Gasket", ""]
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
