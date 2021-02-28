import React, {useState, useEffect, useReducer} from 'react'
import styled from 'styled-components';
import MainTemplate from '../../theme/MainTemplate'
import getData from '../../tools/getData'
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Atoms/Button/Button'
import ProductCard from '../../Components/Molecules/ProductCard/ProductCard'

const Background = styled.div`  
  width: 80vw;
  display: block;
  margin: auto;
  padding-bottom: 10%;
  padding-top: 10%;
  background-color: #eee;
`

const Div = styled.div`
  border: 1px solid black;
  background-color: #eee;
  width: 80%;
  display: block;
  margin: 50px auto 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const P = styled.p`
  width: 95%;
  margin: auto;
  display: block;
`

const Img = styled.img`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const cartURL = 'http://127.0.0.1:8000/api/cart/'
const orderURL = 'http://127.0.0.1:8000/api/order/'

const ProductList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => getData(cartURL).then(data => setData(data))
    fetchData()
  }, [])  
  const productList = data.map(({id, title, price}) => (
      <ProductCard 
        key={id}
        title = {title}
        price = {price}
        id = {id}
      />
  ))
  return <>{productList}</>
}



const Order = () => {
  const history = useHistory()
  const redirect = () => history.push('/orderdone')

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => getData(orderURL).then(data => setData(data))
    fetchData()
  }, [])  

  const [name, setName] = useState("")

  const addToOrder = event => {
    event.preventDefault()
    redirect()
    const postData = {
      name: event.target[0].value,
      address: event.target[2].value,
      delivery: "wawa",
      ordered_products: data
    }
  
    fetch('http://127.0.0.1:8000/api/order/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
  }
  
  const OrderView = () => (
    <MainTemplate>
      <Background>
        <Div>
          <h1>Order</h1>
          <ProductList />
          <form onSubmit={addToOrder}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="surname" placeholder="Surname" />
            <input type="text" name="mail" placeholder="Email" />
            <input type="text" name="phone" placeholder="Phone number" />
            <input type="submit" value="Wyślij zamówienie" />
          </form>
        </Div>
      </Background>
    </MainTemplate>
  )
  return <OrderView />
}

export default Order