import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import shop from './Shop'

const Homepage = ({children}) => {
  return (
    <div>
        <Navbar/>
            {children}
            <shop/>
        <Footer/>
    </div>
  )
}

export default Homepage