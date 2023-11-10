import React, {useState, useEffect, useContext} from 'react';

import { CartItem } from "./cart-item";

import { ShopContext } from '../../context/shop-context';
import "./cart.css"
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../context/context-api';

export const Cart = ()=> {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext)   //NOT outside the fx
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {

    //or anon function (async()=> {})
    const fetchProducts = async()=> {

      const products = await getProducts()
     setAllProducts(products)
    }
    
    fetchProducts()
  }, []);

  return (
    <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {allProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

      {totalAmount > 0?  <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={()=> navigate("/")}> Continue Shopping </button>
          <button          > 
            Checkout{" "}
          </button>
        </div> 
        : <h1>    EMpyt cart</h1> }
       
        </div>
      );
}
