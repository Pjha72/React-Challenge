import React, {useState} from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(5);
    const handleCount = () => {
        setCount(count+1);
    };

    const handleTimer = () => {
        window.myTime = setInterval(() => {
            setTimer((timer)=>{
                if(timer === 0){
                    return 0;
                }
                return timer-1;
            });
        }, 1000);
    };

    return (
        <div>
            <h2> No of clicks until timer is expires </h2>
            <div>
                <p>{count}</p>
                <p>Time Left : <span >{timer%60} seconds</span></p>
                <button onClick={handleTimer}>Start Timer</button>
                {timer === 0 ? null : <button onClick={handleCount}>+</button>}
            </div>
        </div>
    )
}
export default Count;