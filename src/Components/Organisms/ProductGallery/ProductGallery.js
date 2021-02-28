import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import ProductCard from '../../Molecules/ProductCard/ProductCard'
import getData from '../../../tools/getData'

const URL = `http://127.0.0.1:8000/api/products/`

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProductGallery = ({addToCart, openDetails}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      getData(URL).then(data => setData(data))
      setIsLoading(false)
    }
    fetchData()
  }, [])          

  const productCards = data.map(({id, title, description, price, image}) => (
      <Gallery>
        <ProductCard 
          key={id}
          title = {title}
          description = {description}
          price = {price}
          image = {image}
          openDetails = {openDetails}
          addToCart = {addToCart}
          id = {id}
        />
      </Gallery>
    )
  )
 
  return (
    <>
      {productCards}
    </>
  )
}

export default ProductGallery
