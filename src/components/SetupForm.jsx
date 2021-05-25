import React from "react"


function SetupForm(props) {

  function matchesSliderHandler(event) {
    props.setMatches((prevProps) => {
      return {
        ...prevProps,
        totalMatches: event.target.value
      }
    })
  }

  return (
    <div>
      <h1>Choose who starts</h1>
      <button id="aiButton" onClick={() => props.startGame(false)}>AI</button>
      <button id="playerButton" onClick={() => props.startGame(true)}>You</button><br />
      <h3>Choose the number of matches</h3>
      <input 
      type="range" 
      id="matches" 
      name="matches" 
      min="1" 
      max="99" 
      value={props.matches.totalMatches}
      step="2"
      onChange={matchesSliderHandler}
      /><br />
      <label for="matches">{props.matches.totalMatches} matches</label>
    </div>
  )
}


export default SetupForm;