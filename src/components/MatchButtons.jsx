import React from "react";
import Button from '@material-ui/core/Button';

/**
 * A component that displays from one to three buttons that allow user to choose
 * the number of matches to pick.
 */
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
      <Button size="large" variant="contained" color="primary" onClick={() => onClickHandler(1)}>1 Matches</Button>
      {
        props.totalMatches >= 2 &&
        <Button size="large" variant="contained" color="primary" onClick={() => onClickHandler(2)}>2 Matches</Button>
      }
      {
        props.totalMatches >= 3 &&
        <Button size="large" variant="contained" color="primary" onClick={() => onClickHandler(3)}>3 Matches</Button>
      }
    </div>
  )
}

export default MatchButtons;