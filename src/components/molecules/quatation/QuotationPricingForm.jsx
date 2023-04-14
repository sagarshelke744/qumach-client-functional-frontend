import { Button, Form, InputNumber } from 'antd';
import { useEffect } from 'react';
import { setPricingValue } from '../../../../lib';

const FormItem = Form.Item;

const QuotationPricingForm = ({form, getPricingFormData}) => {
    const {Item} = Form;
    const onPriceChange = () => {
        setPricingValue(form)
        
    }
    useEffect(() => {},[form])
    const initialValues = {"total1":0,"disc":0,"total2":0,"packing":0,"total3":0,"insurance":0,"total4":0,"installation":0,"total5":0,"cgst":0,"total6":0,"sgst":0,"total7":0,"igst":0,"total8":0,"transport":0,"total9":0,"roff":0}
    const getGrandTotal  =() => {
            return form.getFieldsValue().roff
    }
  return (
    <Form form={form}
        initialValues={initialValues}
    >
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>INR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total 1</td>
          <td>
            <Item name="total1" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} />
            </Item>
          </td>
        </tr>
        <tr>
          <td>Disc</td>
          <td>
            <Item name="disc" rules={[{ required: true }]} >
              <InputNumber style={{ width: '100%' }} onChange={onPriceChange}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Total 2</td>
          <td>
            <Item name="total2" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} disabled={true}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Packing</td>
          <td>
            <Item name="packing" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} onChange={onPriceChange}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Total 3</td>
          <td>
            <Item name="total3" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} disabled={true}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Insurance</td>
          <td>
            <Item name="insurance" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} onChange={onPriceChange}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Total 4</td>
          <td>
            <Item name="total4" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} disabled={true}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Installation</td>
          <td>
            <Item name="installation" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} onChange={onPriceChange}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Total 5</td>
          <td>
            <Item name="total5" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} disabled={true}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>CGST 9 %</td>
          <td>
            <Item name="cgst" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} disabled={true}/>
            </Item>
          </td>
        </tr>
        <tr>
          <td>Total 6</td>
          <td>
            <Item name="total6" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} disabled={true}/>
            </Item>
          </td>
        </tr>
        <tr>
            <td>SGST 9 %</td>
            <td>
              <Item name="sgst" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} disabled={true}/>
              </Item>
            </td>
          </tr>
          <tr>
            <td>Total 7</td>
            <td>
              <Item name="total7" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} disabled={true}/>
              </Item>
            </td>
          </tr>
          <tr>
            <td>IGST 9 %</td>
            <td>
              <Item name="igst" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} disabled={true}/>
              </Item>
            </td>
          </tr>
          <tr>
            <td>Total 8</td>
            <td>
              <Item name="total8" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} disabled={true}/>
              </Item>
            </td>
          </tr>
          <tr>
            <td>Transport</td>
            <td>
              <Item name="transport" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} onChange={onPriceChange}/>
              </Item>
            </td>
          </tr>
          <tr>
            <td>Total 9</td>
            <td>
              <Item name="total9" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} disabled={true}/>
              </Item>
            </td>
          </tr>
          <tr>
            <td>R-Off</td>
            <td>
              <Item name="roff" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} disabled={true}/>
              </Item>
            </td>
          </tr>
        </tbody>
        </table>
      Grand Total: {getGrandTotal()}

        </Form>

  );
};

export default QuotationPricingForm;
