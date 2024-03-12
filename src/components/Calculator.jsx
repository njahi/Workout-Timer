/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect, useState } from "react";
function Calculator({ workouts }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = useState(0);
  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;
  useEffect(
    function () {
      setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
    },
    [number, sets, speed, durationBreak]
  );
  useEffect(function () {
    const playSound = function () {};
  });
  function handleInc() {
    setDuration((duration) => Math.floor(duration) + 1);
  }
  function handleDecr() {
    setDuration((duration) => (duration > 1 ? Math.floor(duration) - 1 : 0));
  }
  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select>
            {workouts.map((workout) => (
              <option
                value={workout.numExercises}
                key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type='range'
            min='1'
            max='5'
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type='range'
            min='30'
            max='180'
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break Length</label>
          <input
            type='range'
            min='1'
            max='10'
            value={durationBreak}
            onChange={(e) => setDurationBreak(e.target.value)}
          />
          <span>{durationBreak} mins/break</span>
        </div>
      </form>
      <section>
        <button onClick={handleDecr}>-</button>
        <p>
          {mins < 10 && "0"}
          {mins} : {seconds < 10 && "0"}
          {seconds}
        </p>

        <button onClick={handleInc}>+</button>
      </section>
    </>
  );
}
export default memo(Calculator);
