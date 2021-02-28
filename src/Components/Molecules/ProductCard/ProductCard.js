import React from 'react'
import styled from 'styled-components';
import Button from '../../Atoms/Button/Button'

const ProductTab = styled.div`
  background-color: #ccc;
  width: 30%;
  margin: 3% 0;
  border-radius: 1px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`
const ProductInfo = styled.div`
  background-color: #eee;
  padding-bottom: 5%;
`
const Img = styled.img`
  width: 100%;
`
const P = styled.p`
  padding: 2% 5%;
  font-size: 1.4em;
  font-family: 'Lato', sans-serif;
`
const H1 = styled.h1`
  padding: 2% 5%;
  color: #000;
  margin: auto;
`
const Buttons = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`


const ProductCard = ({openDetails, addToCart, id, title, description, price, image}) => (
  <ProductTab>
    <Img src={image} alt="koszulka"/>
    <ProductInfo>
      <H1>{title}</H1>
      <P>{description}</P>
      <P>{price} zł</P>
      <Buttons>
        <Button click={openDetails} id={id}>Open</Button>
      </Buttons>
    </ProductInfo>
  </ProductTab>
)

export default ProductCard