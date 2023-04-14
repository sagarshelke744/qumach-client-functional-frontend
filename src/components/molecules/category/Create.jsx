import { Form, Input, Button } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { pricingArea, productModulesOptions } from "../../../constant/constant";
import { useCreateProductCategoryMutation } from "../../../features/apis/AllApi";
import SelectComponent from "../helper-components/SelectComponent";

const Create = ({ form, onFinish }) => {
  useEffect(() => {}, [form]);
  return (
    <div className="container">
      <Form
        form={form}
        onFinish={onFinish}
        wrapperCol={{
          span: 64,
        }}
        layout="horizontal"
        initialValues={{
          size: "large",
        }}
        size="large"
        style={{
          maxWidth: 1300,
        }}>
        <SelectComponent
          name={"productType"}
          label={"Select Type"}
          options={productModulesOptions}
        />
        <Form.Item name={"productSubType"} label="Product Sub Type">
          <Input />
        </Form.Item>
        <Form.Item name={"name"} label="Title">
          <Input />
        </Form.Item>
        {/* {productType=== "conveyor" ? (<SelectComponent name={"processingArea"} label={"Select Pricing Area"} options={pricingArea}/>) : null } */}
        <Form.Item style={{ textAlign: "center", display: "flex",
        alignItems: "center",
        justifyContent: "center", }}>
          <Button
            style={{
              padding: ".5rem 5rem",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="primary"
            // style={{ padding: ".5rem 2rem", fontSize: "1rem" }}
            htmlType="submit"
            size="large">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
