import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import SelectComponent from "../helper-components/SelectComponent";
import { productModulesOptions } from "../../../constant/constant";
import {
  useCreateCategoryDescriptionMutation,
  useCreateQuotationsMutation,
  useFetchCategoryDescriptionsQuery,
  useFetchClientsQuery,
  useFetchProductCategoryQuery,
  useFetchProductDetailsQuery,
} from "../../../features/apis/AllApi";
import {  getNumber, handleOnValueChange, onSummaryValueChange, pricingInitialValue, setFormData, setPricingTableData, setPricingValue } from "../../../../lib";
import ListQuotationProduct from "./ListQuotationProduct";
import TwoDArrayFrom from "./TwoDArrayFrom";
import SearchProduct from "./SearchProduct";
import ProductDescriptionForm from "../ProductDescriptionForm";
import { descriptionForm } from "../common-form/CommonForm";
import SummaryFormTable from "./SummaryFormTable";
import PricingTableForm from "./PricingTableForm";
import { Form4Style } from "../Molecule.style";
import QuotationPricingForm from "./QuotationPricingForm";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const getProductArray = () => {};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CreateQuotation = () => {
  const [form] = Form.useForm();
  const [descriptionForm] = Form.useForm()
  const { data: clients } = useFetchClientsQuery();
  const [productCategory, setProductCategory] = useState();
  const [summaryTotalValue,setSummaryTotalValue] = useState(0)
  const [pricingForm] = Form.useForm();

  const {data: productCategoryDescription}  = useFetchCategoryDescriptionsQuery({productCategory})
  const setProductCategoryData = (category) => {
    setProductCategory(category)
  }

  const [categoryDescription,setCategoryDescription] = useState({})
  const clientOptions =
    clients &&
    clients.map((client) => ({
      label: client.contactPersonName,
      value: client._id,
    }));
  const getTotalProducts = (data) => {
    const products = [];

    for (const key in data) {
      if (
        data.hasOwnProperty(key) &&
        typeof data[key] === "object" &&
        data[key].hasOwnProperty("products")
      ) {
        products.push(...data[key].products);
      }
    }
    return products;
  };
  const [createQuotation, quotationResponse] = useCreateQuotationsMutation();
  const [createProductCategory,categoryCreateResponse]  = useCreateCategoryDescriptionMutation()
  const onFinish = async(values) => {
    values = form.getFieldsValue()
    values["quatationProduct"] = getTotalProducts(values);
    formData.productCategory = productCategory
    delete formData._id
    const categoryData = await createProductCategory(formData)
    values["quatationProductCatDesc"] = categoryData.data._id

    const pricingFormData = pricingForm.getFieldsValue()
    values['quotationPricingData'] = pricingFormData
    console.log(JSON.stringify(values),"values")
    createQuotation(values)



  };

  const getMapValue = (summaryMap,key) => {
    return summaryMap.get(key)
  }
  const setSummaryMap = (summaryMap,key,updatedTotal) => {
    // const total = getMapValue(summaryMap,key)
    summaryMap.set(key, updatedTotal)
  }
  const createSummaryMap = (summaryMap,categoryData, val) => {
    if(categoryData.processArea) {
      summaryMap.set(categoryData.processArea,val)
    }else if(categoryData.subCategory) {
      summaryMap.set(categoryData.subCategory,val)

    } else {
      summaryMap.set(categoryData.category,val)

    }
  }

  const getProductsData = (productData) => {
    let obj = {};
    obj["summary"]=[]

    let summaryMap = new Map()
    let summaryTotal = 0
    productData &&
      productData.map((product, index) => {
        const key = `product${index}`;
        createSummaryMap(summaryMap,product._id,0)
        obj[key] = {
          products: [],
          total: 0,
          totalAdvance: 0,
        };
        product &&
          product.products.map((item) => {
            const productObj = {
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              total: getNumber(item.price) * getNumber(item.quantity),
              advanceAmount: 0,
              product: item._id.toString(),
              descriptions: item.descriptions,
              processingArea: item.processingArea,
              note: "",
            };
            if (obj[key]) {
              obj[key]["products"] = [...obj[key]["products"], productObj];
              obj[key]["total"] =
              getNumber(obj[key]["total"]) + getNumber(productObj.total);
            }
            const total = obj[key]["total"]
            if(item.processingArea) {
              setSummaryMap(summaryMap, item.processingArea,total)
            } else if(product._id.subCategory){
              setSummaryMap(summaryMap,product._id.subCategory,total)
            }else {
              setSummaryMap(summaryMap,product._id.category,total)

            }
            // else {
            //   obj[key]['product']= [productObj]
            // }
          });

      });

      const list = Array.from(summaryMap.entries());
      list.forEach((item) => {
        summaryTotal = getNumber( summaryTotal) + getNumber(item[1])
        obj.summary.push({
          area: item[0],
          value: item[1],
          isEditable: true
        });
      });
      if(obj.summary.length > 0) {
        // obj.summary.push({
        //   area: 'Total',
        //   value: summaryTotal,
        //   isEditable: true
        // })
        setPricingData(summaryTotal)
        setSummaryTotalValue(summaryTotal)
        // setPricingTableData(pricingForm)
      }
      

    return obj;
  };
  const getDescription = (data) => {

  }

  const setPricingData = (summaryTotal) => {
    pricingForm.setFieldsValue({
      ...pricingInitialValue,
      total1: summaryTotal,
    })
    setPricingValue(pricingForm)
  }
  // const formValues = descriptionForm(productCategoryDescription)
  const [formData, setForm] = useState({})
  // if(productCategoryDescription) {
  //   setForm(productCategoryDescription)
  // }
  const setDataToForm = (name,value) => {
    setFormData(name,value,setForm)
  }

  const getDescriptionData = (data) => {

  }
const handleSubmit = () => {
    console.log(form.getFieldsValue(), 'form values')
    console.log(formData,"formDatasvalues")
}
const getPricingFormData = () => {

}
const onSummaryChange = () => {
  const summaryTotalVal = onSummaryValueChange(form)

  setSummaryTotalValue(summaryTotalVal)
  setPricingData(summaryTotalVal)
}
  useEffect(() => {
    if(productCategoryDescription) {

      setForm({...productCategoryDescription,productCategory: productCategoryDescription?.productCategory?.name})
    }
  },[productCategoryDescription,pricingForm])

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <SelectComponent
            label={"Select Client"}
            options={clientOptions}
            name={"client"}
          />
        </Form.Item>

        <SearchProduct form={form} getProductsData={getProductsData} getDescription={getDescription} setProductCategoryData={setProductCategoryData} productCategory={productCategory} onSummaryChange = {onSummaryChange}/>
        {/* <Form.List name={"products"}>

      {(fields, { add, remove }) => (
        <>
         {fields.map((field, index) => (
      <ProductForm form = {form} onProductChange={onProductChange}/>

         ))}
        </>
      )}
      </Form.List> */}
      <ProductDescriptionForm getDescriptionData={getDescriptionData} form={formData ? formData :  {}} setFormData={setDataToForm}/>
      <SummaryFormTable form = {form} onSummaryChange={onSummaryChange}/>
      Summary Total: {summaryTotalValue}
      {/* <PricingTableForm /> */}
      <QuotationPricingForm form = {pricingForm} getPricingFormData= {getPricingFormData}/> 
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}  >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        Form
      </Form>

    </div>
  );
};

export default CreateQuotation;
