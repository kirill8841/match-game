import React, { useState } from 'react';
import MatchButtons from "./MatchButtons.jsx"
import SetupForm from './SetupForm';
import AiTurnAnimation from "./AiTurnAnimation.jsx"
import ShowMatches from "./ShowMatches.jsx"
import EndGameScreen from './EndGameScreen.jsx';
import MainMenuButton from './MainMenuButton.jsx';



function App() {
  const [gameStage, setGameStage] = useState("setup")
  const [matches, setMatches] = useState({
    totalMatches: 25,
    aiMatches: 0,
    playerMatches: 0
  })

  function startGame(isPlayersTurn = true) {
    setGameStage(isPlayersTurn ? "playerTurn" : "aiTurn")
  }

  if (gameStage === "setup") {
    return (
    <SetupForm 
      matches={matches}
      setMatches={setMatches}
      startGame={startGame}
    />
    )
    
    // If there are no more matches in the game, i.e. the game is over.
  } else if (matches.totalMatches <= 0 && (gameStage === "aiTurn" || gameStage === "playerTurn")) {
    return (
      <EndGameScreen 
      matches={matches}
      setMatches={setMatches}
      setGameStage={setGameStage}
    />
    )
    
  } else if (gameStage === "aiTurn") {
    return (
      <div>
        <MainMenuButton
          setGameStage={setGameStage}
          setMatches={setMatches}
        />
        <AiTurnAnimation 
          matches={matches}
          setMatches={setMatches}
          setGameStage={setGameStage}
        />
        <ShowMatches 
          matches={matches}
        />
      </div>
      
    )

  } else if (gameStage === "playerTurn") {
    return (
      <div>
        <MainMenuButton
          setGameStage={setGameStage}
          setMatches={setMatches}
        />
        <h1>Pick your matches</h1>
        <ShowMatches 
          matches={matches}
        />
        <MatchButtons
          setMatches={setMatches}
          setGameStage={setGameStage}
          totalMatches={matches.totalMatches}
        />
      </div>
    )
  } 
}


export default App;