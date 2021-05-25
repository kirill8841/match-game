import React, { useEffect, useState } from "react"
import { Dot } from 'react-animated-dots';

function AiTurnAnimation(props) {
  const [isThinking, setIsThinking] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThinking(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      { isThinking ?
        <h1>The AI is thinking how to match you<Dot>.</Dot><Dot>.</Dot><Dot>.</Dot></h1>
        : <h1>The AI has chosen to pick N matches!</h1>
      }
      
    </div>
  )

}


export default AiTurnAnimation;