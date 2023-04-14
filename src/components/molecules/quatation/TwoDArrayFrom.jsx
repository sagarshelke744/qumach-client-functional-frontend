import { Form, Input } from 'antd';

const TwoDArrayFrom = () => {
  return (
    <>
      <Form.Item label="Row 1" name={"ar1"}>
        <Input.Group compact>
          <Form.Item name={['row1', 'col1']} noStyle>
            <Input placeholder="Column 1" />
          </Form.Item>
          <Form.Item name={['row1', 'col2']} noStyle>
            <Input placeholder="Column 2" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="Row 2" name={"ar2"}>
        <Input.Group compact>
          <Form.Item name={['row2', 'col1']} noStyle>
            <Input placeholder="Column 1" />
          </Form.Item>
          <Form.Item name={['row2', 'col2']} noStyle>
            <Input placeholder="Column 2" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      </>
  );
};


export default TwoDArrayFrom;