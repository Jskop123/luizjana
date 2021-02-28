import React from 'react'
import styled from 'styled-components';
import { FooterLogoImg } from '../../Atoms/LogoImg/LogoImg'
import Social from '../../Molecules/Social/Social'

const Div = styled.div`
  text-align: center;
  width: 60%;
  display: block;
  margin: 10% auto 5% auto;
  color: #ddd;
`
const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -65px;
`
const H1 = styled.h1`
  
`
const H6 = styled.h6`
  
`
const Span = styled.span`
  font-weight: 800;
  color: white;
`
const P = styled.p`
  width: 90%;
  display: block;
  margin: auto;
`
const Border = styled.div`
  margin: 5% 0;
  border-top: 1px solid #ddd;
`

const Footer = () => (
  <Div>
    <FooterLogoImg />
    <H1>FR</H1>
    <P>2020 Warsaw Poland X Luizjana trails</P>
    <Border />
    <H1>Luizjana trails</H1>
    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</P>
    <Border />
    <H1>Socials</H1>
    <FooterSocial><Social /></FooterSocial>
    <H6>Developed by <Span>Jakub Skop</Span>, design by <Span>Luizjana Trails</Span> crew</H6>
  </Div>
)

export default Footer

