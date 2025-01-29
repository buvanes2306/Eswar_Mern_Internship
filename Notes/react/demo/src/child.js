import React, { useState } from 'react';
import { Grandmother } from './grandmother';

export const Childcomp = (props) => {
    const [child_msg, setChildMsg] = useState("hello from child");
    const [grandmaMsg, setGrandmaMsg] = useState('');

    const onChange3 = (message3, message4) => {
        setGrandmaMsg(message3);
        props.datafromchild(child_msg, message4);
    }

    const sendMsgToParent = () => {
        props.datafromchild(child_msg);
    }

    return (
        <div>
            <h1>Child component</h1>
            <h2>Data from parent: {props.msg}</h2>
            <h2>Data from grandmother: {grandmaMsg}</h2>
            <button onClick={sendMsgToParent}>Send to parent</button>
            <Grandmother msg={grandmaMsg} datafromgrandmother={onChange3} />
        </div>
    );
}

export default Childcomp;
