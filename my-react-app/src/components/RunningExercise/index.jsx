import { useState, useEffect } from "react";

function RunningExercise({ name }) {
  //state for timer (lap time) and laps history
  const [isRunning, setIsRunning] = useState(false);
  const [lapTime, setLapTime] = useState(0);
  const [laps, setLaps] = useState([]);

  //useEffect handles starting/stopping the timer
  useEffect(() => {
    if (!isRunning) return; //if not running, exit

    const interval = setInterval(() => setLapTime((prev) => prev + 1), 1000);

    //cleanup interval on stop/unmount
    return () => clearInterval(interval);
  }, [isRunning]);

  // frmat time as mm:ss
  const formatTime = (seconds) =>
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  //record current lap time & reset lap timer
  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, lapTime]);
    setLapTime(0);
  };

  //reset everything to initial state
  const handleReset = () => {
    setIsRunning(false);
    setLapTime(0);
    setLaps([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <p>Lap Time: {formatTime(lapTime)}</p>

      {/*controls record/Stopl, lap and teset*/}
      <div id="repetition-button-container">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Record"}
        </button>
        <button onClick={handleLap} disabled={!isRunning}>
          Lap
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {/*list of recorded lap times */}
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
