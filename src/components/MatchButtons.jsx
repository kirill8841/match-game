import React from "react";



function MatchButtons(props) {
  return (
    <div>
      <button>1 Matches</button>
      <button>2 Matches</button>
      <button>3 Matches</button>
      
      {/* <MatchButton matchChoiceHandler={this.matchChoiceHandler} matches={1}/>
       {(this.state.totalMatches >= 2) ?
            <MatchButton matchChoiceHandler={this.matchChoiceHandler} matches={2}/>
            : null
          }
          {(this.state.totalMatches >= 3) ?
            <MatchButton matchChoiceHandler={this.matchChoiceHandler} matches={3}/>
            : null
          } */}
    </div>
  )
}

export default MatchButtons;