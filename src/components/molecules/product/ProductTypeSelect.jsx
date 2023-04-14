import React from 'react'

const ProductTypeSelect =() => {
    const [productType, setProductType] = useState('manual')

    const {data: productCategoryData} = useFetchProductCategoryQuery({productType: productType})
    let productTypeOptions = productCategoryData && productCategoryData.map(subType => ({'label': subType.productSubType, 'value': subType._id}))
    const handleProductCategory = (value) => {
      setProductType(value)
    }
  return (
    <div>ProductTypeSelect</div>
  )
}

export default ProductTypeSelect