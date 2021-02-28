import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import MainTemplate from '../../theme/MainTemplate'
import ProductGallery from '../../Components/Organisms/ProductGallery/ProductGallery'
import CartIcon from '../../Components/Atoms/CartIcon/CartIcon'

const Background = styled.div`  
  width: 80vw;
  display: block;
  margin: auto;
  padding-bottom: 10%;
  padding-top: 10%;
  background-color: #eee;
`

const Products = () => {
  const history = useHistory()
  const redirect = event => history.push(`${history.location.pathname}/${event.target.id}`)
  return (
    <MainTemplate>
      <Background>
        <CartIcon count={0} />
        <ProductGallery openDetails={redirect} />
      </Background>
    </MainTemplate>
  )
}

export default Products