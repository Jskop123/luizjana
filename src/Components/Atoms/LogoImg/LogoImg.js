import React from 'react';
import styled from 'styled-components';
import logo from '../../../images/logo.png';

const Img = styled.img`
  position: absolute;
  width: 50px;
  height: 65px;
  left: 3px;
  top: -7.5px;
  transition: 2s;
  &:hover {
    transform: translate(-50%, -50%);
    transform: rotate(360deg);
    cursor: pointer;
  }
`
const FooterImg = styled(Img)`
  position: relative;
  display: block;
  margin: auto;
`
const LogoImg = () => (
  <Img src={logo} alt="logo"/>
)
const FooterLogoImg = () => (
  <FooterImg src={logo} alt="logo"/>
)

export { LogoImg, FooterLogoImg };
