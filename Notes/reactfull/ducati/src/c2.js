import React from 'react'
import C3 from './c3'


const C2 = (props) => {
  return (
    <div>
      <h1>C2</h1>
      <h1> {props.message}</h1>
      <C3 />
    </div>
  )
}

export default C2
