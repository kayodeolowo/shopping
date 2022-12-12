import React from 'react'
import { DATA } from './productsdata'
import Products from './Products'

const Shop = () => {
  return (
    <div>
      <h1 className='text-center'> my store preoducts </h1>

      <div> {DATA.map((product)=>(
        <Products data={product}/>
      ))} </div>
    </div>
  )
}

export default Shop