import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Typography,
} from "antd";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { handleOnValueChange } from "../../../../lib";
import MultipleInput from "../MultipleInput";
import { ProductFormStyle } from "../Molecule.style";
const { Title } = Typography;

const ProductForm = ({ form, onPriceChange, categoryData, name, index }) => {
  return (
    <div className="main-form-section">
      <div>
        <Title level={5}>Processing Area: {categoryData?.processArea}</Title>
        <Form.List name={[name, "products"]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space
                  key={field.key}
                  align="baseline"
                  style={{
                    float:"right",
                    padding: "2rem 2rem",
                    
                    color: "blue",
                    border: "3px solid blue",
                    height: "auto",
                  }}>
                  <>
                    <div className="form">
                      <div className="first-col">
                        <div className="input-tag">
                          <Form.Item
                            {...field}
                            name={[field.name, "title"]}
                            label={
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}>
                                Title
                              </p>
                            }>
                            <Input
                              size="large"
                              style={{
                                width: "100%",
                              }}
                              layout="vertical"
                              placeholder="Title"
                            />
                          </Form.Item>
                        </div>
                        <div className="number-tag">
                          <Form.Item
                            {...field}
                            name={[field.name, "price"]}
                            label={
                              <p
                                span={100}
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}>
                                Price
                              </p>
                            }>
                            <InputNumber
                              size="large"
                              style={{ width: "100%" }}
                              placeholder="price"
                              onChange={(value) =>
                                onPriceChange(index, value, name)
                              }
                            />
                          </Form.Item>
                        </div>
                        <div className="number-tag">
                          <Form.Item
                            {...field}
                            name={[field.name, "quantity"]}
                            labelCol={{ span: 20 }}
                            wrapperCol={{ span: 25 }}
                            label={
                              <p
                                span={100}
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}>
                                Quantity
                              </p>
                            }>
                            <InputNumber
                              style={{ width: "100%" }}
                              size="large"
                              placeholder="Quantity"
                              onChange={(value) =>
                                onPriceChange(index, value, name)
                              }
                            />
                          </Form.Item>
                        </div>
                        <div className="number-tag">
                          <Form.Item
                            {...field}
                            name={[field.name, "advanceAmount"]}
                            labelCol={{ span: 20 }}
                            wrapperCol={{ span: 25 }}
                            label={
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  maxWidth: "150px",
                                }}>
                                Advance Amount
                              </p>
                            }>
                            <InputNumber
                              style={{ width: "100%" }}
                              size="large"
                              placeholder="Advance Amount"
                              onChange={(value) =>
                                onPriceChange(
                                  index,
                                  value,
                                  name,
                                  "advanceAmount"
                                )
                              }
                            />
                          </Form.Item>
                        </div>
                        <div className="number-tag">
                          <Form.Item
                            {...field}
                            name={[field.name, "total"]}
                            label={
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}>
                                Total
                              </p>
                            }>
                            <InputNumber size="large" placeholder="Total" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="second-col">
                        <Form.Item
                          {...field}
                          name={[field.name, "note"]}
                          label={<p style={{ fontSize: "18px" }}>Note</p>}>
                          <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{}}>
                          <MultipleInput name={[field.name, "descriptions"]} />
                        </Form.Item>
                      </div>
                    </div>
                  </>
                </Space>
              ))}
              {/* <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Button   
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<AiOutlinePlus />}>
                    Add Item
                  </Button>
          </Form.Item> */}
            </>
          )}
        </Form.List>
        <div className="third-col">
          <Row>
            <Col className="number-tag">
              <Form.Item
                label="Total"
                labelCol={{ span: 25 }}
                wrapperCol={{ span: 45 }}
                name={[name, "total"]}>
                <InputNumber />
              </Form.Item>
            </Col>
            <Col className="number-tag">
              <Form.Item
                label={
                  <p
                    span={100}
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}>
                    Remark Amount
                  </p>
                }
                labelCol={{ span: 25 }}
                wrapperCol={{ span: 45 }}
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
                name={[name, "totalAdvance"]}>
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
