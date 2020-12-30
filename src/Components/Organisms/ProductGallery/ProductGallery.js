import React from 'react'
import styled from 'styled-components';
import ProductCard from '../../Molecules/ProductCard/ProductCard'
import koszulka from '../../../images/koszulk1.jpg'


const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProductGallery = ({addToCart, openDetails}) => (
  <Gallery>
    <ProductCard 
      addToCart={addToCart} 
      openDetails={openDetails}
      koszulka={koszulka} 
    />
    <ProductCard 
      addToCart={addToCart} 
      openDetails={openDetails}
      koszulka={koszulka} 
    />
    <ProductCard 
      addToCart={addToCart} 
      openDetails={openDetails}
      koszulka={koszulka} 
    />
    <ProductCard 
      addToCart={addToCart} 
      openDetails={openDetails}
      koszulka={koszulka} 
    />
  </Gallery>
)
export default ProductGallery