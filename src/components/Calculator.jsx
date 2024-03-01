/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo, useState } from "react";
function Calculator({ workouts }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [duration, setDuration] = useState(5);
  return (
    <>
      <form></form>
    </>
  );
}
export default memo(Calculator);
