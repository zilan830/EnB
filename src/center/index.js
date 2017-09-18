import React from "react";
import SmallNav from "web_modules/component/smallNav";
import Authorization from "./authorization";
import Merchants from "./merchants";

const breadColumn = ["Authorized", "Join Us"];

const span = {
  nav: 6,
  bread: 18
};

export default class Center extends React.Component {
  constructor(props) {
    super(props);
    this.navColumn = [
      {
        key: 1,
        name: "Authorized",
        selected: true,
        span: 24,
        children: [
          {
            key: 10,
            name: "Authorized",
            selected: true,
            component: "Authorization"
          },
          {
            key: 11,
            name: "Join Us",
            component: "Merchants"
          }
        ]
      }
    ];
    this.state = {
      currentComponent: "Authorization"
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
          {currentComponent === "Authorization" ? <Authorization /> : null}
          {currentComponent === "Merchants" ? <Merchants /> : null}
        </div>
      </div>
    );
  }
}
