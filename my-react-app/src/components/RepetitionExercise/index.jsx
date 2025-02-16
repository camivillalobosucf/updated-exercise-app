import { useState } from "react";

//component to handle the repetition exercises
function RepetitionExercise({ name }) {
  //state to track the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>
      <div id='repetition-button-container'>
        {/*buttons to increase or reset*/}
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default RepetitionExercise;
