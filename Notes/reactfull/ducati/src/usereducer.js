// model
// import './App.css';
// import React, { useState, useReducer } from 'react';
// function reducerfunction(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'decrement':
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// }

// export const UseReduce = () => {
//     const [count, setcount] = useState(0);
//     const [state, dispatch] = useReducer(reducerfunction, { count: 69 });
//     function increment() {
//         dispatch({ type: 'increment' });
//     }
//     function decrement() {
//         dispatch({ type: 'decrement' });
//     }
//     console.log(state);
//     return (
//         <div>
//             <h1>Count = {state.count}</h1>
//             <button onClick={increment}> + </button>
//             <button onClick={decrement}> - </button>
//         </div>
//     );
// };

import React, { useReducer } from 'react';

const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    ADDTEN: 'addten',
};

function reducer(state, action) {
    switch (action.type) {
        case ACTION.INCREMENT:
            return { count: state.count + 1 };
        case ACTION.DECREMENT:
            return { count: state.count - 1 };
        case ACTION.ADDTEN:
            return { count: state.count + 10 };
        default:
            return state;
    }
}

export const UseReduce = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    function increment() {
        dispatch({ type: ACTION.INCREMENT });
    }
    function decrement() {
        dispatch({ type: ACTION.DECREMENT });
    }
    function addten(){
        dispatch({type: ACTION.ADDTEN});
    }
    console.log('The numberhas been changed to ',state.count);
    return (
        <div>
            <h1>Count = {state.count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={addten}>+10</button>
        </div>
    );
};