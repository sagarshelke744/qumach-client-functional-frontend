import { Button, Form, Input, List } from "antd";
import Title from "antd/es/skeleton/Title";
import React from "react";
import ProductForm from "../product/ProductForm";
import { ProductFormStyle } from "../Molecule.style";

const ListQuotationProduct = ({
  form,
  onPriceChange,
  categoryData,
  name,
  index,
}) => {
  console.log(categoryData, "categoryData");
  const onFinish = (e) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <>
      <ProductFormStyle>
        <div className="main-form">
          <ProductForm
            form={form}
            onPriceChange={onPriceChange}
            name={name}
            categoryData={categoryData}
            index={index}
          />
        </div>
      </ProductFormStyle>
    </>
  );
};

export default ListQuotationProduct;
