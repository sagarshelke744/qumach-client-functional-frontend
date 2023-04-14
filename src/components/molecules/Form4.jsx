import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { Form4Style } from "./Molecule.style";
import PricingTable from "./quatation/PricingTable";
import PricingTableForm from "./quatation/PricingTableForm";
import SummaryTable from "./quatation/SummaryTable2";
import SummaryFormTable from "./quatation/SummaryFormTable";
const Form4 = ({quotationData}) => {
  const { selected, setSelected } = useState();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const { user } = useSelector((state) => state.user);
  // console.log(user.username);
  let total = 0;
  const summaryData =quotationData && quotationData.map(quotation => {
    const products = quotation.products;
    const totalAmount = products.reduce((accumulator, product) => accumulator + product.total, 0);
    const discountAmount = products.reduce((accumulator, product) => accumulator + product.total, 0);

    total = total+totalAmount;
    return { category: quotation._id, totalAmount };
  });
  const pricingData = quotationData && quotationData.length ? quotationData[0].quotationPricing :{}
  return (
    <>
   <Form4Style>
   <section class="heading">
        <h1>SUMMARY COSTING FOR 500 BPH PLANT</h1>
    </section>
    <div className="container">
    <SummaryTable summaryData={summaryData} total={total}/>
    </div>

    <section class="bot-heading">
        <h1>RUPEES SIXTY-TWO LAKHS SIXTY-EIGHT THOUSAND ONLY</h1>
    </section>


    {/* grand total table */}

    <div className="container grand-total">
   <PricingTable pricingData={pricingData} />
    </div>
    <section class="heading">
        <h1>GRAND TOTAL: {pricingData?.roff}</h1>
    </section>
   </Form4Style>
    
    </>
  );
};

export default Form4;
