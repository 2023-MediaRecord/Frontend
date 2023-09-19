import { styled } from "styled-components";
//import React from 'react';


const Header = () => {
  return (
    <HeaderMenu>
      <HeaderMypage href="#">마이페이지</HeaderMypage>
      <HeaderLabel>|</HeaderLabel>
      <HeaderLabel>닉네임</HeaderLabel>
    </HeaderMenu>
  );
}

export default Header;

const HeaderMenu = styled.div`
    /* background-color:#ffc7f4; */
    text-align: right;
`;

const HeaderMypage = styled.a`
    padding: 10px;
    display: inline-block;
    color: #a3a3a3;
    text-decoration-line: none;
`;


const HeaderLabel = styled.label`
    color: #a3a3a3;
    padding: 10px;
`;