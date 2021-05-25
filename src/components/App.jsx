import React, { useState } from 'react';
import pickMatch from "./pickMatch.js"
import MatchButtons from "./MatchButtons.jsx"
import SetupForm from './SetupForm';
import AiTurnAnimation from "./AiTurnAnimation.jsx"

// class MatchButton extends React.Component {
//   render() {
//     return (
//       <button onClick={() => this.props.matchChoiceHandler(this.props.matches)}>{this.props.matches} Matches</button>
//     )
//   }
// }


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
    
  } else if (gameStage === "aiTurn") {
    return (
      <AiTurnAnimation />
    )

  } else if (gameStage === "playerTurn") {



  } else if (gameStage === "gameOver") {


  }




}
















// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       gameStage: "setup",
//       isPlayersTurn: true,
//       playerMatches: 0,
//       aiMatches: 0,
//       totalMatches: 25
//     }
//     this.startOnClickHandler = this.startOnClickHandler.bind(this)
//     this.mainMenuHandler = this.mainMenuHandler.bind(this)
//     this.matchChoiceHandler = this.matchChoiceHandler.bind(this)
//   }
  

//   /**
//    * Handle the clicks on the buttongs choosing the player who starts the game.
//    * Also change the stage of the game from the setup to the actual game
//    * @param {boolean} playerStarts - true means the player picks the matches first.
//    * 
//    */
//   startOnClickHandler(playerStarts = true) {
//     this.setState({
//       gameStage: "inGame"
//     })
//     if (!playerStarts) {
//       this.setState({
//         isPlayersTurn: false
//       })
//       this.chooseOptimalStep()
//     }
//   }

//   /**
//    * The handler that turns the gamestage back to the setup. Also resets
//    * the state parameters to default
//    */
//   mainMenuHandler() {
//     this.setState({
//       gameStage: "setup",
//       totalMatches: 25,
//       aiMatches: 0,
//       playerMatches: 0,
//       isPlayersTurn: true
//     })
//   }

//   /**
//    * Process the number of matches that the user has chosen to take. Updates the
//    * connected state info and after that calls the function to choose the AI's
//    * optimal step.
//    * @param {number} matchNumber - an integer representing the number of matches user picked
//    */
//   matchChoiceHandler(matchNumber) {
//     this.setState((state, props) => {
//       return {
//         playerMatches: state.playerMatches + matchNumber,
//         totalMatches: state.totalMatches - matchNumber,
//         isPlayersTurn: false
//       }
//     }, () => {
//       this.chooseOptimalStep()
//     })
//   }

//   /**
//    * Make the optimal decision about the amout of matches the AI should take.
//    * Update the connected state properties.
//    */
//   chooseOptimalStep() {

//     let optimalChoice = pickMatch();
    

//     this.setState((state) => {
//       return {
//         isPlayersTurn: true,
//         aiMatches: state.aiMatches + optimalChoice,
//         totalMatches: state.totalMatches - optimalChoice
//       }
//     })
//   }
  

//   render() {




//     // if (this.state.gameStage === "setup") {
//     //   return (
//     //     <div>
//     //       <h1>Choose who starts</h1>
//     //       <button id="aiButton" onClick={() => this.startOnClickHandler(false)}>AI</button>
//     //       <button id="playerButton" onClick={() => this.startOnClickHandler(true)}>You</button><br />
//     //       <h3>Choose the number of matches</h3>
//     //       <input 
//     //       type="range" 
//     //       id="matches" 
//     //       name="matches" 
//     //       min="1" 
//     //       max="99" 
//     //       value={this.state.totalMatches}
//     //       step="2"
//     //       onChange={(e) => this.setState({totalMatches: e.target.value})}
//     //       /><br />
//     //       <label for="matches">{this.state.totalMatches} matches</label>
//     //     </div>
//       )

//     // } else if (this.state.gameStage === "inGame") {

//     //   // The page in case the game is over
//     //   if (this.state.totalMatches <= 0) {
//     //     return (
//     //       <div>
//     //         <h1>
//     //           {(this.state.playerMatches % 2 === 0) ?
//     //             "You have won! The guy in the mask will miss'ya!"
//     //             : "The AI has won... A great pity it is."
//     //           }
//     //         </h1>
//     //         <h3>You can try to test your luck once again</h3>
//     //         <button onClick={e => this.mainMenuHandler(e.target.value)}>Main Menu</button>
//     //       </div>
//     //     )
//     //   }
        
//     //   // The buttons with the number of matches for the user to choose from.
//     //   // Limit the number of buttons if there are not enough remaining matches.
//     //   let buttons = (
//     //     <div>
//     //       <MatchButton matchChoiceHandler={this.matchChoiceHandler} matches={1}/>
//     //       {(this.state.totalMatches >= 2) ?
//     //         <MatchButton matchChoiceHandler={this.matchChoiceHandler} matches={2}/>
//     //         : null
//     //       }
//     //       {(this.state.totalMatches >= 3) ?
//     //         <MatchButton matchChoiceHandler={this.matchChoiceHandler} matches={3}/>
//     //         : null
//     //       }
//     //     </div>
//     //   )
      
//     //   // The actual gaming page
//     //   return (
//     //     <div>
//     //       <button onClick={e => this.mainMenuHandler(e.target.value)}>Main Menu</button>
//     //       <h1>It's {this.state.isPlayersTurn ? "your" : "AI's"} turn</h1>
//     //       <h3>There are {this.state.totalMatches} matches remaining</h3>
//     //       <h3>You have {this.state.playerMatches} matches. Your opponent has {this.state.aiMatches} matches</h3>
//     //       {this.state.isPlayersTurn ? buttons : null}
//     //     </div>
//     //   )
//     //   } 
    
//   }
// }


export default App;