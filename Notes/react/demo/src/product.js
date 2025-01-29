import React from 'react'

const Products = (props) => {

const addLaptop=()=>{
    props.addProductToCart("laptop");
}
const addSmartPhone=()=>{
    props.addProductToCart("SmartPhone");
}

const addHeadPhone=()=>{
    props.addProductToCart("Headphone");
}



  return (
    <div>
      <h1>Product list</h1>
      <ul>
        <li>Laptop <span><button onClick={addLaptop}>add to cart</button></span></li>
        <li>Smart phone<span><button onClick={addSmartPhone}>add to cart</button></span></li>
        <li>Headphone <span><button onClick={addHeadPhone}>add to cart</button></span></li>
      </ul>
    </div>
  )
}

export default Products;