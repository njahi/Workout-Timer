/* eslint-disable react-refresh/only-export-components */
import { memo, useState } from "react";

/* eslint-disable react/prop-types */
function ToggleSounds() {
  return (
    <button
      className='btn-sound'
      onClick={() => setAllowSound((allow) => !allow)}>
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
