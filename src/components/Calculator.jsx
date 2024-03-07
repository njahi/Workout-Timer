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
  function handleInc() {
    setDuration((duration) => Math.floor(duration) + 1);
  }
  function handleDecr() {
    setDuration((duration) => (duration > 1 ? Math.floor(duration) - 1 : 0));
  }
  return (
    <>
      <form></form>
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
