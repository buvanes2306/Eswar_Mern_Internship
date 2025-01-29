import React from "react";

const EventHandler = () => {
    const [message, setmessage] = React.useState("Click the button to see the messege");
    const handleclick1 = () => {
        setmessage("Hello , you clicked the button");
    };
    const handleclick2 = () => {
        setmessage("Hello , you clicked the second button");
    };
    return (
        <div>
            <h1>Event Handler</h1>
            <button onClick={handleclick1}>Click me</button>
            <button onClick={handleclick2}>Click me</button>
            <p>{message}</p>
        </div>
    );
}
export default EventHandler;
