import React, { useState } from 'react';
import { Childcomp } from './child';
import { Grandmother } from './grandmother';

export const Parentcomp = () => {
    const [msg, setMsg] = useState("Hi from parent");
    const [childMsg, setChildMsg] = useState('');
    const [grandmaMsg, setGrandmaMsg] = useState('');

    const onChange = (message, message2) => {
        setChildMsg(message);
        setGrandmaMsg(message2);
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <h1>{msg}</h1>
            <h2>{childMsg}</h2>
            <h2>{grandmaMsg}</h2>
            <Childcomp msg={msg} datafromchild={onChange} />
        </div>
    );
}

export default Parentcomp;

