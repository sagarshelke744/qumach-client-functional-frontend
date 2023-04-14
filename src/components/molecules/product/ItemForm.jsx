import { Form, Input, InputNumber, Select, Space, Button } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { GST_TYPES } from "../common/Constants";

const ItemForm = ({ priceOnChange, onRemove,isSalesOrderItem }) => {
  const areas = [
    {
      label: "NUMBER",
      value: "NUMBER",
    },
    {
      label: "METER",
      value: "METER",
    },
    {
      label: "Kg",
      value: "Kg",
    },
  ];

  return (
    <div className="sub-section">
      <div className="title">Product</div>
      <div className="sub-section">
        <div className="title">Items</div>
        <div className="row-add-item">
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <Space key={field.key} align="baseline">
                    <div className="sub-items">
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Sr. No."
                          name={[field.name, "srno"]}
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                          labelCol={{
                            span: 4,
                          }}>
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Product Description"
                          name={[field.name, "description"]}
                          wrapperCol={{
                            offset: 1,
                            span: 16,
                          }}
                          labelCol={{
                            offset: 1,
                            span: 4,
                          }}>
                          <Input
                            placeholder="Description"
                            style={{ width: "170px" }}
                          />
                        </Form.Item>
                      </div>

                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="HSN"
                          name={[field.name, "hsn"]}
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                          labelCol={{
                            span: 4,
                          }}>
                          <Input />
                        </Form.Item>
                      </div>
                    {!isSalesOrderItem ? (<>  <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Part Number"
                          name={[field.name, "part_no"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Make"
                          name={[field.name, "make"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <Input />
                        </Form.Item>
                      </div></>): null}
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Quantity"
                          name={[field.name, "quantity"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            onChange={(value, name) =>
                              priceOnChange(index, value, "quantity")
                            }
                            defaultValue={0}
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Unit Price"
                          name={[field.name, "unit_price"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            onChange={(value) =>
                              priceOnChange(index, value, "unit_price")
                            }
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          style={{ width: "180px" }}
                          name={[index, "unit"]}
                          className="ant-form-item-label-wrap"
                          label="Unit of measurement"
                          wrapperCol={{
                            offset: 6,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <Select options={areas}></Select>
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="CGST %"
                          name={[field.name, "cgst_percentage"]}
                          wrapperCol={{
                            offset: 4,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            onChange={(value) =>
                              priceOnChange(index, value, "cgst_percentage")
                            }
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="CGST"
                          name={[field.name, "CGST"]}
                          wrapperCol={{
                            offset: 5,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            // onChange={(value) =>
                            //   priceOnChange(index, value,'CGST')
                            // }
                            disabled
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="SGST %"
                          name={[field.name, "sgst_percentage"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            onChange={(value) =>
                              priceOnChange(index, value, "sgst_percentage")
                            }
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="SGST"
                          name={[field.name, "SGST"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            // onChange={(value) =>
                            //   priceOnChange(index, value,'SGST')
                            // }
                            disabled
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="IGST %"
                          name={[field.name, "igst_percentage"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            onChange={(value) =>
                              priceOnChange(index, value, "igst_percentage")
                            }
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="IGST"
                          name={[field.name, "IGST"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber
                            // onChange={(value) =>
                            //   priceOnChange(index, value,'IGST')
                            // }
                            disabled
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="GST Type"
                          name={[field.name, "gst_type"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <Select
                            options={GST_TYPES}
                            defaultValue={GST_TYPES[0]}
                            onChange={(value) =>
                              priceOnChange(index, value, "gst_type")
                            }
                          />
                        </Form.Item>
                      </div>
                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Total"
                          name={[field.name, "total"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber disabled />
                        </Form.Item>
                      </div>

                      <div className="sub-item">
                        <Form.Item
                          {...field}
                          label="Sub Total"
                          name={[field.name, "sub_total"]}
                          wrapperCol={{
                            offset: 7,
                            span: 16,
                          }}
                          labelCol={{ span: 4 }}>
                          <InputNumber disabled />
                        </Form.Item>
                      </div>
                      <div className="sub-item" style={{margin: "1.5rem"}}>
                        <AiOutlineMinusCircle
                          onClick={() => {
                            remove(field.name, () =>{
                              onRemove(index);
                            });
                          }}
                        />
                      </div>
                    </div>
                  </Space>
                ))}
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<AiOutlinePlus />}>
                    Add Item
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        //
      </div>
    </div>
  );
};

export default ItemForm;
