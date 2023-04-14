import React from 'react'

function QuotationData({data}) {
    const processArea = data && data?._id?.processArea;
    const totalAmount = () => {
        let total = 0;
        let advanceAmount = 0;
        data.products.forEach((product) => {
            total = product?.total + total;
            advanceAmount = product?.advanceAmount + advanceAmount;
        })
        return {total,advanceAmount}
    }
    const {total, advanceAmount} = totalAmount()
  return (
    <div>
            {/* <!-- hea
            d row here --> */}
    

    {/* <!-- first row here --> */}
    {data && data.products && data.products.map((product,index) => (
        <><>
            {index === 0  && data && data?._id?.processArea ? (<div class="head-row">
                
                <div class="type">
                <h1>1. { data?._id?.processArea}</h1>
                </div>

            </div>) : null}
            
        </><div class="top-row info">
                <div class="sr-no">
                    <h3>{index + 1}.</h3>
                </div>
                <div class="desc">
                    <h3>{product?.title}</h3>
                    <ul>
                        {/* 600mm <i class="fa fa-close"></i> 600mm <i class="fa fa-close"></i> 750mm */}
                        {product && product?.descriptions?.map((description, ind) => (
                        <li><i class="fa fa-gear"></i>{description?.description}</li>))}
                        {
                            product?.note ?( <li>
                                <b> {product?.note}</b>
                                </li>) : null
                        }
                       
                    </ul>
                </div>
                <div class="exfactory-rate">
                    <p>{product?.advanceAmount}</p>
                </div>
                <div class="remark">
                    <p>{product?.total}</p>
                </div>
                
            </div></>
    ))}
      
      <div class="bottom-row">
            <div class="total">
              <h1>TOTAL {processArea}</h1>
            </div>
            <div class="exfactory-rate">
              <h1>{advanceAmount}</h1>
            </div>
            <div class="remark">
              <h1>{total}</h1>
            </div>
          </div>

    </div>
  )
}

export default QuotationData