import React, { useEffect, useState } from "react";
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
  message,
} from "antd";
import { InputStyle } from "./Molecule.style";
import { UserOutlined } from "@ant-design/icons";
import Heading from "../atoms/Heading";
import ButtonCreate from "../atoms/ButtonCreate";
import {
  useCreateProductMutation,
  useFetchProductCategoryQuery,
} from "../../features/apis/AllApi";
import MultipleInput from "./MultipleInput";
import SelectComponent from "./helper-components/SelectComponent";
import { pricingArea, productModulesOptions } from "../../constant/constant";
import ProductForm from "./product/ProductForm";
import { calculatePriceTotal } from "../../../lib";

const CreateProduct = () => {
  const [componentSize, setComponentSize] = useState("large");
  const [productType, setProductType] = useState("manual");
  const [createProduct, createProductResponse] = useCreateProductMutation();
  const [products, setProducts] = useState([]);
  const {
    isError: failedToCreate,
    isSuccess: createSuccess,
    isLoading: creating,
  } = createProductResponse;

  if (failedToCreate) message.error("Failed to create Product");
  if (createSuccess) message.success("Product created successfully!");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [form] = Form.useForm();
  const handleOnChange = (value) => {
    const formdata = form.getFieldsValue();
    const total = calculatePriceTotal(formdata.quantity, formdata.price);
    form.setFieldsValue({
      total: total,
    });
  };

  const onFinish = (value) => {
    // const descriptions =  form.getFieldsValue().description;
    console.log(value, "value");
    createProduct(value);
    setProducts('')
  };
  const { TextArea } = Input;

  const { data: productCategoryData } = useFetchProductCategoryQuery({
    productType: productType,
  });
  let productTypeOptions =
    productCategoryData &&
    productCategoryData.map((subType) => ({
      label: subType.productSubType,
      value: subType._id,
    }));
  const handleProductCategory = (value) => {
    setProductType(value);
  };
  useEffect(() => {}, [form, productType]);
  return (
    <>
      <Heading Title="Create Product" />
      <InputStyle>
        <div className="container">
          <Form
            form={form}
            onFinish={onFinish}
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
            // onValuesChange={onFormLayoutChange}
            size="large"
            style={{
              maxWidth: 1300,
            }}>
            <SelectComponent
              name={"type"}
              label={"Select Type"}
              options={productModulesOptions}
              onChange={handleProductCategory}
            />
            <SelectComponent
              name={"productCategory"}
              label={"Select Category"}
              options={productTypeOptions}
            />
            {productType === "conveyor" ? (
              <SelectComponent
                name={"processingArea"}
                label={"Select Pricing Area"}
                options={pricingArea}
              />
            ) : null}

            <>
              <Form.Item
                name="title"
                label={<p style={{ fontSize: "18px" }}>Title</p>}>
                <Input size="large" placeholder="Title" />
              </Form.Item>
              <Form.Item
                name={"price"}
                label={<p style={{ fontSize: "18px" }}>Price</p>}>
                <InputNumber
                  size="large"
                  placeholder="price"
                  onChange={handleOnChange}
                />
              </Form.Item>
              <Form.Item
                name={"quantity"}
                label={<p style={{ fontSize: "18px" }}>Quantity</p>}>
                <InputNumber
                  size="large"
                  placeholder="Quantity"
                  onChange={handleOnChange}
                />
              </Form.Item>

              <Form.Item
                name={"total"}
                label={<p style={{ fontSize: "18px" }}>Total</p>}>
                <InputNumber size="large" placeholder="Total" />
              </Form.Item>
            </>
            <Form.Item>
              <MultipleInput name={"descriptions"} />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                type="primary"
                // style={{ padding: ".5rem 2rem", fontSize: "1rem" }}
                htmlType="submit"
                size="large">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </InputStyle>
    </>
  );
};

export default CreateProduct;
