import React from "react";
import { Tabs, Row, Col, message } from "antd";
import SmallNav from "web_modules/component/smallNav";
import baseReq from "web_modules/api/base";
const TabPane = Tabs.TabPane;

const navColumn = [
  {
    key: 1,
    name: "Cleaning machine",
    selected: true,
    span: 8,
    children: [
      {
        key: 10,
        name: "smart",
        component: "6",
        selected: true
      },
      {
        key: 11,
        name: "clever",
        component: "5"
      },
      {
        key: 12,
        name: "ranger",
        component: "3"
      },
      {
        key: 13,
        name: "Hussar",
        component: "4"
      },
      {
        key: 14,
        name: "dragoon",
        component: "2"
      }
    ]
  },
  {
    key: 2,
    name: "Floor sweeper",
    span: 8,
    children: [
      {
        key: 20,
        name: "tornado",
        component: "1"
      }
    ]
  },
  {
    key: 3,
    name: "Floor polisher",
    span: 8,
    children: [
      {
        key: 30,
        name: "PX",
        component: "7"
      },
      {
        key: 31,
        name: "SPX",
        component: "8"
      }
    ]
  }
];

const breadColumn = ["Products", "Cleaning machine", "smart"];

const span = {
  nav: 14,
  bread: 10
};

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "1",
      navColumn,
      ind: 0,
      tableList: [],
      dataList: []
    };
  }

  componentDidMount() {
    const reg = /=[0-9]+/g;
    const reg2 = /[\d]+/g;
    const href = window.location.href;
    //要改
    const type = href.match(reg)[0].match(reg2)[0];
    const ind = href.match(reg)[1].match(reg2)[0];
    if (href.indexOf("Cleaning machine")) {
      this.renderSelect(0, type);
    } else if (href.indexOf("Floor sweeper")) {
      this.renderSelect(1, type);
    } else {
      this.renderSelect(2, type);
    }
    this.setState({
      ind
    });
    this.getData(type);
  }

  renderSelect = (num, type) => {
    const { navColumn } = this.state;
    navColumn.forEach(item => {
      item.selected = false;
      if (item.children) {
        item.children.forEach(it => {
          it.selected = false;
        });
      }
    });
    navColumn.forEach((item, index) => {
      if (index === num) {
        item.selected = true;
        if (item.children) {
          item.children.forEach((it, ind) => {
            if (it.component === type) {
              it.selected = true;
            }
          });
        }
      }
    });
  };

  getData = catId => {
    baseReq(`/goods/goodsInfo/${catId}`)
      .then(res => {
        this.setState({
          dataList: res.data
        });
      })
      .then(() => {
        this.getTable();
      })
      .catch(err => {
        message.error(err);
      });
  };

  onClick = component => {
    this.setState({
      currentComponent: component
    });
    this.getData(component);
  };

  getTable = () => {
    const { dataList, ind } = this.state;
    const index = parseInt(ind);
    const goodsId = dataList[index].gid;
    baseReq(`/goods/reference/${goodsId}`)
      .then(res => {
        this.setState({
          tableList: res.data
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  handleImg = key => {
    this.setState({
      ind: key
    });
    this.getTable();
  };

  render() {
    const { dataList, tableList, ind } = this.state;
    let imgContent = [];
    let tableContent = [];
    let tableDetList = [];
    const index = parseInt(ind);
    let Name = "";
    if (dataList.length > 0) {
      tableDetList = dataList[index];
      Name = tableDetList.goodsName;
      const imgList = dataList.map((item, index) => {
        return {
          imgUrl: item.imgUrl,
          gid: item.gid,
          goodsName: item.goodsName
        };
      });
      imgContent = imgList.map((item, inde) => {
        return (
          <TabPane
            tab={
              <div className="smallImgTag">
                <img src={item.imgUrl} />
                {item.goodsName}
              </div>
            }
            key={inde}
          >
            <div className="bigImgTag">
              <div className="bigImgInt">{item.goodsName}</div>
              <div className="bigImgCon">
                <img src={item.imgUrl} />
              </div>
            </div>
          </TabPane>
        );
      });
      imgContent = (
        <Tabs
          defaultActiveKey={ind}
          tabPosition="right"
          style={{ height: 400 }}
          onChange={key => {
            this.handleImg(key);
          }}
        >
          {imgContent}
        </Tabs>
      );
    }
    if (tableList.length > 0) {
      tableContent = tableList.map((item, inde) => (
        <tr key={`tr-${inde}`}>
          <td>{item.name}</td>
          <td>{item.item}</td>
          <td>{item.value}</td>
        </tr>
      ));
      tableContent.unshift(
        <tr key="head">
          <th>名称</th>
          <th>Name</th>
          <th>{Name}</th>
        </tr>
      );
    }
    return (
      <div className="productDetailContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />

          <div className="productImgShow">{imgContent}</div>

          <div className="productDetInt">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Product Details" key="1">
                <div className="productDetIntCon">
                  <p>
                    <span className="productDetIntTitle">Product Number：</span>
                    {tableDetList.goodsName}
                  </p>
                  <p>
                    <span className="productDetIntTitle">Application：</span>
                    {tableDetList.goodsRange}
                  </p>
                  <p>
                    <span className="productDetIntTitle">Description：</span>
                  </p>
                  <p>
                    <span className="circle" />
                    {`Main Feature：${tableDetList.feature}`}
                  </p>
                  <p>
                    <span className="circle" />Product Advantages
                  </p>
                  <p>
                    {tableDetList.advantage && tableDetList.advantage.length > 0
                      ? tableDetList.advantage.map((item, inde) => (
                          <span key={`advantage-${inde}`} className="inlineP">
                            {inde + 1}、{item}
                          </span>
                        ))
                      : null}
                  </p>
                </div>
              </TabPane>
              <TabPane tab="Technical Parameters" key="2">
                <div className="productDetIntCon">
                  <table className="productDetIntTable">{tableContent}</table>
                </div>
              </TabPane>
              <TabPane tab="Operation Explanation" key="3">
                {tableDetList.videoUrl ? (
                  <div className="productDetIntCon">
                    <video
                      width="100%"
                      height="100%"
                      src={tableDetList.videoUrl}
                      controls
                    >
                      Your browser does not support HTML5 video.
                    </video>
                  </div>
                ) : null}
                {tableDetList.instruction ? (
                  <div className="productDetIntCon">
                    <img src={tableDetList.instruction} />
                  </div>
                ) : null}
              </TabPane>
              <TabPane tab="Cases" key="4">
                <div className="productDetIntCon">
                  <img src={tableDetList.application} />
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
