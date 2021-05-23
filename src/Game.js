import './Game.css';
import React from 'react';

class MatchButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.MatchChoiceHandler(this.props.matches)}>{this.props.matches} Matches</button>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStage: "setup",
      isPlayersTurn: true,
      playerMatches: 0,
      aiMatches: 0,
      totalMatches: 25
    }
    this.startOnClickHandler = this.startOnClickHandler.bind(this)
    this.mainMenuHandler = this.mainMenuHandler.bind(this)
    this.MatchChoiceHandler = this.MatchChoiceHandler.bind(this)
  }

  startOnClickHandler(starter = "You") {
    this.setState({
      gameStage: "inGame"
    })
    if (starter === "aiButton") {
      this.setState({
        isPlayersTurn: false
      })
    }
  }

  mainMenuHandler() {
    this.setState({
      gameStage: "setup",
      totalMatches: 25,
      aiMatches: 0,
      playerMatches: 0,
      isPlayersTurn: true
    })
  }

  MatchChoiceHandler(matchNumber) {
    this.setState((state) => {
      return {
        playerMatches: state.playerMatches - matchNumber,
        totalMatches: state.totalMatches - matchNumber,
        isPlayersTurn: false
      }
    })
  }

  render() {

    if (this.state.gameStage === "setup") {
      return (
        <div>
          <h1>Choose who starts</h1>
          <button id="aiButton" onClick={e => this.startOnClickHandler(e.target.id)}>AI</button>
          <button id="playerButton" onClick={e => this.startOnClickHandler(e.target.id)}>You</button><br />
          <h3>Choose the number of matches</h3>
          <input 
          type="range" 
          id="matches" 
          name="matches" 
          min="1" 
          max="99" 
          value={this.state.totalMatches}
          step="2"
          onChange={(e) => this.setState({totalMatches: e.target.value})}
          /><br />
          <label for="matches">{this.state.totalMatches} matches</label>
        </div>
      )
    } else if (this.state.gameStage === "inGame") {
        
        let buttons = (
          <div>
            <MatchButton MatchChoiceHandler={this.MatchChoiceHandler} matches={1}/>
            {(this.state.totalMatches >= 2) ?
              <MatchButton MatchChoiceHandler={this.MatchChoiceHandler} matches={2}/>
              : null
            }
            {(this.state.totalMatches >= 3) ?
              <MatchButton MatchChoiceHandler={this.MatchChoiceHandler} matches={3}/>
              : null
            }
          </div>
        )
        
        return (
          <div>
            <button onClick={e => this.mainMenuHandler(e.target.value)}>Main Menu</button>
            <h1>It's {this.state.isPlayersTurn ? "your" : "AI's"} turn</h1>
            <h3>There are {this.state.totalMatches} matches remaining</h3>
            {this.state.isPlayersTurn ? buttons : null}
            
            
          </div>
        )
        } else {
          return (
            <div>
              <button onClick={e => this.mainMenuHandler(e.target.value)}>Main Menu</button>
              <h1>It's AI's turn</h1>
              <h3>There are {this.state.totalMatches} matches remaining</h3>
            </div>
          )
        }
    
  }
}


export default Game;