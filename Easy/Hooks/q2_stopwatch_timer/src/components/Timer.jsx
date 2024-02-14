import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  function startTimer() {
    console.log("Start Timer");
    window.myTime = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }
  function stopTimer() {
    console.log("Stop Timer");
    clearInterval(window.myTime);
  }
  function resetTimer() {
    console.log("Reset Timer");
    setTimer(0);
  }
  return (
    <div>
      <h1>Timer</h1>
      {/* Apply Condition */}
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>

      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
