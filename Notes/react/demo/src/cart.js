import React, {useState} from 'react';
import Product from './Products';

function Cart() {

    const [product,addProduct]=useState([]);
    const addProductToCart=(productName)=>{
        addProduct((prevProducts) => [...prevProducts, productName]);
    }


  return (
    <div>
      
        <h1>Shopping Cart</h1>
        <ul>
    {product.map((product, index) => (
        <li key={index}>{product}</li>
    ))}
</ul>
        <Product addProductToCart={addProductToCart} />


    </div>
  )
}

export default Cart;