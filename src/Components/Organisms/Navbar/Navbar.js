import React from 'react';
import styled from 'styled-components';
import { LogoImg } from '../../Atoms/LogoImg/LogoImg';
import LogoTxt from '../../Atoms/LogoTxt/LogoTxt';
import Menu from '../../Molecules/Menu/Menu';
import Social from '../../Molecules/Social/Social';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #121;
  opacity: .9;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`

const Navbar = () => (
  <Nav>
    <LogoImg />
    <LogoTxt />
    <Menu />
    <Social />
  </Nav>
)

export default Navbar