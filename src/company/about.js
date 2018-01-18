import React from "react";
import { Row, Col } from "antd";
import bennett from "web_modules/images/09.jpg";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="backContent">
          <p className="title">About bennett</p>
          <p className="mb20 line20 font14">
            Kunshan Bennett Cleaning Machine Co., Ltd is a collection of
            research, production and distribution of integrated enterprise.
            Since it was founded in 2007, relying on the geographical advantage
            ,Yangtze River Economic Development Zone, Kunshan City Qiandeng
            Town, it was been committed to providing the best quality, most
            efficient and most economical cleaning solutions to problems.
          </p>
          <p className="mb20 line20 font14">
            The main products are sweeper, scrubber, polishing machine, etc. By
            adhering to "Bennett Clean-Tech, Creating Comfortable Space"
            business philosophy, the company does continuous technical
            innovation, product optimization.To meet diverse customers. Over the
            years, has been in the leading position of the industry. Its sales
            and service categories include online communication model,
            distribution model, We Chat light application model, meanwhile sales
            and service network covering domestic cities. As a "right of import
            and export enterprise", its products are exported to Europe, South
            America, Africa and other countries, and it has passed the ISO 9001
            quality system certification. The company implements the unified
            management of ERP. The rational allocation of resources laid the
            foundation for the sustainable and harmonious development of
            enterprise.
          </p>
          <p className="mb20 line20 font14">
            In the future, we will try our best to serve the clean areas, to
            build a clean world of keeping pace with The Times.
          </p>
        </div>
        <div className="imgContainer">
          <div className="aboutImg" />
          {/*<img src={bennett} />*/}
        </div>
      </div>
    );
  }
}
