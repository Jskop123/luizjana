import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
import MainTemplate from '../../theme/MainTemplate'
import ProductGallery from '../../Components/Organisms/ProductGallery/ProductGallery'

const Background = styled.div`  
  width: 80vw;
  display: block;
  margin: auto;
  padding-bottom: 10%;
  padding-top: 10%;
`
const Cart = styled.div`
  background-color: #321;
  position: fixed;
  top: 100px;
  right: 50px;
  color: #eee;
  font-size: 3em;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 2em;
    padding: 7.5px 10px;
    border-radius: 50%;
    top: 55px;
    right: 30px;
    opacity: .8;
  }
`
const ProductsNumbers = styled.div`
  font-family: 'Lato', sans-serif;
  width: 20px;
  height: 20px;
  font-size: 15px;
  border-radius: 50%;
  color: black;
  background-color: #FFF250;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(50%);
`

const Products = () => {
  const [count, setCount] = useState(0);
  const addToCart = () => setCount(count + 1)
  const history = useHistory()
  const redirect = () => {
    console.log(history.location.pathname)
    history.push(history.location.pathname + '/id')
  }
  return (
    <MainTemplate>
      <Background>
        <Cart>
          <FaShoppingCart />
          <ProductsNumbers>{count}</ProductsNumbers>
        </Cart>
        <ProductGallery openDetails={redirect} addToCart={addToCart} />
      </Background>
    </MainTemplate>
  )
}

export default Products