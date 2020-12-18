import React from 'react';
import Navbar from '../Components/Organisms/Navbar/Navbar';
import Footer from '../Components/Organisms/Footer/Footer';

const MainTemplate = ({children}) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default MainTemplate

