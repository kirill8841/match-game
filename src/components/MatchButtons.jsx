import React from "react";
import Button from '@material-ui/core/Button';


function MatchButtons(props) {

  function onClickHandler(matchNumber) {
    props.setMatches((prevProps) => {
      return {
        ...prevProps,
        totalMatches: prevProps.totalMatches - matchNumber,
        playerMatches: prevProps.playerMatches + matchNumber
      }
    })
    props.setGameStage("aiTurn")
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => onClickHandler(1)}>1 Matches</Button>
      {
        props.totalMatches >= 2 &&
        <Button variant="contained" color="primary" onClick={() => onClickHandler(2)}>2 Matches</Button>
      }
      {
        props.totalMatches >= 3 &&
        <Button variant="contained" color="primary" onClick={() => onClickHandler(2)}>3 Matches</Button>
      }
    </div>
  )
}

export default MatchButtons;