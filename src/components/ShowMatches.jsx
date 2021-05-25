import React from "react";

// A component displaying the number of all matches
function ShowMatches(props) {

  let totalMatchesString = ""
  
  if (props.matches.totalMatches < 10) {
    totalMatchesString = "🔥".repeat(props.matches.totalMatches)
  } else {
    totalMatchesString = `🔥 x ${props.matches.totalMatches}`
  }
 

  return (
    <div>
      <h3>Your opponent has got {props.matches.aiMatches} 🔥</h3>

      <h3>Total matches available:</h3>
      <p style={{"fontSize": 40}}>{totalMatchesString}</p>

      <h3>You've got {props.matches.playerMatches} 🔥</h3>
    </div>
  )
}

export default ShowMatches;