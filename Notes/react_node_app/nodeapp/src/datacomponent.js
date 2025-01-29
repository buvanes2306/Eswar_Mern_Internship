import React,{useEffect, useState} from 'react';
import axios from 'axios';//make sure axios is install
import { response } from 'express';

const DataComponent = () => {
    const [message,setmessage]=useState("Hello this is  a state message")
  return (
    <div>
      <h1>Data from the states</h1>
      <h4>{message}</h4>
    </div>
  )
}



// const DataComponent=()=>{
//     const[data,setData]=useState('');
//     useEffect(()=>{
//         axios.get('http://localhost:3000/api/data').then(response=>
//             setData(response.data.message))
//             .catch(error=>console.error('Error fetching data:',error));
//     },[]);
//     return(
//         <div>
//             <h1>data from server</h1>
//             <p>{data}</p>
//         </div>
//     );
// };
// export default DataComponent; 


