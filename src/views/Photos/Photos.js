import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainTemplate from '../../theme/MainTemplate'
import PhotoCard from '../../Components/Molecules/PhotoCard/PhotoCard'
import getData from '../../tools/getData'

const URL = `https://restapishapes.herokuapp.com/api/${'photos'}`

const Background = styled.div`
  background-color: #ccc;
  width: 80vw;
  display: block;
  margin: auto;
  padding-bottom: 10%;
`
const Photos = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      getData(URL).then(data => setData(data))
      setIsLoading(false)
    }
    fetchData()
  },[])

  const photocards = data.map(({id, image, title, description}) => (
    <PhotoCard 
      image = {image}
      title = {title}
      description = {description}
      key = {id}
    />
  ))

  return (
  <MainTemplate>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <Background>
        {photocards}
      </Background>
    )}
  </MainTemplate>
  )
}

export default Photos