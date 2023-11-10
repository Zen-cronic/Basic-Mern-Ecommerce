import React, {useState, useEffect} from 'react';
import "./shop.css";

import { Product } from "./product";
import { getProducts } from '../../context/context-api';

//to iterate thru each prodcut
import { ProductModel } from '../../../../server/src/models/Products';



export const Shop = ()=> {

  // let allProducts = ProductModel.find({})

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {

    //or anon function (async()=> {})
    const fetchProducts = async()=> {

      const products = await getProducts()
     setAllProducts(products)
    }
    
    fetchProducts()
  }, []);
  // setAllProducts(getProducts)
  return (

    <div className="shop">
    <div className="shopTitle">
      <h1>PedroTech Shop</h1>
    </div>

    <div className="products">
    
      
        {allProducts.map( product => (

            <Product data={product}/>
        ))}
        
    </div>
    </div>

      );
}
