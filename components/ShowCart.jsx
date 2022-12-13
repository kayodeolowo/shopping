import React, { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'

const ShowCart = (props) => {
    const{id, productName, price, productImage} = props.data
     const { cartItems } = useContext(ShopContext);
  return (
    <div>
        <div>
            <h1> {productName} </h1> 
            <h1> {price} </h1>  

            <div> 
                <button> add  </button>
                <input className='text-red-400' value={cartItems[id]} />
                <button> remove  </button>
            </div> 
        </div> 
    </div>
  )
}

export default ShowCart