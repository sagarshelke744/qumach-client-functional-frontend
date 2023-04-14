import { Button, Col, Form, Input, Row, Space } from "antd";
import React from "react";
import { AiOutlineMinusCircle, AiOutlineMinusSquare, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
const MultipleInput = ({ name }) => {
  return (
    <Style>
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <>
          {fields.map((field, index) => (
            <Space
              key={field.key}
              style={{
                display: "flex",
                marginTop:-20,
              }}
              align="baseline">
              <Form.Item
                {...field}
                label="Descriptions"
                labelCol={{span: 20, offset: 17}}
                name={[field.name, "description"]}>
                <Input  placeholder="Descriptions"/>
              </Form.Item>
              <AiOutlineMinusSquare
                style={{ width: "200px",marginTop:1 }}
                onClick={() => remove(name)}
              />
            </Space>
          ))}
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<AiOutlinePlus />}>
              Description
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </Style>
  );
};

export default MultipleInput;

const Style = styled.div`
  margin: .5rem 9rem;
`;
