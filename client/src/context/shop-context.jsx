import React, {useEffect, useState, createContext} from 'react';

import { getNumOfProducts, getProducts } from './context-api';
import axios from "axios"


// let AllProducts = ProductModel.find({})
// let numOfProducts = AllProducts.countDocuments({})

export const ShopContext = createContext(null)





export const ShopContextProvider = ( props)=>{

 
  const [numOfProducts, setNumOfProducts] = useState(0);
  const [allProducts, setAllProducts] = useState([])

  const getDefaultCart = ()=>{

    setNumOfProducts(getNumOfProducts)
    setAllProducts(getProducts)
     
   //i<PRODUCTS.length +1
     let cart  ={};
     for(let i = 1; i<numOfProducts+1 ; i++){
   
       cart[i] = 0
     }
   
     return cart
     
   }
 
  
   const [cartItems, setCartItems] = useState(getDefaultCart);
  
  //api call to get numOfProucts + ALlproudcts 
// const getNumOfProducts = async()=>{

//   try {
//     const response = await axios.get("http://localhost:5005/products/products-count")
//     setNumOfProducts(response.data.numOfProducts)

//   } catch (error) {
//     console.error(error)
//   }
//   // const response = await ProductModel.countDocuments({})
  
// }



  const addToCart  = (itemID) =>{

    setCartItems((prev) =>    {
    return {...prev, [itemID] : prev[itemID] + 1}})

  }

  const removeFromCart  = (itemID) =>{

    setCartItems((prev) =>    (
        {...prev, [itemID] : prev[itemID] - 1}))

  }

  const updateCartItemCount = (newAmount, itemID) =>{

    setCartItems(prev => 
      ({...prev, [itemID]: newAmount}))
  }

 

  //au getTTl
  const getTotalCartAmount= () =>{

    let totalAmount = 0
    
    for(const item in cartItems){

      if(cartItems[item] > 0 ) {

        //itemInfo to access itemPrice 
        let itemInfo = allProducts.find(product => (product.id === Number(item)))

        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }
  const contextValue = {
    cartItems,
    addToCart,
   updateCartItemCount,
    removeFromCart,
    getTotalCartAmount
  };

  return( <ShopContext.Provider value={contextValue}>
       {props.children}
  </ShopContext.Provider>)
}
