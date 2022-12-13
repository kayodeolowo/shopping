import React, { useContext } from 'react'
import Image from 'next/image'
import { ShopContext } from '../context/shopcontext'


const Products = (props) => {
    const{id, productName, price, productImage} = props.data
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

  return (
    <div>
       <div className=' border-2 w-fit mb-4'>
             <h1> {productName} </h1>
             <Image src={productImage}/>
             <h1> {price} </h1>
        </div> 

        <button className='bg-blue-300 flex' onClick={()=>addToCart(id)}>  Ad to cart
         {cartItemAmount > 0 &&    <p> ({cartItemAmount}) </p>} </button>

    </div>
  )
}

export default Products