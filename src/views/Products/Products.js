import React from 'react'
import styled from 'styled-components';
import MainTemplate from '../../theme/MainTemplate'
import koszulk1 from '../../images/koszulk1.jpg'
import koszulk2 from '../../images/koszulk2.jpg'

/*const [data, setData] = useState({email: '', sent: false, err: ''})
const handleChange = (e) => {
  const {name, value} = e.target
    setData({
      ...data,
      [name]: value
  })
}
*/

const Background = styled.div`
  width: 80vw;
  display: block;
  margin: auto;
  padding-bottom: 10%;
  padding-top: 10%;
`
const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`
const ProductTab = styled.div`
  background-color: #ccc;
  width: 30%;
  margin: 3% 0;
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
const Button = styled.button`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  padding: 15px 20px;
  background-color: #FFF250;
  border: none;
  font-size: 1.2em;
  border-radius: 10px;
  display: block;
  margin: 2% auto;
  box-shadow: 0px 8px 2px 0px rgba(0,0,0,0.75);
  transition: .3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 2px 0px rgba(0,0,0,0.75);
    transform: translateY(4px);
    background-color: #eee;
  }
`

const Products = () => {
  return (
    <MainTemplate>
      <Background>
        <Gallery>
          <ProductTab>
            <Img src={koszulk1} alt="koszulka"/>
            <ProductInfo>
              <H1>Koszulka szpadel grzyb</H1>
              <P>80.00 zł</P>
              <Button>Add to cart</Button>
            </ProductInfo>
          </ProductTab>
          <ProductTab>
            <Img src={koszulk2} alt="koszulka"/>
            <ProductInfo>
              <H1>Koszulka szpadel grzyb</H1>
              <P>80.00 zł</P>
              <Button>Add to cart</Button>
            </ProductInfo>
          </ProductTab>
          <ProductTab>
            <Img src={koszulk1} alt="koszulka"/>
            <ProductInfo>
              <H1>Koszulka szpadel grzyb</H1>
              <P>80.00 zł</P>
              <Button>Add to cart</Button>
            </ProductInfo>
          </ProductTab>
          <ProductTab>
            <Img src={koszulk2} alt="koszulka"/>
            <ProductInfo>
              <H1>Koszulka szpadel grzyb</H1>
              <P>80.00 zł</P>
              <Button>Add to cart</Button>
            </ProductInfo>
          </ProductTab>
        </Gallery>
        <h1>Koszyk</h1>
      </Background>
    </MainTemplate>
  )
}

export default Products