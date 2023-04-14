import { useState } from 'react';
import { Form, Input, Button } from 'antd';

const ProductDescription = ({description}) => {
  const [inputs, setInputs] = useState(['']);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      {inputs.map((input, index) => (
        <Form.Item key={index}>
          <Input
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          {inputs.length > 1 && (
            <Button onClick={() => handleRemoveInput(index)}>Remove</Button>
          )}
        </Form.Item>
      ))}
      <Button onClick={handleAddInput}>Add</Button>
      </> 
  );
};

export default ProductDescription;
