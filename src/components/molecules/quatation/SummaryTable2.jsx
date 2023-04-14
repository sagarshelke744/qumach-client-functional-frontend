import React from 'react'
import SummaryFormTable from './SummaryFormTable'

function SummaryTable({summaryData,total}) {

  return (
    <table>
                <tr>
                    <th>SR.NO</th>
                    <th>AREA</th>
                    <th>AMOUNT INR</th>
                </tr>
                {summaryData && summaryData.map((data,index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{data.category.processArea ? data.category.processArea  : data.category.category}</td>
                    <td>{data.totalAmount}</td>
                </tr>
                ))}

<tr>
                    <th></th>
                    <th>TOTAL EX WORKS</th>
                    <th>{total}</th>
                </tr>
    </table>
  )
}

export default SummaryTable