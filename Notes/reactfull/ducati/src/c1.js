import React from 'react';
import C2 from './c2';

export const C1 = (props) => {
    var message = "Hello from C1";
    return (
        <div>
            <h1>component c1 {props.msg}</h1>
            <C2 message={message} />
        </div>
    );
}
export default C1;