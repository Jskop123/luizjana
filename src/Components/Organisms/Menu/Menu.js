import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  height: 50px;
  margin: 0;
  align-items: center;
  font-weight: 600;
  @media (max-width: 768px) {
    height: 75px;
    width: 100vw;
  }
`
const Li = styled.li`
  font-size: 1.8em;
  color: #ddd;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #fff;
  }
`
const activeClassName = 'nav-item-active';
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: #ddd;
  cursor: pointer;
  &.${activeClassName} {
    border-bottom: 2px solid #eee;
    font-weight: 600;
  }
`
const Menu = () => (
  <Ul>
    <Li>
      <StyledNavLink exact
        to="/"
        >Home
      </StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink 
        to="/photos"
      >Photos
      </StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink 
        to="/products"
      >Products
      </StyledNavLink>
    </Li>
  </Ul>
)
export default Menu;