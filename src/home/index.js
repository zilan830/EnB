import React from "react";
import { Link } from "react-router";
import { Carousel, Row, Col, message } from "antd";
import bannerImg1 from "web_modules/images/banner1.jpg";
import bannerImg2 from "web_modules/images/banner2.jpg";
import bannerImg3 from "web_modules/images/banner3.jpg";
import bannerImg4 from "web_modules/images/banner4.jpg";
import machine1 from "web_modules/images/machine1.png";
import machine2 from "web_modules/images/machine2.png";
import machine3 from "web_modules/images/machine3.png";
import baseReq from "web_modules/api/base";
import moment from "moment";
import apiList from "web_modules/api/apilist";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log("context",this.context)
    this.state = {
      newInfo: [],
      caseInfo: []
    };
  }

  onClick() {
    // axios({
    //   method: "post",
    //   url: "http://47.92.123.27:80/goods/categories/1"
    // }).then(function(response) {
    //   console.log("response", response);
    // });
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    baseReq("/news/newsList/0/3")
      .then(res => {
        this.setState({
          newInfo: res.data
        });
      })
      .catch(err => {
        message.error(err);
      });
    baseReq("/cases/casesList/0/0/1")
      .then(res => {
        console.log("$PARANSres", res);
        this.setState({
          caseInfo: res.data
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  render() {
    const { newInfo, caseInfo } = this.state;
    const content = newInfo.map((item, index) => {
      return (
        <li key={index} className="categoryLi">
          <Link className="categoryLink" to="/activity">
            <Row>
              <Col
                span={18}
                className="categoryTile categoryText"
                style={{ letterSpacing: 0, height: "100%", lineHeight: "24px" }}
              >
                {item.title.slice(0, 16)}
              </Col>
              <Col
                span={6}
                className="categoryTime categoryText"
                style={{
                  letterSpacing: 0,
                  textAlign: "right",
                  height: "100%",
                  lineHeight: "24px"
                }}
              >
                {moment(item.createTime).format("YYYY-DD-MM")}
              </Col>
            </Row>
          </Link>
        </li>
      );
    });
    return (
      <div className="homeContainer">
        <div className="bannerContainer">
          <Carousel autoplay>
            <div>
              <img src={bannerImg1} />
            </div>
            <div>
              <img src={bannerImg2} />
            </div>
            <div>
              <img src={bannerImg3} />
            </div>
            <div>
              <img src={bannerImg4} />
            </div>
          </Carousel>
        </div>
        <div className="contentContainer">
          <Row className="productsLinkCon font-hei" gutter={48}>
            <Col
              span={8}
              className="productsLinkItem"
              onClick={() => {
                this.onClick();
              }}
            >
              <Link to="/productCenter/clean">
                <Row className="productsLinkContent">
                  <Col span={9} className="productLeft">
                    <div>
                      <img src={machine1} />
                    </div>
                  </Col>
                  <Col span={15} className="productRight">
                    <div>
                      {/*<p>洗地机系列</p>*/}
                      <p>cleaning machine series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col span={8} className="productsLinkItem">
              <Link to="/productCenter/sweeper" className="second">
                <Row className="productsLinkContent">
                  <Col span={9} className="productLeft">
                    <div>
                      <img src={machine2} style={{ maxWidth: "50px" }} />
                    </div>
                  </Col>
                  <Col span={15} className="productRight">
                    <div>
                      {/*<p>扫地机系列</p>*/}
                      <p>floor sweeper series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col span={8} className="productsLinkItem">
              <Link to="/productCenter/polisher" className="last">
                <Row className="productsLinkContent">
                  <Col span={9} className="productLeft">
                    <div>
                      <img src={machine3} />
                    </div>
                  </Col>
                  <Col span={15} className="productRight">
                    <div>
                      {/*<p>擦地机系列</p>*/}
                      <p>floor polisher series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
          </Row>
          <Row className="categoryContainer" gutter={48}>
            <Col span={8} className="category">
              <Link to="/company">
                <p className="title">About Us</p>
                <div className="categoryInner">
                  <p className="categoryText">
                    Kunshan Bennett Cleaning Machine CO., Ltd is a collection of
                    research, production and distribution of integrated
                    enterprise. Since it was founded in 2007, relying……
                  </p>
                </div>
              </Link>
            </Col>
            <Col span={8} className="category">
              <p className="title">News</p>
              <div className="categoryInner">
                <ul className="categoryUl">{content}</ul>
              </div>
            </Col>
            <Col span={8} className="category">
              <p className="title">Case Center</p>
              {caseInfo.length > 0 ? (
                <Link to="/cases">
                  <Row className="categoryInner">
                    <Col span={14} className="categoryImgCon">
                      <div className="categoryImg">
                        <img src={caseInfo[0].infoUrl} />
                      </div>
                    </Col>
                    <Col span={10} className="categoryImgTitle">
                      <div className="categoryText">{caseInfo[0].title}</div>
                    </Col>
                  </Row>
                </Link>
              ) : null}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
