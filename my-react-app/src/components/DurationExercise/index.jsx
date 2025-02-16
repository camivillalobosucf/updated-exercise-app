import { useState, useEffect } from "react";

function DurationExercise({ name }) {
  //state to track time passes in seconds
  const [time, setTime] = useState(0);
  //to determine if time ins running
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      //start timerr
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      //stop timer
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  //formatting time mm:ss
  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <p>Time: {formatTime(time)}</p>
      <div id='duration-button-container'>
        {/*buttons to start stop or reset*/}
        <button onClick={() => setRunning(true)} disabled={running}>Start</button>
        <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
        <button onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
      </div>

    </div>
  );
}

export default DurationExercise;
