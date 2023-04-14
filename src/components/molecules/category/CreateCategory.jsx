import { Form, message } from 'antd';
import React, { useState } from 'react'
import { setFormData } from '../../../../lib';
import { useCreateCategoryDescriptionMutation, useCreateProductCategoryMutation } from '../../../features/apis/AllApi';
import { descriptionForm } from '../common-form/CommonForm';
import CategoryDescriptionForm from './CategoryDescriptionForm'

const CreateCategory = ()  =>{
  const [form] = Form.useForm();
  const [createCategory,createCategoryResponse] = useCreateProductCategoryMutation()
  const [categoryDescription,categoryDescriptionResponse]= useCreateCategoryDescriptionMutation()
  
  const {
    isError: failedToCreate,
    isSuccess: createSuccess,
    isLoading: creating,
  } = createCategoryResponse;
  const {
    isError: failed,
    isSuccess: Success,
    isLoading: loading
  } = categoryDescriptionResponse;

  if (failedToCreate) message.error("Failed to create Category");
  if (createSuccess) message.success("Category created successfully!");

  if (failed) message.error("Failed to create Category Description");
  if (Success) message.success("Category Description created successfully!");


  const onFinish = async(values) => {
      const data = await createCategory(values)
      setDataToForm('productCategory',data.data._id)
      
  }
  const updateForm = () => {

  }
  const [formData, setForm] = useState(descriptionForm())
 const setDataToForm = (name,value) => {
  setFormData(name,value,setForm)
 }
const getDescriptionData = async (data) => {
  const descriptionData = await categoryDescription(data);
  
}
  return (
    <>
    <CategoryDescriptionForm onFinish= {onFinish} form ={form} getDescriptionData ={getDescriptionData} updateForm={updateForm} formData = {formData} setFormData={setDataToForm}/>
    </>
  )
}

export default CreateCategory