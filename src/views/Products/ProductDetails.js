import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../../Components/Atoms/H1/H1';
import MainTemplate from '../../theme/MainTemplate';
import CartIcon from '../../Components/Atoms/CartIcon/CartIcon'
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

const ProductDetails = () => {
  const history = useHistory();
  const URL = `http://127.0.0.1:8000/api${history.location.pathname}`
  const redirect = () => history.push('/product')
  const toCart = () => history.push('/cart')
  const [data, setData] = useState([])
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  useEffect(() => {
    const fetchData = async () => getData(URL).then(data => setData(data))
    fetchData()
  }, [])

  const addtoCart = event => {
    event.preventDefault()
    toCart()
     
    const postData = {
      id: data.id,
      title: data.title,
      description: data.description,
      //image: data.image,
      price: data.price,
      size: data.size,
      color: data.color
    }
    fetch('http://127.0.0.1:8000/api/cart/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
  }
  
  const productDetails = (
    <>
      <CartIcon count={0} />
      <H1>{data.title}</H1>
      <P>{data.description}</P>
      <Img src={data.image} />
      <Button onClick={redirect}>Cofnij</Button>
      <form onSubmit={addtoCart} >
        <input 
          type="radio" 
          id="s"
          name="size"
          value="s"
          onClick={() => setSize('s')}
        />
        <label>S</label>
        <input 
          type="radio" 
          id="m"
          name="size"
          value="m"
          onClick={() => setSize('m')}
        />
        <label>M</label>
        <input 
          type="radio" 
          id="l"
          name="size"
          value="l"
          onClick={() => setSize('l')}
        />
        <label>L</label>
        <input 
          type="radio" 
          id="xl"
          name="size"
          value="xl"
          onClick={() => setSize('xl')}
        />
        <label>XL</label>
        <input 
          type="radio" 
          id="white"
          name="color"
          value="white"
          onClick={() => setColor('white')}
        />
        <label>White</label>
        <input 
          type="radio" 
          id="gray"
          name="color"
          value="gray"
          onClick={() => setColor('gray')}
        />
        <label>Gray</label>
        <input 
          type="radio" 
          id="black"
          name="color"
          value="black"
          onClick={() => setColor('black')}
        />
        <label>Black</label>
        <input type="submit" value="AddToCart" />
      </form>
    </>
  )

  return (
    <MainTemplate>
      <Div>
        {productDetails}
      </Div>
    </MainTemplate>
  )
}

export default ProductDetails