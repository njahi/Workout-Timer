import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(formatTime(newDate()));
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
  return (
    <main>
      <h1>WorkOut Timer</h1>
      <time>For your workout on {time}</time>
    </main>
  );
}

export default App;
