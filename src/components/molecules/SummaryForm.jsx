import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
  } from 'antd';
import { InputStyle } from "./Molecule.style";
import { UserOutlined } from '@ant-design/icons';
import Heading from "../atoms/Heading";
import ButtonCreate from "../atoms/ButtonCreate";

const SummaryForm = () => {
  const [componentSize, setComponentSize] = useState('large');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const { TextArea } = Input;
  return (
    <>
    <Heading Title="Create Product" />
    <InputStyle>
    <div className="container">
<Form
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 64,
      }}
      layout="horizontal"
      initialValues={{
        size: "large",
      }}
      onValuesChange={onFormLayoutChange}
      size="large"
      style={{
        maxWidth: 1300,
      }}
    >
    <Form.Item label={<p style={{fontSize: "18px"}}>Suitable for processing</p>}>
        <Input size="large" placeholder="State"  /><br />
    </Form.Item>
    <Form.Item label={<p style={{fontSize: "18px"}}>With an average live weight of</p>}>
        <Input size="large" placeholder="State"  /><br />
    </Form.Item>
    <Form.Item label={<p style={{fontSize: "18px"}}>Minimum weight</p>}>
        <Input size="large" placeholder="State"  /><br />
    </Form.Item>
    <Form.Item label={<p style={{fontSize: "18px"}}>Suitable </p>}>
        <Input size="large" placeholder="State"  /><br />
    </Form.Item>
    <Form.Item label={<p style={{fontSize: "18px"}}>Suitable for processing</p>}>
        <Input size="large" placeholder="State"  /><br />
    </Form.Item>
    <Form.Item label={<p style={{fontSize: "18px"}}>Suitable for processing</p>}>
        <Input size="large" placeholder="State"  /><br />
    </Form.Item>
    </Form>
    </div>
    </InputStyle>
    </>
  );
};

export default SummaryForm;
