import { useState } from "react";

/* eslint-disable react/prop-types */
function ToggleSounds() {
  const [allowSound, setAllowSound] = useState(true);
  return (
    <button
      className='btn-sound'
      onClick={() => setAllowSound((allow) => !allow)}>
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default ToggleSounds;
