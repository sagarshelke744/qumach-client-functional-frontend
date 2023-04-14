import React from "react";
import CreateQuotation from "./CreateQuotation";
import styled from "styled-components";

const QuotationForm = () => {
  return (
    <Style>
      <CreateQuotation />
    </Style>
  );
};

export default QuotationForm;
const Style = styled.div`
  margin: 2rem 4rem;
`;
