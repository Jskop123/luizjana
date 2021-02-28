import React, {useState, useEffect} from 'react'
import MainTemplate from '../../theme/MainTemplate'
import getData from '../../tools/getData'
import H1 from '../../Components/Atoms/H1/H1'

const Order = () => {
  const URL = 'http://127.0.0.1:8000/api/order/'
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => getData(URL).then(data => setData(data[data.length-1]))
    fetchData()
  }, [])  
  
  return (
  <MainTemplate>    
    <H1>Thanks {data.name} for order</H1>
    <p>We sent an email with details</p>
  </MainTemplate>
)}

export default Order