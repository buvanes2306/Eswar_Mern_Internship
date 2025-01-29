import React, { useState } from 'react';
function Form1(){
    const [name,uname] = useState('');
    function handlechange(event){
        uname(event.target.value);
    }
    return(
        <div>
            <form>
                <label>name </label>
                <input type = "text" value={name} onChange={handlechange}></input>
                <h1>ur name is : {name}</h1>
            </form>

        </div>
    )
}

export default Form1;

// import './s1.css'
// import React from 'react';
// function Validation(){
//     const validate = () =>{
//         var cp = 'buvanes@#02'
//         var p = document.getElementById("pas").value
//         if(p == cp ){
//             alert("password is correct")
//         }else{
//             alert("password is incorrect")
//         }
//     }
//     return (
//         <div>
//             <label>password :</label>
//             <input type='password' id='pas' placeholder='Enter the password'/>
//             <button onClick={validate}>Submit</button>
//         </div>
//     )
// }
// export default Validation;