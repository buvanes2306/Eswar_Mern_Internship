/*import './App.css'; // Corrected import path

const CombiningTwoArray = () => {
    var array1 = [1, 2, 3, 4, 5];
    var array2 = [6, 7, 8, 9, 10];
    var array3 = array1.concat(array2);
    const combiner = () => {
        document.getElementById('demo').innerHTML = array3;
    }

    return (
        <div>
            <h1>Combining two arrays</h1>
            <p>Array 1: {array1.join(", ")}</p>
            <p>Array 2: {array2.join(", ")}</p>
            <button onClick={combiner}>Combine</button>
            <p id='demo'></p>
        </div>
    );
};

export default CombiningTwoArray;*/

import React, { useState } from 'react';
import './App.css'; // Corrected import path

const CombiningTwoArray = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    const [combinedArray, setCombinedArray] = useState([]);

    const combiner = () => {
        setCombinedArray(array1.concat(array2));
    }

    return (
        <div>
            <h1>Combining two arrays</h1>
            <p>Array 1: {array1.join(", ")}</p>
            <p>Array 2: {array2.join(", ")}</p>
            <button onClick={combiner}>Combine</button>
            <p id='demo'>{combinedArray.join(", ")}</p>
        </div>
    );
};

export default CombiningTwoArray;