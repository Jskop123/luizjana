import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import MainTemplate from '../../theme/MainTemplate'
import getData from '../../tools/getData'

const URL = `http://shapesshop.pythonanywhere.com/api/${'home'}`

const MainText = styled.h1`
  font-size: 25vh;
  font-weight: 800;
  position: absolute;
  bottom: 25px;
  left: 50px;
  color: #FFF250;
  opacity: .8;
  text-shadow: 5px 5px 2px rgba(150, 150, 150, 0.74);
  @media (max-width: 768px) {
    font-size: 20vh;
    left: 0;
    bottom: 0;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`
const Img = styled.img`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
`
const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
`
const Home = () => {  
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      getData(URL).then(data => setData(data[0]))
      setIsLoading(false)
    }
    fetchData()
  },[])  
  return (
  <MainTemplate>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <HomePage>
        <Img className={styled.image} src={(data) ? (data.image) : ('')} alt="background" />
        <MainText>{(data) ? (data.title) : ('SHAPE')}</MainText>
      </HomePage>
    )}
  </MainTemplate>
)}

export default Home

