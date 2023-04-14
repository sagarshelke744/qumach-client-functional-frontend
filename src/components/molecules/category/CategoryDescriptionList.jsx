import React from 'react'
import { useFetchCategoryDescriptionsQuery } from '../../../features/apis/AllApi'
import CommonTable from '../../common/CommonTable'

function CategoryDescriptionList() {
    const {data: descriptionData} = useFetchCategoryDescriptionsQuery()
    const columns = [
      {
        title: 'Category Type',
        dataIndex: 'productCategory',
        key: 'productCategory',
        render: (productCategory) => productCategory && productCategory.productType
      },
 {
        title: 'Description Category Name',
        dataIndex: 'productCategory',
        key: 'productCategory',
        render: (productCategory) => productCategory && productCategory.name
      },
    
]
  return (
   <CommonTable columns={columns} dataSource= {descriptionData} />
  )
}

export default CategoryDescriptionList