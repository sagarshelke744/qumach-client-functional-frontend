import React from "react";

function QuotationHeader({quotation}) {
  return (
    <section class="heading">
      <h1>{quotation?.category?.name}</h1>
    </section>
  );
}

export default QuotationHeader;
