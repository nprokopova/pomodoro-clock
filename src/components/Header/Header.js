import React from "react";
import styled from 'styled-components/macro';

const Header = (props) => {
    return (
    <Heading>{props.title}</Heading>)
}

const Heading = styled.h1`
font-size: 2.4rem;
color:  white;
margin: 0px  0px 12px 0px;
`
export default Header;
