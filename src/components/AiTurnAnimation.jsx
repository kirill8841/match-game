import React, { useEffect, useState, useRef } from "react"
import { Dot } from 'react-animated-dots';
import pickMatch from "./pickMatch.js"


function AiTurnAnimation(props) {

  // A state to handle animation in this component
  const [isThinking, setIsThinking] = useState(true);

  // Without useRef, optimalChoice will be recalculated on re-render
  let optimalChoice = useRef(pickMatch(props.matches.aiMatches, props.matches.totalMatches))

  // Show the text with dots for 2 secs. Also change the number of matches
  useEffect(() => {
    if (isThinking) {
      const timer = setTimeout(() => {
        setIsThinking(false);
        props.setMatches((prevProps) => {
          return {
            ...prevProps,
            totalMatches: prevProps.totalMatches - optimalChoice.current,
            aiMatches: prevProps.aiMatches + optimalChoice.current
          }
        })
      }, 2000);
      return () => clearTimeout(timer);
    }
  })

  // Then show the number of matches the algorithm has picked for 2 secs and pass
  // the game to the player. 
  useEffect(() => {
    if (!isThinking) {
      const timer = setTimeout(() => {
        props.setGameStage("playerTurn")
      }, 2000);
      return () => clearTimeout(timer)
    }
  })


  return (
    <div>
      { isThinking ?
        <h1>The AI is thinking about how to overmatch you<Dot>.</Dot><Dot>.</Dot><Dot>.</Dot></h1>
        : <h1>The AI has chosen to pick {optimalChoice.current} match{optimalChoice.current !== 1 && "es"}!</h1>
      }
    </div>
  )
}


export default AiTurnAnimation;