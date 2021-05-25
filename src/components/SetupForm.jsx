import React from "react"
import Button from '@material-ui/core/Button';


/**
 * A component that is first shown when the app is loaded. Gives user the ability
 * to choose the starting player and the number of matches in the game.
 */
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
      <h1 className="lowered">Choose who starts</h1>
      <Button
        size="large"
        variant="contained"
        color="primary"
        id="aiButton"
        onClick={() => props.startGame(false)}
      >
        AI
      </Button>
      <Button 
        size="large"
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
      />
      <br />
      <label for="matches">{props.matches.totalMatches} matches</label>
      <p className="description">
        The rules are as follows: there is an odd number of matches on the table.
        Players pick either one, two or three matches in turn. After all matches
        have been picked, the person with an even number of matches wins.
      </p>
    </div>
  )
}


export default SetupForm;