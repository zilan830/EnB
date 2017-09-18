import React from "react";
import About from "./about";
import Concept from "./concept";
import Evolution from "./evolution";
import Honors from "./honors";
import Publicity from "./publicity";
import Com from "./company";
import SmallNav from "web_modules/component/smallNav";

const breadColumn = ["Bennett", "About Us", "Profile"];

const span = {
  nav: 13,
  bread: 11
};

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.navColumn = [
      {
        key: 1,
        name: "About Us",
        selected: true,
        span: 6,
        children: [
          {
            key: 10,
            name: "Profile",
            selected: true,
            component: "About"
          },
          {
            key: 11,
            name: "History",
            component: "Evolution"
          },
          {
            key: 12,
            name: "Appearance",
            component: "Company"
          }
        ]
      },
      {
        key: 2,
        name: "Concept",
        span: 6,
        component: "Concept"
      },
      {
        key: 3,
        name: "Honors",
        span: 6,
        component: "Honors"
      },
      {
        key: 4,
        name: "Brochure",
        span: 6,
        component: "Publicity"
      }
    ];
    this.state = {
      currentComponent: "About"
    };
  }

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { currentComponent } = this.state;
    console.log("$-currentComponent", currentComponent);
    return (
      <div className="companyContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={this.navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent === "About" ? <About /> : null}
          {currentComponent === "Evolution" ? <Evolution /> : null}
          {currentComponent === "Company" ? <Com /> : null}
          {currentComponent === "Concept" ? <Concept /> : null}
          {currentComponent === "Honors" ? <Honors /> : null}
          {currentComponent === "Publicity" ? <Publicity /> : null}
        </div>
      </div>
    );
  }
}
