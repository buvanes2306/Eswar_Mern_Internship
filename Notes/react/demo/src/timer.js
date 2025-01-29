import { useEffect, useState } from "react";

function TimerComponent(){
    const [seconds, setSconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setSconds(prevSconds => prevSconds + 1);
        },500);
        return () => clearInterval(interval);
    },[]);

    return(
        <div>
            <h2>Timer:</h2>
            <p>{seconds} seconds are passing.</p>
        </div>
    )
}
export default TimerComponent    