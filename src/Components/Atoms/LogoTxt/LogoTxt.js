import React from 'react';
import styled from 'styled-components';

const Txt = styled.h1`
  color: #ddd;
  font-weight: 800;
  font-size: 2.5em;
  width: 25%;
  height: 50px;
  justify-content: flex-start;
  margin: 0;
  display: flex;
  align-items: center;
  padding-left: 65px;
  @media (max-width: 768px) {
    display: none;
    padding: 0;
  }
`
const LogoTxt = () => (
  <Txt>SHAPE</Txt>
)

export default LogoTxt
