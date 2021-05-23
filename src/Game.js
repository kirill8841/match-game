import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStage: "setup"
    }
  }

  render() {

    if (this.state.gameStage === "setup") {
      return (
        <div>
          <h1>Choose who starts</h1>

        </div>
      )
    }
  }
}


export default Game;