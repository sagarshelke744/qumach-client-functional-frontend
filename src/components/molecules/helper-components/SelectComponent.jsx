import { Form, Select } from 'antd'
import React from 'react'

const SelectComponent = ({options=[], label, name ,onChange, disable})  =>{
  return (
    <Form.Item
    name={name}
    label={<p style={{ fontSize: "18px" }}>{label}</p>}
  >
    <Select
     options={options}
     onChange= {onChange}
     disabled={disable}
    />
  </Form.Item>
  )
}

export default SelectComponent