import React, { useState } from 'react'
import './App.css' // Corrected import path

const Count = () => {
    const[c,set] = useState(20)
    const[count,setCount] = useState(0)
    const increament = () =>{
        setCount(count+1);
        set(c-1)

    };
    const reset = ()=>{
        setCount(0)
        set(0)
    }
  return (
    <div>
        <h1>increase{count}</h1>
        <h1>decrese{c}</h1>
        <button onMouseOver={increament}>increament</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Count;