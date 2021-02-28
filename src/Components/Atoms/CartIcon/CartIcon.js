import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
import getData from '../../../tools/getData';

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

const URL = 'http://127.0.0.1:8000/api/cart/'

const Count = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => getData(URL).then(data => setData(data))
    fetchData()
  }, [])
  return data.length
}

const CartIcon = () => {
  const history = useHistory()
  const redirect = () => history.push('/cart')
  return (
    <Cart onClick={redirect}>
      <FaShoppingCart />
      <ProductsNumbers>
        <Count />
      </ProductsNumbers>
    </Cart>
  )
}

export default CartIcon
