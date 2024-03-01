/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect, useState } from "react";
function Calculator({ workouts }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = usestate(0);
  useEffect(function () {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
  });
  return (
    <>
      <form></form>
    </>
  );
}
export default memo(Calculator);
