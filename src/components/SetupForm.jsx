import React from "react"
import Button from '@material-ui/core/Button';


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
      <Button 
        variant="contained" 
        color="primary"
        id="aiButton" 
        onClick={() => props.startGame(false)}
      >
        AI
      </Button>
      <Button 
        variant="contained" 
        color="primary"
        id="playerButton" 
        onClick={() => props.startGame(true)}
      >
        You
      </Button><br />
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