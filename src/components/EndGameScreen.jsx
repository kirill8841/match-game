import React from "react";
import MainMenuButton from "./MainMenuButton.jsx"

function EndGameScreen(props) {
  return (
    <div>
      {
        props.matches.playerMatches % 2 === 0 ?
        <h1>You have won! The guy in the mask will miss'ya!</h1>
        : <h1>The AI has won... A great pity it is.</h1>
      }
      <p>
        You have {props.matches.playerMatches} 🔥, and the AI
        has {props.matches.aiMatches} 🔥
      </p>
      {
        props.matches.playerMatches % 2 === 0 ?
        <p>Let's see if you can do this once again...</p>
        : <p>Try your luck once again</p>
      }
      <MainMenuButton
        setGameStage={props.setGameStage}
        setMatches={props.setMatches}
      />
      
    </div>
  )
}

export default EndGameScreen;