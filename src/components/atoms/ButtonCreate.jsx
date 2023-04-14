import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ButtonCreate = (props) => {
    const { link, buttonTitle } = props;
  return (
    <Divstyle>
        <Button type="primary"  htmlType="submit">{buttonTitle}</Button>
    </Divstyle>
  );
};

export default ButtonCreate;
const Divstyle = styled.div`
  /* margin: 2rem 5rem; */
  margin-left: 10rem;
`;
const Style = styled(Link)`
  margin: 10rem 1rem 1rem;
`;