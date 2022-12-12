import React from 'react'
import Image from 'next/image'

const Products = (props) => {
    const{id, productName, price, productImage} = props.data
  return (
    <div>
       <div className=' border-2 w-fit mb-4'>
             <h1> {productName} </h1>
             <Image src={productImage}/>
             <h1> {price} </h1>
        </div> 

        <button className='bg-blue-300'>  Add to cart </button>

    </div>
  )
}

export default Products