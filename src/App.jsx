import { useState, useEffect } from "react";
import ToggleSounds from "./components/ToggleSounds";

function App() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));
  function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }
  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);
  const partOfDay = time.slice(-2);
  const workouts = [
    {
      name: "Full-body workout",
      numExercises: partOfDay === "AM" ? 9 : 8,
    },
    {
      name: "Arms + Legs",
      numExercises: 6,
    },
    {
      name: "Arms only",
      numExercises: 3,
    },
    {
      name: "Legs only",
      numExercises: 4,
    },
    {
      name: "Core only",
      numExercises: partOfDay === "AM" ? 5 : 4,
    },
  ];
  return (
    <main>
      <h1>WorkOut Timer</h1>
      <time>For your workout on {time}</time>
      <ToggleSounds
        allowSound={allowSound}
        setAllowSound={setAllowSound}
      />
    </main>
  );
}

export default App;
