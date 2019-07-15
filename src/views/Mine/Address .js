import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  Modal,
  Form,
  Input,
  Radio,
  Icon,
  Divider,
  Tooltip,
  Typography,
  Select,
  Cascader
} from "antd";
const residences = [
  {
    value: "浙江",
    label: "浙江",
    children: [
      {
        value: "杭州",
        label: "杭州",
        children: [
          {
            value: "西湖",
            label: "什么"
          }
        ]
      }
    ]
  },
  {
    value: "江苏",
    label: "江苏",
    children: [
      {
        value: "南京",
        label: "南京",
        children: [
          {
            value: "你好",
            label: "哪里"
          }
        ]
      }
    ]
  }
];
//地址选择

const { Text } = Typography;
const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = this.props.form;

      return (
        <div>
          <Modal
            visible={visible}
            title="填写地址"
            okText="保存"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form.Item label={<span>收获人姓名&nbsp;</span>}>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "请输入收货人姓名",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="手机号码">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: true,
                    message: "请输入收货人手机号码"
                  },
                  {
                    min: 11,
                    message: "请输入正确的手机号码格式"
                  },
                  {
                    max: 11,
                    message: "请输入11位手机号码"
                  }
                ]
              })(<Input style={{ width: "100%" }} />)}
            </Form.Item>
            <Form.Item label="选择地址">
              {getFieldDecorator("residence", {
                initialValue: ["浙江省", "杭州市", "西湖"],
                rules: [
                  {
                    type: "array",
                    required: true,
                    message: "Please select your habitual residence!"
                  }
                ]
              })(<Cascader options={residences} style={{ width: "100%" }} />)}
            </Form.Item>
            <Form layout="vertical">
              <Form.Item label="详细地址">
                {getFieldDecorator("title", {
                  rules: [
                    {
                      required: true,
                      message: "Please input the title of collection!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="邮政编码">
                {getFieldDecorator("description")(<Input type="textarea" />)}
              </Form.Item>
            </Form>
          </Modal>
        </div>
      );
    }
  }
);

class CollectionsPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    visible: false,
    id: ""
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = e => {
    e.preventDefault();
    const { form } = this.formRef.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });

      var token = localStorage.getItem("token");
      console.log(token);
      if (!err) {
        console.log("Received values of form: ", values);

        axios({
          method: "post",
          url: "http://api.cat-shop.penkuoer.com/api/v1/addresses",
          params: {
            receiver: values.username,
            mobile: values.phone,
            regions: values.residence,
            address: values.title,
            idDefault: false
          },
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token
          }
        }).then(res => {
          this.setState({
            id: res.data.info._id
          });
          console.log(res.data);
          console.log(this.state.id);
          localStorage.setItem("id", this.state.id);
        });
        console.log(this.state.id);
      }

      var token = localStorage.getItem("token");
      var id = localStorage.getItem("id");
      console.log(id);

      axios({
        method: "get",
        url: "http://api.cat-shop.penkuoer.com/api/v1/addresses",
        data: {
          per: 10,
          page: 1
        },
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      }).then(res => {
        console.log(res);
      });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <h2>收货地址</h2>
        <Divider />
        <Row>
          <Col span={12}>
            <div className="adrs">
              <Button type="primary" onClick={this.showModal}>
                <Icon type="plus" />
                新增地址
              </Button>

              <CollectionCreateForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="adrs1">
              <h2>小美美</h2>
              <p>1573****666</p>
              <p>河北省 唐山市 路北区</p>
              <p>唐山市大学生公寓村（063000）</p>
              <span>
                <Text type="danger">修改</Text>
                <br />
                <Text type="danger">删除</Text>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  componentWillReceiveProps(a) {
    console.log(a);
  }
}
export default CollectionsPage;
