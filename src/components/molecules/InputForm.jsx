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

const InputForm = () => {
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
    <InputStyle>
    <section class="heading">
        <h1>Create Client</h1>
    </section>
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
      <Form.Item label={<p style={{fontSize: "18px"}}>Company Name</p>}>
          <Input size="large" placeholder="Name Of company"  /><br />
      </Form.Item>

      <Form.Item label={<p style={{fontSize: "18px"}}>Contact Person Name</p>}>
          <Input size="large" placeholder="Name Of person"  /><br />
      </Form.Item>

      <Form.Item label={<p style={{fontSize: "18px"}}>Email</p>}>
          <Input size="large" placeholder="Email"  /><br />
      </Form.Item>

      <Form.Item label={<p style={{fontSize: "18px"}}>Mobile</p>}>
          <Input size="large" placeholder="Mobile"  /><br />
      </Form.Item>

      <Form.Item label={<p style={{fontSize: "18px"}}>Address</p>}>
      <TextArea rows={4} placeholder="Address" maxLength={100} />
      </Form.Item>

      <Form.Item label={<p style={{fontSize: "18px"}}>GST NO</p>}>
          <Input size="large" placeholder="Gst number"  /><br />
      </Form.Item>

      <Form.Item label={<p style={{fontSize: "18px"}}>Plant</p>}>
          <Input size="large" placeholder="Plant"  /><br />
      </Form.Item>

      <Form.Item label={<p style={{fontSize: "18px"}}>State</p>}>
          <Input size="large" placeholder="State"  /><br />
      </Form.Item>
{/* 
      <Form.Item  style={{ textAlign: 'center' }} >
      <Button style={{ marginLeft: 200 }}  type="primary">Submit</Button>
      </Form.Item> */}
    </Form>
    </div>

    <section class="heading">
        <h1>Product Module</h1>
    </section>
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
      <Form.Item label={<p style={{fontSize: "18px"}}>Select Type</p>}>
      <Select
      defaultValue="Retail500"
    //   style={{
    //     width: 120,
    //   }}
      onChange={handleChange}
      options={[
        {
          value: 'Retail500',
          label: 'Retail500',
        },
        {
          value: 'SA2000',
          label: 'SA2000',
        },
        {
          value: 'SA3000',
          label: 'SA3000',
        },
      ]}
    />
      </Form.Item>
      <Form.Item label={<p style={{fontSize: "18px"}}>Select Client</p>}>
      <Select
      defaultValue="Google"
    //   style={{
    //     width: 120,
    //   }}
      onChange={handleChange}
      options={[
        {
          value: 'Google',
          label: 'Google',
        },
        {
          value: 'Facebook',
          label: 'Facebook',
        },
        {
          value: 'Microsoft',
          label: 'Microsoft',
        },
      ]}
    />
      </Form.Item>
      <Form.Item label={<p style={{fontSize: "18px"}}>Title</p>}>
          <Input size="large" placeholder="State"  /><br />
      </Form.Item>
      <Form.Item label={<p style={{fontSize: "18px"}}>Description</p>}>
      <TextArea rows={4} placeholder="Address" maxLength={100} />
      </Form.Item>
      <Form.Item label={<p style={{fontSize: "18px"}}>Price</p>}>
          <Input size="large" placeholder="State"  /><br />
      </Form.Item>
      <Form.Item label={<p style={{fontSize: "18px"}}>Quantity</p>}>
          <Input size="large" placeholder="State"  /><br />
      </Form.Item>
    </Form>
    </div>
    </InputStyle>
    </>
  );
};

export default InputForm;
