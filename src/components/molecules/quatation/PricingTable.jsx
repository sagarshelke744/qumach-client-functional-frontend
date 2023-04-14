import React from 'react'

function PricingTable({pricingData}) {
  return (
    <div> <table>
    <tr>
        <th>SR.NO</th>
        <th>ITEM</th>
        <th>INR</th>
    </tr>
    <tr>
        <td>1.</td>
        <td>TOTAL 1</td>
        <td>{pricingData?.total1}</td>
    </tr>
    <tr>
        <td>2.</td>
        <td>Disc</td>
        <td>{pricingData?.disc}</td>
    </tr>
    <tr>
        <td>3.</td>
        <td>Total 2</td>
        <td>{pricingData?.total2}</td>
    </tr>
    <tr>
        <td>4.</td>
        <td>Packing</td>
        <td>{pricingData?.packing}</td>
    </tr>
    <tr>
        <td>5.</td>
        <td>Total 3</td>
        <td>{pricingData?.total3}</td>
    </tr>
    <tr>
        <td>6.</td>
        <td>Insurance</td>
        <td>{pricingData?.insurance}</td>
    </tr>
    <tr>
        <td>7.</td>
        <td>Total 4</td>
        <td>{pricingData?.total4}</td>
    </tr>
    <tr>
        <td>8.</td>
        <td>Installation</td>
        <td>{pricingData?.installation}</td>
    </tr>
    <tr>
        <td>9.</td>
        <td>TOTAL 5</td>
        <td>{pricingData?.total5}</td>
    </tr>
    <tr>
        <td>10.</td>
        <td>CGST @ 9%</td>
        <td>{pricingData?.cgst}</td>
    </tr>
    <tr>
        <td>11.</td>
        <td>Total 6</td>
        <td>{pricingData?.total6}</td>
    </tr>
    <tr>
        <td>12.</td>
        <td>SGST @ 9%</td>
        <td>{pricingData?.sgst}</td>
    </tr>
    <tr>
        <td>13.</td>
        <td>Total 7</td>
        <td>{pricingData?.total7}</td>
    </tr>
    <tr>
        <td>14.</td>
        <td>ISGT @ 18%</td>
        <td>{pricingData?.igst}</td>
    </tr>
    <tr>
        <td>15.</td>
        <td>Total 8</td>
        <td>{pricingData?.total8}</td>
    </tr>
    <tr>
        <td>16.</td>
        <td>Transport</td>
        <td>{pricingData?.transport}</td>
    </tr>
    <tr>
        <td>17.</td>
        <td>Total 9</td>
        <td>{pricingData?.total9}</td>
    </tr>
    <tr>
        <td>18</td>
        <td>R Off(+/-)</td>
        <td>{pricingData?.roff}</td>
    </tr>
</table></div>
  )
}

export default PricingTable