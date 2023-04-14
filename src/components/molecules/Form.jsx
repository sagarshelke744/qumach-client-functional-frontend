import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { NavbarStyle } from "./Molecule.style";
import { useSelector } from "react-redux";
import { FormStyle } from "./Molecule.style";
import Form3 from "./Form3";
import Form4 from "./Form4";
import TermsAndConditions from "./TermsAndConditions";
import QuotationData from "./quatation/QuotationData";
import { useFetchQuotationDetailsQuery } from "../../features/apis/AllApi";
import QuotationHeader from "./quatation/QuotationHeader";
import QuotationTableHeader from "./quatation/QuotationTableHeader";

const Form = ({quotationData}) => {
  const { selected, setSelected } = useState();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const { user } = useSelector((state) => state.user);
  // console.log(user.username);
  // const { data: quotationData } = useFetchQuotationDetailsQuery();
  console.log(quotationData,"dafajflfjlsajdfjsdkfj;l")
  return (
    <>
      <FormStyle>
        <QuotationHeader quotation={quotationData && quotationData[0]}/>
        <section class="main">
          {/* <!-- main row here --> */}
          <QuotationTableHeader />
        {quotationData && quotationData.map((item,index) => (<QuotationData data={item} />))}
       
        </section>
      </FormStyle>
    </>
  );
};

export default Form;
