import React from 'react'
import ButtonCreate from '../components/atoms/ButtonCreate'
import CommonTable from '../components/common/CommonTable'
import { useFetchProductDetailsQuery } from '../features/apis/AllApi'
const Product = () => {
  const {data: products}  = useFetchProductDetailsQuery()
  
  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },

]
  return (
    <div>
        <CommonTable  dataSource={products} columns={columns} />
    </div>
  )
}

export default Product