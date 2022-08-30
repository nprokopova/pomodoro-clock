import styled from "styled-components/macro";
import React from "react";

const Footer = (props) => {
  return (
    <FooterElement>
      <Author>by {props.author}</Author>
    </FooterElement>
  );
};
const FooterElement = styled.footer`
  font-size: ${12 / 16}rem;
  margin-top: 10px;
  font-weight: 600;
  color: #783a4d;
`;
const Author = styled.p`
  padding: 0px;
  margin: 0px;
`;

export default Footer;
