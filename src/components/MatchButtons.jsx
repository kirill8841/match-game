import React from "react";



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
      <button onClick={() => onClickHandler(1)}>1 Matches</button>
      {
        props.totalMatches >= 2 &&
        <button onClick={() => onClickHandler(2)}>2 Matches</button>
      }
      {
        props.totalMatches >= 3 &&
        <button onClick={() => onClickHandler(2)}>3 Matches</button>
      }
    </div>
  )
}

export default MatchButtons;