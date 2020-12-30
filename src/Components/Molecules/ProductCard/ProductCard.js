import React from 'react'
import styled from 'styled-components';


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
const Button = styled.button`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  padding: 10px 15px;
  background-color: ${({ primary }) => primary ? "red" : "#FFF250"  };
  color: ${({ primary }) => primary ? "#eee" : "000"  };
  border: none;
  font-size: 1.2em;
  border-radius: 10px;
  box-shadow: 0px 8px 2px 0px rgba(0,0,0,0.75);
  transition: .3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 2px 0px rgba(0,0,0,0.75);
    transform: translateY(4px);
    opacity: .8;
  }
`

const ProductCard = ({addToCart, openDetails, koszulka}) => (
  <ProductTab>
    <Img src={koszulka} alt="koszulka"/>
    <ProductInfo>
      <H1>Koszulka szpadel grzyb</H1>
      <P>80.00 zł</P>
      <Buttons>
        <Button onClick={openDetails}>Open</Button>
        <Button primary onClick={addToCart}>AddToCart</Button>
      </Buttons>
    </ProductInfo>
  </ProductTab>
)

export default ProductCard