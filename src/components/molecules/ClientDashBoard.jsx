import React from 'react'
import { useFetchClientsQuery } from '../../features/apis/AllApi'
import CommonTable from '../common/CommonTable'

const  ClientDashBoard = ()  =>{
    const {data: client}= useFetchClientsQuery()
    console.log(client,"client")
    const columns = [
        {
            title: 'Name',
            dataIndex: 'companyName',
            key: 'companyName',
          },

          {
            title: 'Contact Person Name',
            dataIndex: 'contactPersonName',
            key: 'contactPersonName',
          },
    ]
  return (
    <CommonTable columns={columns} dataSource={client}/>
  )
}

export default ClientDashBoard