import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import MainTemplate from '../../theme/MainTemplate'
import getData from '../../tools/getData'

const URL = `https://restapishapes.herokuapp.com/api/${'home'}`

const MainText = styled.h1`
  font-size: 25vh;
  font-weight: 800;
  position: absolute;
  bottom: 25px;
  left: 50px;
  color: #FFF250;
  opacity: .8;
  text-shadow: 5px 5px 2px rgba(150, 150, 150, 0.74);
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
        <MainText>{(data) ? (data.title) : ('SHAPES')}</MainText>
      </HomePage>
    )}
  </MainTemplate>
)}

export default Home

