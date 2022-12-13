import React, { createContext, useState } from 'react'
import { DATA } from '../components/productsdata'

export const ShopContext = createContext ()

const getDefaultCart = () => {
    let cart = {};

    for(let i = 1; i < DATA.length + 1; i++){
        cart [i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
 
    const[cartItems, setcartItems] = useState({}) ;
    
    const addToCart = (itemId) => {
        setcartItems((prev)=>({...prev,[itemId] : prev[itemId +1 ]}))
    };

    const removeToCart = (itemId) => {
        setcartItems((prev)=>({...prev,[itemId] : prev[itemId -1  ]}))
    };

    const contextValue = {cartItems, addToCart, removeToCart}
     
    return (
    <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
  )
}
