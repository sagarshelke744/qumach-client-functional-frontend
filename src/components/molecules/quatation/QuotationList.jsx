import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetchQuotationDetailsQuery } from '../../../features/apis/AllApi'
import CommonTable from '../../common/CommonTable'

const QuotationList = () => {
    const {data: quotations} = useFetchQuotationDetailsQuery()
    const navigate = useNavigate();

    const columns = [
      { title: "id", dataIndex: "_id", key: "_id",render: (_id,record,index) => index+1 },
      {
        title: "Client",
        dataIndex: "client",
        key: "client",
        render: (client) => client && client.contactPersonName,
      },
    ];
    const  isViewColumn = () => {
        const viewColumn  = {
          title: "View",
          dataIndex: "_id",
          key: "edit_id",
          render: (id) => (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/all-forms/${id}`);
              }}>
              View
            </Button>
          ),
        } 
        columns.push(viewColumn)
      }
      isViewColumn()
  return (
    <div>
        <CommonTable  dataSource={quotations} columns={columns}/>
    </div>
  )
}

export default QuotationList