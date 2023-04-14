import React from "react";
import { Form, Input, Button, Table } from "antd";
import { useEffect } from "react";
import { onSummaryValueChange } from "../../../../lib";

function SummaryFormTable({form,onSummaryChange}) {

  useEffect(() => {

  },[form])
  return (
  
      <Form.List name="summary">
        {(fields, { add, remove }) => (
          <>
            <Table
              dataSource={fields}
              columns={[
                {
                  title: "Area",
                  dataIndex: ["area"],
                  key: "area",
                  render: (_, record) => {
                    return (
                    <Form.Item
                      {...record}
                      name={[record.name, "area"]}
                      fieldKey={[record.fieldKey, "area"]}
                      rules={[{ required: true, message: "Please enter a area." }]}
                    >
                      <Input placeholder="Area" />
                    </Form.Item>
                  )}, 
                },
                {
                  title: "Value",
                  dataIndex: ["value"],
                  key: "value",
                  render: (_, record) => (
                    <Form.Item
                      {...record}
                      name={[record.name, "value"]}
                      fieldKey={[record.fieldKey, "value"]}
                      rules={[{ required: true, message: "Please enter an age." }]}
                    >
                      <Input  placeholder="Value" onChange={onSummaryChange} />
                    </Form.Item>
                  ),
                },
                {
                  title: "",
                  dataIndex: "actions",
                  key: "actions",
                  render: (_, record) => (
                    <Button type="primary" onClick={() => {remove(record.name); onSummaryChange();}} danger>
                      Remove
                    </Button>
                  ),
                },
              ]}
              pagination={false}
            />
            
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block>
                Add Summary
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    
  );
}

export default SummaryFormTable