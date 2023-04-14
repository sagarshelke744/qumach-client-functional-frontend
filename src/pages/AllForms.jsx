import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/molecules/Form'
import ProductDescriptionForm from '../components/molecules/ProductDescriptionForm'
import Form3 from '../components/molecules/Form3'
import Form4 from '../components/molecules/Form4'
import { useFetchQuotationDetailsQuery } from '../features/apis/AllApi'
import { setFormData } from '../../lib'

const Allforms = () => {
  const { id } = useParams();
  const { data: quotationData } = useFetchQuotationDetailsQuery({
    id: id
  });
  const [formData, setForm] = useState({})
  const setDataToForm = (name,value) => {
    setFormData(name,value,setForm)
   }
 useEffect(() => {
  const quatationProductCatDesc = quotationData && quotationData[0] && quotationData[0].quatationProductCatDesc
  console.log("quatationProductCatDesc",quotationData)
  if(quatationProductCatDesc) {
    setForm(quatationProductCatDesc)
  }
 },[quotationData])
  return (
    <>
      <Form quotationData={quotationData} />
      <ProductDescriptionForm form={formData} setFormData={setDataToForm}/>
      {/* <Form3 /> */}
      <Form4 quotationData = {quotationData}/>
    </>
  );
}

export default Allforms