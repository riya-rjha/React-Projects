import React from 'react'

const Buttons = ({ handlePause, handleReset, handleStop }) => {
  return (
    <div id='signs'>
      <img src="Images/reset.png" id="resetBTN" onClick={handleReset}></img>
      <img src="Images/start.png" id="startBTN" onClick={handlePause}></img>
      <img src="Images/stop.png" id="stopBTN" onClick={handleStop}></img>
    </div>
  )
}

export default Buttons