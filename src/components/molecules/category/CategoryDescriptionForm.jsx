import React from 'react'
import ProductDescriptionForm from '../ProductDescriptionForm'
import Create from './Create'
import styled from 'styled-components'

const CategoryDescriptionForm = ({form,onFinish,getDescriptionData,updateForm,formData,setFormData})  =>{
  return (
    <Style>
        <Create  form={form} onFinish={onFinish}/>
        <ProductDescriptionForm  getDescriptionData= {getDescriptionData} form = {formData} setFormData={setFormData} isCategoryCreate={true} />
    </Style>
  )
}

export default CategoryDescriptionForm

const Style = styled.div`
margin: 2rem 6rem;
`;