import React from "react";
import { Form, Row, Col, Input, Button, message } from "antd";
import apiList from "../web_modules/api/apilist";
// import XLSX from "xlsx";
const FormItem = Form.Item;
const { TextArea } = Input;

class Online extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  handleSearch = () => {
    this.setState({
      loading: true
    });
    this.props.form.validateFields((err, values) => {
      if (!!err) {
        this.setState({
          loading: false
        });
        return;
      } else {
        console.log("$PARANSvalues", values);
        apiList
          .sendEmail(values)
          .then(res => {
            this.setState({
              loading: false
            });
            message.success("提交成功");
          })
          .catch(err => {
            this.setState({
              loading: false
            });
            message.error(err);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    return (
      <div className="whiteContent">
        <p className="title">Online message</p>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={40}>
            <Col span={6}>
              <FormItem label="Name">
                {getFieldDecorator(`name`, {
                  rules: [{ required: true, message: "Please input your name" }]
                })(<Input placeholder="Please input your name" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Company">
                {getFieldDecorator(`company`)(
                  <Input placeholder="Please input your company" />
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Phone Number">
                {getFieldDecorator(`phone`, {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number"
                    }
                  ]
                })(<Input placeholder="Please input your phone number" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="E-mail">
                {getFieldDecorator(`email`, {
                  rules: [
                    { type: "email", message: "The input is not valid E-mail" }
                  ]
                })(<Input placeholder="Please input your E-mail" />)}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="Remark">
                {getFieldDecorator(`remark`, {
                  rules: [{ required: true, message: "Please input remark" }]
                })(
                  <TextArea
                    style={{ height: "100px" }}
                    rows={4}
                    placeholder="Please input remark"
                    autosize
                  />
                )}
              </FormItem>
            </Col>
            <Col span={4} offset={20}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

Online = Form.create()(Online);
export default Online;
