import React from 'react'
import { useFetchProductCategoryQuery } from '../../../features/apis/AllApi'
import CommonTable from '../../common/CommonTable'

function CategoryList() {
    const {data: categoryData} = useFetchProductCategoryQuery()
    const columns = [{
        title: 'Product Type',
        dataIndex: 'productType',
        key: 'productType',
    },
    {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
    }]
  return (
    <CommonTable columns={columns} dataSource= {categoryData} />

  )
}

export default CategoryList