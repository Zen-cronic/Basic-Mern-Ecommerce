import React, { useContext } from 'react';
import { ShopContext } from "../../context/shop-context";


export const Product = (props)=> {

  const { productName, price} = props.data //data is the property
  const {addToCart, cartItems} = useContext(ShopContext)
  const id = props.data._id
  const cartItemCount = cartItems[id]   //the valu of the property name

// export function Product({data}) {

//   // const id = data.id
//   // const productName = data.productName
//   // const productImage = data.productImage
//   // const price= data.price

//   const {id, productName, price, productImage} = {...data}

return (
  <div className="product">
    {/* <img src={productImage} /> */}
    <div className="description">
      <p>
        <b>{productName}</b>
      </p>
      <p> ${price}</p>
    </div>
    <button className="addToCartBttn" onClick={() => addToCart(id)}>
      Add To Cart {cartItemCount > 0 && <> ({cartItemCount}) </>}
    </button>
  </div>
);
}

//mi error: no spc btn <> and ({cartItemCount})

{/* <div>
<div className="product">
<img src={productImage} />
<div className="description">
 <p>
   <b>{productName}</b>
 </p>
 <p> ${price}</p>
</div>
</div>
<button className="addToCartBttn" 
   onClick={()=> addToCart(id)}> 
   Add to cart {cartItemCount>0 && <> ({cartItemCount})</>} 
   </button>
</div> */}


{/* // export default function Product({data}) 

//   let props
//   const {id, productName, price, productImage} = data.product
//   return (
//     <div>
//       {productName} {id} {price}
//     </div>
//   )
  
//  */}