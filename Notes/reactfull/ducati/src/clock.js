// import React, { useState } from 'react';
// import {usestate} from 'react';

// const Clock = () => {
//     const [count,setcount] = useState(0);
//     const increment = () =>{
//         setcount(count+1);
//     }
//     const decrement = () =>{
//         setcount(count-1);
//     }
//   return (
//     <div>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <h1>Count = {count}</h1>
//     </div>
//   )
// }

// export default Clock;

// import React, { useState } from 'react';

// function UseEffectComponent() {
//     const [start, updates] = useState(0);
//     return (
//         <div>
//             <h1>Count = {start}</h1>
//             <button onClick={() => updates(start + 1)}>+</button>
//             <button onClick={() => updates(start - 1)}>-</button>
//         </div>
//     );
// }

// export default UseEffectComponent;

// import React, { useState,useEffect } from 'react'

// const Clock = () => {
//     var [count,setCount]= useState(0)
//     useEffect(()=>{console.log("The start value has changed: ",count)},[count])
    
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   )
// }

// export default Clock;

   
