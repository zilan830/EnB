import React from "react";
import { Row, Col } from "antd";
import SmallNav from "web_modules/component/smallNav";
import MachineChoice from "./machineChoice";
import Supplies from "./supplies";
import Warranty from "./warranty";
import Malfunction from "./malfunction";

const breadColumn = ["Selection", "Cleaning machine"];

const span = {
  nav: 13,
  bread: 11
};

export default class ProductSever extends React.Component {
  constructor(props) {
    super(props);
    this.navColumn = [
      {
        key: 1,
        name: "Selection",
        selected: true,
        span: 6,
        children: [
          {
            key: 10,
            name: "Cleaning machine",
            selected: true,
            component: "MachineChoiceWash"
          },
          {
            key: 11,
            name: "Floor sweeper",
            component: "MachineChoiceSweep"
          },
          {
            key: 12,
            name: "Floor polisher",
            component: "MachineChoiceRub"
          }
        ]
      },
      {
        key: 2,
        name: "Consumable",
        span: 6,
        component: "2",
        children: [
          {
            key: 20,
            name: "Cleaning machine",
            component: "SuppliesWash"
          },
          {
            key: 21,
            name: "Floor sweeper",
            component: "SuppliesSweep"
          },
          {
            key: 22,
            name: "Floor polisher",
            component: "SuppliesRub"
          }
        ]
      },
      {
        key: 3,
        name: "Introduction",
        span: 6,
        component: "3",
        children: [
          {
            key: 30,
            name: "smart",
            component: "WarrantySmart"
          },
          {
            key: 31,
            name: "clever",
            component: "WarrantyClever"
          },
          {
            key: 32,
            name: "ranger",
            component: "WarrantyRanger"
          },
          {
            key: 33,
            name: "Hussar",
            component: "WarrantyHussar"
          },
          {
            key: 34,
            name: "dragoon",
            component: "WarrantyDragoon"
          },
          {
            key: 35,
            name: "tornado",
            component: "WarrantyTornado"
          },
          {
            key: 36,
            name: "PX&SPX",
            component: "WarrantyPX&SPX"
          }
        ]
      },
      {
        key: 4,
        name: "Malfunction",
        span: 6,
        component: "3",
        children: [
          {
            key: 40,
            name: "smart",
            component: "MalfunctionSmart"
          },
          {
            key: 41,
            name: "clever",
            component: "MalfunctionClever"
          },
          {
            key: 42,
            name: "ranger",
            component: "MalfunctionRanger"
          },
          {
            key: 43,
            name: "hussar",
            component: "MalfunctionHussar"
          },
          {
            key: 44,
            name: "dragoon",
            component: "MalfunctionDragoon"
          },
          {
            key: 45,
            name: "tornado",
            component: "MalfunctionTornado"
          },
          {
            key: 46,
            name: "PX&SPX",
            component: "MalfunctionPX&SPX"
          }
        ]
      }
    ];
    this.state = {
      currentComponent: "MachineChoiceWash"
    };
  }

  componentDidMount() {}

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { currentComponent } = this.state;
    return (
      <div className="productSeverContainer">
        <div className="contentContainer">
          <SmallNav
            sp={true}
            navColumn={this.navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent.indexOf("Machine") > -1 ? (
            <MachineChoice type={currentComponent} />
          ) : null}
          {currentComponent.indexOf("Supplies") > -1 ? (
            <Supplies type={currentComponent} />
          ) : null}
          {currentComponent.indexOf("Warranty") > -1 ? (
            <Warranty type={currentComponent} />
          ) : null}
          {currentComponent.indexOf("Malfunction") > -1 ? (
            <Malfunction type={currentComponent} />
          ) : null}
        </div>
      </div>
    );
  }
}
