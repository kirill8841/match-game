import React from "react";
import Button from '@material-ui/core/Button';

/**
 * The button, on clicking which the user goes back to the setup stage
 */
function MainMenuButton(props) {
  function onClickHandler() {
    props.setMatches({
      totalMatches: 25,
      playerMatches: 0,
      aiMatches: 0
    })
    props.setGameStage("setup")
  }

  return (
    <div className={props.styling ? props.styling : "main-menu-button heading-bar"}>
      <Button size="large" onClick={onClickHandler} variant="contained" color="primary">Main Menu</Button>
    </div>
  )
}

export default MainMenuButton;