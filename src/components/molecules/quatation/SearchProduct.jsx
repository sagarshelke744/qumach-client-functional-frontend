import { Form, Button, Typography } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { productModulesOptions } from "../../../constant/constant";
import {
  useFetchProductCategoryQuery,
  useFetchProductDetailsQuery,
} from "../../../features/apis/AllApi";
import SelectComponent from "../helper-components/SelectComponent";
import ListQuotationProduct from "./ListQuotationProduct";
import {handleOnValueChange} from '../../../../lib'
const { Title } = Typography;

function SearchProduct({ form, getProductsData ,setProductCategoryData,productCategory,onSummaryChange}) {
  const [productType, setProductType] = useState();
  const [productTypeLabel, setProductTypeLabel] = useState();

  const [productCategoryLabel, setProductCategoryLabel] = useState();

  const [searchProduct, setSearchProduct] = useState({
    productType: "",
    productCategory: "",
    isQuatationProducts: true,
  });

  const { data: productCategoryData } = useFetchProductCategoryQuery({
    productType: productType,
  });

  // get productssetProductCategoryData
  const { data: productsData } = useFetchProductDetailsQuery(searchProduct);

  // product category dropdown
  let productCategoryOptions =
    productCategoryData &&
    productCategoryData.map((subType) => ({
      label: subType.productSubType,
      value: subType._id,
    }));
  const handleOnProductLoad = () => {
    if(!productCategory) {
      alert('Select Product Category')
      return
    }
    setSearchProduct({
      ...searchProduct,
      productType,
      productCategory
    });
  };
  
  const handlProductTypeProductType = (value) => {
    setProductType(value);
    setProductCategoryData(null);
    form.setFieldsValue({
      productCategory:null
    })
    const selectedCategory = findCategoryOptions(productModulesOptions,value)
    if(selectedCategory) {
      setProductTypeLabel(selectedCategory.label)
    }
    // form.setFieldsValue({
    //   productCategory: undefined
    // })
  };
  const findCategoryOptions = (list,value) =>{
    return list.find(item => item.value === value)
  }
  const handleProductCategoryChange = (value) => {
    setProductCategoryData(value)
    const selectedCategory = findCategoryOptions(productCategoryOptions,value)
    if(selectedCategory) {
      setProductCategoryLabel(selectedCategory.label)
    }
  };
  const onPriceChange = (index,value,productKey) =>{
    handleOnValueChange(index,form,productKey,productCategoryLabel || productTypeLabel)
    onSummaryChange()
  }
  useEffect(() => {
    let obj = getProductsData(productsData);
    form.setFieldsValue({
        ...obj
    })
  }, [productsData]);
  return (
    <div>
      <Form.Item>
        <SelectComponent
          label={"Select Type"}
          options={productModulesOptions}
          name={"productType"}
          onChange={handlProductTypeProductType}
        />
      </Form.Item>
      <Form.Item>
        <SelectComponent
          name={"productCategory"}
          label={"Select Category"}
          options={productCategoryOptions}
          onChange={handleProductCategoryChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="button" style={{marginTop: "1rem", width: "400px", fontSize: "1.4rem", fontWeight: "600", padding: ".5rem", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={handleOnProductLoad}>
          Load Products
        </Button>
      </Form.Item>
      Product Description
      <Title level={5}>
        Product Name: {productsData && productsData[0]?.category?.name}
      </Title>
      <Title level={5}>
        Product Category:{" "}
        {productsData && productsData[0]?.category?.productType}
      </Title>
      <Title level={5}>
        Product Sub Category:{" "}
        {productsData && productsData[0]?.category?.productSubType}
      </Title>
      {productsData &&
        productsData.map((pItem, index) => (
          <ListQuotationProduct
            onPriceChange={onPriceChange}
            productFormData={pItem.products}
            form={form}
            name={"product" + index}
            categoryData={pItem._id}
            index={index}
          />
        ))}
    </div>
  );
}

export default SearchProduct;
