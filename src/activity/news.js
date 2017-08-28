import React from "react";
import { Row, Col, Pagination, message, Carousel } from "antd";
import { Link } from "react-router";
import baseReq from "web_modules/api/base";
import pic01 from "web_modules/images/pic01.png";
import NewDet from "./newDet";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: [],
      list: true,
      data: [],
      count: 0
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getData(type, 1);
  }

  componentWillReceiveProps(Props) {
    console.log("$PARANSProps", Props);
    this.setState({
      list: true
    });
  }

  onClick = (type, id) => {
    console.log("$PARANSid", id);
    if (type === "News") {
      baseReq(`/news/newsDetail/${id}`)
        .then(res => {
          console.log("$PARANSres", res);
          this.setState({
            data: res.data,
            count: res.count
          });
        })
        .catch(err => {
          message.error(err);
        });
    }
    this.setState({
      list: false
    });
  };

  getData = (type, page) => {
    const currentPage = page - 1;
    if (type === "News") {
      baseReq(`/news/newsList/${currentPage * 12}/12`)
        .then(res => {
          console.log("$PARANSres", res);
          this.setState({
            newInfo: res.data
          });
        })
        .catch(err => {
          message.error(err);
        });
    }
  };

  onChange = (page, pageSize) => {
    console.log("$PARANSpage", page, pageSize);
    const { type } = this.props;
    this.getData(type, page);
  };

  render() {
    const { type } = this.props;
    const { newInfo, list, count } = this.state;
    console.log("$PARANSnewInfo", newInfo);
    let content = [];
    const imgContent = [];
    newInfo.map((item, index) => {
      content.push(
        <li key={`new${index}`} className="newsLi">
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.onClick(type, item.id);
            }}
          >
            {item.title}
          </a>
        </li>
      );
      imgContent.push(
        <div key={`img${index}`}>
          <img src={item.infoImg} />
        </div>
      );
    });
    return (
      <div>
        {list
          ? <Row className="whiteContent">
              <p className="title">
                {type === "News" ? "企业新闻" : "展会风采"} News
              </p>
              <Col span={12} className="mt10">
                <Pagination
                  size="small"
                  total={count}
                  onChange={(page, pageSize) => {
                    this.onChange(page, pageSize);
                  }}
                />
                <ul className="newsUl">
                  {content}
                </ul>
              </Col>
              <Col
                span={12}
                className="mt10"
                style={{ paddingTop: "45px", height: "100%" }}
              >
                <Carousel autoplay>
                  <div>
                    <img src={pic01} />
                  </div>
                  <div>
                    <img src={pic01} />
                  </div>
                  <div>
                    <img src={pic01} />
                  </div>
                </Carousel>
              </Col>
            </Row>
          : <Row className="whiteContent">
              <NewDet type={type} id={1} />
            </Row>}
      </div>
    );
  }
}
