import { Form, Input, InputNumber, Space } from 'antd'
import React from 'react'

const SingleProductForm = ({onProductChange}) => {
  return (
    <Space key={field.key} align="baseline">
    <>
      <Form.Item
        {...field}
        name={[field.name, "title"]}
        label={<p style={{ fontSize: "18px" }}>Title</p>}
      >
        <Input size="large" placeholder="Title" />
      </Form.Item>
      <Form.Item
        {...field}
        name={[field.name, "price"]}
        label={<p style={{ fontSize: "18px" }}>Price</p>}
      >
        <InputNumber size="large" placeholder="price" onChange={ (value) =>onProductChange(index,value,"price")} />
      </Form.Item>
      <Form.Item
        {...field}
        name={[field.name, "quantity"]}
        label={<p style={{ fontSize: "18px" }}>Quantity</p>}
      >
        <InputNumber size="large" placeholder="Quantity" />
      </Form.Item>

      <Form.Item
        {...field}
        name={[field.name, "advanceAmount"]}
        label={<p style={{ fontSize: "18px" }}>Advance Amount</p>}
      >
        <InputNumber size="large" placeholder="Advance Amount" />
      </Form.Item>
      <Form.Item
        {...field}
        name={[field.name, "total"]}
        label={<p style={{ fontSize: "18px" }}>Total</p>}
      >
        <InputNumber size="large" placeholder="Total" />
      </Form.Item>


    </>
  </Space>
  )
}

export default SingleProductForm