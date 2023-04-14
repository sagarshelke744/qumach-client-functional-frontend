import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Heading = (props) => {
    const { Title } = props;
  return (
    
<HeadingStyle>
    <section class="heading">
        <h1>{Title}</h1>
    </section>
    </HeadingStyle>
  );
};

export default Heading;
const HeadingStyle = styled.div`
    .heading{
    width: 20px  0%;
    text-align: center;
    margin: 2% auto;
    font-family: 'Poppins', sans-serif;
}
.heading h1{
    border-bottom: 3px solid black;
    width: 20%;
    margin: auto;
}
`;