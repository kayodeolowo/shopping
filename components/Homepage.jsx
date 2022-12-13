import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'



const Homepage = ({children}) => {
  return (
    <div>
        <Navbar/>
            {children}
           
           
        <Footer/>
    </div>
  )
}

export default Homepage