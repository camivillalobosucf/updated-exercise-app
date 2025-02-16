import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise/index.jsx";
import DurationExercise from "./components/DurationExercise/index.jsx";
import "./style.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseType, setExerciseType] = useState(null);

  //defining the list of exercises
  const exercises = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Squats", type: "repetition" },
    { name: "Jump Rope", type: "duration" },
    { name: "Plank", type: "duration" },
  ];

  return (
    <div id="app-container">
      <h1>Exercise Tracker</h1>

      {/*menu of Exercises */}
      {!selectedExercise && (
        <div id='exercise-container'>
          <h2>Select an Exercise:</h2>
          {exercises.map((exercise, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedExercise(exercise.name);
                setExerciseType(exercise.type);
              }}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      )}

      {/*showcase the correct screen based on exercise type*/}
      {exerciseType === "repetition" && <RepetitionExercise name={selectedExercise} />}
      {exerciseType === "duration" && <DurationExercise name={selectedExercise} />}

      {/*back to menu button */}
      {selectedExercise && (
        <button onClick={() => {
          setSelectedExercise(null);
          setExerciseType(null);
        }}>
          Go Back
        </button>
      )}

    </div>
  );
}

export default App;
