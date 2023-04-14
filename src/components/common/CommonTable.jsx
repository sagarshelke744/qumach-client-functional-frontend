import { Table } from 'antd'
import React from 'react'

const CommonTable =({columns,dataSource=[]}) => {
  return (
    <Table dataSource={dataSource} columns={columns}             rowClassName={"table-row"}
    />
  )
}

export default CommonTable