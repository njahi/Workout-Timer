/* eslint-disable react/prop-types */
function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className='btn-sound'
      onClick={() => setAllowSound((allow) => !allow)}></button>
  );
}

export default ToggleSounds;
