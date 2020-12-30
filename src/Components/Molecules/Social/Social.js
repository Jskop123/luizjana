import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagramSquare, FaEnvelopeSquare } from 'react-icons/fa';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
  margin: 0;
  height: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`
const Li = styled.li`
  font-size: 2em;
  color: #ddd;
  text-decoration: none;
  padding: 7px 5% 0 5%;
`
const A = styled.a`
  text-decoration: none;
  color: #ddd;
  &:hover {
    color: #fff;
  }
`

const Social = () => (
  <Ul>
    <Li>
      <A href="https://www.facebook.com/luizjana420" 
      target="_blanc">
      <FaFacebookSquare /></A>
    </Li>
    <Li>
      <A href="https://www.instagram.com/luizjana_trails/"
      target="_blanc">
      <FaInstagramSquare /></A>
    </Li>
    <Li>
      <A href="mailto:luizjanatrails@gmail.com"
      target="_blanc">
      <FaEnvelopeSquare /></A>
    </Li>
  </Ul>
)
export default Social;