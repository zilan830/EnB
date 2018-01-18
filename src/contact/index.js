import React from "react";
import SmallNav from "web_modules/component/smallNav";
import Contracts from "./contact";
import Online from "./online";

const breadColumn = ["Contacts", "Online"];

const span = {
  nav: 6,
  bread: 18
};

export default class Contract extends React.Component {
  constructor(props) {
    super(props);
    this.navColumn = [
      {
        key: 1,
        name: "Contacts",
        selected: true,
        span: 24,
        children: [
          {
            key: 10,
            name: "Contacts",
            selected: true,
            component: "Contracts"
          },
          {
            key: 11,
            name: "Online",
            component: "Online"
          }
        ]
      }
    ];
    this.state = {
      currentComponent: "Contracts"
    };
  }

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { currentComponent } = this.state;
    return (
      <div className="centerContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={this.navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent === "Contracts" ? <Contracts /> : null}
          {currentComponent === "Online" ? <Online /> : null}
        </div>
      </div>
    );
  }
}
