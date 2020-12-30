import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../../Components/Atoms/H1/H1';
import MainTemplate from '../../theme/MainTemplate';
import koszulka from '../../images/koszulk1.jpg'

const Div = styled.div`
  border: 1px solid black;
  background-color: #eee;
  width: 90%;
  display: block;
  margin: 50px auto 0 auto;
`

const Button = styled.button`
  margin: 5%;
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

const P = styled.p`
  width: 95%;
  margin: auto;
  display: block;
`

const Img = styled.img`
  width: 100%;
`

const ProductDetails = () => {
  const history = useHistory();
  const redirect = () => history.push('/products')
  return (
    <MainTemplate>
      <Div>
        <H1>Koszulka Szpadel Grzyb</H1>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block</P>
        <Img src={koszulka} />
        <Button onClick={redirect}>Cofnij</Button>
      </Div>
    </MainTemplate>
  )
}

export default ProductDetails