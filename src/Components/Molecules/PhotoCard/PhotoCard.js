import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  object-fit: cover;
  display block;
  margin: auto;
  width: 50vw;
  height: 90vh;
  box-shadow: 1px 1px 10px 1px #000;
`
const Div = styled.div`
  padding: 80px 0 5%;
`
const P = styled.p`
padding-top: 1%;
  width: 60vw;
  margin: auto;
  color: #000;
`
const H1 = styled.h1`
  padding-top: 2%;
  width: 60vw;
  color: #000;
  margin: auto;
`

const PhotoCard = ({image, title, description}) => (
  <Div>
    <Img src={image} alt="riders" />
    <H1>{title}</H1>
    <P>{description}</P>
  </Div>
)

export default PhotoCard