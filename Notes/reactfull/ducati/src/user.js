import { useContext } from "react";
import { ThemeContext } from "./App";
const User = () => {
    const contextValue = useContext(ThemeContext);
    console.log(contextValue.theme);
    return (
        <div style = {contextValue.style}>
        <h1>User</h1>
        </div>
    );
}
export default User;
/*import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../App'



export const User=({theme})=>{
    const contextValue=useContext(themeContext)
    console.log(contextValue)
    
  return (
    <div><h1>User</h1>
    <h1>{contextValue}</h1>
    </div>
  )
}*/ 