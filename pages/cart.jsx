import React, { useContext } from 'react'
import { DATA } from '../components/productsdata'
import ShowCart from '../components/ShowCart'
import { ShopContext } from '../context/shopcontext'



const cart = () => {
     const { cartItems } = useContext(ShopContext);
  return (
    <div>
        <div> 
            <h1> your cart list </h1>
        </div>

        <div> 
            {DATA.map((product)=> {
                if (cartItems[product.id] !==0){
                    return <ShowCart data={product} /> 
                }
            })}
        </div>
    </div>
  )
}

export default cart