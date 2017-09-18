import React from "react";
import SmallNav from "web_modules/component/smallNav";
import Picture from "./picture";
import Video from "./video";

const breadColumn = ["Case", "Pictures"];

const span = {
  nav: 12,
  bread: 12
};

export default class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.navColumn = [
      {
        key: 1,
        name: "Case",
        selected: true,
        span: 24,
        children: [
          {
            key: 10,
            name: "Pictures",
            selected: true,
            component: "Picture"
          },
          {
            key: 11,
            name: "Videos",
            component: "Video"
          }
        ]
      }
    ];
    this.state = {
      currentComponent: "Picture"
    };
  }

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { currentComponent } = this.state;
    console.log("$currentComponent", currentComponent);
    return (
      <div className="caseContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={this.navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent === "Picture" ? <Picture /> : null}
          {currentComponent === "Video" ? <Video /> : null}
        </div>
      </div>
    );
  }
}
