import { useState, useEffect } from "react";

function RunningExercise({ name }) {
  const [isRunning, setIsRunning] = useState(false);
  const [lapTime, setLapTime] = useState(0);//time for current lap
  const [laps, setLaps] = useState([]);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setLapTime((prev) => prev + 1);
      }, 1000);
      setTimerInterval(interval);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, lapTime]);
    setLapTime(0); // Reset lap timer
  };

  const handleReset = () => {
    setIsRunning(false);
    setLapTime(0);
    setLaps([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <p>Lap Time: {formatTime(lapTime)}</p>

      <div id='repetition-button-container'>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Record"}
        </button>
        <button onClick={handleLap} disabled={!isRunning}>
          Lap
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <h3>Lap Times:</h3>
      <div>
        {laps.map((lap, index) => (
          <p key={index}>
            Lap {index + 1}: {formatTime(lap)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default RunningExercise;
