import React, { useState } from "react";
import { Link } from "react-router-dom";
import {

  Form,
  Input,
 
} from "antd";
import { InputStyle } from "./Molecule.style";
import ButtonCreate from "../atoms/ButtonCreate";
import Heading from "../atoms/Heading";
import { useForm } from "antd/es/form/Form";
import { useCreateClientMutation } from "../../features/apis/AllApi";
import { findZone, getStates, zones } from "../../constant/constant";
import SelectComponent from "./helper-components/SelectComponent";

const CreateClient = () => {
  const [componentSize, setComponentSize] = useState("large");
  const [form] = Form.useForm()
  const [createClient,clientResponse] = useCreateClientMutation()
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleFinish = (value) => {
    const formValues= form.getFieldsValue()
    console.log(value)
    createClient(value)
    console.log(`selected ${JSON.stringify(formValues)}`);
  };
  const { TextArea } = Input;

  const ZONE_OPTIONS = zones.map((item) => ({label: item, value: item}))
  const STATE_OPTIONS = getStates().map(item=> ({label: item, value: item}))
  const onStateChange = (value) => {
    console.log(value,"val")
    form.setFieldsValue({
      zone: findZone(value)
    })
  }
  return (
    <>
      <InputStyle>
        <Heading Title="Create client" />
        <div className="container">
          <Form
            form={form}
            onFinish={handleFinish}
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
            <Form.Item name="companyName" label={<p style={{ fontSize: "18px" }}>Company Name</p>}>
              <Input  size="large" placeholder="Name Of company" />
            </Form.Item>

            <Form.Item
            name="contactPersonName"
              label={<p style={{ fontSize: "18px" }}>Contact Person Name</p>}
            >
              <Input size="large" placeholder="Name Of person" />
            </Form.Item>

            <Form.Item  name="email" label={<p style={{ fontSize: "18px" }}>Email</p>}>
              <Input size="large" placeholder="Email" />
            </Form.Item>

            <Form.Item
            name="mobile"
             label={<p style={{ fontSize: "18px" }}>Mobile</p>}>
              <Input size="large" placeholder="Mobile" />
            </Form.Item>

            <Form.Item 
            name="address"
            label={<p style={{ fontSize: "18px" }}>Address</p>}>
              <TextArea rows={4} placeholder="Address" maxLength={100} />
            </Form.Item>

            <Form.Item
            name="gstNo"
            label={<p style={{ fontSize: "18px" }}>GST NO</p>}>
              <Input size="large" placeholder="Gst number" />
            </Form.Item>

            <Form.Item
            name="plant"
            label={<p style={{ fontSize: "18px" }}>Plant</p>}>
              <Input size="large" placeholder="Plant" />
            </Form.Item>
          <SelectComponent name={"state"} label={"Select state"} options={STATE_OPTIONS} onChange= {onStateChange}/>
          <SelectComponent name={"zone"} label={"Select zone"} options={ZONE_OPTIONS} disable={true}/>

            {/* 
      <Form.Item  style={{ textAlign: 'center' }} >
      <Button style={{ marginLeft: 200 }}  type="primary">Submit</Button>
      </Form.Item> */}
            <Form.Item>
              {/* <div className="buttoncreate"> */}

              <ButtonCreate  buttonTitle="create client" />
              {/* </div> */}
            </Form.Item>
          </Form>
        </div>
      </InputStyle>
    </>
  );
};

export default CreateClient;
