import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MainTemplate from '../../theme/MainTemplate'
import getData from '../../tools/getData'
import Button from '../../Components/Atoms/Button/Button'

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
const Background = styled.div`  
  width: 80vw;
  display: block;
  margin: auto;
  padding-bottom: 10%;
  padding-top: 10%;
`

const URL = 'http://127.0.0.1:8000/api/cart/'

const CartGallery = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => getData(URL).then(data => setData(data))
    fetchData()
  }, [])  

  const deleteFromCart = ({id}) => {
    fetch(URL + id, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      },
    })
    .then(() => setData(data.filter(d => d.id !== id)));
  }
 
  const productCart = data.map(({id, title, description, price, image}) => (
      <Div id={id} key={id}>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <img src={image} alt={title} />
        <div>
          <button onClick={() => deleteFromCart({id})}>X</button>
        </div>
      </Div>
    )
  )
  return <>{productCart}</>
}

const ToOrder = () => {
  const history = useHistory()
  const redirect = () => history.push('/order')
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => getData(URL).then(data => setData(data))
    fetchData()
  }, [])  
  const postToOrder = () => {
    redirect()
    console.log(data)
    fetch('http://127.0.0.1:8000/api/order/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data),
    })
    .then(response => response.json())
  }
  return (
    <button onClick={postToOrder}>Złóż zamówienie</button>
  )
}
  
const Cart = () => (
  <MainTemplate>
    <Background>
      <Div>
        <h1>Cart</h1>
        <CartGallery />
        <ToOrder />
      </Div>
    </Background>
  </MainTemplate>
)

export default Cart